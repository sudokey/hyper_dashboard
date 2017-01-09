(function () {
  'use strict';

  var app = window.app;

  app.PageAnalyticsView = app.PageView.extend({
    render: function () {
      app.PageView.prototype.render.call(this, arguments);
      this.groupSelectTagsView = new app.SelectTagsView({ el: '.js-select-tags' });
      this.$('.js-tablesorter').tablesorter();
      this.daterange = new app.DaterangeView({ el: '.js-datarange' });
    }
  });
})();