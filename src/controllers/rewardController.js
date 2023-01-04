const { REWARD_POINTS, REWARD_BADGE, BADGE_POINT, SPIN_WHEEL } = require("../constants/rewardConstant");
const UserReward = require("../models/rewardModel");
const { saveReward, getAllRecord, getUserRecord } = require("../services/rewardService");

module.exports.saveReward = async (req, res, next) => {
  try {
    let rewardPoint = 0;
    let badgeName = "";
    const { username, accountNumber, badge, spinWheelPoint } = req.body;
    const eventName = spinWheelPoint ? SPIN_WHEEL : req?.body?.eventName;
    if (spinWheelPoint) {
      rewardPoint = parseInt(spinWheelPoint);
    } else {
      if (eventName in REWARD_POINTS) {
        rewardPoint = REWARD_POINTS[eventName];
      }
      if (badge in REWARD_BADGE) {
        badgeName = REWARD_BADGE[badge];
        rewardPoint = BADGE_POINT[badgeName];
      }
    }
    const userRewardData = await UserReward.findOne({ accountNumber }).sort({ _id: -1 });
    const userTotalRewardPoints = userRewardData ? userRewardData.totalRewardPoint : 0;
    const data = await saveReward(username, eventName, accountNumber, rewardPoint, userTotalRewardPoints, badgeName);
    res.status(201).send(data);
  } catch (error) {
    next(error);
  }
};

module.exports.getAllRecord = async (req, res, next) => {
  try {
    const userAllRecord = await getAllRecord();
    if (!userAllRecord) {
      return res.status(404).send({ error: "user not found" });
    }
    res.status(200).send(userAllRecord);
  } catch (error) {
    next(error);
  }
};

module.exports.getUserRecord = async (req, res, next) => {
  try {
    const { accountNumber } = req.params;
    const userRecord = await getUserRecord(accountNumber);
    if (userRecord.length === 0) {
      return res.status(404).send({ error: "user not found" });
    }
    res.status(200).send(userRecord);
  } catch (error) {
    next(error);
  }
};
