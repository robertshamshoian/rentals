var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


// CL Scrape schema 
var NewclscrapesSchema   = new Schema({
	body: String,
	type: String,
	title: String,
	price: String,
	region: String,
	location: String,
	hasPic: String,
	date: String,
	id: String

});

module.exports = mongoose.model('newclscrapes', NewclscrapesSchema);
