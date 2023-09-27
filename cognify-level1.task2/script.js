// Button Color Change
const colorButton = document.getElementById('color-button');

colorButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    colorButton.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Greeting Alert
const greetingButton = document.getElementById('greeting-button');

greetingButton.addEventListener('click', () => {
    const currentTime = new Date().getHours();
    let greeting;

    if (currentTime < 12) {
        greeting = "Good morning!";
    } else if (currentTime < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
});

// Basic Calculator
const addButton = document.getElementById('add-button');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('result');

addButton.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        resultDisplay.textContent = `Result: ${sum}`;
    } else {
        resultDisplay.textContent = 'Please enter valid numbers.';
    }
});
