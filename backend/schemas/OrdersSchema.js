const { Schema } = require('mongoose');


const OrdersSchema = new Schema ({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    user : {
        type: Schema.Types.ObjectId,
        ref: 'user', // References the 'user' collection
        required: true
    }
});

module.exports = { OrdersSchema };