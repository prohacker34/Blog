document.getElementById('checkAnswersBtn').addEventListener('click', () => {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const resultEl = document.getElementById('quizResult');

  if (!q1) {
    resultEl.textContent = 'Please select an answer for question 1.';
    resultEl.style.color = 'red';
    return;
  }

  if (q1.value === 'correct') {
    resultEl.textContent = 'Correct! The clutch pedal is pressed before shifting gears.';
    resultEl.style.color = 'green';
  } else {
    resultEl.textContent = 'Incorrect. Try again!';
    resultEl.style.color = 'red';
  }
});