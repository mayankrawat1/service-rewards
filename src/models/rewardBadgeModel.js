const mongoose = require("mongoose");

const rewardBadgeSchema = new mongoose.Schema({
  badgeNo: {
    type: Number,
    required: true,
    unique: true
  },
  badgeName: {
    type: String,
    required: true,
    unique: true
  },
  badgePoint: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const RewardBadgeModel = mongoose.model("rewardBadgeModel", rewardBadgeSchema);
module.exports = RewardBadgeModel;
