import Card from "./Card.js";

//create
const createCard = (cardData) => {
  let card = new Card(cardData);
  return card.save();
};

//read
const getAllCards = () => {
  return Card.find(); //////{}?
};
//read
const getCardById = (id) => {
  return Card.findById(id);
};
const getCardByBizNumber = (bizNumber) => {
  return Card.findOne({ bizNumber });
};
//update
const updateCard = (id, cardData) => {
  return Card.findByIdAndUpdate(id, cardData, { new: true });
};
//delete
const deleteCard = (id) => {
  return Card.findByIdAndDelete(id);
};
export {
  createCard,
  getAllCards,
  getCardById,
  getCardByBizNumber,
  updateCard,
  deleteCard,
};
