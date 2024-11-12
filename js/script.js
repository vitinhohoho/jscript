const listaLis = [...document.querySelectorAll('li')]
const botao = document.querySelector('#transferir')
const listaEsquerda = document.getElementById('lista-esquerda')
const listaDireita = document.getElementById('lista-direita')


listaLis.forEach((li)=>{
    li.addEventListener('click', ()=> {
        li.classList.toggle('selecionado')
})
})


botao.addEventListener('click', ()=>{
    const selecionadosEsquerda = [...listaEsquerda.querySelectorAll('.selecionado')]
    const selecionadosDireita = listaDireita.querySelectorAll('.selecionado')

    selecionadosEsquerda.forEach((itemselecionado)=>{
        itemselecionado.classList.remove('.selecionado')
        listaDireita.appendChild(itemselecionado)
    })


    selecionadosDireita.forEach((itemselecionado)=>{
        itemselecionado.classList.remove('.selecionado')
        listaEsquerda.appendChild(itemselecionado)
    })
})

// for (let i = 0; i < listaLis.length; i++){
//     listaLis[i].addEventListener('click', ()=>{
//         listaLis[i].classList.toggle('selecionado')
//     })
// }

