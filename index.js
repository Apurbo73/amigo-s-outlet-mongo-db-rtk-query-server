import express from "express";
import Connection from "./Database/db.js";
import cors from "cors";
const app=express();
app.use((cors));
const PORT = 8080;
Connection();
app.get("/", (req, res) => {
  res.send("<h2>Hellow Amigo..</h2>");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});