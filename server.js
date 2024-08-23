const express = require("express")
const app = express()
require("dotenv").config()
const connectData = require("./DataBase/connectData")
connectData()
app.use(express.json())
const router= require("./routes/house")
app.use("/house",router)

app.listen(process.env.port, (err)=>err ? console.error(err) : console.log(`server is connecting on http://localhost:${process.env.port}`))

