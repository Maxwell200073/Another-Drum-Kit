"use strict";

document
    .querySelectorAll(".drum")
    .forEach((el) =>
        el.addEventListener("click", () => playSound(el.textContent))
    );
document.addEventListener("keydown", (e) => playSound(e.key));
const sounds = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3",
};
function playSound(letter) {
    if (letter in sounds) {
        buttonAnimation(letter);
        var audio = new Audio(sounds[letter]);
        audio.play();
    }
}

function buttonAnimation(letter) {
    let activeButton = document.querySelector(`.${letter}`);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 140);
}
