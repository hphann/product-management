const mongoose = require('mongoose');
require('dotenv').config()

module.exports.connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 30000, // Tăng thời gian chờ lên 30 giây
            socketTimeoutMS: 45000,
        })
        console.log("Connect succes!")
    } catch (error) {
        console.log("Connect error!")
    }
}
