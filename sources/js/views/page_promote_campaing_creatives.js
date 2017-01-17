$(function () {
  'use strict';

  var app = window.app;

  app.PromoteCampaingCreativesPageView = app.PageView.extend({
    events: {
      'change .js-ad-type': function (e) {
        if (e.target.value) {
          this.renderForm(e.target.value);
        }
      }
    },

    render: function () {
      app.PageView.prototype.render.call(this, arguments);
      this.renderForm(this.$('.js-ad-type').val());
    },

    renderForm: function (formType) {
      if (formType) {
        this.$('.js-form').hide();
        this.$('.js-form-' + formType).show();
      }
    }
  });
});