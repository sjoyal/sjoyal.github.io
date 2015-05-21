# About Cascading Style Sheets

## Properties

### selectors and rules
Select elements in the DOM in which to apply rules. The example below includes a rule where `h3` represents the selector, `{ }` represents the declaration, `color` represents the property, and `red` represents the value.
```
h3 {
    color: red;
}
```

#### display
Usually block or inline, every element has a default display value.
  * `block` - block-level elements starts on a new line and stretch left to right as far as they can. Example:
    `<div>, <p>, <form>`
  * `inline` - inline elements can wrap some text inside a paragraph without disrupting flow. Example:
    `<span>, <a>`
  * `none` - default value of JavaScript elements, used to hide and show elements without deleting and recreating them
    * Different from visibility:hidden, which hides the element but still takes up the space it would if visible
  * `inline-block`
    Generates a block element box flowed with surrounding content as if it were a single inline box...aka display things inline, while still retaining block-level characteristics.
      Example:
      `nav {
          display: inline-block;
          vertical-align: top;
          width: 25%;
        }`

#### attributes
In addition to tag names, attribute values can be used in selectors; there are 2 types:
  * `class` - Multiple elements can be assigned to the same class value; typed with a period when used in a selectors
  * `id` - Unique to the a specific element when assigned in the document; typed with a hash before it in selectors
  * Examples:
  ```
  .class {
      color: green;
  }

  #id {
      font-weight: bolder;
  }
  ```

#### padding-*
Sets padding space required between content and border of the element specified. Examples:
`padding-top`, `padding-left`, `padding-right`, `padding-bottom`

#### border-*
Sets value of border color, style, and width based on the property provided. Examples:
`border-top`, `border-bottom`, `border-rght`

#### margin-*
Property used to set the margin based on the type specified. Example:
`margin-top`,`margin-left`,`margin-right`

##### margin: auto
Used to horizontally center an element within its container after width has been set. Example:
`#main {
    width: 600px;
    margin: 0 auto;
  }`  

#### font
`serif` - Font type that includes ornate caps, feet, and other unique markings on each character.
    * Example: Times New Roman
    * Typically used in print media and for screens with higher resolutions (retina display)
`sans serif` - Font type with clean lines and absent of unique markings associated with `serif` fonts
    * Example: Arial
    * Typically used in non-black colors for screens due to dpi issues


#### max-*
Property that controls content size; sets max height or width of content;

##### max-width
Used in place of width to improve the way browsers handle small windows; important for making usable sites on mobile; supported in all browsers. Example:
`#main {
    max-width: 600px;
    margin: 0 auto;
  }`

#### min-*
Property used to control content size; sets min height or width of centent;

#### box model
When setting width of an element consider border and padding, which can make an element appear bigger than the setting.

#### box-sizing
Property applied to an element so that the padding and border of the element no longer increase its width. Example:
```
-webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
        box-sizing: border-box;
```
#### position
Property used on elements to create complex layouts.
  * `static` - default value, not positioned in any special way
  * `relative` - behaves the same as static unless top, right, bottom, and left properties are set
  * `fixed` - positioned relative to the viewport; Always stays in the same place even if the page is scrolled; top, right, bottom, and left properties are used; shaky in mobile.
  * `absolute` - trickiest of the position values; behaves like fixed except relative to the nearest positioned ancestor instead of relative to the viewport.

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

#### Length - unit types
**Relative**  
  * `em` Calculated font-size of the element
  * `ex` Represents the x-height of the element's font; generally the height of lowercase letters in the font
  * `ch` Width or more precisely advance measure of the glyph '0' in the element's font
  * `rem` Represents font size of the root element `<html>`
**Viewpoint %**
  * `vh` 1/100th of the height of the viewport
  * `vw` 1/100th of the width of the viewport
  * `vmin` 1/100th of the minimum value between the height and the width of the viewport
  * `vmax` 1/100th of the maximum value between the height and width of the viewport
**Absolute Length** - Not technically absolute; measured by px; for screens with greater density, 1 inch is smaller than 1 physical inch (likewise with mm, cm and pt)
  * `px` Relative to viewing device; best for print/high resolution, pixel per inch stays around 96
  * `mm` One millimeter
  * `cm` One centimeter (10mm)
  * `in` One inch (2.54cm)
  * `pt` One point (1/72 of an inch)
  * `pc` One pica (12 point)
