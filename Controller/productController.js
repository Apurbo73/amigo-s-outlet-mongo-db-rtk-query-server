import product from "../Models/ProductModel.js";
// add product controller:
export const addProduct = async (req, res) => {
  try {
    console.log(`New Product is ${req.body}`);
    const newProduct = await product.create({
      name: req.body.name,
      imageLink: req.body.imageLink,
      category: req.body.category,
      seller: req.body.seller,
      price: req.body.price,
      createdAt: Date.now()
    });
    await newProduct.save();
    return res.status(200).json(newProduct);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    // console.log(req.body);
    const products = await product.find({}).sort({ createdAt: -1 });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    console.log(req.body);
    const singleProduct = await product.findById(req.params.id);
    return res.status(200).json(singleProduct);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await product.findByIdAndDelete(req.params.id);
    return res.status(200).json(deleteProduct);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const updateProduct = async (req, res) => {
  console.log(req.body.name);
  try {
    const update = await product.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        imageLink: req.body.imageLink,
        category: req.body.category,
        seller: req.body.seller,
        price: req.body.price
      }
    );

    await update.save();
    return res.status(200).json(update);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
