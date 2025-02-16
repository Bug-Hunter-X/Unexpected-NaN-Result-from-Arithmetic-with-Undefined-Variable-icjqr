# JavaScript Bug: Unexpected NaN from Arithmetic with Undefined

This repository demonstrates a common JavaScript bug related to the loose type system and how it affects arithmetic operations involving undefined variables.

## Bug Description
In JavaScript, when performing arithmetic operations with an undefined variable, the result can be NaN (Not a Number), which might not be the expected outcome. This is because undefined is treated differently than null or 0 during type coercion.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and observe the code.
3. Run `bug.js` using a JavaScript runtime (e.g., Node.js).
4. Note that the output is NaN.

## Solution
The `bugSolution.js` file provides a solution that uses strict equality (`===`) to check for undefined values before performing the arithmetic operation, thereby handling the undefined case explicitly and preventing unexpected NaN results.  Always explicitly check for undefined variables to avoid such errors.