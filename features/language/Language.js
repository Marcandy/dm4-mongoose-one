const mongoose = require( "mongoose" );

const Language = new mongoose.Schema( {
	name: { type: String, required: true, trim: true, unique: true }
	, typeSafe: { type: Boolean, required: true }
	, version: { type: Number, default: 1 }
	, companiesUsing: [ { type: String } ]
	, intComp: { type: String, enum: [ "interpreted", "compiled" ] }
} );

module.exports = mongoose.model( "Language", Language );
