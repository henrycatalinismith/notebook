---
title: The accessibility case for tabs
description: Maybe it’s not a meaningless disagreement about aesthetics after all
date: 2022-06-28
permalink: /the-accessibility-case-for-tabs/
layout: note
---

The web development community standardized on indentation using spaces over the course of the 2010s.
This norm is now being challenged.
A [GitHub thread about changing the most popular JavaScript code formatter to use tabs by default](https://github.com/prettier/prettier/issues/7475) has gone viral.
Accessibility’s the issue at the center of the debate and it’s caught my imagination.
How strong is the accessibility case for tabs anyway?

## Universal design

[Universal Design](https://en.wikipedia.org/wiki/Universal_design) is a school of thought focused on designing things so that all people can benefit from them.
Its second principle – Flexibility in Use – is relevant here.
This principle is about accommodating a wide range of individual preferences and abilities.

Moving walkways in airports are an example of this principle in the built environment.
They’re helpful for many different body types and they even double as a time saver for travelers in a hurry.
Captions on videos are an example from the software world.
They’re essential for deaf or hard of hearing people; they’re useful in environments where listening isn’t practical; and they improve comprehension for less fluent speakers of the language in use.

Using tabs for indentation is a textbook example of flexibility in use.
It allows a developer with a visual impairment to crank up the indentation level to clarify the structure of their code.
By reducing the number of cells used for whitespace on a [refreshable Braille display](https://en.wikipedia.org/wiki/Refreshable_braille_display), it enables a deafblind developer to read more code at once.
And if you’re totally able-bodied you benefit from the flexibility too, as your pool of potential collaborators is larger as a result of it.

## Accessibility is for everyone

If we're lucky, we survive long enough to become old.
At around 40 years old, [presbyopia](https://en.wikipedia.org/wiki/Presbyopia) kicks in and starts messing up your eyes' ability to focus.
Then as you age further, more and more factors pile on top of that.
Diabetes, for example, is correlated with age.
[Diabetic retinopathy](https://www.cdc.gov/diabetes/managing/diabetes-vision-loss.html) is the leading cause of blindness in working-age adults.
According to one estimate, [65% of visually impaired Americans are over 50 years old](https://iovs.arvojournals.org/article.aspx?articleid=2127318).
For blindness, that figure rises to 82%.

Our industry's age discrimination is notorious.
According to StackOverflow, [the proportion of professional developers aged 45 or over](https://survey.stackoverflow.co/2022/#demographics-age-prof) was just 10.9% in 2022.
WebAIM's [analysis of the top 1,000,000 websites](https://webaim.org/projects/million/#wcag) suggests that we're not an industry that cares very much about accessibility either.
Perhaps some enlightened self-interest regarding our own future career prospects could be a way for some of us to bridge that empathy gap.

In my case, I became a parent a couple of years ago and stopped having infinite free time to stare at code on computer screens.
In order to keep my creativity flowing during housework and supermarket trips, I sometimes peek at half-finished code on my phone.
This has led me to optimize my code formatting for mobile reading, which includes using only one space for indentation.
If we – as a community – had standardized on tabs instead of spaces, I could fulfill that need without changing the code itself.

## It's all upside

After spending some time poking around the various discussions about this both past and present, a few themes have emerged.
Anecdotes about [the accessibility benefits of indentation using tabs](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/) are easy to find.
There are also plenty of people with disabilities who say they don't really mind either way.
What I'm not finding is examples where someone's saying “I’ll be excluded if you switch to tabs! Please don’t!”.

So there does seem to be a strong case for this.
Change in general is always exciting and this one could genuinely help people for real.
I'm crossing my fingers for it to become a full-blown bandwagon thing now.
My best-case scenario is if someone like GitHub jumps on board.
They could really boost this by shipping some integrated migration tooling.
If you're reading this over there, go make it happen!
