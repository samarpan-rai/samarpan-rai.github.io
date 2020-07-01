---
layout: page
title: "Lesson learnt as a Data Scientist"
subtitle : "Few tips and suggestion for aspiring data scientists"
description : Tips and tricks for aspiring data scientist and try to answer question like, Should you learn Python or R? Should you choose black box or interpretable model?  
date: "2019-05-20 13:15:55 +0200"
categories: ["data-science"]
schemadotorg:
   keywords: ["ml","datascience","A.I","ai","dynamic pricing","python","R","tidyverse","XAI"]
---
## Introduction

Approximately six months ago I started working as a part-time Data scientist for a small online retail company to perform some pricing magic. My  approach was to just run some model in the past price data and predict the future for the most optimum price. But in reality, it is not that simple. This type problem is called time-series forecasting and still remains one of the difficult Machine Learning problem. The reason is there are too many hidden variables that could tip-off the prediction.

So in order to not overwhelm myself with complexity I took the ‘agile’ approach of incremental prototyping. Trying to break down the problem into usable bits of product.

During the pre-processing stage, I learnt to multiple large data sets and create data pipelines. Secondly, I performed EDA (Exploratory data analysis) to see for any pattern. I also had to collect data from external sources along the way. Furthermore, I created multiple model that approximately solves the problem at hand.

In each of these stages, I learnt something new and I would like to share it with you in this post. I will also share some R packages that have helped me along the way and at the end of the post, I will share link to two books that are essential for my data science work. Let’s get started!

## Lesson 0: R vs. Python? Choose one and move on.

It is always good to know more than one language but at this point, I assume you are trying to get a grasp of the work so it's better to stick with one language and try to learn the data-science practices. They are usually translatable across programming languages. I have chosen R for this post.


## Lesson 1: Visualize what you want to build and involve your end-users early on

  Assume that your awesome solution is ready -- All your fancy models are trained and ready to be deployed. Now ask yourself this: How will my end-user use my solution? Is the metric/forecast/solution interpretable and actionable? You can train the most sophisticated state-of-the-art models but if your end-users are not able to use it then it is not worth all the work. So my advice is — start with a simple model. Build a simple “interactive” prototype. Show it to your end-users and let them interact with it. Doing this early on has many advantages – It allows you to get an understanding of the existing domain knowledge of your end-user. You can also build up an expectation about what your end-product could look like. However, it is not always easy to create an interactive prototype when you are just starting off as it requires you to build some form of a web application that users can easily access and play with. This is where Shiny really shines. Shiny is an easy-to-plugin R library that allows you to create an interactive dashboard in no-time. Learning shiny early on allowed me to create dashboards that I could easily deploy and let the clients interact with.



## Lesson 2: Data manipulation is beast; Learn to tame it

  Have you heard the phrase that 80% of the work of a data-scientist is getting the data in the usable format? I used to think that it was quite a big claim but now I see why it is so time-consuming. Data is almost never in the exact format you want it. Data science is quite misleading in that term. Any scientific study should always declare the data format before the start collecting it. However, in most cases, we cannot have that luxury. It is highly likely that you have to extract data from some data lake. Once you extract the data you need, you need to clean it and make sure that it represents the problem well. Now you need to make this raw data palatable for your models so you can train your models. This is not an easy task and requires knowledge of how different types of databases work and creating pipelines. My advice would be to get yourself comfortable with SQL queries. A lot of modern Databases take concepts out of SQL language. You should at least be able to join multiple tables and understand the concept of various types of joins. I had some experience with Web development and API development, so I did manage to extract data but I had problems cleaning it and making it palatable for my target models. This is where excellent packages like magrittr, dplyr and purrr come in. These packages provide a convenient way to manipulate the raw data. The amazing R community people have packaged the most useful data-science package in a library called tidyverse. Learning how to use these packages have helped improve my workflow a lot.

## Lesson 3 : Model Interpretability vs. Predictability. Choose Interpretability.

Once you have your data you would most likely train a model with some objective in mind. A big part of the model usage decision should be dictated by the problem in hand. I am not an expert in this subject either but in my experience businesses want interpretable results. Your models cannot just claim that the sales will be X amount for next month without providing some proof. If you are predicting sales for the next month then the model should at least provide the confidence interval (although confidence interval have its caveats but can be a good starting point). Providing more sophisticated proof is a difficult problem in itself. I will not discuss why it is so difficult and how to solve it but a blog by O'Reilly provides further explanation about this topic. If you are just starting your career in Data science then I would advise you to start with simple models and build your way up the complexity ladder. Furthermore, throwing Deep learning and XGBoost at every single problem is not the best way to solve the problem. Make your analysis systematic is very important because you need to be able to defend it. If you are not systematic about it then you may be overwhelmed at later stages. I regularly document various decision I make in my workflow using Rmarkdown and share it with my shareholders. It can be used not just to document your findings but also be used to solve shareholder conflict when it arises.
Conclusion

## Conclusion

Being a data scientist is quite a wholesome experience. You need to set certain principle for yourself so you do not get lost in the complexity. In a way, you are the bridge between the engineering and business domain so you need to always take interpretability of your results in account. Furthermore, it is very important to keep documentation of decisions you have made because you need to be able to defend your models’ output. It boils down to being structured and systematic about your work.

Hopefully, I was able to provide you with some pointers about how to think about problem-solving. As promised, I will provide two books that I have used extensively at my work - R for Data science and Efficient R programming. The first book discusses in-depth about how various packages in R can be orchestrated to go from raw data to finished reports. The second book outlines programming principles in R that will make your programs much more efficient.

Happy hacking!
