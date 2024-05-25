// @desc Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"});
}

// @desc Get a single contact
// @route GET /api/contact/:id
// @access public
const getContact = (req, res) => {
    res.status(200).json({message: `Get single contact of the id ${req.params.id}`})
}

// @desc create a contact
// @route POST /api/contact
// @access public
const createContact = (req, res) => {
    res.status(200).json({message: "Create a new contact"})
}

// @desc update a  contact
// @route PUT /api/contact/:id
// @access public
const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact of the id ${req.params.id}`})
}

// @desc delete  contact
// @route DELETE /api/contact/:id
// @access public
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact of the id ${req.params.id}`})
}
module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }