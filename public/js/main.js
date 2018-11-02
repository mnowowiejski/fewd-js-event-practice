(function () {
  const buttonParent = document.querySelector('div');
  const buttonItems = buttonParent.querySelectorAll('button');

  buttonParent.addEventListener('click', setActiveColor);


  function setActiveColor (e) {
    for (const buttonItem of buttonItems) {
      buttonItem.classList.toggle('button-danger');
    }

    
    e.stopPropagation();}
})();
