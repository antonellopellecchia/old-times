function setRegularWidth(regular) {
	regular.width(100/regular.length+'%');
	regular.each(function(i) {
		if (i == 0) $(this).css('padding-right', '1em');
		else if (i == regular.length-1) $(this).css('padding-left', '1em');
		else {
			$(this).css('padding-left', '1em');
			$(this).css('padding-right', '1em');
		}
	});
}

function cutArticle(article, height) {
	if (article.height() >= height) {
		article.children('.article_text').height(height-100);
		article.addClass('long');
	}
}

function showTitle(article, single) {
	title = article.find('.article_title a');
	titleText = getText(title).replace(/\n/g, '');
	console.log(getText(title));
	words = titleText.split(' ');
	var wordsArray = new Array();
	if (words.length <= 2) wordsArray[0] = words; 
	else wordsArray = splitArray(words, (words.length-2)/6+2 );

	var result = '';
	for (i=0; i<wordsArray.length; i++) {
		result += '<span>' + wordsArray[i].join(' ') + '</span>';
	}
	title.html(result);
	title.children('span').each(function() {
		$(this).css({
			'font-size': '1em',
			'display': 'inline-block',
		});
		var newWidth = Math.floor($(this).parents('.article').width() / $(this).width() * (single ? 98 : 100));
		$(this).css({
			'font-size':  newWidth + '%',
			'display': 'block',
		});
	});

}

function splitArray(array, n) {
	if (array.length < n) return null;
	var pieceLength = array.length / n;
	var result = new Array();
	for (i=0; i<n; i++) {
		result[i] = new Array();
		for (j=0; j<pieceLength; j++) {
			result[i].push(array.shift());
		}
	}
	if (array.length > 0)
		while (array.length != 0)
			result[n-1].push(array.shift());
	return result;
}

function getText(div) {
	var span = div.find('span');
	if (span.length == 0) return div.text();
	var result = '';
	span.each(function() {
		result += $(this).text() + ' ';
	});
	return result.slice(0, result.length-1);
}

// var readMore1 = '<div class="article_read_more"><span><a href="';
// var readMore2 = '">Read more</a></span></div>';
// $('.article').each(function() {
// 	var article = $(this);
// 	$(readMore1 + article.children('.article_title').children('a').attr('href') + readMore2).appendTo(article);
// });