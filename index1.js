let form = document.getElementById("menuForm");
form.addEventListener("submit", e => {
  e.preventDefault();
  let input = document.getElementById("input").value;
  console.log(input);
  // console.log(e.target[0].value)
  let name = e.target[0].value;
  document.querySelector(".customerName").innerHTML = `${name}`;
});

function getRandomInt() {
  let random = Math.floor(Math.random() * 1000);
  document.querySelector(".uuid").innerHTML = `A${random}`;
}

getRandomInt();
