// ==========================================================================
// Project:   Tesla
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tesla */

Tesla.main = function main() {
  Tesla.initStatechart();
  Tesla.getPath('mainPage.mainPane').append();
  // SC.RootResponder.responder.set('defaultResponder', Tesla);
  var articles = Tesla.store.find(Tesla.Article);
  Tesla.articlesController.set('content',articles);
};

function main() { Tesla.main(); }
