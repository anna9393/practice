let calculation = localStorage.getItem('calculation') || '';
displayCalculation();


function updateCalculation(char) {
  if (char === '=') {
    calculation = eval(calculation);
    displayCalculation();
  } else if (char === 'Clear') {
    calculation = '';
    displayCalculation();
  } else {
    calculation += char;
    displayCalculation();
  }

  localStorage.setItem('calculation', calculation);
};

function displayCalculation() {
  const paragraph = document.querySelector('.counting');
  paragraph.innerHTML = calculation;
};
