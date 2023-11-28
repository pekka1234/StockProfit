document.getElementById("mon").innerHTML = "Cash: " + numberWithSpaces(money.toFixed(2)) + "$";

console.log(data);
console.log(localStorage.getItem("Rescha"),localStorage.getItem("Stockowns"),localStorage.getItem("Stockvalues"),localStorage.getItem("Money"),JSON.parse(localStorage.getItem("Data")));


window.onbeforeunload = s => true ? "" : null;

stock(0);

slowchange();

fnews();

console.log(achvunlocked);

// prevstock needs to be put equal to stock values in a pecial way so it doesnt change real time
for(var j = 0; j < 9; j++){
    prevstock.push(stockvalues[j]);
}

recentchange();

rvbn();
