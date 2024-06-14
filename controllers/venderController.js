const User = require("../models/vendorModels");

exports.getUsers = async (req, res) => {
  try {
    const user = await User.findVendor(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: "User Not Found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
