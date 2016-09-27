const mongoose = require( "mongoose" );

const Editor = new mongoose.Schema( {
	name: { type: String, trim: true, unique: true, required: true }
	, free: { type: Boolean, required: true }
	, rating: { type: Number, required: true, min: 0, max: 5 }
	, autocomplete: { type: Boolean, default: true }
	, packages: [ { type: String } ]
} );

module.exports = mongoose.model( "Editor", Editor );
/*

create and export an editor model
free
name
rating
autocomplete
packages - array

 */