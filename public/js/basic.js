// Cursor on mousemove

class followMouse {
  constructor(cursor, body) {
    this.cursor = cursor;
    this.body = body;
  }
  follow(e) {
    let x = e.clientX;
    let y = e.clientY;

    if (x <= this.body.clientWidth - 20) {
      this.cursor.style.left = `${x}px`;
      this.cursor.style.top = `${y}px`;
    } else {
      this.cursor.style.left = `${x - 20}px`;
      this.cursor.style.top = `${y - 20}px`;
    }
  }
}

const cursor = document.getElementsByClassName("cursor")[0];
const body = document.getElementsByTagName("body")[0];

const cursorFollowed = new followMouse(cursor, body);

document.addEventListener("mousemove", (e) => {
  cursorFollowed.follow(e);
});

// Mobile Navigation

// ham menu buttons
const openMenu = document.getElementsByClassName("hamBTN-open")[0];
const closeMenu = document.getElementsByClassName("hamBTN-close")[0];
// Ham menu container
const hamContainer = document.getElementsByClassName("nav-ham-links")[0];

openMenu.addEventListener("click", () => {
  closeMenu.style = "display: block";
  openMenu.style = "display: none";
  hamContainer.style = "display:block";
});
closeMenu.addEventListener("click", () => {
  closeMenu.style = "display: none";
  openMenu.style = "display: block";
  hamContainer.style = "display:none";
});
