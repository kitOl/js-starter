console.log("hello from show/hide");

const button = document.querySelector("#button");
const content = document.querySelector("#content");

button.addEventListener("click", function () {
  console.log("click");
  const isHidden = content.classList.toggle("content-hidden");

  if (isHidden) {
    button.textContent = "Открыть блок";
  } else {
    button.textContent = "Скрыть блок";
  }
});
