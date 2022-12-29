const mongoose = require("mongoose");

const userRewardSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true
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
