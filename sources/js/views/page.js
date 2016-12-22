(function () {
  'use strict';

  window.app.PageView = Backbone.View.extend({
    el: '.js-page',

    initialize: function () {
      this.render();
    },

    render: function () {
      this.popoverViews = this.$('.js-popover').map(function (i, el) {
        return new window.app.PopoverView({ el: el });
      });

      this.collapsedViews = this.$('.js-collapsed').map(function (i, el) {
        return new window.app.CollapsedView({ el: el });
      });

      this.tabsViews = this.$('.js-tabs').map(function (i, el) {
        return new window.app.TabsView({ el: el });
      });

      this.selectViews = this.$('.js-select').map(function (i, el) {
        return new window.app.SelectView({ el: el });
      });
    }
  });
})();