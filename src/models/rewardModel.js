const mongoose = require("mongoose");

const userRewardSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    eventName: {
      type: String
    },
    accountNumber: {
      type: Number,
      required: true
    },
    rewardPoint: {
      type: Number,
      required: true
    },
    totalRewardPoint: {
      type: Number,
      required: true
    },
    badge: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("userRewardModel", userRewardSchema);
