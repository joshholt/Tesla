// ==========================================================================
// Project:   Tesla.Article
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tesla Markdown*/
sc_require('mixins/markdown');
/** @class

  The model representation of an Article

  @extends SC.Record
  @version 0.1
*/
Tesla.Article = SC.Record.extend(Tesla.Markdown,
/** @scope Tesla.Article.prototype */ {
  
  author    : SC.Record.attr('Tesla.Author'),
  title     : SC.Record.attr(String),
  bodySrc   : SC.Record.attr(String),
  createdAt : SC.Record.attr(Date),
  updatedAt : SC.Record.attr(Date),
  
  body: function() {
    return this.converter.makeHtml(this.get('bodySrc'));
  }.property('bodySrc').cacheable()

});
