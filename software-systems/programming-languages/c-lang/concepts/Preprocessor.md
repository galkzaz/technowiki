# Preprocessor Directives

## Include
#include <stdio.h>

## Macros
When a program contains constants, it's often a good idea to give them names. 

Using a feature known as macro definition, we can name this constant:
```c
#define PI 3.14
#define INCHES_PER_POUND 166
```
When a program is compiled, the preprocessor replaces each macro by the value that it represents. 

For example, the statement
```c
weight = (volume + INCHES_PER_POUND - 1) / INCHES_PER_POUND;
```
will become
```
weight = (volume + 166 - 1) / 166;
```
giving the same effect as if we'd written the latter statement in the first place.

The value of a macro can be an expression:
```c
#define RECIPROCAL_OF_PI (1.0f / 3.14159f)
```
If it contains operators, the expression should be enclosed in parentheses.

we've used only upper-case letters in macro names. This is a convention that most C programmers follow, not a requirement of the language.
## Conditional Compilation
#ifdef, #ifndef
