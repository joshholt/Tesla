// ==========================================================================
// Project:   Tesla.ArticleView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tesla */

/** @class

  The Article View representes one article.

  @extends SC.View
*/
Tesla.ArticleView = SC.View.extend(SC.ContentDisplay,
/** @scope Tesla.ArticleView.prototype */ {
  
  useStaticLayout: YES,
  
  render: function(ctx, ft) {
    var content = this.get('content');
    
    if (content) {
      this.renderHeader(ctx, content.get('title'));
      this.renderArticleContent(ctx, content.get('body'));
      this.renderAuthorBlock(ctx, content.getPath('author.fullName'));
      this.renderFooter(ctx, content.get('createdAt'));
    }
  },
  
  /** @private */
  renderAuthorBlock: function(ctx, text) {
    ctx = ctx.begin().addClass('authorBlock');
    ctx.begin('p').text(text).end();
    ctx = ctx.end();
  },
  
  renderHeader: function(ctx, text) {
    ctx = ctx.begin().addClass('header');
    ctx.begin('h1').text(text).end();
    ctx = ctx.end();    
  },
  
  renderFooter: function(ctx, text) {
    ctx = ctx.begin().addClass('footer');
    ctx.begin('p').text(text).end();
    ctx = ctx.end();
  },
  
  renderArticleContent: function(ctx, text) {
    ctx = ctx.begin().addClass('article');
    ctx.begin('p').push(text).end();
    ctx = ctx.end();
  }

});
