const RewardBadgeModel = require("../models/rewardBadgeModel");

module.exports.saveRewardBadge = async (badgeNo, badgeName, points) => {
  const rewardPointData = new RewardBadgeModel({
    badgeNo,
    badgeName,
    points
  });
  return rewardPointData.save();
};

module.exports.getAllBadgesData = async () => {
  return RewardBadgeModel.find();
};

module.exports.updateRewardBadgeData = async (badgeId, badgeName, points) => {
  return RewardBadgeModel.findByIdAndUpdate(badgeId, { badgeName, points }, { new: true });
};

module.exports.deleteRewardPointData = async (badgeId) => {
  return RewardBadgeModel.findByIdAndDelete(badgeId);
};
