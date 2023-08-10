let num = document.querySelectorAll(".num1");
let answer = document.querySelector(".num h4");
let clear = document.querySelector(".clear");
let icon = document.querySelectorAll(".icon");
let acc = document.querySelector(".acc");
let foiz = document.querySelector(".foiz");
let main_card = document.querySelectorAll(".main_card");
// const sr = ScrollReveal({
//   distance: "100px",
//   duration: 2600,
//   delay: 450,
//   reset: true,
// });
// sr.reveal(".main_card", { delay: 500, origin: "top" });
// sr.reveal(".num", { delay: 300, origin: "right" });
// sr.reveal(".card_one", { delay: 300, origin: "top" });
// sr.reveal(".card_two", { delay: 300, origin: "top" });
// sr.reveal(".card_three", { delay: 300, origin: "top" });
// sr.reveal(".card_four", { delay: 300, origin: "top" });
// sr.reveal(".card_five", { delay: 300, origin: "top" });

clear.addEventListener("click", () => {
  location.reload();
});

acc.addEventListener("click", () => {
  answer.innerHTML *= -1;
});

foiz.addEventListener("click", () => {
  answer.innerHTML /= 100;
});

for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", () => {
    if (answer.innerHTML == 0) {
      answer.innerHTML = +answer.innerHTML + +num[i].innerHTML;
    } else {
      answer.innerHTML += num[i].innerHTML;
    }
  });
}

let num1 = 0;
let num2 = 0;
let j = 0;

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", () => {
    if (icon[i].innerHTML != "=") {
      num1 = answer.innerHTML;
      answer.innerHTML = 0;
      j = i;
    } else {
      num2 = answer.innerHTML;
      switch (j) {
        case 0:
          answer.innerHTML = num1 / num2;
          break;
        case 1:
          answer.innerHTML = num1 * num2;
          break;
        case 2:
          answer.innerHTML = num1 - num2;
          break;
        case 3:
          answer.innerHTML = +num1 + +num2;
          break;
      }
    }
  });
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    location.reload();
  }
  for (let i = 9; i >= 0; i--) {
    if (e.keyCode == i + 96) {
      answer.innerHTML == 0;
      if (answer.innerHTML == 0) {
        answer.innerHTML = +answer.innerHTML + +i;
      } else {
        answer.innerHTML += i;
      }
    }
  }

  if (e.keyCode == 8) {
    answer.innerHTML = Math.floor(answer.innerHTML / 10);
  }
});

