$(function () {
  'use strict';

  window.app.CollapsedView = Backbone.View.extend({
    events: {
      'click .js-toggle': 'toggle'
    },

    toggle: function (e) {
      e.stopPropagation();
      this.$el.toggleClass('active');
    }
  });
});