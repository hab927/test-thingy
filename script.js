var count = 0;
var addAmount = 1;

function increase() {
    count += addAmount;
    document.getElementById("count").getElementsByClassName("fancy")[0].innerHTML = count;
}

function upgrade() {
    addAmount += 1;
    document.getElementsByClassName("upgradeParam")[0].innerHTML = addAmount;
}