fetch('data.json')
  .then(response => response.json())
  .then(data => {
    let currentWord = null;
    let saveWordIds = []; // Change saveWordId to saveWordIds and initialize as an array

    function chooseRandomWord() {
      const availableWords = data.filter(word => !saveWordIds.includes(word.id)); // Use saveWordIds array to filter out used words
      if (availableWords.length === 0) {
        document.getElementById('wordDisplay').innerText = "All words have been used, reload page to restart.";
        document.getElementById('userInput').disabled = true;
        document.getElementById('checkButton').disabled = true;
        document.getElementById('newButton').disabled = true;
        return;
      }
      currentWord = availableWords[Math.floor(Math.random() * availableWords.length)];
      document.getElementById('wordDisplay').innerText = currentWord.word;
      document.getElementById('userInput').disabled = false;
      document.getElementById('checkButton').disabled = false;
      document.getElementById('newButton').disabled = false;
    }

    function checkAnswer() {
      const userInput = document.getElementById('userInput').value.trim();
      const correctAnswers = currentWord.answer;
      if (correctAnswers.includes(userInput)) {
        document.getElementById('resultDisplay').innerText = "Correct";
        document.getElementById('resultDisplay').style.color = "green";
        document.getElementById('explanationDisplay').innerText = currentWord.explanation;
      } else {
        document.getElementById('resultDisplay').innerText = "Incorrect";
        document.getElementById('resultDisplay').style.color = "red";
        document.getElementById('explanationDisplay').innerText = "";
      }
    }

    document.getElementById('checkButton').addEventListener('click', checkAnswer);

    document.getElementById('newButton').addEventListener('click', () => {
      saveWordIds.push(currentWord.id); // Push currentWord.id to saveWordIds array
      console.log("Saved Word IDs:", saveWordIds);
      document.getElementById('resultDisplay').innerText = "";
      document.getElementById('resultDisplay').style.color = "";
      document.getElementById('explanationDisplay').innerText = "";
      document.getElementById('userInput').value = "";
      chooseRandomWord();
    });

    chooseRandomWord();
  });
