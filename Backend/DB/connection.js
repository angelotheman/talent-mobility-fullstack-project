import mongoose from "mongoose";

// var db = "mongodb://localhost:27017/Main?authMechanism=DEFAULT&authSource=admin";
// var db = "mongodb://localhost:27017";
const MONGO_USER = process.env.MONGO_USER || 'defaultUser';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'defaultPassword';
const DB_HOST = process.env.DB_HOST || 'db';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_NAME = process.env.DB_NAME || 'todos';
const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${DB_HOST}:${DB_PORT}?authSource=admin`;

const connectDb = () => {
  return mongoose
    //.connect(`${process.env.DB}`)
    // .connect(`${db}`)
    // .connect(`mongodb://mongo-shared-dev:fikTpih4U2!@20.218.241.192:27017/?directConnection=true&appName=mongosh+1.8.2&authMechanism=DEFAULT`)
    .connect(MONGO_URI, { dbName: DB_NAME })
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log("catch error", err);
    });
};

export default connectDb;
