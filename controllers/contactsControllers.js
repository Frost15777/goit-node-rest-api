import * as contactsServices from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js"


const createContact = async (req, res) => {
    const result = await contactsServices.addContact(req.body);

    res.status(201).json(result);
};

const getAllContacts = async (req, res) => {
    const result = await contactsServices.listContacts()

    res.json(result);
};

const getOneContact = async (req, res) => {
        const { id } = req.params;
        const result = await contactsServices.getContactById(id);
        if (!result) {
            throw HttpError(404, `Contact with id=${id} not found`);
        } 

        res.json(result);
};

const deleteContact = async (req, res) => {
        const { id } = req.params;
        const result = await contactsServices.removeContact(id);
        if (!result) {
            throw HttpError(404, `Contact with id=${id} not found`);
        }
    
    res.json({
        message: "Delete success"
    });
};

const updateContact = async (req, res) => {
        const { id } = req.params;
        const { result } = await contactsServices.updateContact(id, req.body);
        if (!result) {
            throw HttpError(404, `Contact with id=${id} not found`);
        }
};

const updateStatusContact = async (req, res) => {
    const { id } = req.params;
    const { result } = await contactsServices.updateStatusContact(id, favorite);

    if (!result) {
        throw HttpError(404, `Contact with id=${id} not found`);
    }

    res.json(result);
};

export default {
    createContact: ctrlWrapper(createContact),
    getAllContacts: ctrlWrapper(getAllContacts),
    getOneContact: ctrlWrapper(getOneContact),
    deleteContact: ctrlWrapper(deleteContact),
    updateContact: ctrlWrapper(updateContact),
    updateStatusContact: ctrlWrapper(updateStatusContact),
};