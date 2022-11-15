const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const contactSchema = new Schema({
    // id: {
    //     type: 'number',
    //     required: true
    // },

    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    message: {
        type: 'string',
        required: true
    },
});

const Contact = mongoose.model('contact',contactSchema);

module.exports = Contact;