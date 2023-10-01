function keyCheck(event) {
    if (event.keyCode === 13) { 
      load()
        }
}

function isUrl(val) {
  const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;
  return urlRegex.test(val);
}
  
function load() {
    const url = document.getElementById("input").value;
    let modifiedUrl = url;
    
    if (!isUrl(url)) {
      modifiedUrl = 'https://www.google.com/search?q=' + url;
    } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
      modifiedUrl = 'http://' + url;
    }
    devhub.openProxy(modifiedUrl)
};

window.keyCheck = keyCheck;
window.load = load;
devhub.isUrl = isUrl;