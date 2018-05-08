---
layout: page
title: Documentation
permalink: /docs/
---

This is the documentation for *Old Times*, a Jekyll template featuring a pseudo-newspaper style.

Installation
------------

Assuming you don't have Jekyll installed on your computer yet, extract the package `old-times.zip` in the folder `old-times`, then open a terminal and write:

{% highlight python %}
~ $ gem install jekyll bundler
~ $ cd old-times
~/old-times $ bundle install
{% endhighlight %}

When you are in the `old-times` folder, the commands `jekyll server` or `bundle exec jekyll serve` will start your website's server; you can open a browser and test your site on `http://localhost:4000`. To stop the server, press `CTRL+C` in the terminal window. 

For more detailed instructions about Jekyll installation, please refer to [Jekyll's installation documentation](https://jekyllrb.com/docs/installation/).

Configuration
-------------

All configuration options can be found in `old-times/_config.yml` in YAML format; every time you change this file you will have to restart Jekyll with `jekyll serve`.

The *System settings* section only contains the `host` option: set it to `0.0.0.0` to let other users in your local network access your site or delete it to deny access.

The *Site settings* section contains these lines:

1. the `title` will be shown at the top of the page and as the page title in your browser;
2. the `description` is shown as meta tag in the HTML head;
3. set a `baseurl` if your site will be placed in a subfolder in your server root;
3. `url` is your website's address;
4. if you want to use [Disqus](http://disqus.com) to display comments, set `disqus_enabled` to `True` - the option is disabled by default; note that you should create a Disqus account manually;
5. if `disqus_enabled` is set to `True`, `disqus_username` sets the username you choose for your Disqus account;
6. `social_buttons` decides whether to display or not the share buttons (Twitter, Facebook and Google +) for each article;
7. `excerpt_separator` sets the command used in a post to set the end of an excerpt; it should always have the form of an HTML comment (e.g. `<!--some text here-->`). The default string is `<!--break-->`;
8. `paginate` sets the number of articles in the home page; for best visual results in all browsers and screens you should choose a number between 3 and 7.

The *Build settings* section contains the Jekyll add-ons used to make *Old times* work; you probably won't need to change anything in there.

Usage
-----

Each post must be a Markdown file in the `_posts` directory; its name will have to be in the form `date-alias.markdown`, where `date` is the YYYY-MM-DD date of publication, as prescribed in Jekyll's [post writing documentation](https://jekyllrb.com/docs/posts/); please refer to the same page for a more detailed guide.

In the markdown file, the text of the article must be preceded by a [YAML front matter](https://jekyllrb.com/docs/frontmatter/), containing one or more of these tags:

{% highlight sh %}
---
layout: post
title:  "The title of your article"
date:   YYYY-MM-DD HH:MM:SS +/-TTTT
excerpt: >
	"The excerpt of your article, usually a summary,
	an introduction or the first lines"
---
{% endhighlight %}

The excerpt will be shown in the main page; however, the latest article will always be shown entirely (except on mobile devices, which will show a different layout). The excerpt can be alternatively limited by placing a `<!--break-->` tag in the text of the article (the actual tag can be modified in the configuration file).

Similarly, static pages (such as this one or the *About* page) must be Markdown files put in the website root directory; the text of the file must begin with a YAML front matter similar to this:

{% highlight php %}
---
layout: page
title: "Title of the page"
permalink: /alias-of-the-page/
---
{% endhighlight %}

followed by the text of the page; the pages will be shown in the main menu, in the site header.

Changelog
---------

	2016-09-09: first version (1.0)