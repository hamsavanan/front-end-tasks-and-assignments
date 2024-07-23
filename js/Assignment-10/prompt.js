function checkAlphabet() {
    let input = document.getElementById('alphabetInput').value.toLowerCase();
    let result = document.getElementById('result');

    if (!input.match(/[a-z]/)) {
        result.textContent = "Please enter a valid alphabet.";
        return;
    }

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(input)) {
        result.textContent = `${input.toUpperCase()} is a Vowel.`;
    } else {
        result.textContent = `${input.toUpperCase()} is a Consonant.`;
    }
}
