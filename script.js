const title = document.getElementById('title');

const content = document.getElementById('article-content');

const btn = document.getElementById('btn');

const articleList = document.getElementById('news-article');

const funArticle = document.getElementById('fun-article');

const dropdownChoice = document.getElementById('dropdown');



btn.onclick = function() {
	const articleTitle = title.value;
	const articleContent = content.value;

	/*console.log(articleTitle);
	console.log(articleContent);*/

	if(articleTitle && articleContent) {
		localStorage.setItem(articleTitle, articleContent);
		location.reload();
	}
};

	for (let i=0; i<localStorage.length; i++) {
		const articleTitle = localStorage.key(i);
		const articleContent = localStorage.getItem(articleTitle);
		localStorage.clear();

		if (dropdownChoice.value == 'news') {
			articleList.innerHTML += `<div class="article-box" id="news-article">
					<div class="article-details">
						<h3>${articleTitle}</h3>
						<p>${articleContent}</p>
					</div>

					<div class="article-img">
						<img src="http://lorempixel.com/300/300/" alt="new-image">
					</div>
				</div>

				`;
		}

		else {
			funArticle.innerHTML += `<div class="article-box" id="news-article">
					<div class="article-details">
						<h3>${articleTitle}</h3>
						<p>${articleContent}</p>
					</div>

					<div class="article-img">
						<img src="http://lorempixel.com/300/300/" alt="new-image">
					</div>
				</div>

				`;
		}

		
	}


/*localStorage.setItem("name", "gaurav");*/
