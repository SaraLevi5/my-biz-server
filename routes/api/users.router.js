import express from "express";
import {
  deleteUserController,
  loginController,
  registerController,
  updateUserController,
  patchIsBizController,
  getAllUsersController,
} from "../../controllers/users.controller.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import {
  loginValidation,
  registerValidation,
  editUserValidation,
} from "../../validation/validationAdapter.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import adminOrOwn from "../../middlewares/adminOrOwn.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
const router = express.Router();

// http://localhost:3030/api/users
router.get("/", authMiddleware, isAdminMiddleware, getAllUsersController);

router.post(
  "/register",
  bodyValidationMiddleware(registerValidation),
  registerController
);

router.post(
  "/login",
  bodyValidationMiddleware(loginValidation),
  loginController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrOwn,
  bodyValidationMiddleware(editUserValidation),
  updateUserController
);

router.patch(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrOwn,
  //add patch validation
  patchIsBizController
);

router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrOwn,
  deleteUserController
);

export default router;
