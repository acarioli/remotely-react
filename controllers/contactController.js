const Contact = require('../models/contact');

class ContactController {

    async findAll(){
        try {
            return await Contact.find().lean();
        } catch (error) {
            throw error;
        }

    }

    async create(contact){
        try {
            return await Contact.create(contact)
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await Contact.findByIdAndDelete(id)
        } catch (error) {
            throw error;
        }
    }


}

module.exports = new ContactController();