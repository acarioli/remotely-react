const User = require('../models/user');

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
            return await User.create(user)
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await User.findByIdAndDelete(id)
        } catch (error) {
            throw error;
        }
    }


}

module.exports = new SubscriptionController();