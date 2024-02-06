import connectToMongo from "./mongodb/dbConnect.js";
import connectToMySQL from "./mysql/dbConnect.js";
import { createCard as createCardMongo } from "./mongodb/cards/cardService.js";
import normalizeUser from "./../normalize/user.normalize.js";
import normalizeCard from "../normalize/card.normalize.js";
import {
  createUserMongo,
  getAllUsersMongo,
  getUserByIdMongo,
  getUserByEmailMongo,
  updateUserMongo,
  deleteUserMongo,
} from "./mongodb/users/userService.js";
import { getAllCards as getAllCardsMongo } from "./mongodb/cards/cardService.js";
import { getCardById as getCardByIdMongo } from "./mongodb/cards/cardService.js";
import { deleteCard as deleteCardMongo } from "./mongodb/cards/cardService.js";
import { updateCard as updateCardMongo } from "./mongodb/cards/cardService.js";

const DB = "mongo";

const connectToDb = () => {
  if (DB === "mongo") {
    return connectToMongo();
  }
  if (DB === "mysql") {
    return connectToMySQL();
  }
};
const createUser = (user) => {
  user = normalizeUser(user);

  if (DB === "mongo") {
    return createUserMongo(user);
  }
};
const getUserByEmail = (email) => {
  if (DB === "mongo") {
    return getUserByEmailMongo(email);
  }
};
const getAllUsers = (user) => {
  user = normalizeUser(user);

  if (DB === "mongo") {
    return getAllUsersMongo(user);
  }
};
const getUserById = (id) => {
  if (DB === "mongo") {
    return getUserByIdMongo(id);
  }
};
const updateUser = (id, user) => {
  user = normalizeUser(user);
  if (DB === "mongo") {
    return updateUserMongo(id, user);
  }
};
const deleteUser = (id) => {
  user = normalizeUser(user);
  if (DB === "mongo") {
    return deleteUserMongo(id);
  }
};

const createCard = (card) => {
  //normalizeCard
  card = normalizeCard(card);
  if (DB === "mongo") {
    return createCardMongo(card);
  }
};

const getAllCards = (card) => {
  card = normalizeCard(card);

  if (DB === "mongo") {
    return getAllCardsMongo(card);
  }
};
const getCardById = (id) => {
  if (DB === "mongo") {
    return getCardByIdMongo(id);
  }
};
const getCardByBizNumber = (bizNumber) => {
  if (DB === "mongo") {
    return getCardByBizNumberMongo(bizNumber);
  }
};
const updateCard = (id, card) => {
  card = normalizeCard(card);
  if (DB === "mongo") {
    return updateCardMongo(id, card);
  }
};
const deleteCard = (id) => {
  if (DB === "mongo") {
    return deleteCardMongo(id);
  }
};

export default connectToDb;
export {
  createUser,
  createCard,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAllCards,
  getCardById,
  getCardByBizNumber,
  updateCard,
  deleteCard,
};
