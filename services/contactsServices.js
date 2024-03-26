import Contact from "../models/contact.js";

export const listContacts = () => Contact.find({}, { createdAt: 0, updatedAt: 0 });

export const getContactByID = async (id) => {
    const data = await Contact.findById(id);
    return data;
}

export const deleteContact = async (id) => {
    const result = await Contact.findByIdAndDelete(id);
    return result;
}

export const addContact = async (data) => {
    const result = await Contact.create(data);
    return result;
}

export const updateContact = async (id, data) => {
    const result = await Contact.findByIdAndUpdate(id, data, { new: true });
    return result;
}

export const updateStatusContact = async (id, favorite) => {
    const result = await Contact.findByIdAndUpdate(id, { favorite }, { new: true });
    return result;
}