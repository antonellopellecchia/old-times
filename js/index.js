$(document).ready(main);
$(window).resize(function () {
	var first, second, third;
	first = $('.first');
	second = $('.second');
	third = $('.third');

	first.after(second);
	second.after(third);
	$('.first').removeClass('first');
	$('.second').removeClass('second');
	$('.third').removeClass('third');
	main();
});

function main() {
	$('.article.group').children('.article_text').click(function() {
		window.location = $(this).parent('.article').children('.article_title').children('a').attr('href');
	});

	if ($('#mediaquery_check').css('float') == 'none') return;

	var articles = $('.article');

	if (articles.length < 3) {
		articles.addClass("regular");
		setRegularWidth($('.regular'));
		return;
	}

	var first, second, third;

	articles.each(function(index) {
		if (index == 0) first = $(this);
		else if (index == 1) second = $(this);
		else if (index == 2) third = $(this);
		else $(this).addClass("regular");
	});

	first.addClass("first");
	second.addClass("second");
	third.addClass("third");

	second.after(first);
	third.after($("<div style='clear:both; height:1.5em'></div>"));
	first.children('.article_text').html(first.children('.article_hidden').html());

	showTitle(first);
	showTitle(second);
	showTitle(third);

	var firstHeight = first.outerHeight(true);
	cutArticle(second, firstHeight);
	cutArticle(third, firstHeight);

	setRegularWidth($('.regular'));
}