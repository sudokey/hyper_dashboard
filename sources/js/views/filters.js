$(function () {
  'use strict';

  window.app.FiltersView = Backbone.View.extend({
    events: {
      'click .js-filters-apply': 'renderSelectedCount'
    },

    initialize: function () {
      this.renderSelectedCount();
    },

    renderSelectedCount: function () {
      var count = 0;

      this.$('.js-filter-select').each(function (i, el) {
        count = count + $(el).val().length;
      });

      this.$('.js-filters-count').html(count);
    }
  });
});