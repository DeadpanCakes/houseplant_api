const Product = require("../models/Product");
const Category = require("../models/Category");

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
  const put = (req, res) => {
    res.json(`update product whose id is ${req.params.id}`);
  };
  const del = (req, res) => {
    res.send(`delete product whose id is ${req.params.id}`);
  };
  return { post, get, getOne, put, del };
};

const handleInvalidId = (message) => res.json({ message });

module.exports = productController();
