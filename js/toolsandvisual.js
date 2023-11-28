// adding space between 3 digits
function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

function switch_display(s){
    document.getElementById("name").style.display = s;
    document.getElementById("desc").style.display = s;
    document.getElementById("image").style.display = s;
    document.getElementById("valuefor").style.display = s;
    document.getElementById("chart_div0").style.display = s;
    document.getElementById("buysellscreen").style.display = s;
}

function info(){
    alert("Trade stocks & get rich");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// swicth name desc and image to selected stock
function stock(num){
    document.getElementById("name").innerHTML = names[num] + " Company Co. Inc.";
    document.getElementById("image").src = "images/" + names[num] + ".png";   
    document.getElementById("desc").innerHTML = descs[num]; 
    document.getElementById("value").innerHTML = "Price per stock: " + numberWithSpaces(stockvalues[num]) + "$";
    document.getElementById("change").innerHTML = "Recent change: " + ((rescha[cur]<0?"":"+") + rescha[cur]) + "%";
    document.getElementById("owned").innerHTML = "Stocks owned: " + numberWithSpaces(stockowns[num]);
    console.log(numberWithSpaces(stockvalues[num]), "ddd");
    cur = num;
}


console.log("ffff");

// calcualtes recent change and impliments it (current / previosu - 1) * 100 <- that is probably correct
function recentchange(){
    setTimeout(function(){
        rescha = [];
        // in this the counting actually happens
        for(var r = 0; r < 9; r++){
            var v = ((stockvalues[r] / prevstock[r] - 1) * 100).toFixed(2);
            rescha.push(v);
        }

        document.getElementById("change").innerHTML = "Recent change: " + ((rescha[cur]<0?"":"+") + rescha[cur]) + "%";
        
        // setting prevstock last so it always shows the previous stocks from second ago so recent change can be counted
        prevstock = [];
        for(var j = 0; j < 9; j++){
            prevstock.push(stockvalues[j]);
        }
        stats[1] += 1;

        document.getElementById("hau").innerHTML = "Achievements unlocked: " + taui + " / 23";
        document.getElementById("lentr").innerHTML = "Trades made: " + stats[0];
        document.getElementById("lenpl").innerHTML = "Time played: " + stats[1] + "s";
        
        achvcheck();
        recentchange();
    }, 1000);

}