const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connection Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

module.exports = connectDatabase;
