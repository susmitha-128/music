let allMusic =[
   {
      name: "Love and shine",
      artist: "",
      img: "images/love n shine.jpg",
      src: "list/love and shine.mp3",
      index:"1"
   },
   {
      name: "Last to die",
      artist: "",
      img: "images/lasttodie.jpg",
      src: "list/Last to Die.mp3",
      index:"2"
   },
   {
      name: "Double take",
      artist: "Dhruv",
      img: "images/double take.jpg",
      src: "list/double take.mp3",
      index:"3"
   },
   {
      name: "Lucky",
      artist: "Rose",
      img: "images/rose.jpg",
      src: "list/lucky.mp3",
      index:"4"
   },
   {
      name: "Is Mine All Mine",
      artist: "Mitsuki",
      img: "images/my love.jpg",
      src: "list/mylove mitsiki.mp3",
      index:"5"
   },
   {
      name: "Like my father",
      artist: "lilly melon",
      img: "images/like my father.jpg",
      src: "list/like my father.mp3",
      index:"6"
   },
   {
       name: "Slow Dancing",
       artist: "Rose",
       img: "images/slow dancing.jpg",
       src: "list/slow dancing.mp3",
       index:"7"
   },
   {
      name: "Summer Night",
      artist: "",
      img: "images/summer.jpg",
      src: "list/summer night.mp3",
      index:"8"
   },
   {
      name: "Victoria's Secret",
      artist: "lilly melon",
      img: "images/victoria.jpg",
      src: "list/victoria secret.mp3",
      index:"9"
   },
    {
        name: "Daydream",
        artist: "lilly melon",
        img: "images/daydream.jpg",
        src: "list/daydream.mp3",
        index:"10"
     },
     {
        name: "First love",
        artist: "Utada Hikaru",
        img: "images/firstlove.jpg",
        src: "list/first love.mp3",
        index:"11"
     },
     {
        name: "Forever Star",
        artist: "",
        img: "images/foreverstar.jpg",
        src: "list/forever star.mp3",
        index:"12"
     },
     {
        name: "Heather",
        artist: "Conan gray",
        img: "images/heather.jpg",
        src: "list/heather.mp3",
        index:"13"
     },
     {
        name: "If i ain't got you",
        artist: "Rose",
        img: "images/aint got u.jpg",
        src: "list/if i aint got you.mp3",
        index:"14"
     },
     {
        name: "Like my father",
        artist: "lilly melon",
        img: "images/like my father.jpg",
        src: "list/like my father.mp3",
        index:"15"
     },
     {
      name: "Lullaby",
      artist: "",
      img: "images/lulaby.jpg",
      src: "list/Lullaby.mp3",
      index:"16"
   },
     
];

const songListContainer = document.getElementById("songs");
const ulTag = songListContainer.querySelector("ul");



for (let i=0; i < allMusic.length; i++){
   // const songDiv = document.createElement("li");
   let liTag = `<li li-index="${i+1}" >
                  <div class="songcontent">
                        <div class="wrap">
                            <div class="pic">
                                <img src="${allMusic[i].img}" class = "actpic">
                            </div>
                        <div class="songdet">
                        <h7>${allMusic[i].name}</h7>
                        <h6 class="sur">${allMusic[i].artist}</h6>
                        </div>
                        </div>
                        <audio src = "${allMusic[i].src}"></audio>
                        <img src="music/Plus Icon.png" alt="" class="plus">
                    </div>  
                    <img src="music/divider.png" alt="" class="divider">
               </li>           

   `;
   ulTag.insertAdjacentHTML("beforeend", liTag);
  
}

