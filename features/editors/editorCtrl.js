const Editor = require( "./Editor" );

module.exports = {
	postEditor( req, res ) {
		new Editor( req.body ).save( ( err, editor ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 201 ).json( editor );
		} );
	}

	, getEditors( req, res ) {
		Editor.find( {}, ( err, editors ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( editors );
		} );
	}

	, getOneEditor( req, res ) {
		Editor.findById( req.params.id, ( err, editor ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( editor );
		} );
	}

	, updateEditor( req, res ) {
		// Editor.findByIdAndUpdate( req.params.id, { $set: { req.body } }, ( err, editor ) )
		Editor.findByIdAndUpdate( req.params.id, req.body, ( err, editor ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			Editor.findById( req.params.id, ( err, updatedEditor ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}

				return res.status( 200 ).json( updatedEditor );
			} );

		} );
	}

	, getEditorsByUserInput( req, res ) {
		Editor
			.find()
			.where( "rating" ).gte( parseInt( req.query.rating ) )
			.where( "autocomplete" ).equals( true )
			.limit( 10 )
			.sort( "rating" )
			.exec()
			.then( editors => {
				return res.status( 200 ).json( editors );
			} )
			.catch( err => {
				return res.status( 500 ).json( err );
			} );
	}
};
