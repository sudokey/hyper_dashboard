(function () {
  'use strict';

  var app = window.app;

  app.DashboardPageView = app.PageView.extend({
    render: function () {
      app.PageView.prototype.render.call(this, arguments);
      this.daterange = new app.DaterangeView({ el: '.js-datarange' });
      this.perfomanceChartView = new app.PerfomanceChartView({ el: '.js-perfomance-chart' });
    }
  });
})();