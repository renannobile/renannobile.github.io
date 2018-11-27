document.addEventListener("DOMContentLoaded", () => {
  const toTop = document.querySelector("#to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 90) {
      toTop.classList.add('active');
    } else if (toTop.classList.contains('active')) {
      toTop.classList.remove('active');
    }
  });
});
