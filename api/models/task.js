// 1. Require mongoose as the first step
const mongoose = require('mongoose');
const moment = require('moment')


// 2. Create the schema for the task
const taskSchema = new mongoose.Schema({
  taskName: {
    type: String, 
    required: true
  },
  editorName: {
    type: String, 
    required: true
  },
  clientName: {
    type: String, 
    required: true
  },
  requestTitle: {
    type: String, 
    required: true
  },
  requestDate: {
    type: String, 
    default: moment().format('YYYY-MM-DD')
  },
  publishDate: {
    type: String, 
    required: true
  }
});

// 3. connect schema to the model
const Task = mongoose.model("task", taskSchema);

// 4. export the connected schema+model
module.exports = Task;