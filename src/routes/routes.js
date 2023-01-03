const express = require("express");
const router = express();
const rewardController = require("../controllers/rewardController");
const rewardPointController = require("../controllers/rewardPointController");
const spinWheelHandler = require("../middlewares/spinWheelHandler");

router.post("/create-reward-request", spinWheelHandler, rewardController.saveReward);
router.get("/all-reward-request", rewardController.getAllRecord);
router.get("/user-reward-request/:accountNumber", rewardController.getUserRecord);

router.post("/create-reward-point", rewardPointController.saveRewardPoint);
router.get("/all-reward-point", rewardPointController.getAllPointsData);
router.put("/update-reward-point/:eventId", rewardPointController.updateRewardPointData);
router.delete("/delete-reward-point/:eventId", rewardPointController.deleteRewardPointData);

module.exports = router;
