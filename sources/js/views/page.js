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
    }
  });
})();