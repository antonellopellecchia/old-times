$(document).ready(main);

$(window).resize(main);

function main() {
	if ($('#mediaquery_check').css('float') == 'none') return;
	var article = $('.article.single');
	showTitle(article, true);
}