const express = require("express");
const router = express();
const rewardController = require("../controllers/rewardController");
const spinWheelHandler = require("../middlewares/spinWheelHandler");

router.post("/create-reward-request", spinWheelHandler, rewardController.saveReward);
router.get("/all-reward-request", rewardController.getAllRecord);
router.get("/user-reward-request/:accountNumber", rewardController.getUserRecord);

module.exports = router;
