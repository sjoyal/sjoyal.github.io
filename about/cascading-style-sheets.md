# About Cascading Style Sheets

## Properties

#### display
Usually block or inline, every element has a default display value.
  * block - block-level elements starts on a new line and stretch left to right as far as they can. Example:
    `<div>, <p>, <form>`
  * inline - inline elements can wrap some text inside a paragraph without disrupting flow. Example:
    `<span>, <a>`
  * none - default value of JavaScript elements, used to hide and show elements without deleting and recreating them
    * Different from visibility:hidden, which hides the element but still takes up the space it would if visible

#### margin: auto
Used to horizontally center an element within its container after width has been set. Example:
`#main {
    width: 600px;
    margin: 0 auto;
  }`

#### max-width
Used in place of width to improve the way browsers handle small windows; Important for making usable sites on mobile; Supported in all browsers. Example:
`#main {
    max-width: 600px;
    margin: 0 auto;
  }`

#### box model
When setting width of an element consider border and padding, which can make an element appear bigger than the setting.

#### box-sizing
Property applied to an element so that the padding and border of the element no longer increase its width. Example:
`-webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
         box-sizing: border-box;
         `
#### position
Property used on elements to create complex layouts.
  * static - default value, not positioned in any special way
  * relative - behaves the same as static unless top, right, bottom, and left properties are set
  * fixed - positioned relative to the viewport; Always stays in the same place even if the page is scrolled; top, right, bottom, and left properties are used; shaky in mobile.
  * absolute - trickiest of the position values; behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport.

#### float
Property used for layout; intended for wrapping text around images. Example:
`img {
    float: right;
    margin: 0 0 1em 1em;
  }`

#### clear
Controls the behavior of floats; uses left, right, and both to clear floated elements
  * clear fix hack - helps correct when an image is floating outside its container. Example:
  `.clearfix {
        overflow: auto;
    }`

#### percent width
Measurement unit relative to containing block; good for images; can be used to keep an image at a percentage of container size, even after resizing the window. Example:
`article img {
    float: right;
    width: 50%;
  }`

#### inline-block
Creates a grid of boxes that fills the browser width and wraps nicely; easier approach than float. Can be used for layouts but must keep in mind the elements are affected by 'vertical-align'.
  * Set the width of each column
  * If there is whitespace between columns in HTML, there will be a gap between columns
  Example:
  `nav {
      display: inner-block;
      vertical-align: top;
      width: 25%;
    }`
