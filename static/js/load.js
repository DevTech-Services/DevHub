const openWindowBtn = document.getElementById('openWindowBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const frame = document.getElementById('frame');

// Only runs in load.html
if (frame) {
    // sets iframe source by getting url in
    if (localStorage.getItem('url')) {
      // frame.src = `/~/route?url=${localStorage.getItem("url")}`
      frame.src = `/~/`+localStorage.getItem("url")
    }

    // new window thingy
    openWindowBtn.addEventListener('click', () => {
      window.open(frame.src);
    });

    // fullscreen stuff

    fullscreenBtn.addEventListener('click', () => {
      toggleFullscreen(); 
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'f' || event.key === 'F') {
        toggleFullscreen();
      }
    });


    // this function was %100 copied from stackoverflow lol
    function toggleFullscreen() {
      if (document.fullscreenElement) {
        // exit fullscreen
        if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      } else {
        // enter fullscreen
        if (frame.requestFullscreen) {
        frame.requestFullscreen();
      } else if (frame.mozRequestFullScreen) {
        frame.mozRequestFullScreen();
      } else if (frame.webkitRequestFullscreen) {
        frame.webkitRequestFullscreen();
      } else if (frame.msRequestFullscreen) {
        frame.msRequestFullscreen();
      } else {
        alert("Your device/browser doesnt support fullscreen.")
      }
      }
    }

    // reload btn
    document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("reloadBtn").addEventListener("click", () => {
        document.getElementById("frame").contentWindow.location.reload();
      });
    });
}
