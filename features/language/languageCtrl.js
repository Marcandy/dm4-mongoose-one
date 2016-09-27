const Language = require( "./Language" );

module.exports = {
	postLanguage( req, res ) {
		new Language( req.body ).save( ( err, language ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 201 ).json( language );
		} );
	}

	, getLanguages( req, res ) {
		Language.find( {}, ( err, languages ) => {
			if ( err ) {
				return  res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( languages );
		} );
	}

	, getLanguage( req, res ) {
		Language.findById( req.params.id, ( err, language ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( language );
		} );
	}
};
