const Job = require('../models/job');

class JobController {

    async findAll(){
        try {
            return await Job.find().lean();
        } catch (error) {
            throw error;
        }

    }

    async create(job){
        try {
            return await Job.create(job)
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await Job.findByIdAndDelete(id)
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new JobController();