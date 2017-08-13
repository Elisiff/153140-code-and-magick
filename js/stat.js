window.renderStatistics = function (ctx, names, times) {
  //тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  //облако
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  //текст
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  //найдем самый большой результат для расчета высоты гистограмм
  var max = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  //переменные
  var histogramHeight = 150;
  var columnWidth = 40;
  var columnIndentX = 50;
  var textIndentY = 3;
  var initialX = 120;
  var initialY = 100;

  //гистограмма
  for(var i = 0; i < times.length; i++) {

    // for(var i = 0; i < names.length; i++) {
    //   if (names[i] = 'Вы') {
    //     ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    //   } else {
    //     ctx.fillStyle = blue;
    //   }
    // }

    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(initialX + columnIndentX * i, initialY + (max * histogramHeight/max - times[i] * histogramHeight/max), columnWidth, times[i] * histogramHeight/max);
    ctx.fillStyle = '#000';

    //текст
    ctx.textBaseline = 'top';
    ctx.fillText(names[i], initialX + columnIndentX * i, initialY + histogramHeight + textIndentY);
    ctx.textBaseline = 'bottom';
    ctx.fillText(times[i].toFixed(0), initialX + columnIndentX * i, initialY - textIndentY);
  }
};