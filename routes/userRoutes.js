const router = require('express').Router();
const {
    createUser,
    getUsers,
    getUsersByID,
    updateUser,
    deleteUser,
    addFriend
} = require('../controllers/userControls');

router.route('/').get(getUsers).post(createUser);

router.route('/:userID').get(getUsersByID).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend);

module.exports = router;