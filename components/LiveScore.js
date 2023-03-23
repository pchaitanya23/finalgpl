let showScore = ()=>{
    let liveScore= document.getElementsByClassName('LiveScore');
    if (liveScore.style.visibility=='visible'){
        liveScore.style.visibility='hidden';
    } else{
        liveScore.style.visibility='visible';
    }
}