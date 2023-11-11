const express = require('express')
const Task = require('../models/model')
const router = express.Router()


router.get('/', async (req,res)=>{
    const task = await Task.find()
    res.json(task)
})

router.post('/',(req,res)=>{
    const task = new Task(req.body)
    task.save()
    res.json(task)
})

router.put('/:id', async (req,res)=>{
    const task = await Task.findOneAndUpdate({
        _id : req.params.id
    },req.body,{
        new : true
    })
    res.json(task)   
})

router.delete('/:id',async (req,res)=>{
    const task = await Task.findByIdAndDelete({
        _id : req.params.id
    })
    res.json(task)
})

module.exports = router