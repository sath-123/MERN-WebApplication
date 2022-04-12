const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	
	email: {
		type: String,
		required: true
	},
	foodname:{
		type: String,
        required: true
		

	},
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    status:{
        type: String
    },
    quantity_ordered:{
        type: Number
    },
    quantitythere:{
        type: Number
    },
    isDispatched:{
        type:Boolean
    },
    review:{
        type: String
    },
    rating:{
        type: Number
    },
    Addon:
    {
        type: String
    },
    varity:
    {
        type:String,
    }
});

module.exports = Food = mongoose.model("Food", UserSchema);
