(function () {
  'use strict';

  window.app.DaterangeView = window.app.PopoverView.extend({
    initialize: function () {
      this.render();
    },

    render: function () {
      rome(this.$('.js-date-start')[0], {
        time: false,
        monthFormat: 'MMM YYYY',
        dateValidator: rome.val.beforeEq(this.$('.js-date-end')[0])
      });

      rome(this.$('.js-date-end')[0], {
        time: false,
        monthFormat: 'MMM YYYY',
        dateValidator: rome.val.afterEq(this.$('.js-date-start')[0]),
        max: new Date()
      });
    }
  });
})();