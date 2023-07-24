import express from "express";
import Connection from "./Database/db.js";
import cors from "cors";
import route from "./routes/productRoutes.js";
const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
Connection();
app.use("/", route);
app.get("/", (req, res) => {
  res.send("<h2>Hello Amigo</h2>");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
