const { Schema, model } = require('mongoose')
const reactModel = require('./reactModel')

const thoughtModel = new Schema(
    {
        thoughtType:{
            type: String,
            required: true,
            length: (1-500),
        },
        username:{
            type: String,
            required: true,
        },
        reaction: [reactModel],
    },
);

thoughtModel.virtual('reactCount').get(function(){
    return reactions.length;
});

const thoughts = model('thoughts', thoughtModel)

module.exports = thoughts