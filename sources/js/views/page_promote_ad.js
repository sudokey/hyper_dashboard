$(function() {
  'use strict';

  var app = window.app;

  app.PagePromoteAdView = app.PageView.extend({
    events: {
      'change .js-ad-type': function () {
        this.renderExtraFields();
        this.renderAdType();
      },
      'change .js-creative-type': 'renderExtraFields',
      'click .js-show-creative-popup': 'showCreativePopup',
      'click .js-select-creative': 'selectCreative'
    },

    render: function () {
      app.PageView.prototype.render.call(this, arguments);
      this.adType = this.$('.js-ad-type').val();
      this.creativePopup = new app.Popup({ el: '.js-creative-popup', page: this });
      this.renderExtraFields();
    },

    renderExtraFields: function () {
      var adType = this.$('.js-ad-type').val();
      var creativeType = this.$('.js-creative-type').val();
      var $extraFields = this.$('.js-extra-fields');

      if (adType && creativeType) {
        $extraFields.show();
      } else {
        $extraFields.hide();
      }
    },

    renderAdType: function () {
      var adType = this.$('.js-ad-type').val();
      var currentAdTypePlacementCssClass = 'placement__type_' + adType;
      var lastAdTypePlacementCssClass = 'placement__type_' + this.adType;

      this.$('.js-ad-placement').removeClass(lastAdTypePlacementCssClass)
        .addClass(currentAdTypePlacementCssClass);
      this.adType = currentAdTypePlacementCssClass;
    },

    showCreativePopup: function () {
      this.creativePopup.show();
    },

    selectCreative: function () {
      this.creativePopup.hide();
    }
  });
});