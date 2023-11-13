var count = 0;

function increase() {
    count++;
    document.getElementById("count").getElementsByClassName("fancy")[0].innerHTML = count;
}