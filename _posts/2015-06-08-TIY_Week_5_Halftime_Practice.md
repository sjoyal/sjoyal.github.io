---
layout: post
title: TIY Week 5 - Halftime Happened
---

## What Once Was a Plan Was Not

Week 5 at TIY = done. It was a weird one. In a neither good nor bad way. Just weird. We began the week with the possibility of covering new material, or tapping the breaks for a recap week starting on Tuesday. Worse, the decision was ours to make. Option A - Cover new material in week 5 and take halftime in week 6. Option B - Take a halftime break in week 5, then go back to new material in week 6. Collectively, the cohort opted for B. And while there were some that were more vocal with their opinion than others, the cohort definitely embraced the no man left behind concept. I certainly hadn't expected any type of halftime week when I first got to TIY, but after trying to digest all the information that was dumped in my brain through the first third of the course, I'm beginning to see why it was a good idea. For the record, I voted for option A, but one guy does not a cohort make.

#### So what did I learn during halftime week?

Turns out, not a whole lot. At least in terms of new tools. Instead, I got to spend a lot of time reworking some of the projects we've previously worked on throughout the first month of the course. My blueprint friends Full Width Tabs and View Mode Switch got reworked, and I started on the fundamental building blocks of personal blog/portfolio site. I also failed to finish a third blueprint I was supposed to complete, but I digress. The week was a good lesson on planning and scope. Something about using a combination of checkboxes, skitch, and feature buzzwords....woot. Looking back, even though I would've preferred delaying halftime one more week, I don't think the week was a waste of time. More like extended practice. I really hope I have something to put on said portfolio site by the end of this course...

In terms of new concepts, I learned that I didn't use a very good technique for holding moves when I made that chessboard thingy in week 4 with moving pieces and jQuery and blah. Apparently calling a parameter's (which happened to be an array literal in this case) index in a function body, makes that array act as a _tuple_. Aka, a finite ordered list of elements, emphasis on the ordered. One that ordered incorrectly will cause some serious issues. Anyway, I need to embrace the object literal. Getting warmer here.

We also took a look at using _doc blocks_ when defining functions in our JavaScript. 2 reasons here: it's easier for other developers to see what the hell you're doing, and if done properly can make generating documentation a much easier process using a generator such as JSDoc.

An example of the doc block format we've used in class:

```
/**
 * multiply two numbers
 * @param [number] a
 * @param [number] b
 * @return [number] product
 */
 function (a, b) {
   return a * b;
 };
```

_Perfect pixel_......this seems like a cool chrome extension, even if the video demonstration is the most atrocious thing possibly ever. I can see this being very useful if working for an especially anal designer. You know who you are.

The coolest tool we dipped our toes in was definitely _Jekyll_. Jekyll is a ruby based static site generator that takes basic text files, applies basic styling, and creates a mf'ing website. Combined with GitHub pages, I can see it's going to be a very useful tool.

As usual, my tips for surviving a coding bootcamp, week 5 edition, are included below. Week 5 was better than week 4. Not sure how that happened, but here goes....

**How to survive week 5, or any halftime week for that matter**
* Tear it all down and rebuild. Don't worry about finishing things, just get better
* Touch on everything, for us front enders, that means don't forget html, css, AND js
* Go to a Tom Cruise themed costume party (this happened)
* Regret that you aren't learning something new (where's my momentum?)
* Change up that study scenery
* Rejoice that the burnout phase should be over soon
