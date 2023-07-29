import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  seller: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const cart = mongoose.model("cart", cartSchema);
export default cart;
