const Van = require("../models/van.model");

const getVans = async (req, res) => {
  try {
    const vans = await Van.find({});
    res.status(200).json(vans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVan = async (req, res) => {
  try {
    const { id } = req.params;

    const van = await Van.findById(id);
    res.status(200).json(van);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createVan = async (req, res) => {
  try {
    const van = await Van.create(req.body);
    res.status(200).json(van);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateVan = async (req, res) => {
  try {
    const { id } = req.params;

    const van = await Van.findByIdAndUpdate(id, req.body);

    if (!van) {
      return res.status(404).json({ message: "Van not found" });
    }

    const updatedVan = await Van.findById(id);
    res.status(200).json(updatedVan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVan = async (req, res) => {
  try {
    const { id } = req.params;

    const van = await Van.findByIdAndDelete(id);

    if (!van) {
      return res.status(404).json({ message: "Van not found" });
    }
    res.status(200).json({ message: "Van deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVans,
  getVan,
  createVan,
  updateVan,
  deleteVan,
};
