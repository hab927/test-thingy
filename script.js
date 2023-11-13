function clickIncrease() {
    var counterElement = document.getElementById("counter").getElementsByClassName("fancy")[0];
    var currentValue = parseInt(counterElement.innerHTML);
    counterElement.innerHTML = currentValue + 1;
}