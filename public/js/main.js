(function () {
    const buttons = document.querySelectorAll('button');
    const firstButton = buttons[0];
    const secondButton = buttons[1];
    const thirdButton = buttons [2];


    firstButton.addEventListener('click', setActiveColor);
    secondButton.addEventListener('click', changeLabel);
    thirdButton.addEventListener('click', buttonReset);


  function setActiveColor (e) {
     {
      firstButton.classList.toggle('button-danger');
    }
    e.stopPropagation();}

  function changeLabel (e) {
     {
      secondButton.innerHTML='You Clicked Me!';
    }
    e.stopPropagation();}

  function buttonReset(e) {
     {
      secondButton.innerHTML='button two';
    }
    e.stopPropagation();}


})();
