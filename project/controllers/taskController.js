const Task = require("../models/Task")

const createNewTask = async (req, res) => {
    const { title, tags, comleted } = req.body
    if (!title) {
        return res.status(400).json({ message: 'title is required' })
    }
    const task = await Task.create({ title, tags, comleted })
    if (task) {
        const tasks = await Task.find().lean()
        if (!tasks?.length) {
            return res.status(400).json({ message: 'No tasks found' })
        }
        res.json(tasks)
        console.log("create task succes")    }
    else {
        return res.status(400).json({ message: 'Invalid task' })
    }
}

const getAllTasks = async (req, res) => {
    const tasks = await Task.find().lean()
    if (!tasks?.length) {
        return res.status(400).json({ message: 'No tasks found' })
    }
    res.json(tasks)
}

const updateTask = async (req, res) =>{
    const { _id, title,  tags, comleted } = req.body
    if(!_id || !title){
        return res.status(400).json({ messege: 'fields are required' })
    }
    const task = await Task.findById(_id).exec()
    if(!task){
        return res.status(400).json({ messege: 'task not found'})
    }
    task.title = title
    task.tags = tags
    task.comleted = comleted
    await task.save()
    const tasks = await Task.find().lean()
    if (!tasks?.length) {
        return res.status(400).json({ message: 'No tasks found' })
    }
    res.json(tasks)
    console.log("Update task success!!!")
}

const deleteTask = async (req, res) => {
    const {_id} = req.params
    const task = await Task.findById(_id).exec()
    if (!task){
        return res.status(400).json({ messaga: 'task not found'})
    }
    await task.deleteOne()
    const tasks = await Task.find().lean()
    if (!tasks?.length) {
        return res.status(400).json({ message: 'No tasks found' })
    }
    res.json(tasks)
    console.log("Delete task success")
}

const taskComplete = async(req, res)=>{
    const {_id} = req.params
    const task = await Task.findById(_id).exec()
    if(!task){
        return res.status(400).json({ messege: 'task not found'})
    }
    task.comleted = !task.comleted
    await task.save()
    const tasks = await Task.find().lean()
    res.json(tasks)
    console.log("Update complete task success!!!")
}

module.exports = {
    createNewTask,
    getAllTasks,
    updateTask,
    deleteTask,
    taskComplete
}