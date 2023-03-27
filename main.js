var names = ["Oil", "Mining", "Electronics", "Wood", "Farming", "Casino", "Ship", "Book", "Military"]
var descs = ["Oil Company Co. Inc. pumps oil from Saudi-Arabia to Venezuela. It was founded in 1898 and is a very stable company.", "Mining Company Co. Inc. mines gold, copper, zinc, aluminium, silver and coal from all over the world. It's CEO is Jack Minington who takes big risks.", "Electronics Company Co. Inc. makes all kinds of of eletcronics but is specialized to circuits. It is a new fastly growing business.", "Wood Company Co. Inc. cuts wood from forests in Russia. It has made good deals in the past and is very profitable.", "Farming Company Co. Inc. farms bananas, cocoa beans, watermelons and vegetables. It has good relations with Ship Company which transports it's food.", "Casino Company Co. Inc. has 101 casinos in 23 countries. They have very good gambling games but the company is very new.", "Ship Company Co. Inc. has ships that transport passengers and cargo. It is very stable and none of it's ships have shinken.", "Book Company Co. Inc. publishes books in many languages. It was founded in 1714 by the inventor of the press machine.", "Military Company Co. Inc. sells weapons, ammunition tanks and warships to Mexico, China and North-Korea. The company's new nuke program looks promising and higly profitable."]
var cur = 0;
let data;
data = [];



// adding space between 3 digits
function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

// this is for the midlle screen to turn on and off display so that buyng and selling screen can fit int
function switch_display(s){
    document.getElementById("name").style.display = s;
    document.getElementById("desc").style.display = s;
    document.getElementById("image").style.display = s;
    document.getElementById("valuefor").style.display = s;
    document.getElementById("chart_div0").style.display = s;
    document.getElementById("buysellscreen").style.display = s;
}

// if it is first time playing or if the game has saved progress
if(localStorage.getItem("Money") == null){
    // settings fro the first time players
    var money = 100;
    var stockvalues = [49.12, 12.91, 22.11, 37.45, 46.98, 5.88, 68.18, 50.67, 88.85];
    var rescha = [0,0,0,0,0,0,0,0,0];
    var stockowns = [0,0,0,0,0,0,0,0,0];
    // for achievements: stats go like this: trades, seconds played, depressions (global depression hits...), rising seasons (economy going well -ev...)
    var stats = [0,0,0,0];

    // all trade history, what stock, what amount (stocks and cash), sell or buy. This will be used in some stats counter
    var trade_history = [];

    console.log(data);
}else{
    // loading from localStorage
    var money = eval(localStorage.getItem("Money"));
    var stockvalues = eval(localStorage.getItem("Stockvalues"));
    var rescha = eval(localStorage.getItem("Rescha"));
    var stockowns = eval(localStorage.getItem("Stockowns"));
    var stats = eval(localStorage.getItem("Stats"));
    var trade_history = JSON.parse(localStorage.getItem("Trades"));
}

document.getElementById("mon").innerHTML = "Cash: " + numberWithSpaces(money.toFixed(2)) + "$";

console.log(data);

console.log(localStorage.getItem("Rescha"),localStorage.getItem("Stockowns"),localStorage.getItem("Stockvalues"),localStorage.getItem("Money"),JSON.parse(localStorage.getItem("Data")));

// for unsaved progress not to be lost
window.onbeforeunload = s => true ? "" : null;

stock(0);

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

function info(){
    alert("Trade stocks & get rich")
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// slow stock changes, not impacted by news
function slowchange(){
    // for loop goes trough each stock and either decreases or inreases its value
    for(var i = 0; i < 9; i++){
        // pn is for positive or negative change
        // r is the value that decides how big change
        var r = getRandomInt(10);
        var pn = getRandomInt(2);
        if(pn == 0)pn = -1;
        stockvalues[i] = parseFloat((stockvalues[i] + pn * (stockvalues[i] * (r / 200))).toFixed(2));
        if(stockvalues[i] < 1){
            stockvalues[i] += 0.1;
        }
    }
    // setting it to visual display and waiting 200 millisecs to do this again
    document.getElementById("value").innerHTML = "Price per stock: " + numberWithSpaces(stockvalues[cur]) + "$";

    setTimeout(function(){slowchange();}, 200);
}

function achv(){
    // TODO
}

slowchange();

// Chart Drawing

// This shall never be touched
function drawChart() {
// create data object with default value
    for(var i = 0; i < 9; i++){
            var da = google.visualization.arrayToDataTable([
            ['Time', names[i]],
            [0,0],
        ]);
        data.push(da);
    }
    
    // create options object with titles, colors, etc.
    let options = {
        title: "Stock price",
        hAxis: {
        textPosition: 'none',
        },
        vAxis: {
        title: "Value"
        }
    };


    // draw chart on load
    let chart = new google.visualization.LineChart(
        document.getElementById("chart_div0")
    );
    chart.draw(data, options);
    // interval for adding new data every 250ms
    let index = 0;
    setInterval(function () {
    // instead of this random, you can make an ajax call for the current cpu usage or what ever data you want to display
    for(var t = 0; t < 9; t++){
        data[t].addRow([index, stockvalues[t]]);
    }
    chart.draw(data[cur], options);
    index++;
    // also doing buyng screen stuff becouse this is run so often
    document.getElementById("bp").innerHTML = "Price per stock: " + numberWithSpaces(stockvalues[cur]) + "$";
    document.getElementById("cp").innerHTML = "Current price: " + numberWithSpaces((eval(document.getElementById("inbuy").value) * stockvalues[cur]).toFixed(2)) + "$";
    document.getElementById("sp").innerHTML = "Value per stock: " + stockvalues[cur] + "$";
    document.getElementById("ssp").innerHTML = "Current gain: " + numberWithSpaces((eval(document.getElementById("insell").value) * stockvalues[cur]).toFixed(2)) + "$";

    // wealth
    var tem = 0;
    for(var hh = 0; hh < 9; hh++){
        tem += stockvalues[hh] * stockowns[hh];
    }
    document.getElementById("wel").innerHTML = "Wealth: " + numberWithSpaces((money + tem).toFixed(2)) + "$";
    }, 100);
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

google.charts.load("current", {
    packages: ["corechart", "line"]
});
google.charts.setOnLoadCallback(drawChart);


var news = [
"Ship Company Co's ship sank in the Atlantic \n-What a loss",
"Many airplanes fell from sky -Big win for Ship Company",
"New fertilizer invented in Australia \n-Farmers excited",
"Exceptionally long dry season bad for farming indrusty",
"Oil price goes to the clouds \n-Oil Company very happy",
"Big oil burn in Oil Company's storage -Oil company sad",
"Jack Minington died \n-Mining Company in total chaos",
"New gold areas found in Klondike -Mining Company celebrates",
"Major forest fires in sourthern hempispehre \n-Price of wood exlpoded, Wood Company celebrates",
"Wood Company's headquarters lost internet -Everything stuck",
"World War 3 started \n-Military Company very happy",
"Military company's bomb storage exploded -CEO quits",
"Gambling banned in China -Casino Company terrified",
"Casino taxes removed from Europe -Casino company celebrates",
"Big electrical breaks so people buy more books -Book company very happy",
"Africa is digitalizing fast -Book company griefs",
"Canada buys 100000000000 circuits for digital progress -Electronics company very happy",
"Electronics company's factory ran out of chips -Very bad",
"Global depression hits all indrusties \n-Very bad for economy",
"Economy going very well -Everyone happy",
];
var newseffects = ["6b","6c","4c","4b","0c","0b","1b","1c","3c","3b","8c","8b","5b","5c","7c","7b","2c","2b","!b","!g"];
// function for depression should be later added other slowly changing big news
var th = 0;
function depress(val){
    var  multiplier = 1.07;
    if(val == "b"){
        multiplier = 0.95;
        console.log("he")
    }
    setTimeout(function(){
        for(var f = 0; f < 9; f++){
            stockvalues[f] = stockvalues[f] * multiplier;
        }
        th += 1;
        if(th < 21){
            depress(val);
        }else{
            th = 0;
        }
    }, 500);
}


// randomizes news and creates their effect on economy

function fnews(){
    var wait = getRandomInt(60);
    setTimeout(function(){
        var selnew = getRandomInt(20);

        // moving news list objs
        for(var g = 9; g > 0; g--){
            document.getElementById("n" + g.toString()).innerHTML = document.getElementById("n" + (g - 1).toString()).innerHTML;   
        }
        document.getElementById("n0").innerHTML = news[selnew];

        // creating economy effects
        var temp = newseffects[selnew];
        if(temp.charAt(0) != "!"){
            newtranslate = {"b": 0.7, "g": 1.2, "c": 1.4, "d": 0.67}
            stockvalues[parseInt(newseffects[selnew].charAt(0))] = stockvalues[parseInt(newseffects[selnew].charAt(0))] * newtranslate[newseffects[selnew].charAt(1)];
        }else{
            depress(temp.charAt(1));
        }
        fnews();
    }, wait * 300);
}

fnews();

// prevstock needs to be put equal to stock values in a pecial way so it doesnt change real time
var prevstock = [];
for(var j = 0; j < 9; j++){
    prevstock.push(stockvalues[j]);
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
        recentchange();
    }, 1000);

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

// running this function that will recurse itself in the future
recentchange();

var rbnews = [
"Saudi-Arabia and Venezuela are staring to run out of oil -Oil company in chaos",
"Mining company's businesses keep failing, investors sell stocks -Massive value lose",
"New study finds out that electronic devices are radioactive -Global ban on Electronics company's products",
"Russia bans Wood company for coworking with usa -Wood company near end",
"Farming company near banckrupcy when all investors panic and sell thei stocks becouse of recent news about carrots being unhealthy",
"UN forbids gambling -Casino company has to business illegally",
"Ship company's massive tax fraud got revealed -Ship company now in massive depts and CEO to jail",
"Book company's libraries in United States got nationalized -Book Company near banckrupcy",
"Military Companys new rival takes all income -Military company has to sell with lose"];

// function for rare very bad news like bankrupt big depths but these are really rare, they also keep prices not too high
function rvbn(){
    setTimeout(function(){
        // change is one in 50 that major stock decrease will happen
        var preran = getRandomInt(50);
        if(preran == 7){
            var ran = getRandomInt(9);
            for(var g = 9; g > 0; g--){
                document.getElementById("n" + g.toString()).innerHTML = document.getElementById("n" + (g - 1).toString()).innerHTML;   
            }
            document.getElementById("n0").innerHTML = rbnews[ran];

            if(stockvalues[ran] > 100000000000){
                stockvalues[ran] = stockvalues[ran] * 0.0000001;
            }else{
                stockvalues[ran] = stockvalues[ran] * 0.1;
            }
        }
        rvbn();
    },5000);
}

rvbn();

// saving money, stockvalues, stock ownerships and recent achanges, achievements also will ne saved
function save(){
    localStorage.setItem("Money", money.toString());    
    localStorage.setItem("Stockvalues", "[" + stockvalues.toString() + "]");
    localStorage.setItem("Stockowns", "[" + stockowns.toString() + "]");
    localStorage.setItem("Rescha", "[" + rescha.toString() + "]");
    localStorage.setItem("Stats", "[" + stats.toString() + "]");
    localStorage.setItem("Trades", JSON.stringify(trade_history));

    alert("Progress saved! You can exit now");
    window.onbeforeunload = s => false ? "" : null;
}