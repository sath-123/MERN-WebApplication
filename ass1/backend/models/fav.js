const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	buyeremail: {
		type: String,
		required: true
	},
	vendoremail: {
		type: String,
		required: true
	},
	foodname:{
		type: String,
		required: true
	},
    Addon:{
        type:String,
    }
	
	
});

module.exports = User = mongoose.model("Fav", UserSchema);
