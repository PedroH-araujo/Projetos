const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')

const pecas = {
   "bracos": {
       "forca": 29,
       "poder": 35,
       "energia": -21,
       "velocidade": -5
   },

   "blindagem": {
       "forca": 41,
       "poder": 20,
       "energia": 0,
       "velocidade": -20
   },
   "nucleos":{
       "forca": 0,
       "poder": 7,
       "energia": 48,
       "velocidade": -24
   },
   "pernas":{
       "forca": 27,
       "poder": 21,
       "energia": -32,
       "velocidade": 42
   },
   "foguetes":{
       "forca": 0,
       "poder": 28,
       "energia": 0,
       "velocidade": -2
   }
}

controle.forEach((elemento) => {
   elemento.addEventListener("click", (evento) => {
      manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
      x(evento.target.dataset.peca, evento.target.dataset.controle)
   })
})


function manipulaDados(operacao, controle) {
   const peca = controle.querySelector('[data-contador]')
   
   if(operacao === "-"){
      peca.value = parseInt(peca.value) - 1
   } else {
      peca.value = parseInt(peca.value) + 1
   }
}

var x = function atualizaEstatisticas(peca, operacao) {
   if(operacao === "-"){
   estatisticas.forEach( (elemento) => {
      elemento.textContent = parseInt(elemento.textContent) - pecas[peca] [elemento.dataset.estatistica]
   })}
   else{
   estatisticas.forEach( (elemento) => {
      elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
   })}
}

const robo = document.querySelector('.robo')
var corrobo = window.prompt('Dentre as cores azul, amarelo, vermelho, rosa, branco e preto. Qual você gostaria de usar para seu Robotron 2000?')
robo.src = `img/robotron ${corrobo}.png`