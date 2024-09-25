const dboperations = require("./dboperations");

require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const responseData = require("./responseData");
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const userRouter = express.Router();
app.use("/user", userRouter);
const notificationRouter = express.Router();
app.use("/notification", notificationRouter);
const serviceRouter = express.Router();
app.use("/service", serviceRouter);
const feedbackRouter = express.Router();
app.use("/feedback", feedbackRouter);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on PORT: ${port}`);
});

userRouter.post("/signup", async (req, res) => {
  try {
    let {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword,
      gender,
      state,
      city,
      country,
    } = req.body;
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    const maleRegex = /^(Male|Female)$/;

    !phoneRegex.test(phoneNumber)
      ? responseData(res, "Invalid phoneNumber format", 400)
      : !emailRegex.test(email)
      ? responseData(res, "Invalid email format", 400)
      : !passwordRegex.test(password)
      ? responseData(res, "Invalid password format", 400)
      : password !== confirmPassword
      ? responseData(res, "Passwords do not match", 400)
      : !maleRegex.test(gender)
      ? responseData(res, "Invalid gender format", 400)
      : null;

    const checkEmail = dboperations.getUsers(email);
    const checkPhone = dboperations.getUsers(phoneNumber);
    if (checkEmail) {
      return responseData(res, "Email already exists", 400);
    }

    if (checkPhone) {
      return responseData(res, "Phone number already exists", 400);
    }
    const newUser = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password, // Nên mã hóa mật khẩu trước khi lưu
      gender,
      state,
      city,
      country,
    };
    await dboperations.addUser(newUser);

    responseData(res, "Email already exists", 200);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
});

notificationRouter.get("/notificationSetting", async (req, res) => {
  try {
    const notificationSetting = await dboperations.getAllNotificationSetting();
    responseData(
      res,
      "Get notification successfully",
      200,
      notificationSetting[0]
    );
    return;
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
});

notificationRouter.get("/:accountId", async (req, res) => {
  try {
    const accountId = req.params.accountId;
    const id = await dboperations.getNotificationSettingsByAccountId(accountId);
    if (id) {
      return responseData(res, "Get services successfully", 200, id[0]);
    }
    responseData(res, "Account not found", 404);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
});

serviceRouter.get("/services", async (req, res) => {
  try {
    const services = await dboperations.getAllServices();
    responseData(res, "Get services successfully", 200, services[0]);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
});

serviceRouter.get("/:serviceNames", async (req, res) => {
  try {
    const serviceByNames = req.params.serviceNames;
    const serviceName = await dboperations.getServiceByName(serviceByNames);
    if (serviceName) {
      responseData(res, "Get services successfully", 200, serviceName[0]);
      return;
    }
    responseData(res, "Service not found", 404);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
});

feedbackRouter.get("/feedbacks", async (req, res) => {
  try {
    const feedbacks = await dboperations.getFeedBacks();
    responseData(res, "Get feedbacks successfully", 200, feedbacks[0]);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
});

// feedbackRouter.get("/add-feedbacks", async (req, res) => {
//   try {
//     let { comment, imgId } = req.body;
//     const feedbacks = await dboperations.getFeedBacks();
//     responseData(res, "Get feedbacks successfully", 200, feedbacks[0]);
//   } catch (error) {
//     responseData(res, "Internal server error", 500);
//   }
// });
