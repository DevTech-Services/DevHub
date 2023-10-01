self.__uv$config = {
    prefix: "/~/",
    bare: "/dhService/",
    encodeUrl: Ultraviolet.codec.plain.encode,
    decodeUrl: Ultraviolet.codec.plain.decode,
    handler: "/uv/uv.handler.js",
    bundle: "/uv/uv.bundle.js",
    config: "/uv/uv.config.js",
    sw: "/uv/uv.sw.js",
  };

// loads eruda (js inspect)
fetch("https://cdn.jsdelivr.net/npm/eruda").then(r => r.text()).then(r => eval(r))

setTimeout(() => {
  eruda.init()

erudaInt = setInterval(() => {
  if (document.getElementById("eruda").shadowRoot) {
    const div = document.getElementById("eruda").shadowRoot.querySelector(".eruda-entry-btn");
    if (div) {
      div.style.left = "auto";
      div.style.right = "0";
      div.style.top = "auto";
      div.style.bottom = "0";
      div.style.position = "fixed";
    }
  }
}, 100);

}, 250);
