// TODO:Сброс в default

(function () {
  'use strict';

  $.fn.select2.amd.require([
    'select2/utils',
    'select2/dropdown',
    'select2/dropdown/attachBody',
  ], function (Utils, DropdownAdapter, AttachBody) {
    function DropdownTags () { }

    DropdownTags.prototype.render = function (decorated) {
      var $rendered = decorated.call(this);
      var $setToDefaultEl = $([
        '<div class="set-default">',
          '<span class="icon icon_set-default"></span>',
          '<span>Set to Default</span>',
        '</div>'
      ].join(''));
      var _this = this;

      $setToDefaultEl.on('click', function (e) {
        e.stopPropagation();
        _this.$element.val('').trigger('change');
        _this.trigger('close');
      });

      $rendered.find('.select2-dropdown').append($setToDefaultEl);

      return $rendered;
    };

    var dropdownTagsAdapter = Utils.Decorate(
      Utils.Decorate(DropdownAdapter, AttachBody),
      DropdownTags
    );

    window.app.dropdownTagsAdapter = dropdownTagsAdapter;
  });
})();