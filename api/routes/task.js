const express = require('express');
const router = express.Router();
const TaskSchema = require('../models/task');

router.route('/')
  .get(async(req, res, next) => {
    try {
      // 1. Find all the tasks in our database
      const docs = await TaskSchema.find()
      // 2. If successful, send back 200 OK with tasks
      res.status(200).send({
        data: docs
      })
    } catch(e) {
      // 3. If unsuccessful, send the error into our error handler
      next(e)
    }
  })

  .post(async(req, res, next) => {
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
      res.status(201).send({data: [doc]})
    } catch (err) {
      next (err);
    }
  })

module.exports = router;