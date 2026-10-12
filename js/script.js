let buttons = document.querySelectorAll(".btn");
let input = document.querySelector("#input");
let string = "";
let array = Array.from(buttons);
array.forEach((item) => {
  item.addEventListener("click", (e) => {
    let num = e.target.innerHTML;
    input.innerHTML += num;

    if (num == "=") {
      input.innerHTML = eval(string);
    } else if (num == "C") {
      string = ""
      input.innerHTML = "";
    } else if (num == "Back") {
          string = string.slice(0, -1);
          input.innerHTML = string;

    } else {
      string += num;
      input.innerHTML = string;
    }
  });
});
