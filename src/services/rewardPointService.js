const RewardPointModel = require("../models/rewardPointsModel");

module.exports.saveRewardPoint = async (eventName, points) => {
  const rewardPointData = new RewardPointModel({
    eventName,
    points
  });
  return rewardPointData.save();
};

module.exports.getAllPointsData = async () => {
  return RewardPointModel.find();
};

module.exports.updateRewardPointData = async (eventId, eventName, points) => {
  return RewardPointModel.findByIdAndUpdate(eventId, { eventName, points }, { new: true });
};

module.exports.deleteRewardPointData = async (eventId) => {
  return RewardPointModel.findByIdAndDelete(eventId);
};
