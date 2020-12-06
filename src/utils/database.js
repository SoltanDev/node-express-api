import mongoose from "mongoose";

const connect = async () => {
  const uri = "mongodb://"+process.env.DB_HOST+":"+process.env.DB_PORT+"/"+process.env.DB_NAME;
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      iuseFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("mongoose connected succesfuly");
  } catch (e) {
    console.log("mongoose connection error", e);
  }
};

export default connect;
