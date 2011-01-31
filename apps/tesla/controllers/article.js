// ==========================================================================
// Project:   Tesla.articleController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tesla */

/** @class

  Holds a ref to the currently selected Article

  @extends SC.ObjectController
*/
Tesla.articleController = SC.ObjectController.create(
/** @scope Tesla.articleController.prototype */ {

  contentBinding: SC.binding('Tesla.articlesController.selection').single()

});
