---
title: Movies
layout: page
comments: false
hideDate: true
noWordCount: true
---

These are some of the movies I've seen.

{% raw %}
<div id="app">
<counter
        v-bind:all_seen="seen">
</counter>
<movielist
        v-for="movie in seen"
        v-bind:s="movie"
        v-bind:key="movie.imdb"
      ></movielist>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script type="module" src="/js/movielist.js"></script>

{% endraw %}
