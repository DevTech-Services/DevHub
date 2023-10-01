window.devhub = {};
window.loadstring = eval;

fetch('/nav/nav.html')
  .then(res => res.text())
  .then(content => {
    document.body.insertAdjacentHTML('afterbegin', content);
    if (window.self !== window.top) {
      window.parent.postMessage('loaded', location.origin);
    }
  }).catch(e => {
    alert(e);
  });

const scripts = [
    'js/registerSW.js',
    'js/assets.js',
];

scripts.forEach(script => {
    const el = document.createElement('script');
    el.src = script;
    document.body.appendChild(el);
});

setTimeout(
  console.log.bind(console,"%cHello! If you are seeing this, you are in the console! Please leave if you dont know what you are doing.","background: purple;color:#FFF;padding:4px;border-radius: 5px;line-height: 26px; font-size:24px;")
);

setTimeout(() => {  
  console.log("Scripts loaded"); 
  console.log("Loading settings");

  if (location.pathname.includes("load")) {
    if (Ultraviolet && __uv$config) {
      console.log("Ultraviolet bundle and config loaded!")
    } else {
      alert("[DevHub]\n\nError: Proxy Package not found")
      console.error("Ultraviolet bundle and config not found")
    }

  } else if (location.pathname.includes("haxx")) {
    console.log("if ur really trying to get the source thru devtools your wasting your time :3")
  }

}, 500);