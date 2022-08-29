let name1 = prompt('Type in the name of player 1');
let name2 = prompt('Type in the name of player 2');
let name3 = prompt('Type in the name of player 3');
let name4 = prompt('Type in the name of player 4');

let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let card4 = document.querySelector('.card4');
let n1 = document.querySelector('.pName1');
let n2 = document.querySelector('.pName2');
let n3 = document.querySelector('.pName3');
let n4 = document.querySelector('.pName4');
let p1 = document.querySelector('.c1Points');
let p2 = document.querySelector('.c2Points');
let p3 = document.querySelector('.c3Points');
let p4 = document.querySelector('.c4Points');
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');

let names = [name1, name2, name3, name4];
let cards = [card1, card2, card3, card4];
let randomNums = [];

let p1Points = 0; // raja
let p2Points = 0; // mantri
let p3Points = 0; // chor
let p4Points = 0; // sipahi

let chorEvent = '';
let sipahiEvent = '';

function startGame() {
    btn.remove();
    btn2.style.display = 'block';

    while (randomNums.length < 4) {
        var r = Math.floor(Math.random() * 4);
        if(randomNums.indexOf(r) === -1) {
            randomNums.push(r);
        }
    }

    for (let i=0; i < 4; i++) {
        cards[i].style.border = '.5px solid #aaa69d';
    }
    
    let raja = names[randomNums[0]];
    let mantri = names[randomNums[1]];
    let chor = names[randomNums[2]];
    let sipahi = names[randomNums[3]];

    let player = {
        0: raja,
        1: mantri,
        2: chor,
        3: sipahi
    }

    n1.innerText = player[0];
    n2.innerText = player[1];
    n3.innerText = player[2];
    n4.innerText = player[3];

    console.log('FIRST', cards[randomNums[0]]);
    console.log('SECOND', cards[randomNums[1]]);
    console.log('THIRD', cards[randomNums[2]]);
    console.log('FOURTH', cards[randomNums[3]]);

    // King
    let icon1 = document.createElement('img');
    icon1.src = "king.png";
    let playerName1 = document.createElement('p');
    playerName1.innerText = player[0]; 
    cards[randomNums[0]].append(icon1, playerName1);

    // Mantri
    let icon2 = document.createElement('img');
    icon2.src = "judge.png";
    let playerName2 = document.createElement('p');
    playerName2.innerText = player[1]; 
    cards[randomNums[1]].append(icon2, playerName2);

    // Chor
    let icon3 = document.createElement('img');
    icon3.src = "thief.png";
    let playerName3 = document.createElement('p');
    playerName3.innerText = player[2]; 
    chorEvent = cards[randomNums[2]];

    // Sipahi
    let icon4 = document.createElement('img');
    icon4.src = "soldier.png";
    let playerName4 = document.createElement('p');
    playerName4.innerText = player[3]; 
    sipahiEvent = cards[randomNums[3]];

    chorEvent.addEventListener('click', ()=> {  
        cards[randomNums[0]].innerHTML = "";
        cards[randomNums[1]].innerHTML = "";
        cards[randomNums[2]].innerHTML = "";
        cards[randomNums[3]].innerHTML = "";

        cards[randomNums[0]].append(icon1, playerName1);
        cards[randomNums[1]].append(icon2, playerName2);
        cards[randomNums[2]].append(icon3, playerName3);
        cards[randomNums[3]].append(icon4, playerName4);

        cards[randomNums[2]].style.border = '10px solid green';

        p1Points += 1000; // raja
        p2Points += 500; // mantri
        p3Points += 0; // chor
        p4Points += 200; // sipahi

        p1.innerText = p1Points;
        p2.innerText = p2Points;
        p3.innerText = p3Points;
        p4.innerText = p4Points;
    })

    sipahiEvent.addEventListener('click', ()=> {
        cards[randomNums[0]].innerHTML = "";
        cards[randomNums[1]].innerHTML = "";
        cards[randomNums[2]].innerHTML = "";
        cards[randomNums[3]].innerHTML = "";

        cards[randomNums[0]].append(icon1, playerName1);
        cards[randomNums[1]].append(icon2, playerName2);
        cards[randomNums[2]].append(icon3, playerName3);
        cards[randomNums[3]].append(icon4, playerName4);

        cards[randomNums[3]].style.border = '10px solid red';

        p1Points += 1000; // raja
        p2Points += 0; // mantri
        p3Points += 700; // chor
        p4Points += 0; // sipahi
        
        p1.innerText = p1Points;
        p2.innerText = p2Points;
        p3.innerText = p3Points;
        p4.innerText = p4Points;
    })
}

function AgainGame() {
    console.log(cards);
    cards[randomNums[0]].innerHTML = "";
    cards[randomNums[1]].innerHTML = "";
    cards[randomNums[2]].innerHTML = "";
    cards[randomNums[3]].innerHTML = "";
    randomNums = [];
    chorEvent = '';
    sipahiEvent = '';
    startGame();
}