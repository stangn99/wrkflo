const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskID: { 
    type: String, 
    required: true
  },
  taskName: {
    type: String,
    required: true
  },
  clientName: {
    type: String,
    required: true
  },
  dateReceived: {
    type: String,
    required: true
  },
  requestedPublishDate: {
    type: String,
    required: true
  },
  effort: {
    type: Number,
    required: true
  },
  urgency: {
    type: Number,
    required: true
  },
  aodaCompliant: {
    type: Boolean,
    required: true
  },
  rejected: {
    type: Boolean,
    required: true
  },
  netNewPage: {
    type: Boolean,
    required: true
  },
  wpPageTitle: {
    type: String,
    required: true
  },
  wpDesc: {
    type: String,
    required: true
  },
  fileUploadRequired: {
    type: Boolean,
    required: true
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;