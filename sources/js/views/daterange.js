(function () {
  'use strict';

  window.app.DaterangeView = Backbone.View.extend({
    initialize: function () {
      this.render();
    },

    render: function () {
      var startDate = moment().subtract(29, 'days');
      var endDate = moment();
      var _this = this;

      var cb = function (startDate, endDate) {
        _this.$el.html(startDate.format('DD.MM.YYYY') + ' — ' + endDate.format('DD.MM.YYYY'));
      };

      this.$el.daterangepicker({
        opens: 'left',
        startDate: startDate,
        endDate: endDate,
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
      }, cb);

      cb(startDate, endDate);
    }
  });
})();