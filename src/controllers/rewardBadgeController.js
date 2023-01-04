const { saveRewardBadge, getAllBadgesData, updateRewardBadgeData, deleteRewardPointData } = require("../services/rewardBadgeService");

module.exports.saveRewardBadge = async (req, res, next) => {
  try {
    const { badgeNo, badgeName, badgePoint } = req.body;
    const badgeData = await saveRewardBadge(badgeNo, badgeName, badgePoint);
    res.status(201).send(badgeData);
  } catch (error) {
    next(error);
  }
};

module.exports.getAllBadgesData = async (req, res, next) => {
  try {
    const getAllData = await getAllBadgesData();
    if (getAllData.length === 0) {
      return res.status(404).send({ error: "data not found" });
    }
    res.status(200).send(getAllData);
  } catch (error) {
    next(error);
  }
};

module.exports.updateRewardBadgeData = async (req, res, next) => {
  try {
    const { badgeId } = req.params;
    if (!badgeId) {
      return res.status(404).send({ error: "Please provide event id" });
    }
    const { badgeName, badgePoint } = req.body;
    const updatedBadgeData = await updateRewardBadgeData(badgeId, badgeName, badgePoint);
    console.log(updateRewardBadgeData);
    if (!updatedBadgeData) {
      return res.status(404).send({ error: "Invalid event id" });
    }
    res.status(200).send(updatedBadgeData);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteRewardBadgeData = async (req, res, next) => {
  try {
    const { badgeId } = req.params;
    if (!badgeId) {
      return res.status(404).send({ error: "Please provide event id" });
    }
    const deleteBadgeData = await deleteRewardPointData(badgeId);
    if (!deleteBadgeData) {
      return res.status(404).send({ error: "Invalid event id" });
    }
    res.status(200).send(deleteBadgeData);
  } catch (error) {
    next(error);
  }
};
