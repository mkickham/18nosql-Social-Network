const { user } = require('../models');

const UserControls = {
    createUser(req, res){
        user.create(req.body)
            .then(userData => res.json(userData));
        
    },
    getUsers(req, res) {
        user.find({})
            .then(userData => res.json(userData))
            .catch(err => res.status(500).json(err));
    },
    getUsersByID(req, res){
        user.findById(req.params.userID)
        .then(userData => res.json(userData));
    },
    updateUser(req, res){
        user.findOneAndUpdate(req.params.id, req.body, { new: true })
            .then(userData => {
                if (!userData){
                    return res.status(404).json({ message: 'Username not found' })
                }
                res.json(userData)
            })
            .catch(err => res.status(500).json(err))
    },
    deleteUser(req, res){
        user.findOneAndDelete(req.params.id)
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'Username not found'})
                }
                res.json({ message: 'Username deleted' });
            })
            .catch(err => res.status(500).json(err))
    },
    addFriend(req, res){
        user.findOneAndUpdate(
            { _id: req.params.userID },
            { $addToSet: { friends: req.body.friendId || req.params.friendId }},
            { new: true }
        )
        .then(userData => {
            if (!userData){
                return res.status(404).json({ message: 'Username not found' });
            }
            res.json(userData);
        })
        .catch(err => res.status(500).json(err))
    }
}

module.exports = UserControls;