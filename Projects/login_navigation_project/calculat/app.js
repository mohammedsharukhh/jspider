const inputField = document.getElementById('input');
const buttons = document.querySelectorAll('.btn, .btn1');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
        } else if (buttonText === 'C') {
            currentInput = '';
        } else {
            currentInput += buttonText;
        }

        inputField.value = currentInput;
    });
});