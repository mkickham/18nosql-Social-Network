const { schema } = require('mongoose')

const reactModel = new schema(
    {
        reactID: {
            type: schema.types.objectID,
            default:() => new Types.objectID(),
        },
        reactBody: {
            type: String,
            required: true,
            length: (1-200),
        },
        username: {
            type: String,
            required: true,
        }
    }
);

module.exports = reactModel;