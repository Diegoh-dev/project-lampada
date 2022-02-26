const lamp = document.getElementById('lampada');
const lampOn = document.getAnimations('lamOn');
const lampOff = document.getElementById('lampOff')
const corpo = document.querySelector('body')

const isBreck = () => {

    return lamp.src.indexOf('quebrada') > -1 // verifica se esta quebrada
}

const lamOn = () => {

    if(!isBreck()){ // se não estiver quebrada ligue
        lamp.src = '../img/ligada.jpg';
    }
    corpo.style.backgroundColor = 'white'
    
}

const lamOff = () => {
    if(!isBreck()){ // se não estiver quebrada desliga
        lamp.src = '../img/desligada.jpg'
    }
    corpo.style.backgroundColor = 'black'

}

/*
const hover = () => {
    if(!isBreck()){
        lamp.src = '../img/ligada.jpg'
    }
   // quando passar o mause em cima
}
*/

const breek = () => {

    lamp.src = '../img/quebrada.jpg'
}

