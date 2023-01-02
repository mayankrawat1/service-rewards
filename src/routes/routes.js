const express = require("express");
const router = express();
const rewardController = require("../controllers/rewardController");

router.post("/create-reward-request", rewardController.saveReward);
router.get("/all-reward-request", rewardController.getAllRecord);
router.get("/user-reward-request", rewardController.getUserRecord);

module.exports = router;
