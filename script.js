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
       
    };

    if (animals[animal]) {
        window.location.href = animals[animal];
    } else {
        document.getElementById("result").textContent = "I don’t know that animal yet!";
    }
}

