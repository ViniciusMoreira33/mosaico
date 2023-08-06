(function() {
  const btn3Buttons = document.querySelectorAll("[data-identifier='button-position-aware']");

  btn3Buttons.forEach(btn3Button => {
    ["mouseenter", "mouseout"].forEach(btn3Evt => {
      btn3Button.addEventListener(btn3Evt, btn3E => {
        let btn3ParentOffset = btn3Button.getBoundingClientRect(),
            btn3RelX = btn3E.pageX - btn3ParentOffset.left,
            btn3RelY = btn3E.pageY - btn3ParentOffset.top;

        const btn3Span = document.querySelectorAll("[data-identifier='button-position-aware-mask']");

        btn3Span[0].style.top = btn3RelY + "px";
        btn3Span[0].style.left = btn3RelX + "px";
      });
    });
  });
})();
