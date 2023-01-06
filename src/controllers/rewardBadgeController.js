const {
  saveRewardBadge,
  getAllBadgesData,
  updateRewardBadgeData,
  deleteRewardPointData
} = require("../services/rewardBadgeService");

module.exports.saveRewardBadge = async (req, res, next) => {
  try {
    const { badgeNo, badgeName, badgePoint } = req.body;
    const badgeData = await saveRewardBadge(badgeNo, badgeName, badgePoint);
    res.status(201).send(badgeData);
  } catch (error) {
    res.status(403).send({ message: "Data entry failed" });
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
    res.status(404).send({ message: "Data not found" });
  }
};

module.exports.updateRewardBadgeData = async (req, res, next) => {
  try {
    const { badgeId } = req.params;
    if (!badgeId) {
      return res.status(404).send({ error: "Please provide event id" });
    }
    const { badgeName, badgePoint } = req.body;
    const updatedBadgeData = await updateRewardBadgeData(
      badgeId,
      badgeName,
      badgePoint
    );
    if (!updatedBadgeData) {
      return res.status(404).send({ error: "Invalid event id" });
    }
    res.status(200).send(updatedBadgeData);
  } catch (error) {
    res.status(403).send({ message: "Data updation failed" });
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
    res.status(403).send({ message: "Data deletion failed" });
  }
};
