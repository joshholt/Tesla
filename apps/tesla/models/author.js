// ==========================================================================
// Project:   Tesla.Author
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tesla */

/** @class

  Author Details

  @extends SC.Record
  @version 0.1
*/
Tesla.Author = SC.Record.extend(
/** @scope Tesla.Author.prototype */ {

  firstName   : SC.Record.attr(String),
  lastName    : SC.Record.attr(String),
  email       : SC.Record.attr(String),
  site        : SC.Record.attr(String),
  githubName  : SC.Record.attr(String),
  twitterName : SC.Record.attr(String),
  
  fullName: function() {
    return this.get('firstName') + " " + this.get('lastName');
  }.property('firstName','lastName').cacheable(),
  
  twitterURL: function() {
    return "http://twitter.com/%@".fmt(this.get('twitterName'));
  }.property('twitterName').cacheable(),
  
  githubURL: function() {
    return "https://github.com/%@".fmt(this.get('githubName'));
  }.property('githubName').cacheable()

});
