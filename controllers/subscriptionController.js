const Subscription = require('../models/subscription');

class SubscriptionController {

    async findAll(){
        try {
            return await Subscription.find().lean();
        } catch (error) {
            throw error;
        }

    }

    async create(user){
        try {
            return await Subscription.create(user)
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await Subscription.findByIdAndDelete(id)
        } catch (error) {
            throw error;
        }
    }


}

module.exports = new SubscriptionController();