import Contact from "../models/contact.js";

export const listContacts = () => Contact.find({}, "-createdAt - updatedAt");

export const getContactByID = async (id) => {
    const data = await Contact.findById(id);
    return data;
}

export const deleteContact = id => Contact.findByIdAndDelete(id);

export const addContact = data => Contact.create(data);

export const updateContact = (id, data) => Contact.findByIdAndUpdate(id, data);
