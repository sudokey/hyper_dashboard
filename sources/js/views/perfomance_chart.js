(function () {
  'use strict';

  window.app.PerfomanceChartView = Backbone.View.extend({
    initialize: function (options) {
      this.impressionsColors = options.impressionsColors || ['rgba(38,183,254,1)', 'rgba(19,202,102,0)'];
      this.adRevenueColors = options.adRevenueColors || ['rgba(255,120,73,1)', 'rgba(255,200,44,0)'];
      this.render();
    },

    render: function () {
      var ctx = this.el.getContext('2d');

      var impressionsGradient = ctx.createLinearGradient(0, 0, 0, 300);
      impressionsGradient.addColorStop(0, this.impressionsColors[0]);
      impressionsGradient.addColorStop(1, this.impressionsColors[1]);

      var adRevenueGradient = ctx.createLinearGradient(0, 0, 0, 300);
      adRevenueGradient.addColorStop(0, this.adRevenueColors[0]);
      adRevenueGradient.addColorStop(1, this.adRevenueColors[1]);

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