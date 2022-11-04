// Déclaration du cache
const staticImageQuiz = "dev-image-quiz-v1";
// Déclaration des éléments à stocker dans le cache
const assets = [
    "/",
    "/index.html",  
    "css/style.css",
    "js/app.js"
];

//self est le service worker en lui même. C'est lui qui va nous permettre d'écouter les différents événements
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
});

//Regarde si quelque chose existe dans le cache
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})