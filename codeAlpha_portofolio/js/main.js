const jobs = ["Frontend Developer", "React Developer", "Next.js Developer"];

let i = 0;

let j = 0;

const title = document.querySelector(".left span");

function type() {
  if (j < jobs[i].length) {
    title.innerHTML += jobs[i][j];

    j++;

    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      title.innerHTML = "";

      j = 0;

      i = (i + 1) % jobs.length;

      type();
    }, 1500);
  }
}

type();

const cards = document.querySelectorAll(".card");

function reveal() {
  cards.forEach((card) => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);

reveal();

document
  .querySelector(".main")

  .addEventListener(
    "click",

    () => {
      window.open("cv.pdf");
    },
  );
