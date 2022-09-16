const btn = document.querySelector(".btn");
const qoute = document.querySelector(".qoute");
const num = document.querySelector(".num");

function load() {
  fetch("https://api.adviceslip.com/advice", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      qoute.textContent = `"${data.slip.advice}"`;
      num.textContent = data.slip.id;
    });
}
btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      qoute.textContent = `"${data.slip.advice}"`;
      num.textContent = data.slip.id;
    });
});
console.log(btn);
