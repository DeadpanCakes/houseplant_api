const categoryController = () => {
  const post = (req, res) => {
    res.send(
      `create a new category with name: ${req.body.name} and description: ${req.body.description}`
    );
  };
  const get = (req, res) => {
    res.json({ message: "list of all categories" });
  };
  const getOne = (req, res) => {
    res.json({ message: `Send category whose id is ${req.params.id}` });
  };
  const put = (req, res) => {
    res.json(`update category whose id is ${req.params.id}`);
  };
  const del = (req, res) => {
    res.send(`delete category whose id is ${req.params.id}`);
  };
  return { post, get, getOne, put, del };
};

module.exports = categoryController();
