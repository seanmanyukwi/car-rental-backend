const express = require('express');
const Van = require('../models/van.model.js');
const router = express.Router();
const { getVans, getVan, createVan, updateVan, deleteVan } = require('../controllers/van.controller.js');

router.get('/', getVans);
router.get("/:id", getVan);
router.post('/', createVan);

// update a van
router.put("/:id", updateVan);

// delete a van
router.delete("/:id", deleteVan);

module.exports = router;
