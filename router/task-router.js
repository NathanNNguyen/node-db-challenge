const express = require('express');

const db = require('./db-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getTask();
    res.json(tasks);
  }
  catch (err) {
    res.status(500).json({ message: `Can't get all task`, err })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const task = await db.getTaskById(req.params.id);
    res.json(task)
  }
  catch (err) {
    res.status(500).json({ message: `Task must have a valid id`, err })
  }
})

router.post('/', async (req, res) => {
  const task = req.body
  try {
    const inserted = db.addTask(task, task.project_id);
    res.json(inserted);
  }
  catch (err) {
    res.status(500).json({ message: `Can't add task`, err })
  }
})

module.exports = router;