const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');/*toggle: si tiene una clase se la va a quitar 
  y si no se la va a añadir*/ 
  btnSwitch.classList.toggle('active');

  //Guardar configuración en localstorage
  if(document.body.classList.contains('dark')){
     localStorage.setItem('darkmode','true');
  }else{
     localStorage.setItem('darkmode','false');
  }

   //Evitar quitar el modo oscuro al recargar la pagina
   if (localStorage.setItem('darkmode') ==='true') {
       document.body.classList.add('dark');
       btnSwitch.classList.add('active');
   } else {
       document.body.classList.remove('dark');
       btnSwitch.classList.remove('active');
   }
});
