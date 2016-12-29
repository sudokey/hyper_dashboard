(function () {
  'use strict';

  var app = window.app;

  app.SelectTagsView = Backbone.View.extend({
    events: {
      'click .js-tag': 'selectTag'
    },

    initialize: function () {
      this.selectTags = this.$('.js-selected-tags').text().split(', ');
    },

    selectTag: function (e) {
      var $tag = $(e.currentTarget);
      var tag = $tag.text();
      var index = this.selectTags.indexOf(tag);

      if (index > -1) {
        $tag.removeClass('tags__item_active');
        this.selectTags.splice(index, 1);
      } else {
        $tag.addClass('tags__item_active');
        this.selectTags.push(tag);
      }

      this.$('.js-selected-tags').text(this.selectTags.join(', '));
    }
  });
})();