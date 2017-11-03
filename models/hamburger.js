var orm = require("../config/orm.js");

var hamburger = {
	all: function(cb){
		orm.all("hamburgers", function(res){
			cb(res);
		})
	},
	update: function(id,cb){
		orm.update("hamburgers",id,cb);
	},

	create: function(name,cb){
		orm.create("hamburgers", name, cb);
	}
}
module.exports = hamburger;