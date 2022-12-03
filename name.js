let arrayOfRequired1 = [];
arrayOfRequired1.push(document.getElementById('playerA'));
arrayOfRequired1.push(document.getElementById('playerB'));

sessionStorage["WhosTurn"]=0;

document.getElementById('playerA').addEventListener('input', () => {
    sessionStorage.setItem("playerA", document.getElementById("playerA").value);
    sessionStorage["playerAScore"] = 0;
})
document.getElementById('playerB').addEventListener('input', () => {
    sessionStorage.setItem("playerB", document.getElementById("playerB").value);
    sessionStorage["playerBScore"] = 0;
})

function next(arrayOfRequired) {
    
    var notFilled = 0;
    for (var i = 0; i < arrayOfRequired.length; i++) {

        if (arrayOfRequired[i].value.trim().length === 0) {
            document.getElementById(arrayOfRequired[i].id).style.borderColor = "red";
            document.getElementById(arrayOfRequired[i].id).style.borderWidth = "3px";
            notFilled++;
        }
        else {

            document.getElementById(arrayOfRequired[i].id).style.borderColor = "grey";
        }
    }
    if(notFilled==0)
    {
        location.href = "main.html";
    }
}
