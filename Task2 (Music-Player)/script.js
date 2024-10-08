// DOM_MANIPLATION

let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

//MUSIC ARRAY-OBJECTS
const music_list = [
  {
    img: "Images/Image1.jpeg",
    name: "Millionaire",
    artist: "Honey Singh",
    music: "Music/Music1.mp3",
  },
  {
    img: "Images/Image2.jpeg",
    name: "Tumhare Hi Rahenge Hum",
    artist: "Shilpa Rao, Amitabh Bhattacharya, Sachin–Jigar, Varun Jain",
    music: "Music/Music2.mp3",
  },
  {
    img: "Images/Image3.jpeg",
    name: "Aayi Nai",
    artist:
      "Pawan Singh, Simran Chaudhary, Divya Kumar, Amitabh Bhattacharya, Sachin–Jigar",
    music: "Music/Music3.mp3",
  },
  {
    img: "Images/Image4.jpeg",
    name: "Mitran Da Junction",
    artist: "Diljit Dosanjh",
    music: "Music/Music4.mp3",
  },
  {
    img: "Images/Image5.jpeg",
    name: "Diamond Ni",
    artist: "Aditya Gadhvi, Jigar Saraiya, and Sachin–Jigar",
    music: "Music/Music5.mp3",
  },
  {
    img: "Images/Image6.jpeg",
    name: "Rabb Warga",
    artist: "Jubin Nautiyal",
    music: "Music/Music6.mp3",
  },
  {
    img: "Images/Image7.jpeg",
    name: "Tainu Khabar Nahi",
    artist: "Amitabh Bhattacharya, Arijit Singh, and Sachin–Jigar",
    music: "Music/Music7.mp3",
  },
  {
    img: "Images/Image8.jpeg",
    name: "Hind Ke Sitara",
    artist: "Anurag Saikia, Gayatri Thakur Vyas, and Manoj Tiwari",
    music: "Music/Music8.mp3",
  },
  {
    img: "Images/Image9.jpeg",
    name: "Chaleya",
    artist: "Arijit Singh and Shilpa Rao",
    music: "Music/Music9.mp3",
  },
  {
    img: "Images/Image10.jpeg",
    name: "Choo Lo",
    artist: "The Local Train",
    music: "Music/Music10.mp3",
  },
  {
    img: "Images/Image11.jpeg",
    name: "Dheere Dheere",
    artist: "Anirudh Ravichander, Shilpa Rao and Kausar Munir.",
    music: "Music/Music11.mp3",
  },
  {
    img: "Images/Image12.jpeg",
    name: "Jo Tum Mere Ho",
    artist: "Anuv Jain",
    music: "Music/Music12.mp3",
  },
  {
    img: "Images/Image13.jpeg",
    name: "Husn",
    artist: "Anuv Jain",
    music: "Music/Music13.mp3",
  },
  {
    img: "Images/Image14.jpeg",
    name: "Tum Jo Aaye",
    artist: "Rahat Fateh Ali Khan and Tulsi Kumar",
    music: "Music/Music14.mp3",
  },
  {
    img: "Images/Image15.jpeg",
    name: "Akhiyaan Gulaab",
    artist: "Mitraz",
    music: "Music/Music15.mp3",
  },
  {
    img: "Images/Image16.jpeg",
    name: "Tamatar Bade Majedaar",
    artist: "Unknown",
    music: "Music/Music16.mp3",
  },
];

loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;

  now_playing.textContent =
    "Playing music" + (track_index + 1) + " of " + music_list.length;
  updateTimer = setInterval(setUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

//RESET FUNCTION

function reset() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

//RANDOM TRACK FUNCTION

function randomTrack() {
  isRandom ? pauseRandom() : playRandom();
}

function playRandom() {
  isRandom = true;
  randomIcon.classList.add("randomActive");
}
function pauseRandom() {
  isRandom = false;
  randomIcon.classList.remove("randomActive");
}

//REPEAT TRACK
function repeatTrack() {
  let current_index = track_index;
  loadTrack(current_index);
  playTrack();
}

//PLAY-PAUSE TRACK
function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  wave.classList.add("loader");
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  wave.classList.remove("loader");
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

//NEXT-TRACK-BUTTON-FUNCTION
function nextTrack() {
  if (track_index < music_list.length - 1 && isRandom === false) {
    track_index += 1;
  } else if (track_index < music_list.length - 1 && isRandom === true) {
    let random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
  } else {
    track_index = 0;
  }
  loadTrack(track_index);
  playTrack();
}

//PREV-TRACK-BUTTON-FUNCTION
function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = music_list.length - 1;
  }
  loadTrack(track_index);
  playTrack();
}

//MUSIC-SEEK-SLIDER

function seekTo() {
  let seekTo = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekTo;
}

//MUSIC-VOLUME-SLIDER
function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

//DOM-UPDATE
function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );

    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
