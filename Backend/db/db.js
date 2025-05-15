import mongoose from "mongoose";

const connectDatabase = async() => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    //console.log(connectionInstance.connection.host);
    console.log("Connected");
  } catch (error) {
    console.log(error);
   // throw(error)
    process.exit()
  }
};

export default connectDatabase;