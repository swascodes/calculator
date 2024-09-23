// Ensure the display is focused when the page loads
window.onload = function() {
    document.getElementById('display').focus();
  };
  
  // Listen for keyboard events
  document.addEventListener('keydown', function(event) {
    const key = event.key;
  
    if (key >= '0' && key <= '9') {
      appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendOperator(key);
    } else if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Backspace') {
      deleteLast();
    } else if (key === 'Escape') {
      clearDisplay();
    }
  });
  
  // Function to set the theme
  function setTheme(theme) {
    const calculator = document.getElementById('calculator');
    
    // Remove all theme classes
    calculator.classList.remove('dark-theme', 'light-theme', 'metallic-theme');
    
    // Add the selected theme class
    calculator.classList.add(`${theme}-theme`);
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to delete the last character in the display
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  // Function to append a number to the display
  function appendNumber(number) {
    document.getElementById('display').value += number;
  }
  
  // Function to append an operator to the display
  function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
      return; // Prevent multiple operators
    }
    display.value += operator;
  }
  
  // Function to calculate the result
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }
  
