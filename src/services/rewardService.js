const UserReward = require("../models/rewardModel");

module.exports.saveReward = async (
  eventName,
  accountNumber,
  rewardPoint,
  totalRewardPoint,
  badge
) => {
  const rewardPointData = new UserReward({
    eventName,
    accountNumber,
    rewardPoint,
    totalRewardPoint: totalRewardPoint + rewardPoint,
    badge
  });
  return rewardPointData.save();
};

module.exports.getUserAllRecord = async () => {
  return UserReward.find().sort({ totalRewardPoint: -1 });
};
