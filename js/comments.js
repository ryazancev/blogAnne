const comments = () => {
	try {
		const reviewsForm = document.querySelector('.reviews__form'),
			inputName = reviewsForm.querySelector('[type="text"]'),
			inputEmail = reviewsForm.querySelector('[type="email"]'),
			formTextarea = document.querySelector('.rewiews-form__textarea'),
			commentsContainer = document.querySelector('.reviews__container'),
			reviewsPicture = document.querySelector('.reviews__author-picture').cloneNode(true);

		const reviewsHandler = () => {
			const citeName = document.createElement('cite'),
				citeText = document.createElement('p'),
				blockquote = document.createElement('blockquote');

			citeName.classList.add('reviews__cite');
			citeName.textContent = inputName.value;
			inputName.value = '';
			inputEmail.value = '';

			citeText.classList.add('reviews__text');
			citeText.textContent = formTextarea.value;
			formTextarea.value = '';

			blockquote.classList.add('reviews__item');
			blockquote.appendChild(reviewsPicture);
			blockquote.appendChild(citeName);
			blockquote.appendChild(citeText);

			commentsContainer.append(blockquote);
		};

		reviewsForm.addEventListener('submit', evt => {
			evt.preventDefault();
			reviewsHadler();
		});
	} catch (error) {
		console.warn(error);
	}
};

export default comments;

