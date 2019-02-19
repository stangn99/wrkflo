const express = require('express');
const router = express.Router();
const TaskSchema = require('../models/TaskSchema');

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
    const { taskName, editorName } = req.body;
    const task = new TaskSchema({
      taskName, 
      editorName
    });

    try {
      const doc = await task.save();
      console.log(doc, "added");
    } catch (err) {
      next (err);
    }
  })

module.exports = router;