const REWARD_POINTS = require("../constants/rewardConstant");
const UserReward = require("../models/rewardModel");
const { saveReward, getUserAllRecord } = require("../services/rewardService");

module.exports.saveReward = async (req, res, next) => {
  try {
    let rewardPoint = 0;
    if (req.body.eventName in REWARD_POINTS) {
      rewardPoint = REWARD_POINTS[req.body.eventName];
    }
    const { eventName, accountNumber, badge } = req.body;
    const userRewardData = await UserReward.findOne({ accountNumber }).sort({ _id: -1 });
    const userTotalRewardPoints = userRewardData ? userRewardData.totalRewardPoint : 0;
    const data = await saveReward(eventName, accountNumber, rewardPoint, userTotalRewardPoints, badge);
    res.status(201).send(data);
  } catch (error) {
    next(error);
  }
};

module.exports.getUserAllRecord = async (req, res, next) => {
  try {
    const { accountNumber } = req.body;
    const userAllRecord = await getUserAllRecord(accountNumber);
    console.log(userAllRecord);
    if (!userAllRecord) {
      res.status(404).send({ message: "user not found" });
      return;
    }
    res.status(200).send(userAllRecord);
  } catch (error) {
    next(error);
  }
};
