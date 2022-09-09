const userController = () => {
  const post = (req, res) => {
    const authSubmitted = (req) => {
      return req.body.username && req.body.password;
    };
    if (authSubmitted(req)) {
      res.json({ message: "create a new user" });
    } else {
      res.status(400).json({ message: "Username and password required" });
    }
  };
  const get = (req, res) => {
    res.json({ message: "user of all lists" });
  };
  const getOne = (req, res) => {
    res.json({ message: `Send user whose id is ${req.params.id}` });
  };
  const put = (req, res) => {
    res.json(`update user whose id is ${req.params.id}`);
  };
  const del = (req, res) => {
    res.send(`delete user whose id is ${req.params.id}`);
  };
  return { post, get, getOne, put, del };
};

module.exports = userController();
