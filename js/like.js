const like = () => {
	try {
		const buttonLike = document.querySelector('.article__like'),
			likeNumber = document.querySelector('.like-number');

		const buttonLikeHandler = () => {
			if (buttonLike.classList.contains('added')) {
				likeNumber.textContent--;
			} else {
				likeNumber.textContent++;
			}

			buttonLike.classList.toggle('added');
		}

		buttonLike.addEventListener('click', () => {
			buttonLikeHandler();
		})
	} catch (error) {
		console.warn(error);
	}
};

export default like;

