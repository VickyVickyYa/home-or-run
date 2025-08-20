function checkAnimal() {
    const animal = document.getElementById("animalInput").value.toLowerCase();
}

if (animal === "sea apple") {
    window.location.href = "sea_apple.html";
}
else {
    alert("Sorry, we don't have that animal page yet!");
}

document.getElementById("result").textContent = "I don’t know that animal yet!";



