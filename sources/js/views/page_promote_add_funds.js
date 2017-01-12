(function () {
  'use strict';

  var app = window.app;

  app.PromoteAddFundsPageView = app.PageView.extend({
    events: {
      'click .js-show-payment-method': 'showPaymentMethod'
    },

    render: function () {
      app.PageView.prototype.render.call(this, arguments);

      this.paymentMethodPopup = new app.Popup({
        el: '.js-payment-method-popup',
        page: this
      });
    },

    showPaymentMethod: function () {
      this.paymentMethodPopup.show();
    }
  });
})();