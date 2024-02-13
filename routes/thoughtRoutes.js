const router = require('express').Router();
const {
    getThoughts,
    getThoughtID,
    createThought,
    updateThought,
    deleteThought,
    createReact,
    deleteReact
} = require('../controllers/thoughtControls');

const { create } = require('../models/thoughts');

router.route('/').get(getThoughts).post(createThought);

router.route('/:getThoughtID').get(getThoughtID).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReact);

router.route('/:thoughtId/reactions/:reactionID').delete(deleteReact);

module.exports = router;