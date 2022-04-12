var express = require("express");
var router = express.Router();

// Load User modelmodels
const User = require("../models/Users");
const Food = require("../models/food");
const Orders = require("../models/orders");
const Fav = require("../models/fav");

// GET request 
// Getting all the users
router.post("/orders", (req, res) => {
	// const newUser = new User({
	let order = new Orders(req.body);
	let buyeremail = req.body.buyeremail;
	let vendoremail = req.body.vendoremail;
	let foodname = req.body.foodname;
	let Addon = req.body.Addon;
	let price = req.body.price;
	let wallet = req.body.wallet;
	if (wallet < price * req.body.quantity) {
		res.send("3")
	}
	else {
		// Orders.findOne({ buyeremail, vendoremail, foodname, Addon }).then(vendor => {
			// Check if user email exists
			// if (!vendor) {

				order.save()
					.then(user => {
						res.status(200).json(user);
					})
					.catch(err => {
						res.status(400).send(err);
					});
				// return res.status(404).json({
				//     error: "Email not found",
				// });
			// }
			// else {
				// res.send("0");
				//response.email=Vendor.email;
				//res.json(respo);
				//return vendor;
			// }
		// });
	}
});
router.post("/fav", (req, res) => {
	// const newUser = new User({
	let fav = new Fav(req.body);
	let buyeremail = req.body.buyeremail;
	let vendoremail = req.body.vendoremail;
	let foodname = req.body.foodname;
	let Addon = req.body.Addon;
	Fav.findOne({ buyeremail, vendoremail, foodname, Addon }).then(vendor => {
		// Check if user email exists
		if (!vendor) {

			fav.save()
				.then(user => {
					res.status(200).json(user);
				})
				.catch(err => {
					res.status(400).send(err);
				});
			// return res.status(404).json({
			//     error: "Email not found",
			// });
		}
		else {
			res.send("0");
			//response.email=Vendor.email;
			//res.json(respo);
			//return vendor;
		}
	});
});
router.get("/buyer", function (req, res) {
	User.find(function (err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});
router.get("/seeallorders", function (req, res) {
	Orders.find(function (err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});
router.get("/buyerfood", function (req, res) {
	Food.find(function (err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});
router.get("/foodlist", function (req, res) {
	Food.find(function (err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});
const Vendor = require("../models/vendors");

// GET request 
// Getting all the users
router.get("/vendor", function (req, res) {
	Vendor.find(function (err, vendors) {
		if (err) {
			console.log(err);
		} else {
			res.json(vendors);
		}
	})
});
router.post("/getfood", function (req, res) {
	let email = req.body.email;
	Food.find({ email }, function (err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});
router.post("/findfav", function (req, res) {
	let buyeremail = req.body.email;
	Fav.find({ buyeremail }, function (err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});
router.post("/myorder", function (req, res) {
	const buyeremail = req.body.email;
	Orders.find({ buyeremail }, function (err, users) {
		if (err) {
			console.log(err);
		} else {
			// console.log(users);
			res.json(users);
		}
	})
});
router.post("/vendororder", function (req, res) {
	let vendoremail = req.body.email;
	Orders.find({ vendoremail }, function (err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});
router.post("/profile", function (req, res) {
	let email = req.body.email;
	Vendor.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {

			return res.status(404).json({
				error: "Email not found",
			});
		}
		else {
			//res.send("Email Found");
			res.json(user);
			//return user;
		}
	});
});
router.post("/savewallet", function (req, res) {
	let email = req.body.email;
	// let wallet=req.body.wallet;

	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {

			return res.status(404).json({
				error: "Email not found",
			});
		}
		else {
			//res.send("Email Found");
			// res.json(user);
			user.wallet = req.body.wallet
			user.save();
			//return user;
		}
	});
});
router.post("/walletadd", function (req, res) {
	let email = req.body.email;
	User.findOne({ email }).then(user => {
		// console.log("in walletadd");
		// Check if user email exists
		if (!user) {

			return res.status(404).json({
				error: "Email not found",
			});
		}
		else {
			//res.send("Email Found");
			// res.json(user);
			user.wallet = parseInt(req.body.wallet) + parseInt(user.wallet);
			// console.log(user.wallet);
			user.save();
			//return user;
		}
	});
});
router.post("/bprofile", function (req, res) {
	let email = req.body.email;
	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {

			return res.status(404).json({
				error: "Email not found",
			});
		}
		else {
			//res.send("Email Found");
			res.json(user);
			//return user;
		}
	});
});
router.post("/getwallet", function (req, res) {
	let email = req.body.email;
	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {

			return res.status(404).json({
				error: "Email not found",
			});
		}
		else {
			//res.send("Email Found");
			res.json(user);
			//return user;
		}
	});
});
router.post("/edit", function (req, res) {
	let email = req.body.email;
	// console.log("while ent")
	Vendor.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {

			return res.status(404).json({
				error: "Email not found",
			});
		}
		else {
			// console.log("in loop")
			user.managername = req.body.managername;
			user.shopname = req.body.shopname;
			user.email = req.body.email;
			//user.managername = req.body.managername;
			user.number = req.body.number;
			user.opening = req.body.opening;
			user.closing = req.body.closing;
			user.password = req.body.password;


			user.save()

			res.json(user);
			//return user;
		}
	});
});
router.post("/changestatus", function (req, res) {
	// let buyeremail = req.body.buyeremail;
	// let vendoremail = req.body.vendoremail;
	// let foodname = req.body.foodname;
	// let Addon = req.body.Addon;
	let id=req.body.id

	// console.log("while ent")
	Orders.findById( id ).then(user => {
		// Check if user email exists
		if (!user) {

			return res.status(404).json({
				error: "Email not found",
			});
		}
		else {
			// console.log("in loop")
			// user.managername = req.body.managername;
			// user.shopname = req.body.shopname;
			//user.email = req.body.email;
			// //user.managername = req.body.managername;
			// user.number = req.body.number;
			// user.opening = req.body.opening;
			// user.closing = req.body.closing;
			user.status = req.body.status;


			user.save()

			res.json(user);
			//return user;
		}
	});
});

router.post("/bedit", function (req, res) {
	let email = req.body.email;
	// console.log("while ent")
	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {

			return res.status(404).json({
				error: "Email not found",
			});
		}
		else {
			// console.log("in loop")
			user.name = req.body.name;
			// user.shopname = req.body.shopname;
			user.email = req.body.email;
			//user.managername = req.body.managername;
			user.number = req.body.number;
			user.age = req.body.age;
			user.batch = req.body.batch;
			user.password = req.body.password;


			user.save()

			res.json(user);
			//return user;
		}
	});
});

// 	// Food.find({email}).then(vendor => {
// 	// 	// Check if user email exists
// 	// 	if (!vendor) {
// 	// 		return res.status(404).json({
// 	// 			error: "Email not found",
// 	// 			// res.json(vendor);
// 	// 		});
// 	// 	}
// 	// 	else {
// 	// 		// res.send("Email Found");
// 	// 		res.json(vendor);
// 	// 	}
// 	// 	//response.email=Vendor.email;
// 	// 	// res.json(vendor);
// 	// 	//return vendor;
// 	// 			}
// 	// 		});
// 	// 	}
// 	// })
// });
// Food.find({ foodname },{email}, function (err1, o) {
// 	if (err1) {
// 		console.log(err1);
// 	}
// 	else {
// 		// if (o.length != 0) {
// 		// 	res.send("1");
// 		// }
// 		// else {
// 		// 	food.save()
// 		// 		.then(food => {
// 		// 			res.status(200).json({ food: "added" });
// 		// 		})
// 		// 		.catch(err1 => {
// 		// 			res.status(400).send(err1);
// 		// 		});
// 		// }
// 		res.json(o);
// 	}
// });
// });




router.post("/food", (req, res) => {
	let food = new Food(req.body);
	let email = req.body.email;
	let foodname = req.body.foodname;
	//console.log("IN SIDE 1");
	// let price=req.body.price;
	if (!email || !foodname) {
		// console.log("IN SIDE 2");
		res.send("0");
	}
	else {
		//console.log("IN SIDE 3");
		Food.find({ email }, function (err, foo) {
			if (err) {
				console.log(err);
			}
			else {
				if (foo.length == 0) {
					food.save()
						.then(food => {
							res.status(200).json(food);
						})
						.catch(err => {
							res.status(400).send(err);
						});
				}
				else {
					Food.find({ foodname }, function (err1, o) {
						if (err1) {
							console.log(err1);
						}
						else {
							if (o.length != 0) {
								res.send("1");
							}
							else {
								food.save()
									.then(foo => {
										// console.log("IN SIDE 4");
										res.status(200).json({ food: "added" });
									})
									.catch(err1 => {
										res.status(400).send(err1);
									});

							}
						}
					});

				}
			}

		});
	}



});
// router.post("/food", (req, res) => {
// 	let food = new Food(req.body);
// 	let email = req.body.email;
// 	let foodname = req.body.foodname;
// 	// let price=req.body.price;
// 	if (!email || !foodname) {
// 		res.send("0");
// 	}
// 	else {
// 		Food.find({ email }, function (err, foo) {
// 			if (err) {
// 				console.log(err);
// 			}
// 			else {
// 				if (foo.length == 0) {
// 					food.save()
// 						.then(food => {
// 							res.status(200).json(food);
// 						})
// 						.catch(err => {
// 							res.status(400).send(err);
// 						});
// 				}
// 				else {
// 					// Food.findOne({ email, foodname }).then(user => {
// 					// 	// Check if user email exists
// 					// 	if (!user) {
// 					// 		food.save()
// 					// 			.then(foo => {
// 					// 				res.status(200).json({ food: "added" });
// 					// 			})
// 					// 			.catch(err1 => {
// 					// 				res.status(400).send(err1);
// 					// 			});
// 					// 	}
// 					// 	else {
// 					// 		res.send("1");
// 					// 		//response.email=Vendor.email;
// 					// 		//res.json(respo);
// 					// 		//return vendor;
// 					// 	}
// 					// });
// 					Food.find({ foodname }, function (err1, o) {
// 						if (err1) {
// 							console.log(err1);
// 						}
// 						else {
// 							if (o.length != 0) {
// 								res.send("1");
// 							}
// 							else {
// 								food.save()
// 									.then(foo => {
// 										res.status(200).json({ food: "added" });
// 									})
// 									.catch(err1 => {
// 										res.status(400).send(err1);
// 									});
// 							}
// 						}
// 					});

// 				}
// 			}

// 		});
// 	}



// });


// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
// router.post("/register", (req, res) => {
//     const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         date: req.body.date,
//         age: req.body.age
//     });

//     newUser.save()
//         .then(user => {
//             res.status(200).json(user);
//         })
//         .catch(err => {
//             res.status(400).send(err);
//         });
// });

// POST request 
// Login
router.post("/login/vendor", (req, res) => {
	// let ved = new Vendor(req.body);
	let email = req.body.email;
	let password = req.body.password;
	// let respo = {
	// 	email: ""
	// }
	// respo.email = req.body.email;

	//Find user by email
	// User.findOne({ email }).then(user => {
	// 	// Check if user email exists
	// 	if (!user) {
	// 		return res.status(404).json({
	// 			error: "Email not found",
	// 		});
	//     }
	//     else{
	//         res.send("Email Found");
	//         return user;
	//     }
	// });
	if (!email || !password) {
		res.send("3");
	}
	else {
		Vendor.findOne({ email, password }).then(vendor => {
			// Check if user email exists
			if (!vendor) {
				// });
				User.findOne({ email, password }).then(user => {
					// Check if user email exists
					if (!user) {
						res.send("0")
					}
					else {
						res.send("1");
						//response.email=Vendor.email;
						//res.json(respo);
						//return vendor;
					}
				});
			}
			else {
				res.send("2");
				//response.email=Vendor.email;
				//res.json(respo);
				//return vendor;
			}
		});
	}
});


router.post("/vendoradd", (req, res) => {
	let food = new Food(req.body);
	let email = req.body.email;
	let foodname = req.body.foodname;
	let Addon = req.body.Addon;

	if (!email || !foodname || !Addon) {
		res.send("0")
	}
	else {
		Food.findOne({ email, foodname, Addon }).then(vendor => {
			// Check if user email exists
			if (!vendor) {
				// res.send("1");
				food.save()
					.then(foo => {
						// console.log("IN SIDE 4");
						res.status(200).json({ food: "added" });
					})
					.catch(err1 => {
						res.status(400).send(err1);
					});

			}
			else {
				res.send("2");

			}
		});
	}
});
router.post("/deletefood", (req, res) => {

	let id = req.body.id;


	Food.findByIdAndDelete(id, function (err, hhh) {
		if (err) {
			console.log(err);
		}
		else {
			res.send("4");
		}
	});

});
router.post("/editss", (req, res) => {

	let id = req.body.id;


	Food.findById( id ).then(user => {
		// Check if user email exists
		if (!user) {

			return res.status(404).json({
				error: "Email not found",
			});
		}
		else {
			// console.log("in loop")
			// user.managername = req.body.managername;
			// user.shopname = req.body.shopname;
			//user.email = req.body.email;
			// //user.managername = req.body.managername;
			// user.number = req.body.number;
			// user.opening = req.body.opening;
			// user.closing = req.body.closing;
			user.foodname = req.body.foodname;
			user.price = req.body.price;
			user.Addon = req.body.Addon;
			user.varity = req.body.varity;
			user.quantitythere = req.body.quantitythere;


			user.save()

			res.send("0");
			//return user;
		}
	});
});


module.exports = router;

