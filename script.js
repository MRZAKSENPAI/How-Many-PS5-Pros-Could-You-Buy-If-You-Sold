function calculate() {
    const organValue = document.getElementById("organSelect").value;
    const ps5Price = 700; // PS5 Pro price is fixed at $700

    // Calculate how many PS5 Pros can be bought
    const ps5Count = Math.floor(organValue / ps5Price);

    // Custom funny messages based on the number of PS5s
    let message = "";

    if (ps5Count >= 400) {
        message = `With ${ps5Count} PS5s, you could create an army of gamers!`;
    } else if (ps5Count >= 300 && ps5Count < 400) {
        message = `With ${ps5Count} PS5s, you could open a PS5 showroom.`;
    } else if (ps5Count >= 200 && ps5Count < 300) {
        message = `With ${ps5Count} PS5s, you could start an e-commerce site that sells PS5s.`;
    } else if (ps5Count >= 100 && ps5Count < 200) {
        message = `That's ${ps5Count} PS5s! Enough to start a illegle gaming casino!(Yes I am making stuff up)`;
    } else if (ps5Count >= 80 && ps5Count < 100) {
        message = `${ps5Count} PS5s? You could resell them and start your own business!`;
    } else if (ps5Count >= 70 && ps5Count < 80) {
        message = `Wow! ${ps5Count} PS5s could be enough to gift one to the whole class. But don’t be too generous.`;
    } else if (ps5Count >= 50 && ps5Count < 70) {
        message = `You could keep ${ps5Count} PS5s—enough to play a battle royale game by yourself.`;
    } else if (ps5Count >= 30 && ps5Count < 50) {
        message = `With ${ps5Count} PS5s, you could start a gaming cafe.`;
    } else if (ps5Count >= 10 && ps5Count < 30) {
        message = `With ${ps5Count} PS5s, you can flex on the internet.`;
    } else {
        message = `You can buy ${ps5Count} PS5 Pro(s). Maybe keep one and gift the others to your close friends!`;
    }

    // Display the result and funny message
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You could buy <strong>${ps5Count}</strong> PS5 Pro(s)! ${message}`;
}
