let gabarito=["a","a","a","b"];
let respostaUsuario=[];



//OBTER BOTAO DO HTML PARA PARA O JS.
let botoes = document.querySelectorAll(".btn")
//console.log(botoes)

/*
for(i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', buttonClick)
}
*/

//CRIAÇÃO DE LOOPING ATRAVÉS DO FOREACH.
//ADICIONAR EVENTO NO BOTÃO.
botoes.forEach(function(botao){
    botao.addEventListener('click', buttonClick)
})

/*botao.addEventListener('click', function() {
    console.log('cliquei');
});
*/


function buttonClick() {
    console.log('cliquei')
}