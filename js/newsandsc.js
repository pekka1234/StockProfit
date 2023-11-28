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



// function for depression should be later added other slowly changing big news
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