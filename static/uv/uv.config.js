self.__uv$config = {
  prefix: "/~/",
  encodeUrl: Ultraviolet.codec.plain.encode,
  decodeUrl: Ultraviolet.codec.plain.decode,
  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};

fetch("https://cdn.jsdelivr.net/npm/eruda")
  .then(r => r.text())
  .then(eval)
  .finally(() => setTimeout(() => {
    eruda.init();
    setInterval(() => {
      const div = document.querySelector("#eruda .eruda-entry-btn");
      if (div) {
        div.style.cssText = "position: fixed; right: 0; bottom: 0; left: auto; top: auto;";
      }
    }, 500);
  }, 500));