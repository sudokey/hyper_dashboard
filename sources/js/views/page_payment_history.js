$(function () {
  'use strict';

  var app = window.app;

  app.PaymentHistoryPageView = app.PageView.extend({
    render: function () {
      app.PageView.prototype.render.call(this, arguments);
      this.$('.js-tablesorter').tablesorter();
    }
  });
});