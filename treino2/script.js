const menu = document.querySelector('#menu')
const navegacao = document.getElementById('navegacao')

menu.addEventListener('click', ()=>{
 navegacao.classList.toggle('revelarNavegacao')
})