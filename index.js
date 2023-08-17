function rotateDice(){
    document.getElementById("number").innerHTML = ` ${Math.floor(Math.random() * 7)}`
}

function clearAll(){
    document.getElementById("number").innerHTML = ""
}

