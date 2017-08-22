(function () {
  "use strict";
  window.FourthWall = window.FourthWall || {};

  FourthWall.Commits = Backbone.Model.extend({

    initialize: function () {
      this.on('change:ref', function () {
        this.fetch();
      }, this);
    },

    url: function () {
      return [
        this.get('baseUrl'),
        this.get('userName'),
        this.get('repo'),
        'pulls',
        this.get('pullId'),
        'commits',
      ].join('/');
    },

    fetch: function() {
      return FourthWall.overrideFetch.call(this, this.get('baseUrl'));;
    },

    parse: function (response) {
      var committers = response.length

        return {committers} ;
      }
  });
}());
