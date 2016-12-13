(function () {
  'use strict';

  window.app.PerfomanceChartView = Backbone.View.extend({
    initialize: function () {
      this.render();
    },

    render: function () {
      var ctx = this.el.getContext('2d');

      var impressionsGradient = ctx.createLinearGradient(0, 0, 0, 300);
      impressionsGradient.addColorStop(0, 'rgba(38,183,254,1)');
      impressionsGradient.addColorStop(1, 'rgba(19,202,102,0)');

      var adRevenueGradient = ctx.createLinearGradient(0, 0, 0, 300);
      adRevenueGradient.addColorStop(0, 'rgba(255,120,73,1)');
      adRevenueGradient.addColorStop(1, 'rgba(255,200,44,0)');

      var data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          backgroundColor: impressionsGradient,
          label: 'Impressions',
          data: [40, 55, 50, 53, 48, 42, 50]
        }, {
          backgroundColor: adRevenueGradient,
          label: 'Ad Revenue',
          data: [45, 50, 45, 52, 55, 43, 45]
        }]
      };

      var options = {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              min: 40,
              max: 60,
              stepSize: 5
            }
          }]
        }
      };

      this.chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
      });
    }
  });
})();