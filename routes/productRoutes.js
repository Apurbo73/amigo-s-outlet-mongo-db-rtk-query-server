import express from "express";
import {
  addProduct,
  getAllProducts,
  getSingleProduct,deleteProduct
} from "../Controller/productController.js";
const route = express.Router();
route.post("/products", addProduct);
route.get("/products", getAllProducts);
route.get("/products/:id", getSingleProduct);
route.delete("/products/:id", deleteProduct);


export default route;
