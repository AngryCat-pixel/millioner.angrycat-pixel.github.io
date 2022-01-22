let question = [
  "Какой знак восточного гороскопа следует за знаком Дракона?",
  "В какую одежду принято плакать, чтобы вызвать сочувствие?",
  "Какое из этих украшений можно встретить на новогодней ёлке?",
  "Какой цвет получается при смешении синего и красного?",
  "В какой стране обитают кенгуру?",
  "В состав любого органического вещества входит…",
  "Разновидностью какого минерала является горный хрусталь?",
  "Что кричат болельщики на хоккейном матче?",
  "Кто изобрел громоотвод?",
  "	Какие семьи, по мнению Л. Н. Толстого, похожи друг на друга?",
  "В каком городе находится штаб-квартира Microsoft?",
  "Как называют период времени, когда солнце в северных широтах не опускается за горизонт?",
  "Ричард Львиное Сердце был пленен во время",
  "Какое астрономическое явление жители Земли могут наблюдать один раз в 76 лет?",
  "Кто такой «молотоглав»?",
];
let answer = [
  "Кот Кролик",
  "Змея",
  "Собака",
  "Крыса",
  "В рубашку",
  "В жилетку",
  "В платье",
  "В кутрку",
  "Гирлянда",
  "Серьги",
  "Бусы",
  "Браслет",
  "Коричневый",
  "Фиолетовый",
  "Зеленый",
  "Голубой",
  "Гаити",
  "Португалия",
  "Россия",
  "Австралия",
  "Кислород",
  "Углерод",
  "Водород",
  "Азот",
  "Опал",
  "Кварца ",
  "Графит",
  "Алмаз",
  "Гайку!",
  "Вперед!",
  "Шайбу!",
  "Ракету!",
  "Франклин",
  "Рузвельт",
  "Вашингтон",
  "Линкольн",
  "Дворовые",
  "Грустые",
  "Счастливые",
  "Известные",
  "Нью-Йорк",
  "Редмонд",
  "Новый Орлеан",
  "Сиэтл",
  "Великий день",
  "Солнцестояние",
  "Солнечное затмение",
  "Полярный день",
  "Крестового похода",
  "Столетней войны",
  "Войны алой и белой розы",
  "Войны за независимость",
  "Звезда",
  "Астероид",
  "Комета Галлея",
  "Самолет",
  "Рыба",
  "Птица",
  "Змея",
  "Насекомое",
];
let key = [1, 3, 3, 2, 3, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1];

let level = 0;

let name = "name";
let username = readCookie(name);

if (username != null) {
  $(".start").css("display", "none");
  $(".reStart").css("display", "block");
  $(".hellow").text("С возвращением, " + username + "!");

  $("#startGame").click(function () {
    $(".reStart").css("display", "none");
    setTimeout(timer, 1000);
  });
}

function show(level) {
  $(".question").text(question[level]);
  $("label[for=answer1]").text(answer[level * 4 + 0]);
  $("label[for=answer2]").text(answer[level * 4 + 1]);
  $("label[for=answer3]").text(answer[level * 4 + 2]);
  $("label[for=answer4]").text(answer[level * 4 + 3]);
}

let resultConst = [];
show(level);
let tr = $("tr");
$(tr[tr.length - (level + 1)]).css("background", "#FF0");

$(".btn").click(function () {
  $("#timer_inp").text(60);

  if ($("input[name=answer]:checked").val() == key[level]) {
    level++;
    show(level);
  } else {
    gameOwer();
  }

  $("input").prop("checked", false);
  $(tr.css("background", "#fff"));
  $(tr.removeClass("result"));
  $(tr[tr.length - (level + 1)]).css("background", "#FF0");
  $(tr[tr.length - level]).css("color", "#f0f");
  $(tr[tr.length - level]).addClass("result");
  $("label").css("color", "#555");

  if (level == 5 || level == 10 || level == 15) {
    resultConst.push($(tr[tr.length - level]).addClass("resultConst"));
  }
});

Math.rand = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

let inputLabel = document.getElementsByTagName("label");
$(".round50").click(function () {
  let inputAnswer = document.getElementsByName("answer");
  let exp = [];
  let count = 0;
  while (count < 2) {
    let index = Math.rand(0, 3);
    if (exp.indexOf(index) == -1 && $(inputAnswer[index]).val() != key[level]) {
      $(inputLabel[index]).css("color", "#69f");
      count++;
      exp.push(index);
    }
  }
  $(this).off("click");
  $(this).css("background", "red");
});

$(".round").click(function () {
  $(inputLabel[Math.rand(0, 3)]).css("color", "#F90"), $(this).off("click");
  $(this).css("background", "red");
});

let result = $(".result");
$(".roundEnd").click(function () {
  end();
});

function end() {
  $(".end").css("display", "block");

  if (tr.hasClass("result")) {
    let tdResult = $("tr.result").children();
    let tdText = tdResult[1].textContent;
    $(".showResult").text("ВЫ ВЫИГРАЛИ: " + tdText + " гривень");
  }
}

function gameOwer() {
  $(".end").css("display", "block");

  if (tr.hasClass("resultConst")) {
    let tdResult1 = $(resultConst[resultConst.length - 1]).children();
    let tdText1 = tdResult1[1].textContent;
    $(".showResult").text("ВЫ ВЫИГРАЛИ: " + tdText1 + " гривень");
  }
}

function timer() {
  let objTimer = document.getElementById("timer_inp");
  objTimer.innerHTML--;

  if (objTimer.innerHTML == 5) {
    $("#timer_inp").css("background", "red");
  }
  if (objTimer.innerHTML == 0) {
    setTimeout(function () {}, 1000);
    gameOwer();
  } else {
    setTimeout(timer, 1000);
  }
}

$("form").submit(function (e) {
  e.preventDefault();
});

$("#start").click(function () {
  if ($("#user").val() != "") {
    $(".start").css("display", "none");
    setTimeout(timer, 1000);
  } else {
    $("#user").css("background", "#f30");
  }

  let value = $("#user").val();

  createCookie(name, value, 1);
});

function createCookie(name, value, days) {
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    let expires = "; expires=" + date.toGMTString();
  } else {
    let expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      let value = c.substring(nameEQ.length, c.length);
      return value.split(",");
    }
  }
  return null;
}
