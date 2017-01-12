(function () {
  'use strict';

  var app = window.app;

  app.PlacementPageView = app.PageView.extend({
    events: {
      'change .js-placement-select': 'renderPlacement'
    },

    render: function () {
      app.PageView.prototype.render.call(this, arguments);
      this.selectedPlacementId = this.$('.js-placement-select').val();
      this.renderPlacement();
    },

    renderPlacement: function () {
      var $placementSelect = this.$('.js-placement-select');
      var selectedPlacementId = $placementSelect.val();

      if (selectedPlacementId) {
        var currentPlacementCssClass = 'placement__type_' + selectedPlacementId;
        var lastPlacementCssClass = 'placement__type_' + this.selectedPlacementId;
        var placementName = $placementSelect[0][$placementSelect[0].selectedIndex].innerHTML;

        this.$('.js-placement-type').removeClass(lastPlacementCssClass)
          .addClass(currentPlacementCssClass);
        this.$('.js-placement-name').text(placementName);

        if (selectedPlacementId == 'rewarded-video') {
          this.$('.js-rewarded-video-fields').show();
        } else {
          this.$('.js-rewarded-video-fields').hide();
        }
      }
    }
  });
})();