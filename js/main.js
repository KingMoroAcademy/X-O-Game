let turn = "Z";
let title = document.querySelector(".title");
let squares = [];

function done(num1, num2, num3) {
    title.innerHTML = `${squares[num3]} WON`;
    document.getElementById(`item`+num1).style.background = "green";
    document.getElementById(`item`+num2).style.background = "green";
    document.getElementById(`item`+num3).style.background = "green";
    setInterval(function() {title.innerHTML += `.`}, 1000);
    setTimeout(function() {location.reload()}, 4000);
}
function winner() {
    for(let i = 1 ; i < 10 ; i++) {
        squares[i] = document.getElementById(`item${i}`).innerHTML;
    }

    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[3] != "") {
        done(1, 2, 3);
    } else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != "") {
        done(4, 5, 6);
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != "") {
        done(7, 8, 9);
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != "") {
        done(1, 4, 7);
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != "") {
        done(2, 5, 8);
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != "") {
        done(3, 6, 9);
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != "") {
        done(1, 5, 9);
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != "") {
        done(3, 5, 7);
    }
    // We need to add the draw condition
}

function game(id) {
    let element = document.getElementById(id);
    if(element.innerHTML == "" && turn === "Z") {
        element.innerHTML = "Z";
        turn = "M";
        title.innerHTML = "'M' Turn";
    } else if(element.innerHTML == "" && turn === "M") {
        element.innerHTML = "M";
        turn = "Z";
        title.innerHTML = "'Z' Turn";
    }
    winner();
}