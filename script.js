let input = '';

function appendToDisplay(value) {
  input += value;
  document.getElementById('display').value = input;
}

function clearDisplay() {
  input = '';
  document.getElementById('display').value = input;
}

function calculate() {
  try {
    const result = eval(input);
    input = result.toString();
    document.getElementById('display').value = input;
  } catch (error) {
    input = '';
    document.getElementById('display').value = 'Error';
  }
}
