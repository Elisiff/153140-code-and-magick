'use strict';

(function () {
  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');

  function generateNumber(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

  function getRandomName() {
    var names = [
      'Иван', 'Хуан Себастьян',
      'Мария', 'Кристоф',
      'Виктор', 'Юлия',
      'Люпита', 'Вашингтон'
    ];

    var surnames = [
      'да Марья', 'Верон',
      'Мирабелла', 'Вальц',
      'Онопко', 'Топольницкая',
      'Нионго', 'Ирвинг'
    ];

    var nameIndex = generateNumber(0, names.length - 1);
    var surnameIndex = generateNumber(0, surnames.length - 1);
    return names[nameIndex] + ' ' + surnames[surnameIndex];
  }

  function getRandomCoatColor() {
    var coatColors = [
      'rgb(101, 137, 164)', 'rgb(241, 43, 107)',
      'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
      'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
    ];

    var coatColorIndex = generateNumber(0, coatColors.length - 1);
    return coatColors[coatColorIndex];
  }

  function getRandomEyesColor() {
    var eyesColors = [
      'black', 'red',
      'blue', 'yellow',
      'green'
    ];

    var eyesColorIndex = generateNumber(0, eyesColors.length - 1);
    return eyesColors[eyesColorIndex];
  }

  function generateWizardsArray() {
    var wizards;
    var wiz = ['', '', '', ''];

    var wizardsArray = wiz.map(function () {
      wizards = {
        name: getRandomName(),
        coatColor: getRandomCoatColor(),
        eyesColor: getRandomEyesColor()
      };
      return wizards;
    });
    return wizardsArray;
  }

  // Отрисовка персонажей
  var wizardsArr = generateWizardsArray();

  function setWizardsAttribute(templateWizard) {
    var template = document.querySelector('#similar-wizard-template').content;
    var wizard = template.cloneNode(true);

    wizard.querySelector('.setup-similar-label').textContent = templateWizard.name;
    wizard.querySelector('.wizard-coat').style.fill = templateWizard.coatColor;
    wizard.querySelector('.wizard-eyes').style.fill = templateWizard.eyesColor;
    return wizard;
  }

  function appendFragments() {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsArr.length; i++) {
      fragment.appendChild(setWizardsAttribute(wizardsArr[i]));
    }
    return fragment;
  }

  var setupList = document.querySelector('.setup-similar-list');
  setupList.appendChild(appendFragments(wizardsArr));

  var setupBlock = document.querySelector('.setup-similar');
  setupBlock.classList.remove('hidden');
})();
