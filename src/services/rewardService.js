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

module.exports.getAllRecord = async () => {
  return UserReward.aggregate([
    {
      $group: {
        _id: "$accountNumber",
        eventName: { $last: "$eventName" },
        accountNumber: { $last: "$accountNumber" },
        rewardPoint: { $last: "$rewardPoint" },
        totalRewardPoint: { $max: "$totalRewardPoint" },
        badge: { $last: "$badge" },
        createdAt: { $last: "$createdAt" },
        updatedAt: { $last: "$updatedAt" }
      }
    }
  ]).sort({ totalRewardPoint: -1 });
};

module.exports.getUserRecord = async (accountNumber) => {
  return UserReward.find({ accountNumber }).sort({ _id: -1 });
};
