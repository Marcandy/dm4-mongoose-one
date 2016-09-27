const editorCtrl = require( "./editorCtrl" );

module.exports = app => {
	app.route( "/api/editors" )
		.post( editorCtrl.postEditor )
		.get( editorCtrl.getEditors );

	app.route( "/api/editors/by-rating" )
		.get( editorCtrl.getEditorsByUserInput );

	app.route( "/api/editors/:id" )
		.get( editorCtrl.getOneEditor )
		.put( editorCtrl.updateEditor );

};
