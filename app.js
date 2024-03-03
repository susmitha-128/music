const songblock = document.getElementsByClassName("songcontent"),
musicImg = document.getElementById("pic"),
musicName = document.getElementById("mname"),
mainAudio = document.querySelector("#maintrack"),
playPauseBtn = document.getElementById("play"),
prevBtn = document.getElementById("prev"),
nextBtn = document.getElementById("fd"),
pause = document.getElementById("pause");


 




let musicIndex = 1;

window.addEventListener("load", ()=>{
       loadMusic(musicIndex);
       playingSong();
})

//loadMusic fn
function loadMusic(indexNumb){
    musicName.innerText= allMusic[indexNumb-1].name;
    musicImg.src = allMusic[indexNumb-1].img;
    mainAudio.src = allMusic[indexNumb-1].src;  
}


let isPlaying = false;




function playMusic(){
    isPlaying= true;
    mainAudio.play();
    playPauseBtn.src = "music/pause.png"

    
}

function pauseMusic(){
    isPlaying= false;
    mainAudio.pause();
    playPauseBtn.src = "music/play.png"
}

function prevMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}

function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}


playPauseBtn.addEventListener("click", ()=>{
    isPlaying ? pauseMusic() : playMusic ();
});

prevBtn.addEventListener("click", ()=>{
    prevMusic();
});

nextBtn.addEventListener("click", ()=>{
    nextMusic();
})

let allLiTags = ulTag.querySelectorAll("li");

function playingSong(){

    for(let j=0; j<allLiTags.length; j++){

        if(allLiTags[j].classList.contains("playing") ){
            allLiTags[j].classList.remove("playing");
        }

        if(allLiTags[j].getAttribute("li-index") == musicIndex){
            allLiTags[j].classList.add("playing");
        }
        allLiTags[j].setAttribute("onclick", "clicked(this)");
        
    }
      
}

  
 



function clicked(element){
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
}




