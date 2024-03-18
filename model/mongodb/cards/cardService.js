import Card from "./Card.js";

//create
const createCardMongo = (cardData) => {
  let card = new Card(cardData);
  return card.save();
};

//read
const getAllCardsMongo = () => {
  return Card.find();
};
//read
const getCardByIdMongo = (id) => {
  return Card.findById(id);
};

//read
const getAllMyCardsMongo = (userId) => {
  return Card.find({ user_id: userId });
};

const getCardByBizNumberMongo = (bizNumber) => {
  return Card.findOne({ bizNumber });
};
//update
const updateCardMongo = (id, cardData) => {
  return Card.findByIdAndUpdate(id, cardData, { new: true });
};
//delete
const deleteCardMongo = (id) => {
  return Card.findByIdAndDelete(id);
};
export {
  createCardMongo,
  getAllCardsMongo,
  getCardByIdMongo,
  getAllMyCardsMongo,
  getCardByBizNumberMongo,
  updateCardMongo,
  deleteCardMongo,
};
