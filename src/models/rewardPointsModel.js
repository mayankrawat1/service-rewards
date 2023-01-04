const mongoose = require("mongoose");

const rewardPointSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
    unique: true
  },
  eventPoint: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const RewardPointModel = mongoose.model("rewardPointModel", rewardPointSchema);
module.exports = RewardPointModel;
