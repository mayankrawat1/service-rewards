const mongoose = require("mongoose");

const rewardBadgeSchema = new mongoose.Schema({
  rewardId: {
    type: Number,
    required: true,
    unique: true
  },
  eventName: {
    type: String,
    required: true,
    unique: true
  },
  points: {
    type: Number,
    required: true,
    unique: true
  }
}, { timestamps: true });

const RewardBadgeModel = mongoose.model("rewardBadgeModel", rewardBadgeSchema);
module.exports = RewardBadgeModel;
