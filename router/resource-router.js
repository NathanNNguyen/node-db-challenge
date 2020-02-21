const express = require('express');

const db = require('./db-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resources = await db.getResource();
    res.json(resources);
  }
  catch (err) {
    res.status(500).json({ message: `Can't get all resource`, err })
  }
})

module.exports = router;