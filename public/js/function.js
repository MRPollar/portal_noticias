const btnOpenSearch = document.getElementById('search');
const btnCloseSearch = document.getElementById('close');
const contForm = document.getElementById('contForm');
const body = document.querySelector('body');

btnOpenSearch.addEventListener("click", (e)=>{
   contForm.classList.toggle('active');
   body.style.overflow = 'hidden';
})

btnCloseSearch.addEventListener("click", (e)=>{
   contForm.classList.toggle('active');
   body.style.overflow = 'auto';
})