// import cart from "../Models/CartModel.js";
// // add product to cart controller:
// export const addToCart = async (req, res) => {
//   try {
//     console.log(`New Product is ${req.body}`);
//     const cartProduct = await cart.create({
//       name: req.body.name,
//       imageLink: req.body.imageLink,
//       category: req.body.category,
//       seller: req.body.seller,
//       price: req.body.price,
//       quantity: req.body.quantity,
//       createdAt: Date.now()
//     });
//     await cartProduct.save();
//     return res.status(200).json(cartProduct);
//   } catch (error) {
//     return res.status(500).json(error.message);
//   }
// };