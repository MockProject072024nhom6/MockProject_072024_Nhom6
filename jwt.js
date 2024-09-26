const jwt = require("jsonwebtoken");

const createToken = (data) =>
  jwt.sign(data, "SECRET_KEY", { expiresIn: "60d" });

const checkToken = (token) =>
  jwt.verify(token, "SECRET_KEY", (err, decode) => err);

const decodeToken = (token) => jwt.decode(token);

const createTokenRef = (data) =>
  jwt.sign(data, "ADVANCED_SECRET_KEY", { expiresIn: "1y" });

const checkTokenRef = (token) =>
  jwt.verify(token, "ADVANCED_SECRET_KEY", (error, decode) => error);

module.exports = {
  createToken,
  checkToken,
  decodeToken,
  createTokenRef,
  checkTokenRef,
};
