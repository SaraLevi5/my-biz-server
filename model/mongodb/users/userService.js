import User from "./User.js";

const createUserMongo = (userData) => {
  //save user in mongoose
  let user = new User(userData);
  return user.save();
};
// read
const getAllUsersMongo = () => {
  return User.find();
};
// read
const getUserByIdMongo = (id) => {
  return User.findById(id);
};
const getUserByEmailMongo = (email) => {
  return User.findOne({ email });
};

// update
const updateUserMongo = (id, userData) => {
  return User.findByIdAndUpdate(id, userData, { new: true });
};
// delete
const deleteUserMongo = (id) => {
  return User.findByIdAndDelete(id);
};

export {
  createUserMongo,
  getAllUsersMongo,
  getUserByEmailMongo,
  getUserByIdMongo,
  updateUserMongo,
  deleteUserMongo,
};
