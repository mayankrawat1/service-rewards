const {
  saveRewardPoint,
  getAllPointsData,
  updateRewardPointData,
  deleteRewardPointData
} = require("../services/rewardPointService");

module.exports.saveRewardPoint = async (req, res, next) => {
  try {
    const { eventName, eventPoint } = req.body;
    const pointsData = await saveRewardPoint(eventName, eventPoint);
    res.status(201).send(pointsData);
  } catch (error) {
    next(error);
  }
};

module.exports.getAllPointsData = async (req, res, next) => {
  try {
    const getAllData = await getAllPointsData();
    if (getAllData.length === 0) {
      return res.status(404).send({ error: "data not found" });
    }
    res.status(200).send(getAllData);
  } catch (error) {
    next(error);
  }
};

module.exports.updateRewardPointData = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    if (!eventId) {
      return res.status(404).send({ error: "Please provide event id" });
    }
    const { eventName, eventPoint } = req.body;
    const updatedPointData = await updateRewardPointData(
      eventId,
      eventName,
      eventPoint
    );
    if (!updatedPointData) {
      return res.status(404).send({ error: "Invalid event id" });
    }
    res.status(200).send(updatedPointData);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteRewardPointData = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    if (!eventId) {
      return res.status(404).send({ error: "Please provide event id" });
    }
    const deletePointData = await deleteRewardPointData(eventId);
    if (!deletePointData) {
      return res.status(404).send({ error: "Invalid event id" });
    }
    res.status(200).send(deletePointData);
  } catch (error) {
    next(error);
  }
};
