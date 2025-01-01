/*
  heyo, its darian from 2025
  i fucking hate this code
  ly bye!
*/

window.devhub = {};
window.loadstring = eval;

// preent closing site
window.onbeforeunload = () => {
  return true
}

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
  }
  // to init it
  setInterval(onbeforeunload, 169)

  // disable onbeforeunload for all href's
  document.querySelectorAll('a[href]').forEach(a => 
    a.addEventListener('click', ()=>{
        window.onbeforeunload = null
    })
  );
}, 500);

// clout
const watermark = document.createElement("div");
watermark.textContent = "© DevTech 2024";

Object.assign(watermark.style, {
  position: "fixed",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "12px",
  color: "white",
  fontWeight: "bold",
  opacity: "0.5",
  zIndex: "9999",
  pointerEvents: "none",
});

document.body.appendChild(watermark);
