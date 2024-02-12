const = require('mongoose');

const thoughtControls = {
    async getThoughts(req, res) {
        try {
            const thoughts = await thoughtControls.find();
            res.JSON(thoughts);
        } catch {
            res.status(500).json(err);
        }
    },

    async getThoughtID(req, res) {
        try {
            const thoughts = await thoughts.findOne({_id:req.params.getThoughtID});
            if (!thought) {
                res.status(404).JSON({ message: 'Unavailable'});
            } else {
                res.JSON(thoughts);
            }
        } catch {
            res.status(500).JSON(err)
        }
    },
    async createThought(req, res) {
        try {
            const thought = await thoughts.create(req.body);
            res.status(200).JSON(thought);
        } catch {
            res.status(500).JSON(err)
        }
    },
    async updateThought(req, res){
        try {
            const thought = await thoughts.findOneAndUpdate(
                // not sure what to do here?
            )
        } catch {
            res.status(500).JSON(err);
        }
    },
    
}