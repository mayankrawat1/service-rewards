const UserReward = require("../models/rewardModel");

module.exports.saveReward = async (
  eventName,
  accountNumber,
  totalPoint,
  badge
) => {
  const rewardPointData = new UserReward({
    eventName: eventName,
    accountNumber: accountNumber,
    rewardPoint: totalPoint,
    badge: badge,
  });
  return rewardPointData.save();
};
