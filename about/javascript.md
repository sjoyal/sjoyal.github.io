## Javascript

#### Basic Literal Types:
* **null** - Empty value (i.e. no object is present); retrieved in places where an object can be expected, but no object is relevant. AKA: known to exist but no value.
* **Boolean** - Object wrapper for a boolean value
  *   new Boolean ([value])
* **Number** - Wrapper object allowing you to work with numerical values; a number object is created using the number ( ) constructor. 
  *   new Number(value)
* **String** - Constructor for strings, or a sequence of characters. 
  *   'String text' 
  *   String (thing) 
  *   new String (thing)

#### Special Constants
* **Infinity** - Numeric value representing infinity; Initially Number.Positive_Infinity, the value is greater than any other number.
  *   Any positive number multiplied by infinity equals infinity
  *   Any number divided by infinity equals zero
* **NaN** - Value representing Not_A_Number; Rare to use in a program. 
  *   Returned value when Math functions fail (math.sqrt(-1)) or when a function trying to parse a number fails (parseInt("blabla"))
* **Undefined** Represents the primitive value undefined, one of Javascript's primitive types
  *   Variable that has not been assigned a value
  *   Method or Statement also returns undefined if variable being evaluated does not have an assigned value
  *   Function returns undefined if a value was not returned

####Basic Operators
* **'+'** - The addition operator produces the sum of numeric operands or string concatenation
  *   Operator: x + y
* **'-'** - The subtraction operator subtracts the two operands, producing their difference
  *   Operator: x - y
* **'/'** - The division operator produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.
  *   Operator: x / y 
