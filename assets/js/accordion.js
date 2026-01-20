// accordion.js
document.addEventListener("DOMContentLoaded", function () {

  // Select all accordion buttons
  const accButtons = document.querySelectorAll(".accordion-box .acc-btn");

  accButtons.forEach(function (btn) {

    btn.addEventListener("click", function () {

      // Get parent .block
      const block = btn.closest(".block");

      // Get related content
      const content = block.querySelector(".acc-content");

      // Toggle active states
      btn.classList.toggle("active");
      content.classList.toggle("current");

    });

  });

});
