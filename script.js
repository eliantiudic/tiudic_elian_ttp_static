function currentTime(){

    let currentDate = new Date();
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();

    if(h>12){
        h=h-12;
    }
    if(h<10){
        h='0'+h;
    }
    if(m<10){
        m='0'+m;
    }
    if(s<10){
        s='0'+s;
    }

    let myTime = h+":"+m+":"+s;
    let clock =document.getElementById("time");
    clock.innerText = myTime;

    setTimeout("currentTime()",1000);
}
currentTime();