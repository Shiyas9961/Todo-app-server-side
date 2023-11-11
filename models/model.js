const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    todo : String,
    isCompleted : Boolean
})

const Task = mongoose.model('task',taskSchema)

module.exports = Task