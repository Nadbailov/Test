const input = document.querySelector('.input')
const output  = document.querySelector('.random-number')

// console.log(input);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    input.addEventListener('input', () => {
        const randomNumber = getRandomNumber(1, 100);
         output.textContent = randomNumber;
    } )