import mongoose from "mongoose";
import chalk from "chalk";

const connectToMongo = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        process.env.MONGODB_CON_STR || "mongodb://localhost:27017/bizdb",
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        console.log(chalk.magentaBright.bold("Connected to MongoDB"));
        resolve();
      })
      .catch((err) => {
        console.log(chalk.redBright.bold("Error connecting to MongoDB: ", err));
        reject(err);
        process.exit(1);
      });
  });
};

export default connectToMongo;
