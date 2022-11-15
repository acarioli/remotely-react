const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const subscriptionSchema = new Schema({
    // id: {
    //     type: 'number',
    //     required: true
    // },

    email: {
        type: 'string',
        required: true
    },

});

const Subscription = mongoose.model('subscription',subscriptionSchema);

module.exports = Subscription;