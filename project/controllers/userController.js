const User = require("../models/User")

const createNewUser = async (req, res) => {
    const { name, username, email, address, phone } = req.body
    if (!username) {
        return res.status(400).json({ message: 'username is required' })
    }
    const user = await User.create({ name, username, email, address, phone })
    if (user) {
        console.log("create new user!")
        const users = await User.find().lean()
        if (!users?.length) {
            return res.status(400).json({ message: 'No users found' })
        }
        res.json(users)
    }
    else {
        res.status(400).json({ message: 'Invalid user ' })
    }
}

const getAllUsers = async (req, res) => {
    const users = await User.find().lean()
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }
    res.json(users)
}

const updateUser = async (req, res) => {
    const { _id, name, username, email, address, phone } = req.body
    if (!_id || !username) {
        return res.status(400).json({ messege: 'fields are required' })
    }
    const user = await User.findById(_id).exec()
    if (!user) {
        return res.status(400).json({ messege: 'user not found' })
    }
    user.name = name
    user.username = username
    user.email = email
    user.address = address
    user.phone = phone
    await user.save()
    console.log("Update Success!!!")
    const users = await User.find().lean()
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }
    res.json(users)
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).exec()
    if (!user) {
        return res.status(400).json({ messaga: 'user not found' })
    }
    await user.deleteOne()
    const users = await User.find().lean()
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }
    console.log("Delete Succes!!")
    res.json(users)
}

module.exports = {
    createNewUser,
    getAllUsers,
    updateUser,
    deleteUser
}
