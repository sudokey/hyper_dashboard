$(function () {
  'use strict';

  var app = window.app;

  app.AudienceRulesPageView = app.PageView.extend({
    events: {
      'click .js-show-rule-popup': 'showRulePopup'
    },

    render: function () {
      app.PageView.prototype.render.call(this, arguments);
      this.rulePopup = new app.Popup({ el: '.js-rule-popup', page: this });
    },

    showRulePopup: function () {
      this.rulePopup.show();
    }
  });
});
