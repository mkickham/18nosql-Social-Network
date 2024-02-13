const { Schema, Types } = require('mongoose')

const reactModel = new Schema(
    {
        reactID: {
            type: Schema.Types.ObjectId,
            default:() => new Types.ObjectId(),
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