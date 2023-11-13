var count = 0;
var addAmount = 1;
var addAddAmount = 1;

var mainNumHTML = document.getElementById("count");

function increase() {
    count += addAmount;
}

function upgrade() {
    addAmount += addAddAmount;
    document.getElementById("upgradeParam").innerHTML = addAmount;
}

function upgradeUpgrade() {
    addAddAmount += 1;
    document.getElementById("uuparam").innerHTML = addAddAmount;
}

function scientificNotation() {
    if (count < 1000) {
        mainNumHTML.innerHTML = count;
    }
    else {
        exp = String(Math.floor(Math.log10(count)));
        base = String((count / (10 ** exp)).toFixed(3));
        mainNumHTML.innerHTML = base + "e" + exp;
    }
}