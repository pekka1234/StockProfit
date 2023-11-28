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
    var achvunlocked = [[0, 0, 0], [0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0]];
    var curachvs = [0, 0];
    var acmode = 0;

    console.log(data);
}else{
    // loading from localStorage
    var money = eval(localStorage.getItem("Money"));
    var stockvalues = eval(localStorage.getItem("Stockvalues"));
    var rescha = eval(localStorage.getItem("Rescha"));
    var stockowns = eval(localStorage.getItem("Stockowns"));
    var stats = eval(localStorage.getItem("Stats"));
    var achvunlocked = [];
    achvunlocked.push(eval(localStorage.getItem("ACHV1")));
    achvunlocked.push(eval(localStorage.getItem("ACHV2")));
    achvunlocked.push(eval(localStorage.getItem("ACHV3")));
    achvunlocked.push(eval(localStorage.getItem("ACHV4")));
    achvunlocked.push(eval(localStorage.getItem("ACHV5")));
    var trade_history = JSON.parse(localStorage.getItem("Trades"));
    var curachvs = eval(localStorage.getItem("cura"));
    var acmode = eval(localStorage.getItem("acmo"))[0];

    console.log("ACHV projekti: ", achvunlocked);
}

// saving money, stockvalues, stock ownerships and recent achanges, achievements also will ne saved
function save(){
    localStorage.setItem("Money", money.toString());    
    localStorage.setItem("Stockvalues", "[" + stockvalues.toString() + "]");
    localStorage.setItem("Stockowns", "[" + stockowns.toString() + "]");
    localStorage.setItem("Rescha", "[" + rescha.toString() + "]");
    localStorage.setItem("Stats", "[" + stats.toString() + "]");
    localStorage.setItem("Trades", JSON.stringify(trade_history));
    localStorage.setItem("ACHV1", "[" + achvunlocked[0].toString() + "]");
    localStorage.setItem("ACHV2", "[" + achvunlocked[1].toString() + "]");
    localStorage.setItem("ACHV3", "[" + achvunlocked[2].toString() + "]");
    localStorage.setItem("ACHV4", "[" + achvunlocked[3].toString() + "]");
    localStorage.setItem("ACHV5", "[" + achvunlocked[4].toString() + "]");
    localStorage.setItem("cura", "[" + curachvs.toString() + "]");
    localStorage.setItem("acmo", "[" + acmode.toString() + "]");

    alert("Progress saved! You can exit now");
    window.onbeforeunload = s => false ? "" : null;
}
