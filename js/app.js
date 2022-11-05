if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("sw.js")
      .then(res => console.log("Enregistrement du service worker réussi"))
      .catch(err => console.log("Échec de l'enregistrement du service worker", err))
  })
}