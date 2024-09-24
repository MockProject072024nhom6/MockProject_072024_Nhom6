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

const notificationRouter = express.Router();
app.use("/notification", notificationRouter);
const serviceRouter = express.Router();
app.use("/service", serviceRouter);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on PORT: ${port}`);
});

notificationRouter.route("/notificationSetting").get(async (req, res) => {
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

serviceRouter.route("/services").get(async (req, res) => {
  try {
    const services = await dboperations.getAllServices();
    responseData(res, "Get services successfully", 200, services[0]);
  } catch (error) {
    responseData(res, "Internal server error", 500);
  }
});

serviceRouter.route("/:serviceNames").get(async (req, res) => {
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
