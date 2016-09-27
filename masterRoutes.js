const languageRoutes = require( "./features/language/languageRoutes" );
const editorRoutes = require( "./features/editors/editorRoutes" );

module.exports = app => {
	languageRoutes( app );
	editorRoutes( app );
};
