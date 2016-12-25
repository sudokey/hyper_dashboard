(function () {
  'use strict';

  var app = window.app;

  app.AppSettingsPageView = app.PageView.extend({
    events: {
      'click .js-remove-app': 'removeApp'
    },

    render: function () {
      app.PageView.prototype.render.call(this, arguments);
      this.removeAppPopup = new app.Popup({ el: '.js-remove-app-popup', page: this });
    },

    removeApp: function () {
      this.removeAppPopup.show();
    }
  });
})();