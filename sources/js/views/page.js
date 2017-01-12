(function () {
  'use strict';

  window.app.PageView = Backbone.View.extend({
    el: 'body',

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

      this.tablesorters = this.$('.js-tablesorter').map(function (i, el) {
        return $(el).tablesorter();
      });

      this.selects = this.$('.js-select').map(function (i, el) {
        return $(el).select2({
          minimumResultsForSearch: Infinity,
          placeholder: $(el).attr('placeholder')
        });
      });

      this.filterSelects = this.$('.js-filter-select').map(function (i, el) {
        return $(el).select2({
          placeholder: $(el).attr('placeholder')
        });
      });

      this.daterangeViews = this.$('.js-daterange').map(function (i, el) {
        return new app.DaterangeView({ el: el });
      });

      $('.js-stop-propagation').on('click', function (e) {
        e.stopPropagation();
      });

      $(document).on('click', '.select2-selection__choice__remove', function (e) {
        e.stopPropagation();
      });

      new Clipboard('.js-copy');
    },

    block: function () {
      if (!this.blocked) {
        this.pageYOffset = window.pageYOffset;

        this.$('.js-page')
          .css('top', -this.pageYOffset + 'px')
          .addClass('page_blocked');

        this.blocked = true;
      }
    },

    unblock: function () {
      if (this.blocked) {
        this.$('.js-page')
          .css('top', 'auto')
          .removeClass('page_blocked');

        window.scrollTo(0, this.pageYOffset);
        this.blocked = false;
      }
    }
  });
})();