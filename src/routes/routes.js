const express = require("express");
const router = express();
const rewardController = require("../controllers/rewardController");
const rewardPointController = require("../controllers/rewardPointController");
const rewardBadgeController = require("../controllers/rewardBadgeController");
const spinWheelHandler = require("../middlewares/spinWheelHandler");

router.post("/create-reward-request", spinWheelHandler, rewardController.saveReward);
router.get("/all-reward-request", rewardController.getAllRecord);
router.get("/user-reward-request/:accountNumber", rewardController.getUserRecord);

router.post("/create-reward-point", rewardPointController.saveRewardPoint);
router.get("/all-reward-point", rewardPointController.getAllPointsData);
router.put("/update-reward-point/:eventId", rewardPointController.updateRewardPointData);
router.delete("/delete-reward-point/:eventId", rewardPointController.deleteRewardPointData);

router.post("/create-reward-badge", rewardBadgeController.saveRewardBadge);
router.get("/all-reward-badge", rewardBadgeController.getAllBadgesData);
router.put("/update-reward-badge/:badgeId", rewardBadgeController.updateRewardBadgeData);
router.delete("/delete-reward-badge/:badgeId", rewardBadgeController.deleteRewardBadgeData);

module.exports = router;
