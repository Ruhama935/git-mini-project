require("dotenv").config()
const express = require("express")
const cors = require ("cors")
const corsOptions = require("./config/corsOptions")
const mongoose = require("mongoose")
const connectDB = require("./config/dbConn")
const PORT = process.env.PORT || 3400
const app = express()
connectDB()


app.use(express.json())
app.use(cors(corsOptions))
app.use("/api/users", require("./routes/user"))
app.use("/api/posts", require("./routes/post"))
app.use("/api/todos", require("./routes/todo"))



mongoose.connection.once('open', () => {
    console.log('Connected to mongoDB')
    app.listen(PORT, ()=>{console.log(`Server running on port ${PORT}`)})
})

mongoose.connection.on('error', err => {console.log(err)})