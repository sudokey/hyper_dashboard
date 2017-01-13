$(function () {
  'use strict';

  window.app.PopoverView = Backbone.View.extend({
    events: {
      'click .js-popover-toggle': 'toggle'
    },

    toggle: function () {
      var _this = this;
      var onDocumentClick = function (e) {
        if (_this.$el.has(e.target).length === 0) {
          hide();
        }
      };
      var hide = function () {
        _this.$el.removeClass('popover_active');
        $(document).off('click', onDocumentClick);
      };
      var show = function () {
        _this.$el.addClass('popover_active');
        $(document).on('click', onDocumentClick);
      };

      if (this.$el.hasClass('popover_active')) {
        hide();
      } else {
        show();
      }
    }
  });
});