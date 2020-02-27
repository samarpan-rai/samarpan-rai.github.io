---
layout: page
title:  "3 tips to improve your next Data Science Hackathon performance"
subtitle: "Lessons learnt from hackathons"
date:   2020-02-22 08:56 +0100
categories: ["data-science"]
---

## Introduction
I love hackathons because they are fun and intense events. One gets to meet people from many diverse backgrounds and work together as a team. It may seem glorious on the surface but working 30+ hours straight on a problem under stress is not easy. In the past three years, I have been to several hackathons but I have to admit that I and my team(s) have never won the first prize. Tech world is innovation-driven and it is essential skills to quickly prototype, pitch and sell your idea. This skill combines computer science, leadership and marketing which in my view are a completely disjoint set of skills. Therefore, such a skill set is difficult to acquire but it is not impossible. I believe that I can learn these skills at a hackathon. I haven't acquired those skills fully yet so this blog is an attempt to teach my-self by reflecting on a few things I did incorrectly in past. My focus is on soft skills like communication, collaboration and self-awareness.

Hope you could also learn something from it!

## The event
With multiple shots of espresso in your system, you and your teammates start working to crack the assigned case. A couple of hours passes by and you look around and see every other team working equally hard as you — sweating and pushing away their sleep for the hope of glory. You don't take breaks because you are so focused on the prize and problem at hand and as time passes from six to midnight, you get tired and start to lose focus but you keep on pushing. Now, you think you have something presentable but due to the caffeine in your system, you didn’t even realize that it is already four in the morning and you feel that coffee dip, voluntary sleep-deprivation and tiredness all at once, but you grind on. You still need to prepare the pitch for the next morning. You come up with an outline, try to find research to back your solution but it is hard to understand anything at this point. It’s already morning and you need to prepare your pitch and present in front of the jury. I kid you not; it is twice as hard to memorize all key points when you have not slept for 30+ hours. Will you be able to win over the judges with your solution? Will your demo work? There are so many variables that have to work for you to win this.

Over the last three years, I participated in multiple hackathons and unfortunately, I have never won the first prize in any of them. I now think I know why. In this blog post, I would like to share the reasons behind my failures. I hope the process will allow me to reflect and re-iterate on my mistakes and along the way provide you with tips on how they can better strategize for their next hackathon.

### Tip # 1: Don’t dive deep into the rabbit-hole without a plan

Like most hackathon-ers, I tend to get excited about the problem at hand. I try to find an ideal instead of a practical solution that can be implemented within 24 hours. For example, say you are asked to predict how the weather affects sales of a particular online delivery company. You need first ask the question if the weather affects the sales at all instead of cherrypicking through the data and finding patterns that may not even exist. This was the exact mistake I made at 24HrDataChallenge organized by NEWCRAFT (looking forward to being there this year too!).
24 hour data challenge poster

I believe that we tried to find a pattern where it may have not existed. An improvement point would be to find a global pattern before you drill into a local pattern. This could mean wrangling the data and performing exploratory analysis and discussing what could be done with your teammates before you start building complex models and analysis on top. You know what they say: Garbage in = Garbage out.

Taking a step back has two major advantages. First, it allows you to be familiar with the data and ask critical questions about it. This step gives you an intuition about what the data may show. For instance, if you see an increasing trend in the sales on aggregate years-over-years then you can get the "feeling" that the weather may not affect the sales.

Second, when you discuss your findings, you create an environment where discussions are accepted in the group. Often, I have seen individuals quietly work and suffer on their own instead of communicating and collaborating with the group. I am also not suggesting that you should disturb each other constantly but instead, discuss the objective, create [SMART](https://www.mindtools.com/pages/article/smart-goals.htm) goals and then commune every hour to talk about your findings.

### Tip # 2: Take regular breaks

Sometimes when I work too long on a problem, I seem to go into these rabbit holes (as mentioned above) and waste hours trying to solve something easy, in a complex manner. I poured my entire focus on trying to solve a problem without stepping back and looking over what I am trying to accomplish. Don’t get me wrong you need these intensely focused sessions during hackathons because you are under enormous time pressure but it is vital to take regular breaks so you don’t go down these rabbit holes.

Another downside to staring at a computer screen for a prolonged period means that your blink rate decreases which causes various problems eye fatigue and dry eyes. I was suffering from this problem for months and I found a simple solution. Force yourself to take regular breaks by disabling your laptop screen completely. I use one handy (free) application called [Safe Eyes](https://slgobinath.github.io/SafeEyes/) turns the screen black and locks the computer. You can configure it both for short and a long breaks. My short break locks my screen every 20 minutes for half a minute and my long break locks my screen every 90 minutes for 5 minutes.

A quick [spreadsheet](https://docs.google.com/spreadsheets/d/1WCiblcP7QC9QNSV7_fVeBIeZC7FpnHtwG3eOIRTm4vE/edit?usp=sharing) calculation says that I take on average 4 min of break time per hour of an 8 hours workday. I think it is not a bad price to pay for keeping your focus intact. [Research](https://www.sciencedirect.com/science/article/abs/pii/S0010027710002994?via%3Dihub) has also shown taking regular breaks helped participants focus better.

With that in mind, in my next hackathon, I will take regular breaks and also encourage my future group to do so. I believe it will allow the group to ask critical questions like, Is it worth spending all this time on this issue? Can this be solved more easily? Are we making too many assumptions? If so, what are the implication of those assumptions?. Hopefully, this allows communicating one’s findings with the group. Perhaps someone else in your group already figured out the solution to the problem. Why reinvent the wheel when you are running against time?

### Tip # 3: Learn to manipulate data

When you attend data science hackathons, it is essential that you know how to manipulate data. In my first-ever hackathon, I stared at the screen for hours, not knowing how to manipulate it. You might know how to code but that doesn’t mean you will be able to manipulate data. Data comes in various forms like CSV, Excel, Text, PDF, BigQuery, SQL database or plain old HTML. In real life, no one is going to hand you clean data that you can apply analytics or build a prediction model. During the hackathon, maybe some organizers have a curated list of datasets for your business case but more-often-than-not you have to transform it to suit your analysis pipeline. Therefore, it is quite essential to know how to manipulate data. If you have no idea about data manipulation that you should start with learning SQL queries. Concepts like JOINs are must-know when you have to combine multiple datasets. If you are a python user, then you should know how to use [pandas](https://pandas.pydata.org/). Pandas have tons of support right out the box for plotting and technical analysis so it is super helpful to have it under your belt. If you are an R user, then definitely look into the [tidyverse](https://www.tidyverse.org/) universe packages. I regularly use dplyr, ggplot for data manipulation and plotting. R has strong academic support so you will be able to find a lot of cutting-edge algorithms implemented by the researchers.

## Conclusion

Hackathons are wholesome events where you put yourself at the edge of your working capacity. It requires intense focus, creative problem solving and business skills to present and communicate your idea to the jury. This is a demanding event and if you are open to it, you can learn a lot in a short period but winning is not easy. I have learnt a lot from my past failures and in this post, I shared a few of my reflections on I could do better next time. Hopefully, I was able to add value to your time and thank you for reading till the end. To summarize, you can be a skilled data scientist and see the winning solution but without self-regulation, co-operation and self-awareness you cannot win it. You should be able to keep yourself focused sustainably by taking regular breaks but also don't forget that it is a team sport so you should co-operate and join forces, else you will be stressed, sleep-deprived and without return home without a prize.

Do you have something you would add to my list? Feel free to get in touch with me at samarpan-rai AT live DOT com
