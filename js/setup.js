'use strict';

(function () { // создааю обертывающую функцию
  var setup = document.querySelector('.setup'); // создаю переменную с элементом с классом .setup
  setup.classList.remove('hidden'); // убираю у блока .setup класс .hidden

  function generateNumber(min, max) { // создаю функцию для генерации случайного числа (результат зависит от параметров переменных min и max)
    var rand = min + Math.random() * (max + 1 - min); // пишу формулу генерации случайного числа
    rand = Math.floor(rand); // полученной случайное число округляю в меньшую сторону
    return rand; // возвращаю случайной число
  }

  function getRandomName() { // создаю функцию вывода случайных имени и фамилии
    var names = [ // создаю массив имен
      'Иван', 'Хуан Себастьян',
      'Мария', 'Кристоф',
      'Виктор', 'Юлия',
      'Люпита', 'Вашингтон'
    ];

    var surnames = [ // создаю массив фамилий
      'да Марья', 'Верон',
      'Мирабелла', 'Вальц',
      'Онопко', 'Топольницкая',
      'Нионго', 'Ирвинг'
    ];

    var nameIndex = generateNumber(0, names.length - 1); // создаю переменную индекса имен, в которую записываю функцию генерации случайного числа от 0 до 7
    var surnameIndex = generateNumber(0, surnames.length - 1); // создаю переменную индекса фамилий, в которую записываю функцию генерации случайного числа от 0 до 7
    return names[nameIndex] + ' ' + surnames[surnameIndex]; // возвращаю имя из массива по случайному индексу от 0 до 7 и фамилию по такому же принципу. Между ними ставлю пробел
  }

  function getRandomCoatColor() { // создаю функцию вывода случайного цвета плащей волшебника
    var coatColors = [ // создаю массив цветов для плащей
      'rgb(101, 137, 164)', 'rgb(241, 43, 107)',
      'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
      'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
    ];

    var coatColorIndex = generateNumber(0, coatColors.length - 1); // создаю перменную, которая генерирует случайный индекс - число от 0 до 5
    return coatColors[coatColorIndex]; // возвращаю цвет плаща по случайному индексу от 0 до 5
  }

  function getRandomEyesColor() { // создаю функцию вывода случайного цвета глаз волшебника
    var eyesColors = [ // создаю массив цветов для глаз
      'black', 'red',
      'blue', 'yellow',
      'green'
    ];

    var eyesColorIndex = generateNumber(0, eyesColors.length - 1); // создаю перменную, которая генерирует случайный индекс - число от 0 до 4
    return eyesColors[eyesColorIndex]; // возвращаю цвет глаз по случайному индексу от 0 до 4
  }

  function generateWizardsArray() { // создаю функцию, которая создает массив случайных имен и фамилий, цветов плащей и глаз без повторений
    var wizards; // создаю переменную, в которую дальше запишу случайные имя+фамилию, цвет плаща и цвет глаз
    var wiz = ['', '', '', '']; // создаю пустой массив из 4 элементов

    var wizardsArray = wiz.map(function () { // перебираю пустой массив
      wizards = { // создаю один объект для массива wiz
        name: getRandomName(), // беру результат функции getRandomName()
        coatColor: getRandomCoatColor(), // беру результат функции getRandomCoatColor()
        eyesColor: getRandomEyesColor() // беру результат функции getRandomEyesColor()
      };
      return wizards; // возвращаю созданный объект (и так повторяю еще 3 раза, чтобы заполнить 4 пустых объекта массива)
    });
    return wizardsArray; // возвращаю созданный массив из 4 объектов
  }

  // Отрисовка персонажей
  var wizardsArr = generateWizardsArray(); // создаю переменную, в которую записываю массив из 4 объектов (созданный выше)

  function setWizardsAttribute(templateWizard) { // создаю функцию для создания нового шаблона на основе того, что лежит в index.html
    var template = document.querySelector('#similar-wizard-template').content; // создаю переменную, в которую записываю шаблон
    var wizard = template.cloneNode(true); // клонирую шаблон со всем содержимым

    wizard.querySelector('.setup-similar-label').textContent = templateWizard.name; // записываю в шаблон в тег с классом .setup-similar-label сгенерированные имя+фамилию
    wizard.querySelector('.wizard-coat').style.fill = templateWizard.coatColor; // записываю в шаблон в тег с классом .wizard-coat в style: fill сгенерированный цвет плаща волшебника
    wizard.querySelector('.wizard-eyes').style.fill = templateWizard.eyesColor; // записываю в шаблон в тег с классом .wizard-eyes в style: fill сгенерированный цвет глаз волшебника
    return wizard; // возвращаю заполненный новыми данными шаблон
  }

  function appendFragments() { // создаю функцию добавления фрагмента
    var fragment = document.createDocumentFragment(); // создаю фрагмент

    for (var i = 0; i < wizardsArr.length; i++) {
      fragment.appendChild(setWizardsAttribute(wizardsArr[i])); // добавляю 4 шаблона поочередно на основе сгенерированного ранее массива в 1 фрагмент
    }
    return fragment; // возвращаю полученный фрагмент
  }

  var setupList = document.querySelector('.setup-similar-list'); // создаю переменную для обращения к элементу с классом .setup-similar-list
  setupList.appendChild(appendFragments(wizardsArr)); // добавляю фрагмент в элемент с классом .setup-similar-list

  var setupBlock = document.querySelector('.setup-similar'); // создаю переменную для обращения к элементу с классом .setup-similar
  setupBlock.classList.remove('hidden'); // удаляю у элемента с классом .setup-similar класс .hidden
})();
