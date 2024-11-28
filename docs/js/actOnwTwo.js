// Function to add two numbers
function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.getElementById('result').innerText = `Result: ${sum}`;
    } else {
        document.getElementById('result').innerText = "Please enter valid numbers.";
    }
}

// Function to toggle dark/light mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}