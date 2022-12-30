const { REWARD_POINTS, REWARD_BADGE, BADGE_POINT } = require("../constants/rewardConstant");
const UserReward = require("../models/rewardModel");
const { saveReward, getUserAllRecord } = require("../services/rewardService");

module.exports.saveReward = async (req, res, next) => {
  try {
    let rewardPoint = 0;
    let badgeName = "";
    const { eventName, accountNumber, badge } = req.body;
    if (eventName in REWARD_POINTS) {
      rewardPoint = REWARD_POINTS[eventName];
    }
    if (badge in REWARD_BADGE) {
      badgeName = REWARD_BADGE[badge];
      rewardPoint = BADGE_POINT[badgeName];
    }
    const userRewardData = await UserReward.findOne({ accountNumber }).sort({ _id: -1 });
    const userTotalRewardPoints = userRewardData ? userRewardData.totalRewardPoint : 0;
    const data = await saveReward(eventName, accountNumber, rewardPoint, userTotalRewardPoints, badgeName);
    res.status(201).send(data);
  } catch (error) {
    next(error);
  }
};

module.exports.getUserAllRecord = async (req, res, next) => {
  try {
    const { accountNumber } = req.body;
    const userAllRecord = await getUserAllRecord(accountNumber);
    if (!userAllRecord) {
      res.status(404).send({ message: "user not found" });
      return;
    }
    res.status(200).send(userAllRecord);
  } catch (error) {
    next(error);
  }
};
