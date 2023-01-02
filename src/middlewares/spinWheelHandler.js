const { SPIN_WHEEL } = require("../constants/rewardConstant");
const UserReward = require("../models/rewardModel");

module.exports = async (req, res, next) => {
  const userPreviousRecord = await UserReward.aggregate(
    [
      {
        $match: {
          accountNumber: {
            $eq: +req.body.accountNumber
          },
          eventName: {
            $eq: SPIN_WHEEL
          }
        }
      },
      {
        $project: {
          createdAt: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }
        }
      }
    ]
  ).sort({ _id: -1 });
  const currentDate = new Date().toISOString().split("T")[0];
  if (userPreviousRecord.length > 0) {
    if (userPreviousRecord[0].createdAt === currentDate && req.body.spinWheelPoint) {
      return res.status(400).send({ error: "user already spin a wheel for today" });
    } else {
      next();
    }
  } else {
    next();
  }
};
