function keyCheck(event) {
    if (event.keyCode === 13) { 
      load()
    }
}
  
function load() {
    devhub.openProxy(document.getElementById("input").value)
};

window.keyCheck = keyCheck;
window.load = load;