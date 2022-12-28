const express = require("express");
const router = express();
const rewardController = require("../controllers/rewardController");

router.post(
  "/create-reward-request",
  rewardController.saveReward
);

module.exports = router;
