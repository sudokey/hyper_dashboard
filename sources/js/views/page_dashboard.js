(function () {
  'use strict';

  var app = window.app;

  app.DashboardPageView = app.PageView.extend({
    render: function () {
      app.PageView.prototype.render.call(this, arguments);

      this.perfomanceDaterangeView = new app.DaterangeView({ el: '.js-perfomance-date-range' });
      this.perfomanceTabsView = new app.TabsView({ el: '.js-perfomance-tabs' });
      this.perfomanceChartView = new app.PerfomanceChartView({ el: '.js-perfomance-chart' });
    }
  });
})();