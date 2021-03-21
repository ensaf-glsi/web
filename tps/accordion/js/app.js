const accordions = document.querySelectorAll(".accordion .accordion-button");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    // console.log("click sur accordion : ", accordion);
    const accordionPane = accordion.parentElement.nextElementSibling;
    if (accordion.classList.contains("collapsed")) {
      const accordionContainer =
        accordion.parentElement.parentElement.parentElement;

      const oldAccordion = accordionContainer.querySelector(
        ".accordion-button:not(.collapsed)"
      );
      //   console.log("oldAccordion : ", oldAccordion);
      if (oldAccordion) {
        // <=> if (oldAccordion != null) {
        oldAccordion.classList.add("collapsed");
        oldAccordion.parentElement.nextElementSibling.classList.remove("show");
      }
      accordion.classList.remove("collapsed");
      accordionPane.classList.add("show");
    } else {
      accordion.classList.add("collapsed");
      accordionPane.classList.remove("show");
    }
  });
});
