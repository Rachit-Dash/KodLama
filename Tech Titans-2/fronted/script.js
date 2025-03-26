document.getElementById("diabetesForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let inputs = document.querySelectorAll("input");
    let features = Array.from(inputs).map(input => parseFloat(input.value));

    fetch("http://127.0.0.1:8080/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features: features })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("result").textContent = "Prediction: " + data;
    })
    .catch(error => console.error("Error:", error));
});