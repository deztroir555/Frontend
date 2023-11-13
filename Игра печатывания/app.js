const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
  "Поэтому вместо косвенных намёков знай всё о моих намерениях.",
  "Ощетинит ножки стоглавая вошь.",
  "По той же все, нехоженой судьбе",
  "Как снег души на улице лежит.",
  "Вдруг разольется, как река,",
  "Чтоб стало ясно, - кто ломает руки,",
  "Взгромоздитесь, грязные, в калошах и без калош.",
  "Вытечет по человеку ваш обрюзгший жир,",
  "Здравствуй лето, зеленое, милое, светлое...",
  "В плену безрадостных ночей...",
  "Зуд тревожил скулы.",
];

const game = {
  start: 0,
  end: 0,
  user: "",
  arrText: "",
};

btn.addEventListener("click", () => {
  if (btn.textContent === "Начать") {
    play();
    typeArea.value = "";
    typeArea.disabled = false;
  } else if (btn.textContent === "Стоп") {
    typeArea.disabled = true;
    main.style.borderColor = "white";
    end();
  }
});

function play() {
  let randText = Math.floor(Math.random() * words.length);
  main.textContent = words[randText];
  game.arrText = words[randText];
  main.style.borderColor = "#c8c8c8";
  btn.textContent = "Стоп";
  const duration = new Date();
  game.start = duration.getTime(); // unix timestamp
}

function end() {
  const duration = new Date();
  game.end = duration.getTime();
  const totalTime = (game.end - game.start) / 1000;
  game.user = typeArea.value;
  const correct = results();
  main.style.borderColor = "white";
  main.innerHTML = `Время: ${totalTime} | Счет: ${correct.score} правильных из ${correct.total}`;
  btn.textContent = "Начать";
}

function results() {
  let valueOne = game.arrText.split(" ");
  let valueTwo = game.user.split(" ");
  let score = 0;
  valueOne.forEach((word, idx) => {
    if (word === valueTwo[idx]) {
      score++;
    }
  });

  return { score, total: valueOne.length };
}
