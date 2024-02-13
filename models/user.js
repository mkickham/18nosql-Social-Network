const { Schema, model, Types } = require('mongoose');
const thoughts = require('./thoughts');

const userModel = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!'],
        },
        friend: [{
            type: Schema.Types.ObjectID,
            ref: 'user',
        }],
        thoughts: [{
            type: Schema.Types.ObjectID,
            ref: 'thoughts',
        }]
    }
);

const user = model('user', userModel);

module.exports = user;