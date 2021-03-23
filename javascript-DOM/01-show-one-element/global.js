window.addEventListener("load", function () {
  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.
  const showMoreBtn = document.querySelector("#more_text_link");
  // 2. Add a listener for the 'click' event onto that element.
  showMoreBtn.addEventListener("click", () => {
    // 3. The block for the listener should get the DOM
    //    element containing the text to reveal.
    const textToReveal = document.querySelector("#more_text_content");
    // 4. Modify that DOM element's style to change it's 'display'
    //    from a hidden value to a shown value.
    textToReveal.style.display = "block";
    // 5. Also modify the DOM to hide the "More info..." link.
    showMoreBtn.style.display = "none";
  });
});
