function checkAnimal() {
    const animal = document.getElementById("animalInput").value.toLowerCase();

    // Map of animal names to their page
    const animals = {
        "sea apple": "sea-apple.html",
        "sea turtle": "sea-turtle.html",
       "yeti crab": "yeti-crab.html",
       "beluga whale": "beluga-whale,html",
        // add more animals here...
    };

    if (animals[animal]) {
        window.location.href = animals[animal];
    } else {
        document.getElementById("result").textContent = "I don’t know that animal yet!";
    }
}

