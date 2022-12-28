const express = require("express");
const router = express();
const rewardController = require("../controllers/rewardController");

router.post(
  "/service-reward/:accountNumber/:eventName",
  rewardController.saveReward
);

module.exports = router;
