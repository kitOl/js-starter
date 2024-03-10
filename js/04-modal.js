const modalBtns = document.querySelectorAll("[data-modal-button]");

modalBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(this.dataset.modalButton);
    const modalWindow = document.querySelector("#" + this.dataset.modalButton);
    modalWindow.classList.remove("hidden");

    modalWindow.addEventListener("click", function () {
      modalWindow.classList.add("hidden");
    });

    modalWindow
      .querySelector(".modal-window")
      .addEventListener("click", function (e) {
        e.stopPropagation();
      });

    const closeBtn = modalWindow.querySelector("[data-modal-close]");
    closeBtn.addEventListener("click", function () {
      modalWindow.classList.add("hidden");
    });
  });
});
