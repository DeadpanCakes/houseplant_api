const listController = () => {
  const post = (req, res) => {
    res.send(
      `create a new category with name: ${req.body.name} and description: ${req.body.description}`
    );
  };
  const get = (req, res) => {
    res.json({ message: "list of all lists" });
  };
  const getOne = (req, res) => {
    res.json({ message: `Send list whose id is ${req.params.id}` });
  };
  const put = (req, res) => {
    res.json(`update list whose id is ${req.params.id}`);
  };
  const del = (req, res) => {
    res.send(`delete list whose id is ${req.params.id}`);
  };
  return { post, get, getOne, put, del };
};

module.exports = listController();
