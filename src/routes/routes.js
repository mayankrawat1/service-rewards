const express = require("express");
const router = express();
const UserReward = require("../database/model");
const REWARD_POINTS = require("../constants/rewardConstant");

router.post("/service-reward/:accountNumber/:eventName", async (req, res) => {
  let totalPoint = 0;
  if (req.body.eventName in REWARD_POINTS) {
    totalPoint = REWARD_POINTS[req.body.eventName];
  }
  const rewardPoinInfo = new UserReward({
    eventName: req.body.eventName,
    accountNumber: req.body.accountNumber,
    rewardPoint: totalPoint,
    badge: req.body.badge,
  });
  const data = await rewardPoinInfo.save();
  res.status(201).send(data);
});

module.exports = router;
