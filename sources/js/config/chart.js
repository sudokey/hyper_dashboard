$(function () {
  'use strict';

  Chart.defaults.global.defaultFontColor = '#3c4857';
  Chart.defaults.global.defaultFontFamily = 'OpenSans, sans-serif';
  Chart.defaults.global.defaultFontSize = 13;

  Chart.defaults.global.maintainAspectRatio = false;

  Chart.defaults.global.elements.point.pointStyle = 'circle';
  Chart.defaults.global.elements.point.borderWidth = 1;
  Chart.defaults.global.elements.point.borderColor = '#fff';
  Chart.defaults.global.elements.point.radius = 5;
  Chart.defaults.global.elements.line.borderWidth = 1;
  Chart.defaults.global.elements.line.tension = 0;

  Chart.defaults.global.tooltips.intersect = false;
});