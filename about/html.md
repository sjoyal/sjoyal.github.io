# About HTML

## [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

`HyperText Markup Language` - Markup language that instructs the browser how to display a page using a predefined set of elements to define the semantic meaning of content. Not intended to style and format content.

#### `elements`

The fundamental building blocks of an HTML document; structure the document in a way that the information / content can be used / displayed properly by the browser. Include the opening and closing tags, as well as the content between the tags.

#### `tags`

Used to contain or express content for elements; typically pairing an opening and closing tag (empty elements require no closing tag).
  * tag names are enclosed by angle brackets
  * Between angle brackets, a tag includes a word or character specific to an element
  * Optionally, opening a tag may include a space and additional attributes in the following format:
  `name="value"`
  * Closing tags include `/` after the first bracket and before the tag name
  * tags are nested within the HTML document; must be closed in the opposite order from start tags

#### `attributes`

Additional information included in an opening tag typically including 2 parts:
  * Attribute name
  * Attribute value
attribute values should be enclosed in quotation marks. Examples:
```HTML
<a href="URL">
<img src="URL">
<div id="ID">
```

#### `Comments`

Comments can be included within HTML documents that are not rendered by a browser. An example of the appropriate syntax includes:
`<!-- insert comment here -->`

#### `DOCTYPE`

The `DOCTYPE` declaration tells the browser which version of HTML a page is written in. In HTML5, the syntax is always:
`<!DOCTYPE html>`

### Root element

##### `<html>` - Root element

The `<html>` element is the root element to any HTML document; all other elements must be nested within the opening and closing (`</html>`) tags.

### Metadata elements

##### `<head>`

Contains general informaiton about a document, including the title and links

##### `<title>`

Defines the title of the HTML document; displayed by the browser in the title bar or within a tab.

##### `<link>`

Specifies the relationship between the current document and an external resource.

### Content sectioning

##### `<header>`

Typically includes content for introductory or navigational aids such as logos, search forms, etc.

##### `<body>`

Includes the content that is the main focal point for the page; only one `<body>` tag may be included in each HTML document.

##### `<footer>`

Serves as a footer for the nearest sectioning content or sectioning root element. Typically includes information about an author, copyright information, and links.

##### `<h1>:<h6>`

##### `<nav>`

##### `<section>`

### Block level elements

Block level elements occupy the entire space of their parent(container), creating a "block"
  * Usually displayed by the browser with a new line before and after the element
  * Only appear within the `<body>` element
  * May contain inline elements and other block level elements

#### `<div>`

#### `<form>`

Element containing interactive controls for submitting information to a web server.

##### `<fieldset>`

Element used to organize and group controls and labels (`<label>`) within a web form

##### `<legend>`

Element that represents a caption for the content of its parent. Example:

```HTML
<form action="" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio"> <label for="radio">Click me</label>
  </fieldset>
</form>
```

##### `<input>`

Elements used to create interactive controls for web forms so that they can accept content from the user. Includes a `type` attribute with several possible values, including:
  * button
  * checkbox
  * date
  * hidden
  * image

##### `<label>`

Element representing a caption for an item in a user interface. Example:
```HTML
<label>Click Me! <input type='text' name="username"></label>
```

##### `<button>`

Element representing a clickable button. Example:
```HTML
<button name="button">Click me</button>
```

##### `<select>`

Represents a control that presents a menu of options. Typically used in conjunction with the `<option>` tag.

##### `<option>`

Element used to create a control that represents an item within `<select>`

##### `<textarea>`

Multiline plain text editor control.

#### `<ol>`

Element representing an ordered list of items. List displayed with a preceding character (e.g. number, character, bullet) specified by the `list-style-type` property within CSS.

#### `<ul>`

Element representing an unordered list of items. Because the order of the items is meaningless, unordered lists are typically displayed with some form of bullet. Though, the style is defined using the `list-style-type` property within CSS.

#### `<li>`

Element used to represent an item in a list. Typically preceded by a bullet point or number depending on its parent element _ul_ or _ol_. However, the preceding character is defined using the `list-style-type` property within CSS.

#### `[<dl>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)`

Element that encloses a list of pairs of terms or conditions. Typically used to display metadata including keys and corresponding values.

#### `<p>`

#### `<table>`

Element used to represent in tabular data in a structured two dimensional format. Example:

  | Tables        | Are           | Baller  |
  | ------------- |:-------------:| -------:|
  | This is       | some data     |  _yo_   |
  | This  is      | more data     |  _yo_   |
  | This is done  | final data    |  _yo_   |

##### `<caption>`

Element representing the title of a table; the first descendent of said table, though styling with CSS may relatively position the title elsewhere.

##### `<colgroup>`

Element used to specify attributes that will be applied to a set of table columns (`<col>`)

##### `<tbody>`

The table body element; defines `<tr>` element data rows within the body of the parent table. In contrast to `<thead>` and `<tfoot>` elements, the content within `<tbody>` will typically vary throughout.

##### `<thead>`



### Inline elements

Inline elements occupy the space bounded by the tags that define the inline element.
  * By default, do not begin with a new line
  * Only contain data and other inline elements

##### `<em>`

##### `<strong>`

##### `<img>`

##### `<span>`
