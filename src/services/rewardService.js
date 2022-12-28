const UserReward = require("../models/rewardModel");

module.exports.saveReward = async (
  eventName,
  accountNumber,
  totalPoint,
  badge
) => {
  const rewardPointData = new UserReward({
    eventName,
    accountNumber,
    rewardPoint: totalPoint,
    badge
  });
  return rewardPointData.save();
};
