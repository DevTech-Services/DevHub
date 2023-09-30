function keyCheck(event) {
    if (event.keyCode === 13) { 
      load()
        }
      }
window.keyCheck = keyCheck;
  
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
  window.load = load;