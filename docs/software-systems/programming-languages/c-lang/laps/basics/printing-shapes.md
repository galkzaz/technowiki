---
id: printing-shapes
title: Printing Shapes
description: Printing Shapes
---

Write a program that uses printf to display the following picture on the screen:
```
        *
       *
      *
*    *
 *  *
  *
```

```c
#include <stdio.h>

int main(void)
{
    printf('        *\n');
    printf('       *\n');
    printf('      *\n');
    printf('*    *\n');
    printf(' *  *\n');
    printf('  *\n');
}
```

## using loops instead of hard-coding the spaces.
The pattern has two parts:
    1. A diagonal going down-left
    2. A "V" shape at the bottom
Here is one clean way to produce the exact same output programmatically:

```c
/*
 * The pattern has two parts:
 1 . A diagonal going down-lef*t
 2. A "V" shape at the bottom
 */
void using_for_loop() {
  int i, j;

  /* Upper diagonal */
  for (i = 9; i >= 7; i--) {
    for (j = 0; j < i; j++)
      printf(' ');
    printf('*\n');
  }

  /* Middle line */
  printf('*    *\n');

  /* Lower V shape */
  printf(' *  *\n');
  printf('  *\n');
}
```
## Fully Generated Version (No Hardcoded Spaces at All)
```c
void using_fully_generated_version() {
  int i, j;

  /* Top 3 lines */
  for (i = 9; i >= 7; i--) {
    for (j = 0; j < i; j++)
      printf(' ');
    printf('*\n');
  }

  /* Row: *    * */
  printf('*');
  for (i = 0; i <= 4; i++)
    printf(' ');
  printf('*\n');

  /* Row:  *  * */
  printf(' ');
  printf('*');
  for (i = 0; i <= 2; i++)
    printf(' ');
  printf('*\n');

  /* Row:    * */
  for (i = 0; i < 3; i++)
    printf(' ');
  printf('*\n');
}
```
