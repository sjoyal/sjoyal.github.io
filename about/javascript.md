# About Javascript

## Operators

### Arithmetic

#### '+' -- addition

Given two numeric values, the addition operator produces the sum of those values as another number. Example:
```JavaScript
1 + 2 // yields 3
2 + 4 // yields 6
```

#### `-` -- subtraction

Given two numeric values, the subtraction operator produces the difference of those values as another number. Example:
```JavaScript
5 - 3 // yields 2
37.55 - 3.55 // yields 34
```

#### `/` -- division

Given two numeric values (left value is the dividend; right value is the divisor), the division operator produces the quotient of those values as another number.
```JavaScript
8 / 2 // yields 4
10 / 4 // yields 2.5
```

#### `*` -- multiplication

Given two numberic values, the multiplication operator produces the product of those values as another number. Example:
```JavaScript
8 / 2 // yields 4
10 / 4 // yields 2.5
```

#### `%` -- remainder

Given two numeric values, the remainder operator produces the integer remainder of dividing the left value by the right value. Example:
```JavaScript
12 % 5 // yields 2
40 % 7 //yields 5
```

#### `+` -- unary plus

Given a value (numeric, string, non-string) the unary plus operator evaluates the value and attempts to convert it to a number. Example:
```JavaScript
+3 // yields 3
+'3' // yields 3
+true // yields 1
+null // yields 0
```

#### `-` -- unary negation

Given a numeric value, the unary negation operator precedes the value and negates it. Example:
```JavaScript
-Infinity // yield -Infinity
-"one" // NaN

var x = 3;
y = -x; // y = -3, x = 3
```

### Assignment

#### assignment

Assigns a value to a variable. Example:
```JavaScript
x = y
x = 3
y = 3.40586
```

### Comparison

#### `==` -- equality


#### `!=` -- inequality


#### `===` -- identity / strictly equal

#### `!==` -- non-identity / strict not equal

## Data Types

### Primitive Values

#### `null` -- null

Intentionally empty value (i.e. no object is present); retrieved in places where an object can be expected, but no object is relevant. Examples:
```JavaScript
null
```

#### `Boolean` -- Boolean 

Logical data type that can only have two outputs. Examples:
```JavaScript
true or false
```

#### `Number` -- Numeric 

Data type. Examples:
```JavaScript
42 or 3.14159
```

#### `String` -- String

Sequence of characters used to represent text. Example:
```JavaScript
'Javascript is fun!'
```

#### Special Constants
* **Infinity** - Numeric value representing infinity; The value is greater than any other number.
  * Any positive number multiplied by infinity equals infinity
  * Any number divided by infinity equals zero
```JavaScript
insert Infinity examples
```

* **NaN** - Value representing Not_A_Number 
  * Returned value when Math functions fail (math.sqrt(-1)) or when a function trying to parse a number fails (parseInt("blabla"))
```JavaScript
insert NaN example
```

* **undefined** - Variable that has not been assigned a value
  * Method or Statement also returns undefined if variable being evaluated does not have an assigned value
  * Function returns undefined if a value was not returned
```JavaScript
var something
something // yields undefined
```
