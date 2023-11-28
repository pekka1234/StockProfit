function buy(){
    document.getElementById("realbuy").style.display = "block";
    document.getElementById("newscreen").style.display = "none";
    document.getElementById("stockscreen").style.display = "none";
    document.getElementById("buysellscreen").style.display = "none";
    document.getElementById("inbuy").value = Math.floor(money / stockvalues[cur]);
    switch_display("none");
    
}

function sell(){
    document.getElementById("realsell").style.display = "block";
    document.getElementById("newscreen").style.display = "none";
    document.getElementById("stockscreen").style.display = "none";
    document.getElementById("buysellscreen").style.display = "none";
    document.getElementById("ownsell").innerHTML = "Amount of owned stocks: " + stockowns[cur];
    document.getElementById("insell").value = stockowns[cur].toString();
    switch_display("none");
}


// actual stock buing
function rb(){
    var pric = (eval(document.getElementById("inbuy").value) * stockvalues[cur]).toFixed(2);
    // if enough money (cash) and stock amount in integer or and 0
    if(pric <= money && eval(document.getElementById("inbuy").value) >= 1 && Number.isInteger(eval(document.getElementById("inbuy").value))){
        money -= pric;
        // addind records
        stats[0] += 1;
        trade_history.push([0, cur, pric, eval(document.getElementById("inbuy").value)]);
        // stokcowns added
        stockowns[cur] += eval(document.getElementById("inbuy").value);
        document.getElementById("mon").innerHTML = "Cash: " + numberWithSpaces(money.toFixed(2)) + "$";
        document.getElementById("owned").innerHTML = "Stocks owned: " + numberWithSpaces(stockowns[cur]);
    }else{
        alert("Not enough cash or invalid stock amount");
    }
    // setting visual things (the same visual that happen if purchase happened or not)
    document.getElementById("realbuy").style.display = "none";
    document.getElementById("newscreen").style.display = "block";
    document.getElementById("stockscreen").style.display = "block";
    document.getElementById("buysellscreen").style.display = "block";
    switch_display("block");

}



// actual selling
function rs(){
    // checking if enough stock
    var sss = eval(document.getElementById("insell").value);
    if(sss <= stockowns[cur] && sss >= 1 && Number.isInteger(sss)){
        // addind records
        stats[0] += 1;
        trade_history.push([1, cur, stockvalues[cur] * sss, eval(document.getElementById("insell").value)]);

        stockowns[cur] -= sss;
        money += stockvalues[cur] * sss;
        document.getElementById("mon").innerHTML = "Cash: " + numberWithSpaces(money.toFixed(2)) + "$";
        document.getElementById("owned").innerHTML = "Stocks owned: " + numberWithSpaces(stockowns[cur]);
    }else{
        alert("Not enough stocks or invalid stock amount"); 
    }
    // setting visual things (the same visual that happen if purchase happened or not)
    document.getElementById("realsell").style.display = "none";
    document.getElementById("newscreen").style.display = "block";
    document.getElementById("stockscreen").style.display = "block";
    document.getElementById("buysellscreen").style.display = "block";
    switch_display("block");
}


// bying all that is possible, this function is useful because when you normally buy, although the maximum number of stocks you can buy is the default in the input, it can change very quicly amnd the purchase will peobably fail which is annoyung
function ba(){
    var ac = Math.floor(money / stockvalues[cur]);
    // adding records
    trade_history.push([0, cur, ac * stockvalues[cur], ac]);
    if(ac > 0)stats[0] += 1;

    var vv = ac * stockvalues[cur];
    money -= vv;
    stockowns[cur] += ac;
    document.getElementById("mon").innerHTML = "Cash: " + numberWithSpaces(money.toFixed(2)) + "$";
    document.getElementById("owned").innerHTML = "Stocks owned: " + numberWithSpaces(stockowns[cur]);
    bstwac = 1;
}

// selling all
function sa(){
    money += stockvalues[cur] * stockowns[cur];
    // adding records
    trade_history.push([1, cur, stockvalues[cur] * stockowns[cur], stockowns[cur]]);
    if(stockowns[cur] > 0)stats[0] += 1;

    stockowns[cur] = 0;
    document.getElementById("mon").innerHTML = "Cash: " + numberWithSpaces(money.toFixed(2)) + "$";
    document.getElementById("owned").innerHTML = "Stocks owned: " + numberWithSpaces(stockowns[cur]);
}