const Todo = require("../models/Todo")

const createNewTodo = async (req, res) => {
    const { title, tags, comleted } = req.body
    if (!title) {
        return res.status(400).json({ message: 'title is required' })
    }
    const todo = await Todo.create({ title, tags, comleted })
    if (todo) {
        const todos = await Todo.find().lean()
        if (!todos?.length) {
            return res.status(400).json({ message: 'No todos found' })
        }
        res.json(todos)
        console.log("create todo succes")    }
    else {
        return res.status(400).json({ message: 'Invalid todo' })
    }
}

const getAllTodos = async (req, res) => {
    const todos = await Todo.find().lean()
    if (!todos?.length) {
        return res.status(400).json({ message: 'No todos found' })
    }
    res.json(todos)
}

const updateTodo = async (req, res) =>{
    const { _id, title,  tags, comleted } = req.body
    if(!_id || !title){
        return res.status(400).json({ messege: 'fields are required' })
    }
    const todo = await Todo.findById(_id).exec()
    if(!todo){
        return res.status(400).json({ messege: 'todo not found'})
    }
    todo.title = title
    todo.tags = tags
    todo.comleted = comleted
    await todo.save()
    const todos = await Todo.find().lean()
    if (!todos?.length) {
        return res.status(400).json({ message: 'No todos found' })
    }
    res.json(todos)
    console.log("Update todo success!!!")
}

const deleteTodo = async (req, res) => {
    const {_id} = req.params
    const todo = await Todo.findById(_id).exec()
    if (!todo){
        return res.status(400).json({ messaga: 'todo not found'})
    }
    await todo.deleteOne()
    const todos = await Todo.find().lean()
    if (!todos?.length) {
        return res.status(400).json({ message: 'No todos found' })
    }
    res.json(todos)
    console.log("Delete todo success")
}

const todoComplete = async(req, res)=>{
    const {_id} = req.params
    const todo = await Todo.findById(_id).exec()
    if(!todo){
        return res.status(400).json({ messege: 'todo not found'})
    }
    todo.comleted = !todo.comleted
    await todo.save()
    const todos = await Todo.find().lean()
    res.json(todos)
    console.log("Update complete todo success!!!")
}

module.exports = {
    createNewTodo,
    getAllTodos,
    updateTodo,
    deleteTodo,
    todoComplete
}