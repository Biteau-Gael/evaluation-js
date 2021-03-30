
let startGame, diceNumber, global1, global2, round, playerTurn, winScore

/* Pour le bouton New Game */

var newgame = document.getElementById('newgame')

function NewGame() {
    document.getElementById('score-joueur1').textContent = 0;
    document.getElementById('score-joueur2').textContent = 0;
    document.getElementById('score-temp-joueur1').textContent = 0;
    document.getElementById('score-temp-joueur2').textContent = 0;
    document.getElementById('résultat-dé').src = 'Images/1.png';
    document.getElementById('tour-joueur1').style.display = 'inline';
    document.getElementById('tour-joueur2').style.display = 'none';

    startGame = true;
    diceNumber = 0;
    global1 = 0;
    global2 = 0;
    round = 0;
    playerTurn = 1;
    winScore = 100;
}

newgame.addEventListener('click', NewGame)

    /* Pour le bouton Roll Dice*/
var rolldice = document.getElementById('rolldice')

function RollDice() {
    if (startGame) {

        var dice = Math.floor(Math.random() * 6 + 1);
        var diceImg = document.querySelector('.dice img');

        diceImg.src = 'Images/' + dice + '.png';


        if (dice !== 1) {
            round+=dice;
            document.getElementById('score-temp-joueur' + playerTurn).textContent = round;
        } else {
            NextPlayer()
        }
    }
}

rolldice.addEventListener('click', RollDice)

/* Pour le bouton Hold */

var hold = document.getElementById('hold')

function Hold() {
    if (playerTurn === 1) {
        global1 += round;
        document.getElementById('score-joueur' + playerTurn).textContent = global1;
        Win()
    } else {
        global2 += round;
        document.getElementById('score-joueur' + playerTurn).textContent = global2;
        Win()
    }
}

hold.addEventListener('click', Hold)

/* fonction NextPlayer*/

function NextPlayer() {
    if (playerTurn === 1) {
        playerTurn = 2
        round = 0
        document.getElementById('score-temp-joueur1').textContent = 0;
        document.getElementById('tour-joueur1').style.display = 'none';
        document.getElementById('tour-joueur2').style.display = 'inline';
    } else {
        playerTurn = 1
        round = 0
        document.getElementById('score-temp-joueur2').textContent = 0;
        document.getElementById('tour-joueur2').style.display = 'none';
        document.getElementById('tour-joueur1').style.display = 'inline';
    }
    alertNextPlayer()
}

/* Pour la fonction Win*/

function Win() {
    if  (global1 >= winScore || global2 >= winScore) {
        alertWin()
        NewGame()
    } else {
        NextPlayer()
    }
}

function alertNewGame() {
    swal ("Une nouvelle partie va bientôt commencer !");
}

function alertNextPlayer () {
    swal ("Bien tenté, joueur suivant !");
}

function alertWin(){
    swal ('Bravo joueur ' + playerTurn +' Vous avez gagné !',"Une nouvelle partie va bientôt commencer");
}