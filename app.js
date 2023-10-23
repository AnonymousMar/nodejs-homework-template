import express from "express";

import contactsRouter from "./routes/api/contacts-router";

const app = express()

app.use((req, res) => {
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message, })
})

export default app;