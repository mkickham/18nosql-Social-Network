const { User } = require('../models');

const UserControls = {
    createUser(req, res){
        User.create(req, res){
            .then(userData -> res.JSON(userData));
        }
    },
    getUsers(req, res) {
        User.find({})
            .then(userData => res.JSON(userData))
            .catch(err => res.status(500).JSON(err))
    },
    getUsersByID(req, res){
        User.findById(req.params.userID)
        .then(userData => res.JSON(userData));
    },
}