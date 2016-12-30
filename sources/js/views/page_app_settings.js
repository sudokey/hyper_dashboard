(function () {
  'use strict';

  var app = window.app;

  app.AppSettingsPageView = app.PageView.extend({
    events: {
      'click .js-remove-app': 'removeApp'
    },

    render: function () {
      var $blacklistSelect = this.$('.js-blacklist-select');

      app.PageView.prototype.render.call(this, arguments);
      this.removeAppPopup = new app.Popup({ el: '.js-remove-app-popup', page: this });

      $blacklistSelect.select2({
        tags: true,
        tokenSeparators: [',', ' '],
        placeholder: $blacklistSelect.attr('placeholder')
      });
    },

    removeApp: function () {
      this.removeAppPopup.show();
    }
  });
})();