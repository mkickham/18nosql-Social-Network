const { schema, models, types } = require('mongoose');
const thoughts = require('./thoughts');

const userModel = new schema(
    {
        username{
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            valid: true,
        },
        friend: {
            type: schema.types.objectID,
            ref: 'user',
        },
        thoughts: {
            type: schema.types.objectID,
            ref: 'thoughts',
        }
    }
);

const user = model('user', userModel);

module.exports = user