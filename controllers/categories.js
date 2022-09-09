const categoryController = () => {
  const get = (req, res) => {
    res.json({ message: "list of all categories" });
  };
  return { get };
};

module.exports = categoryController();
