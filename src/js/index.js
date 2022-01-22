const questionNode = document.querySelector(".question");
const answersNode = document.querySelector(".answer");
const timerNode = document.querySelector("#timer_inp");

const finishButton = document.querySelector(".helps_game-end");
finishButton.addEventListener("click", () => {
  if (!finishButton.classList.contains("disabled")) {
    alert(
      `Игра завершена! Вы выиграли: ${
        document.querySelector(".active").previousSibling.textContent
      } ничего 🙂`
    );
    location.reload();
  }
});

let gameData = [
  {
    question: "Какой знак восточного гороскопа следует за знаком Дракона?",
    answers: [
      {
        answer: "Кот Кролик",
        correct: false,
      },
      {
        answer: "Змея",
        correct: true,
      },
      {
        answer: "Собака",
        correct: false,
      },
      {
        answer: "Крыса",
        correct: false,
      },
    ],
  },
  {
    question: "В какую одежду принято плакать, чтобы вызвать сочувствие?",
    answers: [
      {
        answer: "В рубашку",
        correct: false,
      },
      {
        answer: "В жилетку",
        correct: true,
      },
      {
        answer: "В платье",
        correct: false,
      },
      {
        answer: "В кутрку",
        correct: false,
      },
    ],
  },
  {
    question: "Какое из этих украшений можно встретить на новогодней ёлке?",
    answers: [
      {
        answer: "Перстень",
        correct: false,
      },
      {
        answer: "Серьги",
        correct: false,
      },
      {
        answer: "Бусы",
        correct: true,
      },
      {
        answer: "Браслет",
        correct: false,
      },
    ],
  },
  {
    question: "Какой цвет получается при смешении синего и красного?",
    answers: [
      {
        answer: "Коричневый",
        correct: false,
      },
      {
        answer: "Фиолетовый",
        correct: true,
      },
      {
        answer: "Зеленый",
        correct: false,
      },
      {
        answer: "Голубой",
        correct: false,
      },
    ],
  },
  {
    question: "В какой стране обитают кенгуру?",
    answers: [
      {
        answer: "Гаити",
        correct: false,
      },
      {
        answer: "Португалия",
        correct: false,
      },
      {
        answer: "Россия",
        correct: false,
      },
      {
        answer: "Австралия",
        correct: true,
      },
    ],
  },
  {
    question: "В состав любого органического вещества входит…",
    answers: [
      {
        answer: "Кислород",
        correct: false,
      },
      {
        answer: "Углерод",
        correct: true,
      },
      {
        answer: "Водород",
        correct: false,
      },
      {
        answer: "Азот",
        correct: false,
      },
    ],
  },
  {
    question: "Разновидностью какого минерала является горный хрусталь?",
    answers: [
      {
        answer: "Опал",
        correct: false,
      },
      {
        answer: "Кварца",
        correct: true,
      },
      {
        answer: "Графит",
        correct: false,
      },
      {
        answer: "Алмаз",
        correct: false,
      },
    ],
  },
  {
    question: "Что кричат болельщики на хоккейном матче?",
    answers: [
      {
        answer: "Гайку!",
        correct: false,
      },
      {
        answer: "Вперед!",
        correct: false,
      },
      {
        answer: "Шайбу!",
        correct: true,
      },
      {
        answer: "Ракету!",
        correct: false,
      },
    ],
  },
  {
    question: "Кто изобрел громоотвод?",
    answers: [
      {
        answer: "Франклин",
        correct: true,
      },
      {
        answer: "Рузвельт",
        correct: false,
      },
      {
        answer: "Вашингтон",
        correct: false,
      },
      {
        answer: "Линкольн",
        correct: false,
      },
    ],
  },
  {
    question: "Какие семьи, по мнению Л. Н. Толстого, похожи друг на друга?",
    answers: [
      {
        answer: "Дворовые",
        correct: false,
      },
      {
        answer: "Грустые",
        correct: false,
      },
      {
        answer: "Счастливые",
        correct: true,
      },
      {
        answer: "Известные",
        correct: false,
      },
    ],
  },
  {
    question: "В каком городе находится штаб-квартира Microsoft?",
    answers: [
      {
        answer: "Нью-Йорк",
        correct: false,
      },
      {
        answer: "Редмонд",
        correct: true,
      },
      {
        answer: "Новый Орлеан",
        correct: false,
      },
      {
        answer: "Сиэтл",
        correct: false,
      },
    ],
  },
  {
    question:
      "Как называют период времени, когда солнце в северных широтах не опускается за горизонт?",
    answers: [
      {
        answer: "Великий день",
        correct: false,
      },
      {
        answer: "Солнцестояние",
        correct: false,
      },
      {
        answer: "Солнечное затмение",
        correct: false,
      },
      {
        answer: "Полярный день",
        correct: true,
      },
    ],
  },
  {
    question: "Ричард Львиное Сердце был пленен во время",
    answers: [
      {
        answer: "Крестового похода",
        correct: true,
      },
      {
        answer: "Столетней войны",
        correct: false,
      },
      {
        answer: "Войны алой и белой розы",
        correct: false,
      },
      {
        answer: "Войны за независимость",
        correct: false,
      },
    ],
  },
  {
    question:
      "Какое астрономическое явление жители Земли могут наблюдать один раз в 76 лет?",
    answers: [
      {
        answer: "Звездопад",
        correct: false,
      },
      {
        answer: "Астероид",
        correct: false,
      },
      {
        answer: "Комета Галлея",
        correct: true,
      },
      {
        answer: "Самолет",
        correct: false,
      },
    ],
  },
  {
    question: "Кто такой «молотоглав»?",
    answers: [
      {
        answer: "Рыба",
        correct: false,
      },
      {
        answer: "Птица",
        correct: true,
      },
      {
        answer: "Змея",
        correct: false,
      },
      {
        answer: "Насекомое",
        correct: false,
      },
    ],
  },
];
let sum = 0;

game();
async function game() {
  let win = true;
  for (let index = 0; index < gameData.length; index++) {
    if (index !== 0) {
      let currentLevel = document.querySelector(".active");
      currentLevel.classList.remove("active");
      currentLevel.nextElementSibling.classList.add("active");
      if (currentLevel.classList.contains("no-fear")) {
        sum = Number(currentLevel.textContent.replace(" ", ""));
      }
    }
    if (index === 1) {
      finishButton.classList.remove("disabled");
    }

    const currentGameData = gameData[index];
    questionNode.textContent = currentGameData.question;
    for (let index = 0; index < currentGameData.answers.length; index++) {
      let answerNode = answersNode.children[index];
      if (answerNode.classList.contains("helping")) {
        answerNode.classList.remove("helping");
      }

      const answerData = currentGameData.answers[index];
      answerNode.textContent = answerData.answer;
      answerNode.setAttribute("correct", answerData.correct);
    }

    // вызываем функцию и ждем ответ
    let checkState = await waitAnswer();

    if (checkState === false) {
      win = false;
      break;
    }
  }

  if (win === true) {
    alert(
      `Игра завершена! Вы выиграли: ${answersNode.lastChild.textContent} ничего 🙂`
    );
  } else {
    alert(`Игра завершена! Вы выиграли: ${sum} ничего 🙂`);
  }
  location.reload();
}

/**
 * Возвращает true когда был выбран правильный ответ или false когда ответ не правильный.
 * @returns {boolean}
 */
function waitAnswer() {
  return new Promise((resolve, reject) => {
    let timeOut = 60;
    timerNode.textContent = timeOut;
    let timerId = setInterval(() => {
      timeOut--;
      timerNode.textContent = timeOut;
      if (timeOut === 0) {
        clearInterval(timerId);
        return resolve(false);
      }
    }, 1000);

    for (let index = 0; index < 4; index++) {
      const buttonNode = answersNode.children[index];
      buttonNode.addEventListener("click", (event) => {
        if (event.target.getAttribute("correct") === "true") {
          clearInterval(timerId);
          return resolve(true);
        } else {
          clearInterval(timerId);
          return resolve(false);
        }
      });
    }
  });
}

document.querySelector(".helps_call").addEventListener("click", friendCall);
let usedFriendCall = false;
function friendCall() {
  if (usedFriendCall) {
    return true;
  }
  usedFriendCall = true;

  let friendTrue = Math.round(Math.random());
  let randomField = Math.floor(Math.random() * 3);
  if (friendTrue === 1) {
    answersNode.querySelector('[correct="true"]').classList.add("helping");
  } else {
    answersNode
      .querySelectorAll('[correct="false"]')
      [randomField].classList.add("helping");
  }
}

document.querySelector(".helps_fifty").addEventListener("click", fifty);
let usedfifty = false;
function fifty() {
  if (usedfifty) {
    return true;
  }
  usedfifty = true;

  let randomField = Math.floor(Math.random() * 3);
  answersNode.querySelector('[correct="true"]').classList.add("helping");
  answersNode
    .querySelectorAll('[correct="false"]')
    [randomField].classList.add("helping");
}
