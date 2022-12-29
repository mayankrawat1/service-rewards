const REWARD_POINTS = require("../constants/rewardConstant");
const { saveReward } = require("../services/rewardService");

module.exports.saveReward = async (req, res, next) => {
  try {
    let totalPoint = 0;
    if (req.body.eventName in REWARD_POINTS) {
      totalPoint = REWARD_POINTS[req.body.eventName];
    }
    const { eventName, accountNumber, badge } = req.body;
    const data = await saveReward(eventName, accountNumber, totalPoint, badge);
    res.status(201).send(data);
  } catch (error) {
    next(error);
  }
};
