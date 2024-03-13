var display = document.querySelector("#num")

function count(){
    var inc = parseInt(display.innerHTML);
    inc++;
    display.innerHTML = inc
}
function reset (){
    display.innerHTML = 0
}