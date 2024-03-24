import Contact from "../models/contact.js";

export const listContacts = async () => {
    const result = await Contact.find({}, "-createdAt -updatedAt");
    if (result === null) {
        throw new Error("Cannot do exclusion on field createdAt in inclusion projection");
    }
    return result;
};

export const getContactByID = async (id) => {
    const data = await Contact.findById(id);
    return data;
}

export const deleteContact = id => Contact.findByIdAndDelete(id);

export const addContact = data => Contact.create(data);

export const updateContact = (id, data) => Contact.findByIdAndUpdate(id, data);

export const updateStatusContact = (id, favourite) => Contact.findByIdAndUpdate(id, favourite);