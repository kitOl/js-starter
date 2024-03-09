const listHeaders = document.querySelectorAll('[data-name="accordeon-title"]');

listHeaders.forEach(function (item, index) {
  item.addEventListener("click", showBlock);
});

function showBlock() {
  this.nextElementSibling.classList.toggle("hidden");
}
