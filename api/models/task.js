// 1. Require mongoose as the first step
const mongoose = require('mongoose');

// 2. Create the schema for the task
const taskSchema = new mongoose.Schema({
  taskName: String, 
  editorName: String
});

// 3. connect schema to the model
const Task = mongoose.model("task", taskSchema);

// 4. export the connected schema+model
module.exports = Task;