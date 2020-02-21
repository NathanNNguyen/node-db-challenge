const express = require('express');

const db = require('./db-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await db.getProduct();
    res.json(projects);
  }
  catch (err) {
    res.status(500).json({ message: `Can't get all project`, err })
  }
})

module.exports = router;