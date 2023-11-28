function update_uachvrd(){
    console.log("hhhh", achvunlocked);
    uachvrd = [];
    taui = 0;
    for(var i = 0; i < achvunlocked.length; i++){
        for(var j = 0; j < achvunlocked[i].length; j++){
            uachvrd.push(achvunlocked[i][j]);
            console.log(achvunlocked[i][j])

            if(achvunlocked[i][j] == 1)taui += 1;
        }
    }
}

// function that changes currenty displayed achievements
function achvchange(w, uuu){
    update_uachvrd();
    console.log(uachvrd);
    var uuua, uuub;
    if(uuu){
        uuua = "";
        uuub = 0;
    }else{
        uuua = "u";
        uuub = 1;
    }
    for(var i = 0; i < 6; i++){
        var vvv = i + (curachvs[w] * 6);
        console.log(vvv, uachvrd[vvv], uachvrd);
        if(uachvrd[vvv] == uuub){
            if(vvv != 23){
                document.getElementById(uuua + "acim" + i.toString()).src = "images/" + achvpics[vvv] + ".png";
                document.getElementById(uuua + "ached" + i.toString()).innerHTML = achcievements[vvv];
                document.getElementById(uuua + "acdesc" + i.toString()).innerHTML = achvdesc[vvv];
            }else{
                document.getElementById("acim" + i.toString()).src = "images/cs.png";
                document.getElementById("ached" + i.toString()).innerHTML = "Coming soon";
                document.getElementById("acdesc" + i.toString()).innerHTML = "New achievements in the next update";
            }
        }
    }
}



// achievements for visual stuff
function achv(){
    document.getElementById("bsscreen").style.display = "none";
    document.getElementById("stockscreen").style.display = "none";
    document.getElementById("newscreen").style.display = "none";
    document.getElementById("achvstats").style.display = "block";
    achvchange(0, true);
    achvchange(0, false);
}

function backfa(){
    document.getElementById("bsscreen").style.display = "block";
    document.getElementById("stockscreen").style.display = "block";
    document.getElementById("newscreen").style.display = "block";
    document.getElementById("achvstats").style.display = "none";
}

// achvlimits stores boundaries when diferent achievements are unlocked

////// UUSI ALUE/////////////////////

// goes down or up achievements
function acdown(){
    if(acmode == 0){
        if(curachvs[0] > 1){
            acmode = 1;
            document.getElementById("acd").innerHTML = "Up (there's more) ↑";
        }
        curachvs[0] += 1;
    }else{
        if(curachvs[0] < 2){
            acmode = 0;
            document.getElementById("acd").innerHTML = "Down (there's more) ↓";
        }
        curachvs[0] -= 1;
    }
    achvchange(0, true);
    achvchange(0, false);
}


// Checks if new achievements have been unlocked
function achvcheck(){
    for(var i = 0; i < achvlimits.length; i++){
        for(var j = 0; j < achvlimits[i].length; j++){
            if(achvunlocked[i][j] == 0){
                if(i == 0){
                    if(stats[0] >= achvlimits[i][j]){
                        console.log(i, j, " Saavutettu");
                        achvunlocked[i][j] = 1;
                    }
                }else if(i == 1){
                    if(bstwac){
                        console.log(i, j, " Saavutettu");
                        achvunlocked[i][j] = 1;
                    }
                }else if(i == 2){
                    if(pwalth >= achvlimits[i][j]){
                        console.log(i, j, " Saavutettu");
                        achvunlocked[i][j] = 1;
                    }
                }else if(i == 3){
                    if(stockowns[j] >= 10000){
                        console.log(i, j, " Saavutettu");
                        achvunlocked[i][j] = 1;  
                    }
                }else if(i == 4){
                    if(stats[1] >= achvlimits[i][j]){
                        console.log(i, j, "Saavutettu");
                        achvunlocked[i][j] = 1;
                    }
                }
            }
        }
    }
}