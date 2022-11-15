const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const jobSchema = new Schema({
    // id: {
    //     type: 'number',
    //     required: true
    // },

    title: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },

});

const Job = mongoose.model('job',jobSchema);

module.exports = Job;