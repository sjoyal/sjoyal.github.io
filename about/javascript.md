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

#### `++` -- increment

Increments (adds one to) an operand and returns a value; x++ returns values before incrementing; ++x returns values after incrementing. Example:
```JavaScript
var x = 3
y = x++; // yields y = 3, x = 4

var a = 2
b = ++a; // yields a = 3, b = 3
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

## Objects

### Literal Types

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

### Functions

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

#### `Array` -- [element0, element1, ..., elementN]

High level, list-like objects including elements ordered by an index beginning at 0. Example:
```JavaScript
var arr = ['this is the first element', 'this is the second element'];
console.log(arr[0]); // logs 'this is the first element'
console.log(arr[1]); // logs 'this is the second element'
```

#### `arr.length` -- length

[Property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) that specifies the number of elements in an array without regard to the number of defined values therein. Examples:
```JavaScript
var arr = ['this is the first element', 'this is the second element'];
console.log(arr[0]); // logs 'this is the first element'
console.log(arr[arr.length - 1]); // logs 'this is the second element'
```

#### [Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)

##### [`array.prototype.pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

* _params:_ none
* _returns:_ the last element
* _side-effects_: removes the element returned

###### Examples
```JavaScript
var myGit = ['status', 'add', 'commit', 'push'];
var popped = myGit.pop();
console.log(myGit); // yields ['status', 'add', 'commit']
console.log(popped); // yields 'push'
```
##### [`array.prototype.push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

* _params:_ none
* _returns:_ the new length property of the array
* _side-effects_: appends elements to the end

###### Examples
```JavaScript
var literals = ['null', 'Boolean'];
var missing = literals.push('Number', 'String');
console.log(literals); // yields ['null', 'Boolean', 'Number', 'String']
console.log(missing); // yields 4
```

## Statements

### Control Flow and Error Handling

#### [`block Statement`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)

Groups statements as indicated by a pair of curly brackets; commonly used with control flow statements, such as if...else and for. Example:
```JavaScript
{
 statement 1;
 statement 2;
 .
 .
 statement n;
 }
```

#### [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

Statement that evaluates an expression as true or false and returns a predefined statement accordingly; Expressions evaluated false can return a statement or nest further if statements using _else if_.  Examples:
```JavaScript
if (14 >= 12) {
   "I am good at math!"
 } else {
   "Math is hard..."
  }
```

#### [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

Statement that evaluates an expression and attempts to match it to a case from a collection of case clauses. Executes the statement associated with the matching case. Example:
```JavaScript
var task = "finished";
switch (task) {
  case "open":
      "Keep working";
      break;
  case "finished":
      "Good job";
      break;
}
// yields "Good job"
```

#### [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

Marks a block of statements to try and specifies a response should an exception be thrown within; at least one try statement and catch clause is required; a finally clause may be included that executes regardless of an exception being thrown / not thrown. Example:
```JavaScript
try {
    try_statements
} [catch (exception1){
    statements1
]} [catch (exception2){
    statements2
...
]} [catch (exception_n_){
    statments_n_
]} finally {
    statement
]}
```

#### [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

User defined exception placed within a function; execution of function is stopped and expression is thrown; commonly used. Example:
```JavaScript
insert throw example
```

#### [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

insert def
```JavaScript
insert for example
```

#### [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

insert def
```JavaScript
insert while example
```

#### [`do...while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

insert def
```JavaScript
insert do...while example
```

