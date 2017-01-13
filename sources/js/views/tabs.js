$(function () {
  'use strict';

  window.app.TabsView = Backbone.View.extend({
    events: {
      'click .js-tab': 'toggle'
    },

    toggle: function (e) {
      this.$('.js-tab').removeClass('tabs__item_active');
      $(e.currentTarget).addClass('tabs__item_active');
    }
  });
});