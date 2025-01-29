function calculateBMI() {
    let name = document.getElementById("name").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;

    if (!name || !weight || !height) {
        alert("Please fill in all fields.");
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmi-result").innerText = bmi;

    let comment = "";
    let healthRisks = "";
    let foodRecommendations = "";

    if (bmi < 18.5) {
        comment = "Underweight";
        healthRisks = "Malnutrition, osteoporosis, weak immune system.";
        foodRecommendations = "High-protein foods (eggs, chicken, fish), healthy fats (avocados, nuts), dairy, and whole grains.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        comment = "Normal weight";
        healthRisks = "Low risk of weight-related diseases.";
        foodRecommendations = "Maintain a balanced diet with vegetables, lean protein, fruits, and whole grains.";
    } else if (bmi >= 25 && bmi < 29.9) {
        comment = "Overweight";
        healthRisks = "Increased risk of heart disease, high blood pressure, and diabetes.";
        foodRecommendations = "More fiber-rich foods (vegetables, fruits), lean proteins, and avoid processed foods.";
    } else {
        comment = "Obesity";
        healthRisks = "High risk of heart disease, type 2 diabetes, stroke, and joint issues.";
        foodRecommendations = "Consume more whole foods, reduce sugar intake, exercise regularly, and consult a nutritionist.";
    }

    document.getElementById("comment").innerText = `${name}, you are classified as: ${comment}`;
    document.getElementById("health-risks").innerText = healthRisks;
    document.getElementById("food-recommendations").innerText = foodRecommendations;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmi-result").innerText = "00.00";
    document.getElementById("comment").innerText = "";
    document.getElementById("health-risks").innerText = "";
    document.getElementById("food-recommendations").innerText = "";
}