function add() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById("result").innerHTML = a + b;
}

function subtract() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById("result").innerHTML = a - b;
}

function multiply() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById("result").innerHTML = a * b;
}

function divide() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    document.getElementById("result").innerHTML = a / b;
}
