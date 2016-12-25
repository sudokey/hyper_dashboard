(function () {
  'use strict';

  window.app.Popup = Backbone.View.extend({
    events: {
      'click .js-hide': 'hide'
    },

    initialize: function (options) {
      this.page = options.page;
      this.render();
    },

    show: function () {
      this.page.block();
      this.$el.addClass('popup_active');
    },

    hide: function () {
      this.page.unblock();
      this.$el.removeClass('popup_active');
    }
  });
})();