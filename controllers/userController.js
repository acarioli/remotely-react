const User = require('../models/user');

class UserController {

    async findAll(){
        try {
            return await User.find().lean();
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

module.exports = new UserController();