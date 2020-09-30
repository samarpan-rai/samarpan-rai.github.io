---
layout: page
title:  "Serving in table tennis"
subtitle: "Whose turn is it to serve now?"
date:   2019-09-29 16:56 +0100
description : In an intense rally, I tend to forget whose turn is it to serve so this is my attempt to find shortcut using math to solve this.
categories: ["math"]
sitemap:
  priority: 0.5

schemadotorg:
  keywords: ["math","table-tennis"]
---
<script type="text/javascript" async src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML'></script>


# TL;DR
If you served first then you serve every odd round and your opponent serves every even round.

## Problem
You are in an intense rally - your opponent is too strong compared to you but you don't want to just give up. You push through each serve and give them hell. But while going down in this deep rabbit hole of emotions and intense focus, I have realized that I forget if it is my turn to serve. Sometimes I have also noticed that my opponent also forgets whose turn it is to serve. I think it is natural because you are so occupied with the thought of trying to win that you forget about the smaller things. This has happened too often to me and I need to find a solution.

{% include lazyload.html image_src="/assets/img/pexels-kripesh-adwani-709134.jpg" image_alt="table-tennis" image_title="Table tennis image" %}

## Solution
I know you could just ask the referee whose serve it is but let's assume we don't have a referee.

### Definitions

We know that table tennis is a two person sport. Let player 1 and 2 be represented by \\( P_{1} \\) and \\( P_{2} \\), respectively.

Let's solve this problem with some simple math. But first, we need some definitions. We have very limited bandwidth so we can only remember two things

 * The player who started the serve. Let's call him \\( P_{starter} \\)
 * Each player should remember their own points so the total points scored till this point is \\( Points_{total} \\)

### Game mechanics

Each rally usually consists of two serves from the same player. Once this rally ends, the next player serves. This process continues until the end of the game.

Now, comes the juicy part.

## Math
At each point in time, \\( Points_{total} \\) is always divisible by 2. For example, see the table below for an example of the score at the end of round 1.

| \\( P_{1} \\) 	| \\( P_{2} \\)  	|
|-----------------|---------------	|
|1|1|
|0|2|
|2|0|

Assume that \\( P_{1} \\) is \\( P_{starter} \\) :

  If \\( \frac{Points_{total}}{2} \\) is odd then \\( P_{1} \\) must serve.
  Else \\( P_{2} \\) must serve

Let's try the use this relation and check if it actually works. The following table shows the relation between the rally and \\( Points_{total} \\).

|Round| \\( Points_{total} \\)|
|-----|-----------------------|
|1|2|
|2|4|
|3|6|
|..|..|
|n|\\(2*n\\)|

The Round column above is actually \\( \frac{Points_{total}}{2} \\) so if \\( P_{1} \\) is \\( P_{starter} \\)  then he can serve in the every odd round -- first, third, fifth etc. Similarly, \\( P_{2} \\) can serve in every even round -- second, fourth, sixth etc.

## Conclusion

If you started serving then you serve in every odd rounds (calculated by dividing the sum of points by 2) and vice versa.
