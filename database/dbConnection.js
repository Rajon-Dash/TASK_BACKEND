import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL, {
      dbName: "new_project",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(`Some error occured while connecting to database:${error}`);
    });
};
