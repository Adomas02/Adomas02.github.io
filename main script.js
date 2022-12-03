var turnCount = 0;

let boxArr = document.querySelectorAll('.box');

document.getElementById("scoreA").innerHTML = sessionStorage.getItem("playerA") + " " + (sessionStorage.getItem("playerAScore").length - 1);
document.getElementById("scoreB").innerHTML = sessionStorage.getItem("playerB") + " " + (sessionStorage.getItem("playerBScore").length - 1);

if ((sessionStorage.getItem("WhosTurn").length - 1) == 0) {
    document.getElementById("whosTurn").innerHTML = "It's " + sessionStorage.getItem("playerA") + " turn";
}
else {
    document.getElementById("whosTurn").innerHTML = "It's " + sessionStorage.getItem("playerB") + " turn";
}

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function onPlay() {
        var whosTurn = sessionStorage.getItem("WhosTurn").length - 1;
        if (item.innerHTML == "") {
            if (whosTurn == 0) {
                item.innerHTML = "X";
                sessionStorage["WhosTurn"] += 1;

                turnCount++;
                document.getElementById("whosTurn").innerHTML = "It's " + sessionStorage.getItem("playerB") + " turn";
            }
            else {
                item.innerHTML = "O";
                sessionStorage["WhosTurn"] -= 1;
                turnCount++;
                document.getElementById("whosTurn").innerHTML = "It's " + sessionStorage.getItem("playerA") + " turn";
            }
            if (turnCount >= 5) {
                end();
            }
        }

    })
})
function end() {
    if (isWin()) {
        var winner;
        if (sessionStorage.getItem("WhosTurn") == 0) {
            winner = sessionStorage.getItem("playerB");
            sessionStorage["playerBScore"] += 1;
        }
        else {
            winner = sessionStorage.getItem("playerA");
            sessionStorage["playerAScore"] += 1;
        }
        document.getElementById("whosTurn").innerHTML = "Winner is " + winner + "!";

        document.getElementById("scoreA").innerHTML = sessionStorage.getItem("playerA") + " " + (sessionStorage.getItem("playerAScore").length - 1);
        document.getElementById("scoreB").innerHTML = sessionStorage.getItem("playerB") + " " + (sessionStorage.getItem("playerBScore").length - 1);

        addRemButt();
        removeClick();
    }
    else if (turnCount > 8) {
        document.getElementById("whosTurn").innerHTML = "It's a draw";
        addRemButt();
    }

}
function removeClick() {
    document.querySelectorAll('.box').forEach(item => {
        if (item.innerHTML == "") {
            item.setAttribute("class", "disabledBox");
        }
    })
}
function addRemButt() {
    var remacthButt = document.createElement("button");
    remacthButt.setAttribute("id", "remButton");
    document.getElementById('buttBox').appendChild(remacthButt);
    document.getElementById('remButton').innerHTML = "Rematch!";
    document.getElementById('remButton').addEventListener('click', function rematch() {
        location.href = "main.html";
    })

}
function isWin() {
    for (i = 0; i < 7; i += 3) {
        if (boxArr[i].innerHTML == boxArr[i + 1].innerHTML && boxArr[i + 1].innerHTML == boxArr[i + 2].innerHTML && boxArr[i].innerHTML != "") {
            for (j = i; j < i + 3; j++) {
                boxArr[j].style.color = "red";
            }
            return true;
        }
    }
    for (i = 0; i < 3; i++) {
        if (boxArr[i].innerHTML == boxArr[i + 3].innerHTML && boxArr[i + 3].innerHTML == boxArr[i + 6].innerHTML && boxArr[i].innerHTML != "") {
            for (j = i; j < i + 7; j += 3) {
                boxArr[j].style.color = "red";
            }
            return true;
        }
    }
    if (boxArr[0].innerHTML == boxArr[4].innerHTML && boxArr[4].innerHTML == boxArr[8].innerHTML && boxArr[0].innerHTML != "") {
        for (i = 0; i < 9; i += 4) {
            boxArr[i].style.color = "red";
        }
        return true;
    }
    if (boxArr[2].innerHTML == boxArr[4].innerHTML && boxArr[4].innerHTML == boxArr[6].innerHTML && boxArr[2].innerHTML != "") {
        for (i = 2; i < 7; i += 2) {
            boxArr[i].style.color = "red";
        }
        return true;
    }
    return false;
}
