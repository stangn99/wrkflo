const express = require('express');
const router = express.Router();
const TaskSchema = require('../models/task');

router.get('/', async(req, res, next) => {
    try {
      // 1. Find all the tasks in our database
      const docs = await TaskSchema.find()
      // 2. If successful, send back 200 OK with tasks
      res.status(200).json({
        data: docs
      })
    } catch(err) {
      // 3. If unsuccessful, send the error into our error handler
      next(err)
    }
  })


// This would res /task/task_id
// task_id is stored in the Req.param
router.get('/:task_id', async(req, res, next) => {
  const taskId = req.params.task_id;
  
  try {
    const doc = await TaskSchema.findById(taskId);
    res.status(200).json({
      data: [doc]
    })
  } catch (err) {    
    next(err)
  }
})

router.post('/', async(req, res, next) => {
    const { taskName, editorName, clientName, requestTitle, requestDate , publishDate } = req.body;
    const task = new TaskSchema({
      taskName, 
      editorName, 
      clientName, 
      requestTitle, 
      requestDate, 
      publishDate
    });

    try {
      const doc = await task.save();
      res.status(201).send({data: doc})
    } catch (err) {
      next (err);
    }
  })

module.exports = router;