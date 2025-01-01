function registerSW() {
  if (!navigator.serviceWorker) {
      if (location.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(location.hostname)) {
          alert("Service workers cannot be registered without https. Therefore, DevHub will NOT work.")
      }

      alert("Your browser doesn't support service workers. Therefore, DevHub will NOT work.");
  }

  navigator.serviceWorker.register("/sw.js", {
      scope: "~",
  })
};

registerSW();

devhub.registerSW = registerSW;
