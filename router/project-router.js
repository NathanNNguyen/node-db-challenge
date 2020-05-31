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

router.get('/:id', async (req, res) => {
  try {
    const project = await db.getProductByID(req.params.id)
    res.json(project);
  }
  catch (err) {
    res.status(500).json({ message: 'Error while getting project', err })
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

// add task based on specified project (id)
router.post('/:id/task', async (req, res) => {
  const { id } = req.params;
  const task = req.body;
  const project = await db.getProductByID(id);
  try {
    if (project && task.project_id && task.task_desc) {
      const inserted = await db.addTask(task, id);
      res.status(201).json(inserted);
    } else {
      res.status(404).json({ message: 'Task must have required fields' })
    }
  }
  catch (err) {
    res.status(500).json({ message: 'Error while adding task to project', err })
  }
})

module.exports = router;