const title = document.getElementById('title');

const content = document.getElementById('article-content');

const btn = document.getElementById('btn');

const articleList = document.getElementById('article-container');

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

		articleList.innerHTML += `${articleTitle}: ${articleContent} <br>`;
	}

/*localStorage.setItem("name", "gaurav");*/