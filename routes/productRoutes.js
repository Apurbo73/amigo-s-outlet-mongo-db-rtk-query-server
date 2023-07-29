import express from "express";
import {
  addProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  addToCart,
  getAllFromCart,removeFromCart
} from "../Controller/productController.js";

const route = express.Router();
route.post("/products", addProduct);
route.get("/products", getAllProducts);
route.get("/products/:id", getSingleProduct);
route.delete("/products/:id", deleteProduct);
route.put("/products/:id", updateProduct);
route.post("/cart", addToCart);
route.get("/cart", getAllFromCart);
route.delete("/cart/:id", removeFromCart);


export default route;
