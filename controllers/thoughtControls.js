const { thoughts } = require('../models/index.js')

const thoughtControls = {
    async getThoughts(req, res) {
        try {
            const thoughtData = await thoughts.find();
            res.json(thoughtData);
        } catch(err) {
            console.log(err)
            res.status(500).json(err);
        }
    },

    async getThoughtID(req, res) {
        try {
            const thoughts = await thoughts.findOne({_id:req.params.getThoughtID});
            if (!thoughts) {
                res.status(404).json({ message: 'Unavailable'});
            } else {
                res.json(thoughts);
            }
        } catch(err) {
            res.status(500).json(err)
        }
    },
    async createThought(req, res) {
        try {
            const thought = await thoughts.create(req.body);
            res.status(200).json(thought);
        } catch(err) {
            res.status(500).json(err)
        }
    },
    async updateThought(req, res){
        try {
            const thought = await thoughts.findOneAndUpdate({_id:req.params.getThoughtID}, {
                $set: req.body,
            });
            return (thought);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req, res){
        try {
            const thought = await thoughts.findByIdAndDelete({_id:req.params.getThoughtID});
            res.status(200).json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createReact(req, res){
        try {
            const thought = await thoughts.findOneAndUpdate(
                {_id:req.params.getThoughtID},
                {$addToSet: {reaction: req.body}},
            );
            thought ? res.json(thought) : res.status(404)/json({message: 'Not Found'});
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReact(req, res){
        try {
            const thought = await thoughts.findOneAndDelete(
                {_id: req.params.getThoughtID},
            );
            thought ? res.json(thought) : res.status(404)/json({message: 'Not Found'});
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
};

module.exports = thoughtControls;