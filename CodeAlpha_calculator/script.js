let display = document.getElementById("display");

// Append value with operator check
function appendValue(value) {
    let operators = "+-*/";
    let lastChar = display.value.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Backspace
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Percentage
function percentage() {
    if (display.value !== "") {
        display.value = parseFloat(display.value) / 100;
    }
}

// Plus/Minus toggle
function toggleSign() {
    if (display.value !== "") {
        display.value = parseFloat(display.value) * -1;
    }
}

// Calculate result
function calculate() {
    try {
        if (display.value.includes("/0")) {
            display.value = "Cannot divide by 0";
            return;
        }
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(e) {
    if ((e.key >= '0' && e.key <= '9') || "+-*/.".includes(e.key)) {
        appendValue(e.key);
    } 
    else if (e.key === "Enter") {
        calculate();
    } 
    else if (e.key === "Backspace") {
        backspace();
    } 
    else if (e.key === "Escape") {
        clearDisplay();
    }
});
