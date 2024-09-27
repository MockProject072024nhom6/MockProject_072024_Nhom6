const userModal = require("../models/userModal");
const dboperations = require("../models/dboperations");
const {
  phoneRegex,
  emailRegex,
  passwordRegex,
  maleRegex,
} = require("../constants/constants");
const bcrypt = require("bcrypt");
const responseData = require("../configs/responseData");
const { createToken, createTokenRef } = require("../configs/jwt");

const signup = async (req, res) => {
  try {
    let {
      firstName,
      lastName,
      phoneNumber,
      email,
      currentPassword,
      confirmPassword,
      gender,
      stage,
      city,
      country,
    } = req.body;

    if (!phoneRegex.test(phoneNumber)) {
      return responseData(res, "Invalid phoneNumber format", 400);
    } else if (!emailRegex.test(email)) {
      return responseData(res, "Invalid email format", 400);
    } else if (!passwordRegex.test(currentPassword)) {
      return responseData(res, "Invalid password format", 400);
    } else if (currentPassword !== confirmPassword) {
      return responseData(res, "Passwords do not match", 400);
    } else if (!maleRegex.test(gender)) {
      return responseData(res, "Invalid gender format", 400);
    } else null;

    const checkEmail = await userModal.checkUserByEmail(email);
    const checkPhone = await userModal.checkUserByPhone(phoneNumber);
    if (checkEmail) {
      return responseData(res, "Email already exists", 400);
    }
    if (checkPhone) {
      return responseData(res, "Phone number already exists", 400);
    }
    const encode = bcrypt.hashSync(currentPassword, 10);
    const newUser = {
      firstName,
      lastName,
      phoneNumber,
      email,
      currentPassword: encode,
      confirmPassword: encode,
      role: "CUSTOMER",
      gender,
      stage,
      city,
      country,
      registerTime: new Date(),
    };
    await userModal.addUser(newUser);
    responseData(res, "Signup successfully", 200, newUser);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
};
const login = async (req, res) => {
  let { emailOrPhone, currentPassword } = req.body;

  if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
    responseData(res, "Invalid email or phone number format", 400);
    return;
  }

  const checkEmail = await userModal.checkUserByEmail(emailOrPhone);
  const checkPhone = await userModal.checkUserByPhone(emailOrPhone);
  if (!checkEmail && !checkPhone) {
    responseData(res, "Email or phone not available", 400);
    return;
  }
  // Lấy mật khẩu từ email hoặc số điện thoại
  let encodePassword;
  let accountId;

  if (checkEmail) {
    encodePassword = checkEmail.current_password; // Lấy mật khẩu từ email
    accountId = checkEmail.account_id; // Lấy account_id từ email
  } else if (checkPhone) {
    encodePassword = checkPhone.current_password; // Lấy mật khẩu từ số điện thoại
    accountId = checkPhone.account_id; // Lấy account_id từ số điện thoại
  }

  if (bcrypt.compareSync(currentPassword, encodePassword)) {
    let token = createToken({ accountId });
    let tokenRef = createTokenRef({
      accountId,
    });
    // Cập nhật refresh_token trong bảng Accounts
    await dboperations.updateRefreshToken(accountId, tokenRef);
    const formatLogin = {
      userName: emailOrPhone,
      currentPassword,
      token,
    };
    return responseData(res, "Login successfully", 200, formatLogin);
  } else {
    return responseData(res, "Password is incorrect", 400);
  }
};

module.exports = {
  signup,
  login,
};
