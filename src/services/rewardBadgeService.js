const RewardBadgeModel = require("../models/rewardBadgeModel");

module.exports.saveRewardBadge = async (badgeNo, badgeName, badgePoint) => {
  const rewardPointData = new RewardBadgeModel({
    badgeNo,
    badgeName,
    badgePoint
  });
  return rewardPointData.save();
};

module.exports.getAllBadgesData = async () => {
  return RewardBadgeModel.find();
};

module.exports.updateRewardBadgeData = async (badgeId, badgeName, badgePoint) => {
  return RewardBadgeModel.findByIdAndUpdate(badgeId, { badgeName, badgePoint }, { new: true });
};

module.exports.deleteRewardPointData = async (badgeId) => {
  return RewardBadgeModel.findByIdAndDelete(badgeId);
};
