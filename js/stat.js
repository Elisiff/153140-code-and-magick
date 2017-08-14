'use strict';

window.renderStatistics = function (ctx, names, times) {
  // тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  // облако
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  // текст
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  // найдем самый большой результат для расчета высоты гистограмм
  function getMaxResult() {
    var max = -1;

    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  }

  function buildHistogram() {
    var histogramHeight = 150;
    var columnWidth = 40;
    var columnIndentX = 50;
    var textIndentY = 3;
    var initialX = 140;
    var initialY = 100;
    var max = getMaxResult();
    var step = histogramHeight / max;

    // гистограмма
    for (var i = 0; i < times.length; i++) {

      // цвет столбиков
      ctx.fillStyle = names[i] === 'Вы' ?
        'rgba(255, 0, 0, 1)' :
        'rgba(0, 0, 255,' + (Math.random() + 0.1).toFixed(1) + ')';

      ctx.fillRect(initialX + (columnIndentX + columnWidth) * i,
          initialY + (max * step - times[i] * step), columnWidth, times[i] * step);
      ctx.fillStyle = '#000';

      // текст
      ctx.textBaseline = 'top';
      ctx.fillText(names[i], initialX + (columnIndentX + columnWidth) * i,
          initialY + histogramHeight + textIndentY);
      ctx.textBaseline = 'bottom';
      ctx.fillText(times[i].toFixed(0), initialX + (columnIndentX + columnWidth) * i,
          initialY - textIndentY);
    }
  }
  buildHistogram();
};
