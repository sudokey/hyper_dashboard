$(function () {
  'use strict';

  window.app.GetStartedView = Backbone.View.extend({
    events: {
      'change .js-getstarted-checkbox': 'render',
      'click .js-getstarted-hide': 'hide'
    },

    initialize: function () {
      this.render();
    },

    render: function () {
      var progress = this.$('.js-getstarted-checkbox:checked').length;
      this.$('.js-getstarted-progress').html(progress);
      this.$('.js-getstarted-indicator').width((progress * 100 / 4) + '%');
    },

    hide: function () {
      this.$el.hide();
    }
  });
});