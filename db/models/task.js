const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

const checklistSchema = mongoose.Schema({
  name: {type: String, required: true},
  done: {type: Boolean, default: false},
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist',
    required: true
  }
})

module.exports = mongoose.model('Task', checklistSchema)