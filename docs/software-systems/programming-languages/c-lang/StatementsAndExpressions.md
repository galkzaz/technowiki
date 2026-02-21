---
id: StatementsAndExpressions
title: Statements And Expressions
description: C Programming Language StatementsAndExpressions
---

### Expression Statements
```c
x = y + 5;       // Assignment
sum = add(a, b); // Function call
```
C requires that each statement end with a semicolon. The
semicolon shows the compiler where the statement ends; since statements can con-
tinue over several lines, it's not always obvious where they end. Directives, on the
other hand, are normally one line long, and they don't end with a semicolon.

add(a, b) is the function call. Asking a function to perform its assigned task is known as calling
the function.
### Compound Statements
Blocks of statements enclosed in { }:
```c
{
    int i;
    for (i = 0; i < 10; i++)
        printf('%d ', i);
}
```
## Control Flow

### Conditional Statements
- if
- if-else
- switch

### Loops
- for
- while
- do-while

### Jump Statements
- break
- continue
- goto
