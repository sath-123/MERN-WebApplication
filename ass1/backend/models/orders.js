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
    },
	quantity:{
		type: Number,
		// required: true

	},
	status:
	{
       type:String,
	//    required:true
	},
    cost:
    {
        type:Number,

    },
	time:
	{
		type: Date,
	}
	
});

module.exports = User = mongoose.model("Orders", UserSchema);
