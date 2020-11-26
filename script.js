const title = document.getElementById('title');
const content = document.getElementById('article-content');
const btn = document.getElementById('btn');
const articleList = document.getElementById('news-article');
const funArticle = document.getElementById('fun-article');
const dropdownChoice = document.getElementById('dropdown');
const sportsimageUrl = "http://lorempixel.com/400/200/sports/";
const peopleimageUrl = "http://lorempixel.com/400/200/people/";



let funart=0;
let newsart=0;

btn.onclick = function() {
	const articleTitle = title.value;
	const articleContent = content.value;
    const articledropdown = dropdownChoice.value;
	/*console.log(articleTitle);
	console.log(articleContent);*/

	if(articleTitle && articleContent) {
        let article={articleTitle:articleTitle,articleContent:articleContent,articledropdown:articledropdown}
		localStorage.setItem(articleTitle, JSON.stringify(article));
        location.reload();

	}
};



	for (let i=0; i<localStorage.length; i++) {
		const articleTitle = localStorage.key(i);
        const articleContent = localStorage.getItem(articleTitle);
        article1=JSON.parse(articleContent)
        console.log(article1.dropdownChoice)

        if(article1.articledropdown=="news"){
            newsart=newsart+1;
        }
        if(article1.articledropdown=="fun"){
            funart=funart+1;
        }

		if (article1.articledropdown == 'news') {

			articleList.innerHTML += `<div class="article-box" id="news-article">
					<div class="article-details">
						<h3>${article1.articleTitle}</h3>
						<p>${article1.articleContent}</p>
					</div>
					<div class="article-img">
						<img src="${peopleimageUrl + i}" alt="new-image">
					</div>
				</div>
				`;
		}

		else if (article1.articledropdown == 'fun') {
			funArticle.innerHTML += `<div class="article-box" id="news-article">
					<div class="article-details">
						<h3>${article1.articleTitle}</h3>
						<p>${article1.articleContent}</p>
					</div>
					<div class="article-img">
						<img src="${sportsimageUrl + i}" alt="new-image">
					</div>
				</div>
				`;
		}

		
    }
    document.getElementById('funno').innerHTML = funart;
    document.getElementById('newsno').innerHTML = newsart;
