import express from "express";
import cors from "cors";
const app=express();
app.use((cors));
const PORT = 8080;
app.get("/", (req, res) => {
  res.send("<h2>Hellow Amigo..</h2>");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});