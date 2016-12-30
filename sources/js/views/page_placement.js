(function () {
  'use strict';

  var app = window.app;

  app.PlacementPageView = app.PageView.extend({
    events: {
      'change .js-placement-select': 'changePlacement'
    },

    render: function () {
      app.PageView.prototype.render.call(this, arguments);
      this.selectedPlacement = this.$('.js-placement-select').val();
    },

    changePlacement: function (e) {
      var placementId = e.target.value;
      var placementCssClass = 'placement__type_' + placementId;
      var placementName = e.target[e.target.selectedIndex].innerHTML;

      this.$('.js-placement-type')
        .removeClass(this.selectedPlacement)
        .addClass(placementCssClass);
      this.$('.js-placement-name').text(placementName);
      this.selectedPlacement = placementCssClass;
    }
  });
})();