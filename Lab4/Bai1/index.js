alert('Color Background') ;
const button = document.querySelector('btn-random');
button.addEventListener('click' , changeColor) ;

function changeColor(){
    const background = document.querySelector ('.background') ;
    const arrayColor = ['red' ,'yellow', 'pink' , 'gray','black','orange'];
    let random = arrayColor[arrayColor(arrayColor)] ;
    background.style.background = random ;

}
function randomColor (array) {
    return Math.floor(Math.random()* array.length) ;
}