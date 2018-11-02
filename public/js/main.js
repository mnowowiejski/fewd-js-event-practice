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
//Part 2
(function () {
  const buttonParent = document.querySelector('div');
  const buttonItems = buttonParent.querySelectorAll('button');


  buttonParent.addEventListener('click', changeText);


  function changeText (e) {
    for (const buttonItem of buttonItems) {
      buttonItem.innerHTML = "you clicked me"
    }

    e.stopPropagation();}
})();
