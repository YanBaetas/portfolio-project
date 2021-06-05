const menuBtn = document.querySelector(".menu-button");
const modal = document.querySelector(".modal");
const menuModal = document.querySelector(".modal-menu");
let menuBoundingRect;
let modalMenuWidth;
let modalMenuHeight;
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  modal.classList.toggle("active");
  menuModal.classList.toggle("active");
  getMenuWidth();
  if (modal.classList.contains("active")) {
    console.log("hello");
    addOutsideClick();
  }
});

/* Get the width and height of the Menu in Modal */
function getMenuWidth() {
  menuBoundingRect = menuModal.getBoundingClientRect();
  modalMenuWidth = menuBoundingRect.width;
}

function verifyOutsideClick(event) {
  if (modalMenuWidth < event.clientX && !modal.classList.contains("off")) {
    menuBtn.classList.toggle("open");
    menuModal.classList.toggle("active");
    modal.classList.toggle("off");

    setTimeout(() => {
      modal.classList.toggle("off");
      modal.classList.toggle("active");
    }, 600);
  }
}

/* ADD and REMOVE Event click functions*/
function addOutsideClick() {
  modal.addEventListener("click", verifyOutsideClick);
}

function removeOutsideClick() {
  modal.removeEventListener("click", verifyOutsideClick);
}
