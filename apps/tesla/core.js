// ==========================================================================
// Project:   Tesla
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tesla Ki*/

/** @namespace

  The Begining definition of the Tesla Application
  
  @extends SC.Object
*/
Tesla = SC.Application.create(Ki.StatechartManager,
  /** @scope Tesla.prototype */ {

  NAMESPACE: 'Tesla',
  VERSION: '0.1.0',
  store: SC.Store.create().from(SC.Record.fixtures),
  
  rootState: Ki.State.design({
    initialSubstate: 'idle',
    
    idle: Ki.State.design({
      
      enterState: function() {
        this._scenes = Tesla.getPath('mainPage.mainPane.scenes');
        if (this._scenes) this._scenes.set('nowShowing','articleList');
      },
      
      exitState: function() { },
      
      showArticle: function() {
        this.gotoState('articleShowing');
      }
      
    }),
    
    articleShowing: Ki.State.design({
      enterState: function() {
        this._scenes = Tesla.getPath('mainPage.mainPane.scenes');
        if (this._scenes) this._scenes.set('nowShowing','currentArticle');
      },
      
      exitState: function() { },
      
      closeArticle: function() {
        this.gotoState('idle');
      }
    })
  })

});
