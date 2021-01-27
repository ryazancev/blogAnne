const filter = () => {
	try {
    const articles = document.querySelectorAll('.articles__card'),
		filter = document.querySelector('.articles__filter');

	filter.addEventListener('change', () => {
		for (let article of articles) {
			if (article.dataset.category !== filter.value && filter.value !== 'all') {
				article.classList.add('hidden');
			} else {
				article.classList.remove('hidden');
			};
		};
	})
  } catch (error) {
    console.warn(error);
  }
};

export default filter;
