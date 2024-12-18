const jwt = require("jsonwebtoken");

const getJWTToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const sendToken = (user, statusCode, res) => {
  const token = getJWTToken(user.id);
  console.log(token);

  // options for cookie
  // const options = {
  //   expires: Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
  //   httpOnly: true,
  // };

  // console.log(options.expires,"fenillll");

  res.status(statusCode).cookie("token", token).json({
    success: true,
    status: statusCode,
    user,
    token,
  });
};

module.exports = sendToken;
