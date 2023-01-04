const RewardPointModel = require("../models/rewardPointsModel");

module.exports.saveRewardPoint = async (eventName, eventPoint) => {
  const rewardPointData = new RewardPointModel({
    eventName,
    eventPoint
  });
  return rewardPointData.save();
};

module.exports.getAllPointsData = async () => {
  return RewardPointModel.find();
};

module.exports.updateRewardPointData = async (eventId, eventName, eventPoint) => {
  return RewardPointModel.findByIdAndUpdate(eventId, { eventName, eventPoint }, { new: true });
};

module.exports.deleteRewardPointData = async (eventId) => {
  return RewardPointModel.findByIdAndDelete(eventId);
};
