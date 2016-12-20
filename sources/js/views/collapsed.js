(function () {
  'use strict';

  window.app.CollapsedView = Backbone.View.extend({
    events: {
      'click .js-toggle': 'toggle'
    },

    toggle: function () {
      this.$el.toggleClass('active');
    }
  });
})();