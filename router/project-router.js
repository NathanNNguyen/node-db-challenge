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
});

router.post('/', async (req, res) => {
  const project = req.body;
  try {
    if (!project.project_name) {
      res.status(400).json({ message: 'Missing product_name' });
    } else {
      const inserted = await db.addProduct(project);
      res.status(201).json(inserted);
    }
  }
  catch (err) {
    res.status(500).json({ message: `Can't add project`, err })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await db.getProductByID(req.params.id)
    res.json(project);
  }
  catch (err) {
    res.status(500).json({ message: 'Error while getting project', err })
  }
})

module.exports = router;