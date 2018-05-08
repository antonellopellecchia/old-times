---
layout: post
title: "Sample blog data"
date: 2015-09-1 19:07:00 +0200
---

<p>Markdown (or Textile), Liquid, HTML &amp; CSS go in. Static sites come out ready for deployment.</p>


<h4 id="headings">Headings</h4>

<h1 id="heading-1">Heading 1</h1>
<!--break-->

<h2 id="heading-2">Heading 2</h2>

<h3 id="heading-3">Heading 3</h3>

<h4 id="heading-4">Heading 4</h4>

<h5 id="heading-5">Heading 5</h5>

<h6 id="heading-6">Heading 6</h6>

<h4 id="blockquote">Blockquote</h4>


<blockquote>
  <p>No more databases, comment moderation, or pesky updates to install—just your content.</p>
</blockquote>

<h4 id="unordered-list">Unordered List</h4>

<ul>
  <li>Jekyll</li>
  <li>Ruby</li>
  <li>Markdown</li>
  <li>Liquid</li>
</ul>

<h4 id="ordered-list">Ordered List</h4>

<ol>
  <li>Jekyll</li>
  <li>Ruby</li>
  <li>Markdown</li>
  <li>Liquid</li>
</ol>

<h4 id="link">Link</h4>

<p>This is <a href="http://example.com/" title="Title">an example</a> inline link.</p>

<h4 id="paragraph-w-strong-em-etc">Paragraph w/ strong, em, etc.</h4>

<p>These are just a few of the <em>available</em> <strong>configuration</strong> options. Many configuration options can <strike>either</strike> be specified as flags on the <abbr title="Command Line Tool">command line</abbr>, or alternatively (and more commonly) they can be specified in a _config.yml file at the root of the source directory. Jekyll will <a href="http://joro.me/" target="_blank">automatically use</a> the options from this file when run. For example, if you place the following lines in your _config.yml file.</p>

<h4 id="image">Image</h4>
<figure class="aligncenter">
  <img src="https://images.unsplash.com/photo-1449452198679-05c7fd30f416?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;s=73181f1c6d56b933b30de2bfe21fdf3b">
  <figcaption>Photo by <a href="https://unsplash.com/rmaedavis" target="_blank">Rachel Davis</a>.</figcaption>
</figure>

<h4 id="video">Video</h4>

<div class="fluid-width-video-wrapper"><iframe name="fitvid0" src="https://www.youtube.com/embed/iWowJBRMtpc" allowfullscreen="" frameborder="0"></iframe></div>

<h4 id="default-code-block">Default Code Block</h4>

<div class="highlighter-rouge"><pre class="highlight"><code>This is code blog.
</code></pre>
</div>

<h4 id="styled-code-block">Styled Code Block</h4>

<figure class="highlight"><pre><code class="language-ruby" data-lang="ruby"><table style="border-spacing: 0"><tbody><tr><td class="gutter gl" style="text-align: right"><pre class="lineno">1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18</pre></td><td class="code"><pre><span class="c1">#!/usr/bin/ruby</span>
<span class="vg">$LOAD_PATH</span> <span class="o">&lt;&lt;</span> <span class="s1">'.'</span>
<span class="nb">require</span> <span class="s2">"support"</span>

<span class="k">class</span> <span class="nc">Decade</span>
<span class="kp">include</span> <span class="no">Week</span>
   <span class="n">no_of_yrs</span><span class="o">=</span><span class="mi">10</span>
   <span class="k">def</span> <span class="nf">no_of_months</span>
      <span class="nb">puts</span> <span class="no">Week</span><span class="o">::</span><span class="no">FIRST_DAY</span>
      <span class="n">number</span><span class="o">=</span><span class="mi">10</span><span class="o">*</span><span class="mi">12</span>
      <span class="nb">puts</span> <span class="n">number</span>
   <span class="k">end</span>
<span class="k">end</span>
<span class="n">d1</span><span class="o">=</span><span class="no">Decade</span><span class="p">.</span><span class="nf">new</span>
<span class="nb">puts</span> <span class="no">Week</span><span class="o">::</span><span class="no">FIRST_DAY</span>
<span class="no">Week</span><span class="p">.</span><span class="nf">weeks_in_month</span>
<span class="no">Week</span><span class="p">.</span><span class="nf">weeks_in_year</span>
<span class="n">d1</span><span class="p">.</span><span class="nf">no_of_months</span><span class="w">
</span></pre></td></tr></tbody></table></code></pre></figure>

<h4 id="definition-lists">Definition Lists</h4>

<dl>
    <dt>Definition Title</dt>
    <dd>Definition Description</dd>
</dl>

<h4 id="paragraphs-w-aligned-images">Paragraphs w/ Aligned Images</h4>

<p>The Jekyll gem makes a jekyll executable available to you in your Terminal window. You can use this command in a number of ways.</p>

<figure class="alignleft">
  <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;s=3f9c78df0edb464244bbabb04d1797d8" width="250">
  <figcaption>Photo by <a href="https://unsplash.com/dustinlee" target="_blank">Dustin Lee</a>.</figcaption>
</figure>

<p>This site aims to be a comprehensive guide to Jekyll. We’ll cover topics such as getting your site up and running, creating and managing your content, customizing the way your site works and looks, deploying to various environments, and give you some advice on participating in the future development of Jekyll itself.</p>

<p>Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.</p>

<figure class="alignright">
  <img src="https://images.unsplash.com/photo-1442037025225-e1cffaa2dc23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;s=7fe04b68b0cb123bf568c6951c14b177" width="250">
  <figcaption>Photo by <a href="https://unsplash.com/lobostudiohamburg" target="_blank">LoboStudio Hamburg</a>.</figcaption>
</figure>

<p>Throughout this guide there are a number of small-but-handy pieces of information that can make using Jekyll easier, more interesting, and less hazardous. Here’s what to look out for.</p>

<p>If you come across anything along the way that we haven’t covered, or if you know of a tip you think others would find handy, please file an issue and we’ll see about including it in this guide.</p>

<p>The front matter is where Jekyll starts to get really cool. Any file that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines.</p>