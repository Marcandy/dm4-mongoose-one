const express = require( "express" );
const { json } = require( "body-parser" );
const mongoose = require( "mongoose" );
const app = express();
const port = 4000;
const mongoUri = "mongodb://localhost:27017/languages";

app.use( json() );

mongoose.connect( mongoUri );
mongoose.connection.once( "open", () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );

require( "./masterRoutes" )( app );

app.listen( port, () => console.log( `Express is listening on ${ port }` ) );
