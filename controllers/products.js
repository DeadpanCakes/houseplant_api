const Product = require("../models/Product");
const { isValid } = require("mongoose").Types.ObjectId;

const productController = () => {
  const post = async (req, res) => {
    try {
      const { name, description, price, stock, isPublished } = req.body;
      const newProduct = await Product.create({
        name,
        description,
        price,
        stock,
        isPublished,
        categories: req.body.categories,
        discount: 0,
      });
      return res.json({ message: "Product Created", data: newProduct });
    } catch (error) {
      res.status(500).json({ message: "There Was An Error" });
    }
  };

  const get = async (req, res) => {
    const products = await Product.find();
    if (products) {
      return res.json({ message: "Got Products", products });
    } else {
      return res.json({ message: "Product Doesn't Exist" });
    }
  };

  const getOne = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json({ message: `Product ${product.name} Gotten`, product });
  };

  const put = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body.update,
      { new: true }
    );
    res.json({ message: `Updated`, updatedProduct });
  };

  const del = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    const products = await Product.find();
    res.json({ message: "Deleted", products });
  };
  return { post, get, getOne, put, del };
};

const isIdIvalid = (id) => isValid(ObjectId);
const handleInvalidId = () => res.json({ message: "Provided Id Invalid" });

module.exports = productController();
