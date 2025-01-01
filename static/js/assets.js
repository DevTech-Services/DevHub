// Cloak Handler
devhub.cloak = function(url, redirect) {
  window.open('about:blank').document.write(`<head><title>New Tab</title></head><body><style>body {margin: 0;}</style><iframe style="border: none;" src="${url}" width="100%" height="100%"></body><script>onbeforeunload()</script>`);
  if (redirect) {
    window.onbeforeunload = null
    window.location.replace(redirect)
  }
};

// iFrame (fullscren) handler
devhub.frame = function(url) {
  document.documentElement.remove();
  let iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = window.innerWidth;
  iframe.height = window.innerHeight;
  document.appendChild(iframe);
};

// Proxy Opener
devhub.openProxy = function(url) {
  let modifiedUrl = url;
    
  if (!devhub.isUrl(url)) {
    modifiedUrl = 'https://www.google.com/search?q=' + url;
  } else if (!(url.startsWith('https://') || url.startsWith('http://'))) {
    modifiedUrl = 'http://' + url;
  }

  localStorage.setItem("url", modifiedUrl);
  window.onbeforeunload = null
  location.href = "/load";
};

// Custom console.log
devhub.log = function(data) {
  return eval(console_log("%c[DevHub]%c", "color: purple; font-weight: bold", "", data));
};
// console.log override
console_log = console.log;
console.log = devhub.log;

// Custom console.error
devhub.error = function(data) {
  return eval(console_error("%c[DevHub]%c", "color: orange; font-weight: bold", "", data));
};
// console.error override
console_error = console.error;
console.error = devhub.error;

// omg why isnt this shit here
function isUrl(val) {
  const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;
  return urlRegex.test(val);
}
devhub.isUrl = isUrl;
