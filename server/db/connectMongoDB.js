var mongoose = require('mongoose');

module.exports = async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
    }
}