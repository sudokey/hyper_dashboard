$(function () {
  'use strict';

  var app = window.app;

  app.PromoteCampaingGeneralPageView = app.PageView.extend({
    events: {
      'click .js-clear-end-date': 'clearEndDate',
      'click .js-add-specific-days': 'addSpecificDays',
      'click .js-remove-specific-days': 'removeSpecificDays',
      'click .js-show-draft-campaigns-popup': 'showDraftCampaignsPopup',
      'change .js-app-type': 'renderForm',
      'input .js-app-link': 'renderForm',
      'click .js-toggle-edit-app': 'toggleAppEditForm'
    },

    toggleAppEditForm: function () {
      var appType = this.$('.js-app-type:checked').val();
      var appLink = this.$('.js-app-link').val();

      if (appLink && appType) {
        this.$('.js-field-group-3').toggle();
        this.$('.js-field-group-1').toggle();
      }
    },

    renderForm: function () {
      var appType = this.$('.js-app-type:checked').val();
      var appLink = this.$('.js-app-link').val();

      if (appLink && appType) {
        this.$('.js-field-group-2').show();
      } else {
        this.$('.js-field-group-2').hide();
      }
    },

    render: function () {
      app.PageView.prototype.render.call(this, arguments);

      var $dateEnd = this.$('.js-date-end');

      this.draftCampaignsPopup = new app.Popup({
        el: '.js-draft-campaigns-popup',
        page: this
      });

      this.$('.js-date-start').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
      });

      $dateEnd.daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false
      });

      $dateEnd.on('apply.daterangepicker', function (e, picker) {
        $dateEnd.val(picker.startDate.format('MM/DD/YYYY'));
      });
    },

    clearEndDate: function () {
      this.$('.js-date-end').val('');
      this.$('.js-end-date-checkbox').prop('checked', false);
    },

    addSpecificDays: function () {
      var $specificDays = $(document.getElementById('specific-days-template').innerHTML);
      this.$('.js-specific-days').append($specificDays);

      $specificDays.find('.js-select').each(function (i, el) {
        $(el).select2({
          minimumResultsForSearch: Infinity,
          placeholder: $(el).attr('placeholder')
        });
      });
    },

    removeSpecificDays: function (e) {
      $(e.target).closest('.js-specific-day').remove();
    },

    showDraftCampaignsPopup: function () {
      this.draftCampaignsPopup.show();
    }
  });
});