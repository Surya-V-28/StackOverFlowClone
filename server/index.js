
import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import thunk from "redux-thunk";
import userRouter from "./routes/users.js";
import questionRouter from "./routes/Question.js";
import answerRoutes from "./routes/Answers.js";

dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/user", userRouter);
app.use("/questions", questionRouter);
app.use("/answer", answerRoutes);

const DATABASE_URL = "mongodb+srv://kalgar812:<Sagar@123>@cluster0.nrklggb.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));



