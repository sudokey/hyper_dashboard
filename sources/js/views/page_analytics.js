(function () {
  'use strict';

  var app = window.app;

  app.PageAnalyticsView = app.PageView.extend({
    render: function () {
      app.PageView.prototype.render.call(this, arguments);

      this.dateRangeView = new app.DaterangeView({ el: '.js-date-range' });
      this.tabsRangeView = new app.TabsView({ el: '.js-tabs-range' });
      this.groupSelectTagsView = new app.SelectTagsView({ el: '.js-select-tags' });
      this.tableSettingsPopoverView = new app.PopoverView({ el: '.js-table-settings-popover' });
      this.$('.js-tablesorter').tablesorter();
    }
  });
})();