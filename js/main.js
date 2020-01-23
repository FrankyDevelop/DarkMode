const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');/*toggle: si tiene una clase se la v a aquitar 
  y si no se la va a añadir*/ 
  btnSwitch.classList.toggle('active');
});
