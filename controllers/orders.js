const orderController = () => {
  const post = (req, res) => {
    res.send(`create a new order`);
  };

  const getOne = (req, res) => {
    res.send(`Send order whose id is ${req.params.id}`);
  };
  return { post, getOne };
};

module.exports = orderController();
