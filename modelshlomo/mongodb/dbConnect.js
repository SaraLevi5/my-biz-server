import mongoose from "mongoose";
import chalk from "chalk";

const connectToMongo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect("mongodb://localhost:27017/bizdb")
      .then(() => {
        console.log(chalk.magentaBright.bold("Connected to MongoDB"));
        resolve();
      })
      .catch((err) => {
        console.log(chalk.redBright.bold("Error connecting to MongoDB: ", err));
        reject(err);
        process.exit(1); //drop the server
      });
  });
};

export default connectToMongo;
