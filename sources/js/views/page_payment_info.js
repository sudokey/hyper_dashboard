$(function () {
  'use strict';

  var app = window.app;

  app.PaymentDetailsPageView = app.PageView.extend({
    events: {
      'change .js-payment-method': 'changePaymentMethod'
    },

    render: function () {
      app.PageView.prototype.render.call(this, arguments);
    },

    changePaymentMethod: function (e) {
      this.$('.js-fields').hide();
      this.$('[data-fields-name=' + e.currentTarget.value + ']').show();
    }
  });
});