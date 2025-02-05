# JavaScript Stack Overflow Bug

This repository demonstrates a common JavaScript error: a stack overflow caused by uncontrolled recursion. The `bug.js` file contains a recursive function with a flawed termination condition. The `bugSolution.js` file provides a corrected version.

## Bug Description
The recursive function `foo` in `bug.js` does not always terminate. If the second argument (`b`) is greater than the first argument (`a`), the recursion continues indefinitely, eventually exhausting the call stack and resulting in a stack overflow error.

## Solution
The corrected version in `bugSolution.js` adds a check to ensure the recursive calls only occur when `a` is strictly less than `b`. This prevents the infinite loop and corrects the error.