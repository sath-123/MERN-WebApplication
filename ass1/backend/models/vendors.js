const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	managername: {
		type: String,
		required: true
	},
    shopname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	number:{
		type: Number,
		required: true

	},
	opening:{
		type:Number,
		required:true
	},
	closing:
	{
		type:Number,
		required:true 
	},
	password:
	{
		type:String,
		required:true
	},
	total:
	{
		type:Number
	}
});

module.exports = User = mongoose.model("vendors", UserSchema);
