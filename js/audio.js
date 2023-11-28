// infinitely playing audios
var audio = new Audio("audio/" + names[cur].toString() + ".mp3");
var check2 = 0;
function sound(check){
    if(check == check2 == 0 || check == check2 == 1){
        check2 = 0;
        audio.pause();
        audio = new Audio("audio/" + names[cur].toString() + ".mp3");
        audio.play();
        audio.addEventListener("ended", function(){
            check2 = 1;
            audio.currentTime = 0;
            sound(1);
        });
    }
}
