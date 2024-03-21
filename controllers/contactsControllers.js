import * as contactsServices from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";


// const createContact = async (req, res, next) => {
//     try {
//         const { name, email, phone } = req.body;
//         const { error } = createContactSchema.validate(req.body);
//         if (error) {
//             throw HttpError(400, error.message);
//         }
//         const newContact = await contactsServices.addContact(name, email, phone);
//         res.status(201).json(newContact);
//     } catch (error) {
//         next(error);
//     }
// };

const getAllContacts = async (req, res) => {
    const result = await contactsServices.getAllContacts()

    res.json(result)
};

// const getOneContact = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const contact = await contactsServices.getContactById(id);
//         if (contact) {
//             res.status(200).json(contact);
//         } else {
//             throw HttpError(404, "Not found");
//         }
//     } catch (error) {
//         next(error);
//     }
// };

// const deleteContact = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const deletedContact = await contactsServices.removeContact(id);
//         if (deletedContact) {
//             res.status(200).json(deletedContact);
//         } else {
//             throw HttpError(404, "Not found");
//         }
//     } catch (error) {
//         next(error);
//     }
// };

// const updateContact = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const { error } = updateContactSchema.validate(req.body);
//         if (error) {
//             throw HttpError(400, error.message);
//         }
//         const updatedContact = await contactsServices.updateContact(id, req.body);
//         if (updatedContact) {
//             res.status(200).json(updatedContact);
//         } else {
//             throw HttpError(404, "Not found");
//         }
//     } catch (error) {
//         next(error);
//     }
// };

export default {
    // createContact,
    getAllContacts,
    // getOneContact,
    // deleteContact,
    // updateContact
};