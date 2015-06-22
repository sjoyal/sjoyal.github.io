---
layout: post
title: Understanding the Box Model
---

## Understanding the Box Model

During weeks 3 and 4 at TIY, a particularly difficult concept for me to understand was the box model in CSS. At its core, the box model defines every HTML element as a rectangle taking the following considerations when rendering on the page:

  * Content area - Width; height (Example: `width: 50%`)
  * Padding - top; right; bottom; left (Example: `padding-top: 2em;`)
  * Border - top; right; bottom; left (Example: `border-right: 1ex solid cornflowerblue`)
  * Margin - top; right; bottom; left (Example: `margin-bottom: 10px`)

![A visual representation of the box model](http://learn.shayhowe.com/assets/images/courses/html-css/opening-the-box-model/box-model.png)


In order to determine the true "width" of an element, the following should be used:

  `margin-right + border-right + padding-right + width + padding-left + border-left + margin-left`

Another consideration in the box model includes background colors and how the properties for padding and margin affect an element in relation to surrounding elements. The background color of the element itself shows through the padding, while the background color of the element's parent shows through the margin.

In terms of positioning, it is important to remember that the "box" for an HTML element is rendered starting from its top left point. Where that top left point starts depends on positioning (i.e.`absolute`,`relative`,`fixed `,`static`).
