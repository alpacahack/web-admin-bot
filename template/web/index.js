import express from "express";

const app = express();

app.get("/", async (_req, res) => {
  res.send("Hi");
});

app.get("/hello", async (_req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
