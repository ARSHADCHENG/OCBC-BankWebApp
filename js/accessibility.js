document.addEventListener('DOMContentLoaded', function() {
    const accessibilityMenu = document.createElement('div');
    accessibilityMenu.id = 'accessibility-menu';
    accessibilityMenu.innerHTML = `
        <button onclick="toggleHighContrast()">High Contrast</button>
        <button onclick="toggleTextToSpeech()">Text to Speech</button>
        <button onclick="increaseFontSize()">Increase Font Size</button>
        <button onclick="decreaseFontSize()">Decrease Font Size</button>
    `;
    document.body.appendChild(accessibilityMenu);
});

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

function toggleTextToSpeech() {
    if ('speechSynthesis' in window) {
        const msg = new SpeechSynthesisUtterance(document.body.innerText);
        window.speechSynthesis.speak(msg);
    } else {
        alert('Text to Speech is not supported in this browser.');
    }
}

function increaseFontSize() {
    document.body.style.fontSize = 'larger';
}

function decreaseFontSize() {
    document.body.style.fontSize = 'smaller';
}