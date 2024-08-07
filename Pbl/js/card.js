document.querySelectorAll(".nav-link").forEach((tab) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => (content.style.display = "none"));
    document
      .querySelectorAll(".nav-link")
      .forEach((link) => link.classList.remove("active"));
    document.querySelector(this.dataset.target).style.display = "block";
    this.classList.add("active");
  });
});
