const mongoose = require("mongoose")
const connectData = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{console.log("connecting to DB")})
    .catch((err)=>{console.error(err)})}

    module.exports = connectData
