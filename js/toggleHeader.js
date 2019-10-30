const header = document.querySelector("#header");
const light = "header--light";
let lastScroll = 0;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > window.innerHeight) {
    header.classList.add(light);
    return;
  } else  {
    header.classList.remove(light);
  }
});