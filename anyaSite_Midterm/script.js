document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("show");
});

const onion = document.getElementById("clickOnion");
const counter = document.getElementById("clickCounter");
let onionClicks = 0;

if (onion) {
    onion.addEventListener("click", () => {
        onionClicks++;
        counter.textContent = `onion clicks: ${onionClicks}`;
        if (onionClicks === 10) {
            alert("you've unleashed the onion's power.");
        }
    });
}
