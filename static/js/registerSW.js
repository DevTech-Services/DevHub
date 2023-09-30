const stockSW = "/sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
function registerSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      alert("Service workers cannot be registered without https. Therefore, DevHub will NOT work.");

    alert("Your browser doesn't support service workers. Therefore, DevHub will NOT work.");
  }

  navigator.serviceWorker.register(stockSW, {
    scope: "/~/",
  })};

  registerSW();

devhub.registerSW = registerSW;