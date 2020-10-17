const express = require('express')
const router = express.Router();

// @route GET api/contacts
// @desc get all user's contacts
// @access private
router.get('/', (req,res)=> {
    res.send('Get all contacts')
})

// @route POST api/contacts
// @desc add new contact
// @access private
router.post('/', (req,res)=> {
    res.send('Add contact')
})

// @route PUT api/contacts/:id
// @desc update contact
// @access private
router.put('/:id', (req,res)=> {
    res.send('Update contacts')
})

// @route DELETE api/contacts
// @desc delete contact
// @access private
router.delete('/:id', (req,res)=> {
    res.send('Delete contact')
})

module.exports = router