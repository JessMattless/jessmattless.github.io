let playerButtons = document.getElementsByClassName("videoPlayer");

for (let i = 0; i < playerButtons.length; i++) {
    playerButtons[i].addEventListener("click", (e) => {
        playerButtons[i].parentNode.getElementsByTagName("video")[0].play();
    });
}