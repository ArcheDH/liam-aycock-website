# Introduction
Derivatives have, at first glance, a scary name. They look like this terrifying beast but in reality are one of the most simple ideas in mathematics that you probably use on a daily basis. Before we get into it, lets do what [Socrates](https://sacred-texts.com/cla/dep/dep018.htm) would do and first *define the terms*. 
# Terms
## Derivative
From [etymonline.com](https://www.etymonline.com/word/derivative):
![[etymology_derivative.png]]

So a derivative is something that was *derived* from another. Meaning something was created from something else through a process of steps. For example, we *derive* the meaning of a word we don't know using context clues in a text
## Differentiate
This term actually has its origins in math vocabulary. The technical definition is, again using [etymonline.com](https://www.etymonline.com/word/differentiation):
![[etymology_differentaite.png]]

So, it literally means to take the difference of something. We will get to this later.

# Ground Work
Before we jump straight into the ocean, we want to make sure we have all our equipment. Much of this is elementary algebra but making sure we have all our bases covered is crucial for complete understanding.
## Rates
Rates are the **MOST FUNDAMENTAL** thing to understand with derivatives because, spoiler alert, derivatives are ***just rates***.

A [[Rates|rate]] is something that changes with another. This is best explained with an example. When we drive on the road the speed-limit sign prompts us to drive at a specific *rate* like 60 miles *per* hour. We are driving 60 miles every hour. This means the number of miles changes with the number of hours. In math, we say that we are driving 60 miles *with respect* to one hour. So you can think of "with respect" to be the same thing as the "per" in miles per hour.

Rates do not need to be exclusive to time however. Another driving metaphor to explain this is fuel efficiency. We describe how far our car can drive before needing to stop by the gas station in miles *per* gallon. Using math lingo, that's miles *with respect* to one gallon.

You may notice that in both scenarios we have miles *with respect* to something. Both of these are special kinds of *rates* that have specific names.

- Miles *per* hour is a rate that describes a change in position over time. This is called *speed*. A speed is just a rate.
- Miles *per* gallon describes efficiency. Gas isn't cheap, so we want to make sure we get the most distance for the least amount of money. We are trying to get the biggest output with the smallest input.

## Visualizing
The cool thing about math is that almost all of it can be described visually. If you took math in sixth grade you may be familiar with something called a *linear graph*. A linear graph is just a graph with a straight line. Something like this:![[linear_graph.png|500]]

In the language of numbers, we describe this as: 

> $$y=mx+b$$

where $y$ is the output, $x$ in the input, $m$ is the *slope* (more on that in a moment), and $b$ is the y-intercept (where the red line touches the y-axis.)

Using that equation, the graph above looks like

> $$y=1x+0=x$$

therefore:

> $$y=x$$

Lets stop here for a moment and think a little deeper about what has just been described. The y-value is equal to the x-value. We can use this kind of graph to visually describe rates.

Lets go back to our *speed* rate. We know *speed* is a change in position over time. Let's say the x-axis is our time-value (in hours), and the y-axis is our position (in miles). If we look at the graph we can see that for every change of a value of 1, there is a change in value of 1 for the y-axis. This means that we are moving at one mile *per* hour, or one mile *with respect* to one hour. If we wanted to describe it mathematically we would do it like so:

>$$\frac{\text{Change in Position}}{\text{Change in Time}}$$

If you aren't already aware, we use the Greek capital letter $\Delta$ (delta) to symbolically say "change in". So using $\Delta$ we say

>$$\frac{\Delta y}{\Delta x}$$

Wait a second. . . that's the definition of *slope*! Our value for m in the linear equation is 1, which means:

>$$\frac{\Delta y}{\Delta x} = 1$$

The change in $y$ *per* change in $x$, or stated properly: **The change in $y$ with respect to $x$ is $1$**.
# Principles of the Derivative
As stated in the overview, Derivatives seem scary. I promise you they are not. As you read you'll see why. :)