var express = require("express");
var router = express.Router();
var hamburger = require("../models/hamburger.js");


router.get("/", function(req, res){
	hamburger.all(function(hamburger_data){
		console.log(hamburger_data);
		res.render("index", {hamburger_data});
	})
})

router.put("/hamburgers/update", function(req, res){
	hamburger.update(req.body.hamburger_id, function(result){
		console.log(result);
		res.redirect("/");
	});
});

router.post("/hamburgers/create", function(req,res){
	hamburger.create(req.body.hamburger_name, function(result){
		res.redirect("/");
	})
})

module.exports = router;