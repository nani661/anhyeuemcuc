var images = document.querySelector(".heart");
var a = 0;
setInterval(() => {
  a++;
  if (a > 3) {
    a = 1;
  }
  if (a == 1) {
    images.classList.remove("heart2");
    images.classList.remove("heart3");
  } else {
    if (a == 2) {
      images.classList.add("heart2");
      images.classList.remove("heart3");
    } else {
      if (a == 3) {
        images.classList.add("heart3");
      }
    }
  }
}, 100);
