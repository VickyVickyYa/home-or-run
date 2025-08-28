function checkAnimal() {
    const animal = document.getElementById("animalInput").value.toLowerCase();

    
    const animals = {
        "sea apple": "sea-apple.html",
        "sea turtle": "sea-turtle.html",
       "yeti crab": "yeti-crab.html",
       "beluga whale": "beluga-whale.html",
       "manta ray" :"manta-ray.html",
       "ribbon eel":"ribbon-eel.html",
       "weedy seadragon":"weedy-seadragon.html",
      "lionfish": "lionfish.html",
      "flower urchin":"flower-urchin.html",
       "cone snail":"cone-snail.html",
       "fang blennies":"fang-blennies.html",
       "tiger shark":"tiger-shark.html",
         };

    if (animals[animal]) {
        window.location.href = animals[animal];
    } else {
        document.getElementById("result").textContent = "I don’t know that animal yet!";
    }
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("runmusic");
    audio.play().catch((err) => {
        console.log("Autoplay failed:", err);
    });
});

    
}



