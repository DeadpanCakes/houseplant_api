const Product = require("../models/Product");
const { Order, OrderItem } = require("../models/Order");

const orderController = () => {
  const post = async (req, res) => {
    try {
      const dateOrdered = new Date();
      const items = await Promise.all(
        req.body.items.map(async (item) => {
          const orderItem = await OrderItem.create({
            product: item.pid,
            quantity: item.quantity,
          });
          return orderItem;
        })
      );
      const itemCost = await items.reduce(async (sum, curr) => {
        const product = await Product.findById(curr.product);
        const discount = product.price * (product.discount / 100);
        const discountedPrice = product.price - discount;
        const total = discountedPrice * curr.quantity;
        return (await sum) + total;
      }, 0);
      const shipping = itemCost > 34 ? 0 : 5;
      const tax = itemCost * 0.0725;
      const order = await Order.create({
        dateOrdered,
        items: await Promise.all(items),
        shipping,
        address: req.body.address,
        tax,
        total: itemCost + tax + shipping,
      });
      res.json({ message: "Order Created", order });
    } catch (error) {
      res.json({ message: "There Was An Error" });
    }
  };

  const getOne = (req, res) => {
    res.send(`Send order whose id is ${req.params.id}`);
  };
  return { post, getOne };
};

module.exports = orderController();
