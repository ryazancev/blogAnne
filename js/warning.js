const warning = () => {
	const form = document.querySelector('.form'),
		textField = document.querySelector('.text-field'),
		submitButton = document.querySelector('.submit-button');


	form.addEventListener('input', () => {
		if (textField.value.length < 10 || textField.value.length > 200) {
			textField.classList.add('warning');
			submitButton.disabled = true;
		} else {
			textField.classList.remove('warning');
			submitButton.disabled = false;
		};
	})
};

export default warning;


