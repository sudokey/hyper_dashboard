(function () {
  'use strict';

  var app = window.app;

  app.PromoteDashboardPageView = app.PageView.extend({
    render: function () {
      app.PageView.prototype.render.call(this, arguments);

      this.perfomanceChartView = new app.PerfomanceChartView({
        el: '.js-perfomance-chart',
        impressionsColors: ['rgba(19,206,102,1)', 'rgba(19,206,102,0)']
      });
    }
  });
})();