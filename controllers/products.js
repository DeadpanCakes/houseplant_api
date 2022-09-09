const productController = () => {
  const post = (req, res) => {
    res.send(
      `create a new category with name: ${req.body.name} and description: ${req.body.description}`
    );
  };
  const get = (req, res) => {
    res.json({ message: "product of all lists" });
  };
  const getOne = (req, res) => {
    res.json({ message: `Send product whose id is ${req.params.id}` });
  };
  const put = (req, res) => {
    res.json(`update product whose id is ${req.params.id}`);
  };
  const del = (req, res) => {
    res.send(`delete product whose id is ${req.params.id}`);
  };
  return { post, get, getOne, put, del };
};

module.exports = productController();
