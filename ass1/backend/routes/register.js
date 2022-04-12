var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");

router.post("/buyers", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        age: req.body.age,
        batch: req.body.batch,
        password: req.body.password,
        wallet:req.body.wallet
    });
    // console.log(newUser);
    if (!req.body.name || !req.body.email || !req.body.number || !req.body.age || !req.body.batch || !req.body.password ||!req.body.wallet) {
        res.send("1");
        console.log("no details");
    }
    else if (isNaN(req.body.wallet)|| isNaN(req.body.number) || isNaN(req.body.age )) {
        res.send("2");
        console.log("no proper details");
    }
    else {

        User.findOne({ email: req.body.email }).then(vendor => {
            // Check if user email exists
            if (!vendor) {

                newUser.save()
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
    }
});
const Vendor = require("../models/vendors");

router.post("/vendors", (req, res) => {
    const newVendor = new Vendor({
        managername: req.body.managername,
        shopname: req.body.shopname,
        email: req.body.email,
        number: req.body.number,
        opening: req.body.opening,
        closing: req.body.closing,
        password: req.body.password
    });
    if (!req.body.managername || !req.body.email || !req.body.number || !req.body.shopname ||!req.body.closing|| !req.body.opening || !req.body.password) {
        res.send("3");
        console.log("no details");
    }
    else if (isNaN(req.body.number) || isNaN(req.body.opening) ||isNaN(req.body.closing)) {
        res.send("4");
        console.log("no proper details");
    }
    else {
        Vendor.findOne({ email: req.body.email }).then(vendor => {
            // Check if user email exists
            if (!vendor) {

                Vendor.findOne({ shopname: req.body.shopname }).then(shop => {
                    // Check if user email exists
                    if (!shop) {

                        newVendor.save()
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

                // newUser.save()
                // .then(user => {
                //     res.status(200).json(user);
                // })
                // .catch(err => {
                //     res.status(400).send(err);
                // });
                // return res.status(404).json({
                //     error: "Email not found",
                // });
            }
            else {
                res.send("1");
                //response.email=Vendor.email;
                //res.json(respo);
                //return vendor;
            }
        });
    }


});

module.exports = router;
