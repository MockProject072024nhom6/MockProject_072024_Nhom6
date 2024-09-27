const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
const maleRegex = /^(Male|Female)$/;

module.exports = { phoneRegex, emailRegex, passwordRegex, maleRegex };
