import mongoose from "mongoose";

const connect = async () => {
  const uri = "mongodb://192.168.1.3:27017/footballDB";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("mongoose connected succesfuly");
  } catch (e) {
    console.log("mongoose connection error", e);
  }
};

export default connect;
