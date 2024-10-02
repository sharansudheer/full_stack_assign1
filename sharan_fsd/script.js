// Make the words draggable
const draggables = document.querySelectorAll('.draggable');
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.innerText);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const word = event.dataTransfer.getData('text');
    const sentenceArea = document.getElementById('sentenceArea');
    const newWord = document.createElement('span');
    newWord.textContent = word + ' ';
    sentenceArea.appendChild(newWord);
}

function checkSentence() {
    const sentenceArea = document.getElementById('sentenceArea');
    const sentence = sentenceArea.innerText.trim();
    const correctSentence = "I am a very good boy";

    // Normalize both sentences for comparison
    const normalizedSentence = sentence.replace(/\s+/g, ' ').trim(); 
    const normalizedCorrectSentence = correctSentence.trim();

    const result = document.getElementById('result');
    result.textContent = (normalizedSentence === normalizedCorrectSentence) ? "Correct! Well done!" : "Try again!";
}

function resetSentence() {
    const sentenceArea = document.getElementById('sentenceArea');
    sentenceArea.innerHTML = '<p>Drop words here to form a sentence!</p>'; // Reset to original message
    document.getElementById('result').textContent = ''; // Clear the result message
}