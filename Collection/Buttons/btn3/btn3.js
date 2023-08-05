(function() {
  const buttons = document.querySelectorAll("[data-identifier='button-position-aware']");

  buttons.forEach(button => {
    ["mouseenter", "mouseout"].forEach(evt => {
      button.addEventListener(evt, e => {
        let parentOffset = button.getBoundingClientRect(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;

        const span = document.querySelectorAll("[data-identifier='button-position-aware-mask']");

        span[0].style.top = relY + "px";
        span[0].style.left = relX + "px";
      });
    });
  });
})();
