const express = require("express");
const router = express();
const rewardController = require("../controllers/rewardController");

router.post("/create-reward-request", rewardController.saveReward);
router.get("/all-user-reward-request", rewardController.getUserAllRecord);

module.exports = router;
