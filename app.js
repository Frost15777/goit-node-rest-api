import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import contactsRouter from "./routes/contactsRouter.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

const checkRequestBody = (req, res, next) => {
  if (req.method === "PUT" || req.method === "PATCH") {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ message: "Body must have at least one field" });
    }
  }
  next();
};

app.use(checkRequestBody);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});


mongoose.connect(process.env.DB_HOST)
  .then(()=> {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch(error => {
    console.error(error.message);
    process.exit(1);
  })