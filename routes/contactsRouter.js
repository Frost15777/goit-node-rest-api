import express from "express";
import contactsControllers from "../controllers/contactsControllers.js";
import { createContactSchema, updateContactSchema, updateFavoriteSchema } from "../schemas/contactsSchemas.js"
import isValidId from "../helpers/isValidId.js";
import validateBody from "../helpers/validateBody.js"

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", isValidId, contactsControllers.getOneContact);

contactsRouter.delete("/:id", isValidId, contactsControllers.deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), contactsControllers.createContact);

contactsRouter.put("/:id", validateBody(updateContactSchema), isValidId, contactsControllers.updateContact);

contactsRouter.patch("/:id/favorite", validateBody(updateFavoriteSchema), isValidId, contactsControllers.updateStatusContact);

export default contactsRouter;
