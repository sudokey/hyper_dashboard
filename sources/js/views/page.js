(function () {
  'use strict';

  window.app.PageView = Backbone.View.extend({
    el: '.js-page',

    initialize: function () {
      this.pageYOffset = window.pageYOffset;
      this.blocked = false;
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

      $('.js-stop-propagation').on('click', function (e) {
        e.stopPropagation();
      });

      new Clipboard('.js-copy');
    },

    block: function () {
      if (!this.blocked) {
        this.pageYOffset = window.pageYOffset;

        this.$el
          .css('top', -this.pageYOffset + 'px')
          .addClass('page_blocked');

        this.blocked = true;
      }
    },

    unblock: function () {
      if (this.blocked) {
        this.$el
          .css('top', 'auto')
          .removeClass('page_blocked');

        window.scrollTo(0, this.pageYOffset);
        this.blocked = false;
      }
    }
  });
})();