const { listContacts, getContactById, removeContact, addContact, updateContact } = require('/services/contactsServices');
const { validateContact, validateUpdateContact } = require('/schemas/contactsSchemas');

const getAllContacts = (req, res) => {
    const contacts = listContacts();
    res.status(200).json(contacts);
};

const getContact = (req, res) => {
    const { id } = req.params;
    const contact = getContactById(id);
    if (contact) {
        res.status(200).json(contact);
    } else {
        res.status(404).json({ message: "Not found" });
    }
};

const deleteContact = (req, res) => {
    const { id } = req.params;
    const deletedContact = removeContact(id);
    if (deletedContact) {
        res.status(200).json(deletedContact);
    } else {
        res.status(404).json({ message: "Not found" });
    }
};

const createContact = (req, res) => {
    const { name, email, phone } = req.body;
    const { error } = validateContact(req.body);
    if (error) {
        res.status(400).json({ message: error.message });
    } else {
        const newContact = addContact(name, email, phone);
        res.status(201).json(newContact);
    }
};

const updateContactById = (req, res) => {
    const { id } = req.params;
    const { error } = validateUpdateContact(req.body);
    if (error) {
        res.status(400).json({ message: error.message });
    } else {
        const updatedContact = updateContact(id, req.body);
        if (updatedContact) {
            res.status(200).json(updatedContact);
        } else {
            res.status(404).json({ message: "Not found" });
        }
    }
};

module.exports = { getAllContacts, getContact, deleteContact, createContact, updateContactById };