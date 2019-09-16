export default function register() {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl);

        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service " +
              "worker. To learn more, visit https://goo.gl/SC7cgQ"
          );
        });
      } else {
        registerValidSW(swUrl);
      }
    });

    window.addEventListener("fetch", event => {
      if (event.request.url.match("^.*(/api/).*$")) {
        return false;
      }
    });
  }
}
