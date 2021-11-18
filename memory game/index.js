document.addEventListener('DOMContentLoaded', () =>{
// card options
const cardArray =[
 {
     name:'bull',
     img: 'images/bull.jpg'
 },
 {
    name:'bull',
    img: 'images/bull.jpg'
}, {
    name:'elephant',
    img: 'images/elephant.jpg'
}, {
    name:'elephant',
    img: 'images/elephant.jpg'
},
{
    name:'fox',
    img: 'images/fox.jpg'
},
{
    name:'fox',
    img: 'images/fox.jpg'
},
{
    name:'frog',
    img: 'images/frog.jpg'
}, {
    name:'frog',
    img: 'images/frog.jpg'
},
{
    name:'lion',
    img: 'images/lion.jpg'
},
{
    name:'lion',
    img: 'images/lion.jpg'
},
{
    name:'mouse',
    img: 'images/mouse.jpg'
},
{
    name:'mouse',
    img: 'images/mouse.jpg'
},
{
    name:'pig',
    img: 'images/pig.jpg'
},
{
    name:'pig',
    img: 'images/pig.jpg'
},
{
    name:'porqupine',
    img: 'images/porqupine.jpg'
},
{
    name:'porqupine',
    img: 'images/porqupine.jpg'
},
{
    name:'racoon',
    img: 'images/racoon.jpg'
},
{
    name:'racoon',
    img: 'images/racoon.jpg'
},

]

cardArray.sort(()=> 0.5-Math.random())// allows us to randomly arrange cards

const grid=document.querySelector('.grid')
const resultsDisplay= document.querySelector('#result')
var cardsChosen=[]
var cardsChosenId=[]
var cardsWon= []
// create your board

function createBoard() {
    for (let i=0; i<cardArray.length; i++){
        var card=document.createElement('img')
        card.setAttribute('src','images/blank.jpg')
        card.setAttribute('data-id',i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

// check for matches
function checkForMatch () {
     var cards=document.querySelectorAll('img')
     const optionOneId= cardsChosenId[0]
     const optionTwoId= cardsChosenId[1]
     if (cardsChosen[0]=== cardsChosen[1]) {
         alert('You found a Match')
         cards[optionOneId].setAttribute('src', 'images/white.jpg')
         cards[optionTwoId].setAttribute('src', 'images/white.jpg')
         cardsWon.push(cardsChosen)
     } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry, try again!')
     }
     cardsChosen=[]
     cardsChosenId=[]
     resultsDisplay.textContent=cardsWon.length
     if (cardsWon.length===cardArray.length/2){
         resultsDisplay.textContent='Congratulations! You found them all!'
     }
}

// flipyour card:
function flipCard() {
    var cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length==2){
        setTimeout(checkForMatch, 500)
    }

}

createBoard()

})
