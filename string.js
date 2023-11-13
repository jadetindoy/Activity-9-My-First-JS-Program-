let userInput = '';

function acceptString() {
  userInput = document.getElementById('inputString').value;
  alert('You got it go go go: ' + userInput);
}

function changeSecondWord() {
  const words = userInput.split(' ');
  if (words.length >= 2) {
    words[1] = 'skkrt';
    userInput = words.join(' ');
    alert('Second Word Changed: ' + userInput);
  } else {
    alert('I think you need to add up.');
  }
}

function printAllWords() {
  alert('All Words: ' + userInput);
}