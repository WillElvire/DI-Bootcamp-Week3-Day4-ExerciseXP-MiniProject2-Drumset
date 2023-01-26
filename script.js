/****************************Drumset***************** */


/**
 * @author: Koua wilfriec elvire
 * @description: Drumset
 * Date : 25/01/2023
 */




// the height of the section must be that of the screen of the window
let section    = document.querySelector('section');
let audio      = document.querySelector('.song');
const songList = ["boom", "clap", "hihat", "kick", "openhat", "ride", "snare", "tink", "tom"];
let boxes      = document.querySelectorAll('.box');


section.style.height = window.innerHeight + "px";

for(let i in songList) {
    boxes[i].addEventListener('click', () => {
       return  playSound(i);
    });
}


function playSound(soundTobePlayedIndex) {
    audio.setAttribute('src', `sounds/${songList[soundTobePlayedIndex]}.wav`);
    return audio.play();
}