(function () {
  'use strict';

  window.app.SelectView = Backbone.View.extend({
    initialize: function () {
      this.render();
    },

    render: function () {
      this.$el.select2({
        minimumResultsForSearch: Infinity,
        placeholder: this.$el.attr('placeholder')
      });
    }
  });
})();