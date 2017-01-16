$(function () {
  'use strict';

  var app = window.app;

  var CustomeDeviceForm = Backbone.View.extend({
    events: {
      'click .js-add-field': 'addField',
      'click .js-remove-field': 'removeField'
    },

    initialize: function () {
      this.addField();
    },

    addField: function () {
      var $tempalte = $(document.getElementById('custome-device-template').innerHTML);
      this.$('.js-fields').append($tempalte);

      $tempalte.find('.js-select').each(function (i, el) {
        $(el).select2({
          minimumResultsForSearch: Infinity,
          placeholder: $(el).attr('placeholder')
        });
      });
    },

    removeField: function (e) {
      $(e.target).closest('.js-field').remove();
    }
  });

  app.PromoteCampaingTargetingPageView =  app.PageView.extend({
    render: function () {
      app.PageView.prototype.render.call(this, arguments);

      this.customeDeviceForms = this.$('.js-custome-device-form').map(function (i, el) {
        return new CustomeDeviceForm({ el: el });
      });
    }
  });
});