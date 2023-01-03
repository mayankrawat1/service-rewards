const mongoose = require("mongoose");

const rewardPointSchema = new mongoose.Schema({
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

const RewardPointModel = mongoose.model("rewardPointModel", rewardPointSchema);
module.exports = RewardPointModel;
