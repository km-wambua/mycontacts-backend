const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")
// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler (async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// @desc Get a single contact
// @route GET /api/contact/:id
// @access public
const getContact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.status(404)
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

// @desc create a contact
// @route POST /api/contact
// @access public
const createContact = asyncHandler (async (req, res) => {
    console.log("The request body is:", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    };
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json({contact});
});

// @desc update a  contact
// @route PUT /api/contact/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404)
        throw new Error("Contact not found")
    };
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact);
});

// @desc delete  contact
// @route DELETE /api/contact/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact)
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }