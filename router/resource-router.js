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
});

router.post('/', async (req, res) => {
  const resource = req.body;
  try {
    if (!resource.resource_name) {
      res.status(400).json({ message: 'Missing resource_name' })
    } else {
      const inserted = await db.addResource(resource);
      res.json(inserted)
    }
  }
  catch (err) {
    res.status(500).json({ message: `Can't add resource`, err })
  }
})

module.exports = router;