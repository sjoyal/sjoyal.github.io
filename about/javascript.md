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

Given an operand (numeric, string, non-string) the unary plus operator evaluates the operand and attempts to convert it to a number. Example:
```JavaScript
+3 // yields 3
+'3' // yields 3
+true // yields 1
+null // yields 0
```

#### `-` -- unary negation

Given a numeric operand, the unary negation operator precedes the operand and negates it. Example:
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

Is equal to; Converts operands if not of the same type, then applies a strict comparison. Example:
```JavaScript
1 == 1 // yields true
'1' == 1 // yields true
0 == false // yields true
```

#### `!=` -- inequality

Does not equal; Returns true if operands are not equal and attempts to convert to an appropriate type for comparison. Example:
```JavaScript
1 != 2 // yields true
1 != '1' // yields false
0 != false // yields false
```

#### `===` -- identity / strictly equal

Applies a strict comparison with no type conversion; returns true if strictly equal. Example:
```JavaScript
3 === 3 // yields true
3 === '3' // false
```

#### `!==` -- non-identity / strict not equal

Compares and returns true if operands are not equal and/or not of the same type. Example:
```JavaScript
3 !== '3' // true
4 !== 3 // true
3 !== 3 // false
```

### Relational

#### `>` -- greather than

Compares left and right operands, returning true if the left operand is greater than the right. Example:
```JavaScript
4 > 3 // yields true
5 > 9 // yields false
```

#### `>=` -- greater than or equal

Compares left and right operands, returning true if the left operand is greater than or equal to the right. Example:
```JavaScript
4 >= 3 // yields true
3 >= 3 // yields true
3 >= 4 // yields false
```

#### `<` -- less than operator

Compares left and right operands, returning true if the left operand is less than the right. Example:
```JavaScript
3 < 4 // yields true
6 < 5 // yields false
```

#### `<=` -- less than or equal

Compares left and right operands, returning true if the left operand is less than or equal to the right. Example:
```JavaScript
3 <= 4 // yields true
3 <= 3 // yields true
3 <= 2 // yields false
```

### Typeof

#### `typeof` -- typeof

An expression returning a string indicating the type of primitive or object that operand is. Example:
```JavaScript
typeof 31 // yields 'number'
typeof Infinity // yields 'number'
typeof 'blahblah' // yields 'string'
typeof ('typeof 1) // yields 'string'
typeof true // yields 'Boolean'
typeof something // yields 'undefined'
```

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

### Special Constants

#### `Infinity` -- Infinity

Numeric value representing infinity; The value is greater than any other number
```JavaScript
5 * Infinity // yields Infinity
26 / Infinity // yields 0
```

#### `NaN` -- Not_A_Number

Unpresentable value that compares unequal to any other value, including itself. Example:
```JavaScript
Math.sqrt(-2) // yields NaN
NaN === NaN // yields false
```

#### `undefined` -- undefined
 
 Value when a variable has not been defined. Example:
```JavaScript
var x
if (x === undefined) {
   // these statements execute
}
else {
   // these statements do not execute
}
```

##Objects

###Functions

#### `function` -- function

Sequence of statements where values can be passed to return a value. Example:
```JavaScript
// function definition
function addition (a, b /*parameters go here*/) {
   //function body
   return a + b;
}

// function invocation
addition (3, 5 /*arguments go here */); // yields 8
addition (2, 7); // yields 9
addition (3, 15); // yields 18
```



