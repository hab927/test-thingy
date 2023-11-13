var count = 0;
var addAmount = 1;
var addAddAmount = 1;

function increase() {
    count += addAmount;
    document.getElementById("count").getElementsByClassName("fancy")[0].innerHTML = count;
}

function upgrade() {
    addAmount += addAddAmount;
    document.getElementById("upgradeParam").innerHTML = addAmount;
}

function upgradeUpgrade() {
    addAddAmount += 1;
    document.getElementById("uuparam").innerHTML = addAddAmount;
}