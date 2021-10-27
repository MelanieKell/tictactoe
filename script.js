let fields = []; //leeres array 
let gameOver = false;  //variable für spiel beenden
let currentShape = 'cross';



function fillShape(id) { // function um die felder mmit kreuz oder kreis zu befüllen. id steht hier für den platz im array und wird als funktionsparameter genutzt.

    if (!fields[id] && !gameOver) {  // das ! kehrt false in true um mit !! würde es wieder false bedeuten
        if (currentShape == 'cross') {  // if abfrage um spieler zu wechseln, damit abwechselnd kreuz und kreis gefüllt wird.
            currentShape = 'circle'; //wenn aktuell kreuz gesetzt wurde, dann soll circle danach gesetzt werden.
            document.getElementById('player-1').classList.remove('player-inactive'); // um anzuzeigen welcher spieler gerade aktiv ist
            document.getElementById('player-2').classList.add('player-inactive');
        }

        else {
            currentShape = 'cross'; //sonst soll es cross sein.
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        }
        fields[id] = currentShape; //hier sagen wir, dass das array an der jeweiligen stelle(id) die jeweilige aktuelle Form ist. also kreuz oder kreis
        console.log(fields); // um zu prüfen ob abwechselnd das array mit der jeweiligen form befüllt wird



        draw() // wird hier aufgerufen um das spielfeld neu zu bemalen
        checkForWin() //um immer zu prüfen wann jemand gewonnen hat
    }
}


function restart() {
    gameOver = false;
    fields = []
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');

    for (let i = 1; i < 8; i++) {
        document.getElementById('line-' + i).classList.add('d-none');

    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');

    }

}

function draw() {  // wird durch klicken auf ein td element aufgerufen. die function dient dazu , dass die klasse d-none entfernt wird und somit das jeweilige element angezeigt wird

    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {  //wenn fields an der stelle 0 circle entspricht, dann...
            document.getElementById('circle-' + i).classList.remove('d-none'); // wird die klasse d-none entfernt. circle- ohne eine genaue id anzugeben, sondern +i, weil dies ja für die jeweilige angeklcikte id im jweileigen feld gilt

        }
        if (fields[i] == 'cross') {  //s.o. nur für cross
            document.getElementById('cross-' + i).classList.remove('d-none');

        }
    }

}


function checkForWin() {  //um zu prüfen wer gewonnen hat mit if abfragen für alle gewinnmöglichkeiten
    let winner;

    //first row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) { // das letzte && fields[0] um zu prüfen ob vorher undefined ist
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';

    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    }


    if (winner) {
        console.log('gewonnen:', winner);
        gameOver = true;

        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 2000);

    }
}