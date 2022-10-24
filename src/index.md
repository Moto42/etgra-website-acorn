---
title: "Hello World"
layout: 'layouts/1-base.njk'
---

# Hello World

<div 
    class="text-white text-2xl font-bold block p-4 m-4 rounded-lg shadow-xl"
    x-data="{on:false}"
    x-on:click="on = !on"
    x-bind:class="on ? 'bg-purple-600' : 'bg-blue-600'"
>
    Tailwind is installed on this project
</div>