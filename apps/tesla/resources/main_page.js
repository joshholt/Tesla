// ==========================================================================
// Project:   Tesla - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tesla */

Tesla.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    defaultResponder: 'Tesla',
    childViews: ['scenes'],
    
    scenes: SC.SceneView.design({
      layout: { top: 0, right: 0, bottom: 0, left: 0 },
      scenes: 'articleList currentArticle'.w(),
      nowShowing: 'currentArticle',
      transitionDuration: 200
    })
  }),
  
  articleList: SC.ScrollView.design({
    layout: { top: 0, right: 0, bottom: 0, left: 0 },
    contentView: Tesla.ArticleList.design({
      contentBinding: 'Tesla.articlesController.arrangedObjects',
      selectionBinding: 'Tesla.articlesController.selection',
      contentValueKey: 'title',
      action: 'showArticle',
      actOnSelect: YES
    })
  }),
  
  currentArticle: SC.View.design({
    childViews: 'toolbar article'.w(),
    
    toolbar: SC.ToolbarView.design({
      childViews: ['back'],
      
      back: SC.ButtonView.design({
        layout: { centerX: 0, left: 10, height: 24, width: 100 },
        title: "Back".loc(),
        action: 'closeArticle'
      })
    }),
    
    article: Tesla.ArticleView.extend({
      contentBinding: 'Tesla.articleController'
    })
    
  })

});
