// init data

var cards = [
	{
		name: 'javascript',
		src: '../images001/javascript.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'html',
		src: '../images001/html.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'nodejs',
		src: '../images001/nodejs.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'kotlin',
		src: '../images001/kotlin.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'php',
		src: '../images001/php.svg',

	},
	{
		name: 'ruby',
		src: '../images001/ruby.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'go',
		src: '../images001/go.svg',
		element: null,
		isFliped: false,
		cisCrrect: false
	},
	{
		name: 'swift',
		src: '../images001/swift.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'roy',
		src: '../images001/roy.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'java',
		src: '../images001/java.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},

//duplicate data

	{
		name: 'javascript',
		src: '../images001/javascript.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'html',
		src: '../images001/html.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'nodejs',
		src: '../images001/nodejs.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'kotlin',
		src: '../images001/kotlin.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'php',
		src: '../images001/php.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'ruby',
		src: '../images001/ruby.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'go',
		src: '../images001/go.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'swift',
		src: '../images001/swift.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'roy',
		src: '../images001/roy.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
	{
		name: 'java',
		src: '../images001/java.svg',
		element: null,
		isFliped: false,
		isCorrect: false
	},
]

let lenCards = cards.length;
let flipedCards = [];
let lastCard = 0;

let remainTime = 30;

let resetData = ()=>{
	flipedCards = []
	lastCard = 0
	remainTime = 30
}

//////////////////////////////////////////////////




// sort random cards -> bind data

let divCards = document.getElementById('cards');
let ulListCards = document.getElementById('list-cards');


sortRandomCards();

cards.forEach((card) => {
    card.element = document.createElement('li');
    ulListCards.appendChild(card.element);
    
    
    let divFrontFace = document.createElement('div');
    divFrontFace.classList.add('front-face');
    let divBackFace = document.createElement('div');
    divBackFace.classList.add('back-face');
    card.element.appendChild(divBackFace);
    card.element.appendChild(divFrontFace);
    
    const img = document.createElement('img');
    img.classList.add('card');
    img.src = card.src;
    divBackFace.appendChild(img);
    divCards.style.display = 'none';
   
})

let resetCard = ()=>{
	let ulListCards = document.getElementById('list-cards');
    ulListCards.remove();
    
    let listItem = document.createElement('ul');
    listItem.setAttribute('id', 'list-cards')
    divCards.appendChild(listItem)

	resetData();
    
    divIntro.style.display = 'block';
    divTime.style.display = 'block';
    divCards.style.display = 'block';
	cards.forEach((card) => {
		card.element.style.display = 'block';
    })
    divGameOver.style.display = "none";
    cards.forEach((card)=>{
        card.isFliped = false
        card.isCorrect= false
        card.element.classList.remove('is-fliped');
	})
	//sort card again
    sortRandomCards();
    /// bind data again
    cards.forEach((card) => {
        let divCards = document.getElementById('cards');
        let ulListCards = document.getElementById('list-cards');
        card.element = document.createElement('li');
        
        ulListCards.appendChild(card.element);
        
        
        let divFrontFace = document.createElement('div');
        divFrontFace.classList.add('front-face');
        let divBackFace = document.createElement('div');
        divBackFace.classList.add('back-face');
        card.element.appendChild(divBackFace);
        card.element.appendChild(divFrontFace);
        
        const img = document.createElement('img');
        img.classList.add('card');
        img.src = card.src;
        divBackFace.appendChild(img);
        divCards.style.display = 'block';
          
	})
	//start
    startGame();
}

//////////////////////////////////////////////////



// start game and stop game

let divIntro = document.getElementById('intro');
let divStart = document.getElementById('start');
let divTime = document.getElementById('time');
let spanShowTime = document.getElementById('show-time')
let divGameOver = document.getElementById('game-over');
let pSorry = document.getElementById('sorry');
let rank = document.getElementById('rank')
let score;
let displayStart = ()=>{
	spanShowTime.textContent = '30';
	spanShowTime.style.color = 'green';
	divIntro.style.display = 'none';
	divTime.style.display = 'none';
	divCards.style.display = 'none';
	divGameOver.style.display = "block";
}
let startGame = () => {
    divCards.style.display = 'block';
	divStart.style.display = 'none';
	
    cards.forEach((card) => {
        card.element.style.display = 'block';
	})
	rank.style.display = 'none'
	
    let countdown = setInterval(function () {
        if(remainTime > 0) {
			spanShowTime.style.color = 'green';
            remainTime--;
            spanShowTime.textContent = remainTime;
            if(remainTime <= 3){
				spanShowTime.style.color = 'red';
			}
        }else{
			displayStart();
			
            if(lastCard < lenCards) {
				score = Math.floor(lastCard/2);
				pSorry.textContent = `Score : ${score}`
				let submitForm = document.getElementById('submit')
				submitForm.style.display = 'block'
            }
            else {
				score = Math.floor(lastCard/2);
				pSorry.textContent = `Great!!! You got max point : ${score}`;
				let submitForm = document.getElementById('submit')
				submitForm.style.display = 'block'
			}
			
			clearInterval(countdown);
        }
    }, 1000);
	
}
divStart.addEventListener('click', startGame)
//////////////////////////////////////////////////



// restart game 

let divRestart = document.getElementById('restart');
divRestart.addEventListener('click', function() {
    resetCard();
	flipCard();
     
 })
//////////////////////////////////////////////////



// flip cards -> check for similarity

let flipCard = () => {
	cards.forEach((card, index) => {
		card.element.addEventListener('click', function() {
			
			// flip card -> check similarity
	
			setTimeout(function() {
				if(lastCard < lenCards && !card.isFliped) {
					flipedCards.push(card);
					card.isFliped = true;
					card.element.classList.add('is-fliped');
					lastCard = flipedCards.length;
	
					// check for similarity
	
					if(lastCard % 2 == 0) {
						if(flipedCards[lastCard-1].name == flipedCards[lastCard-2].name) {
							flipedCards[lastCard-1].isCorrect = true;
							flipedCards[lastCard-2].isCorrect = true;
						}
						if(flipedCards[lastCard-1].name != flipedCards[lastCard-2].name) {
							setTimeout(function() {
								flipedCards[lastCard-1].element.classList.remove('is-fliped');
								flipedCards[lastCard-2].element.classList.remove('is-fliped');
								flipedCards[lastCard-1].element.classList.add('undo-flip');
								flipedCards[lastCard-2].element.classList.add('undo-flip');
								flipedCards[lastCard-1].element.classList.remove('undo-flip');
								flipedCards[lastCard-2].element.classList.remove('undo-flip');
								flipedCards.splice(lastCard-2, 2);
								lastCard = flipedCards.length;
							}, 300);
							flipedCards[lastCard-1].isFliped = false;
							flipedCards[lastCard-2].isFliped = false;
						}
					}
				}
			}, 100)
		})
		
	})

}
//////////////////////////////////////////////////

flipCard();




// random cards
function sortRandomCards() {
  cards.sort(function(a, b){return 0.5 - Math.random()})
}
////// function request
let sendFunc = (event)=>{
	event.preventDefault()
	let inputName = document.getElementById('playerName')
	let name = inputName.value
	
	$.ajax({
		url: 'http://localhost:3000/submit',
		method: 'POST',
		data: {name, score}
	})
	.done(function (msg){
		msg = msg.sort((a, b)=>{
			return b.score - a.score
		})
		let table = document.getElementById('table')
		let renderList = msg.map((x) => {
			return `<tr><td>${x.name}</td><td>${x.score}</td></tr>`
		}).join('')
		console.log(renderList)
		renderList = '<tr><th>Name</th><th>Score</th>' + renderList
		table.innerHTML = renderList
		let submitForm = document.getElementById('submit')
		submitForm.style.display = 'none'
		let rank = document.getElementById('rank')
		rank.style.display = 'block'
	})
	inputName.value = ''	
}
let sendReq = document.getElementById('sendReq')
sendReq.addEventListener('click', sendFunc)

