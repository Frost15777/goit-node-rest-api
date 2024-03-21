import Contact from "../models/contact.js";
export const getAllContacts = () => Contact.find();

// import { promises as fs } from 'fs';
// import { nanoid } from 'nanoid';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const contactsPath = path.join(__dirname, '..', 'db', 'contacts.json');

// async function listContacts() {
//   try {
//     const data = await fs.readFile(contactsPath, 'utf-8');
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === 'ENOENT') {
//       return [];
//     } else {
//       throw error;
//     }
//   }
// }

// async function getContactById(id) {
//   const contacts = await listContacts();
//   return contacts.find(contact => contact.id === id) || null;
// }

// async function removeContact(id) {
//   const contacts = await listContacts();
//   const updatedContacts = contacts.filter(contact => contact.id !== id);
//   await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
//   const removedContact = contacts.find(contact => contact.id === id) || null;
//   return removedContact;
// }

// async function addContact(name, email, phone) {
//   const newContact = { id: nanoid(), name, email, phone };
//   const contacts = await listContacts();
//   const updatedContacts = [...contacts, newContact];
//   await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
//   return newContact;
// }

// async function updateContact(id, updatedFields) {
//     const contacts = await listContacts();
//     const index = contacts.findIndex(contact => contact.id === id);
//     if (index !== -1) {
//         const updatedContact = { ...contacts[index], ...updatedFields };
//         contacts[index] = updatedContact;
//         await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//         return updatedContact;
//     } else {
//         return null;
//     }
// }

// export { listContacts, getContactById, removeContact, addContact, updateContact };