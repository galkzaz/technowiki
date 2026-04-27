---
id: converting-from-fahrenheit-to-celsius
title: Converting from Fahrenheit to Celsius
description: Converting from Fahrenheit to Celsius
---

The following program prompts the user to enter a Fahrenheit temperature; it then
prints the equivalent Celsius temperature. The output of the program will have the
following appearance (as usual, input entered by the user is underlined):
```
Enter Fahrenheit temperature: 212
Celsius equivalent: 100.0
```
The program will allow temperatures that aren't integers; that's why the Celsius temperature is displayed as 100.0 instead of 100.

```c
/* Converts a Fahrenheit temperature to Celsius */
#include <stdio.h>

#define FREEZING_PT 32.0f
#define SCALE_FACTOR (5.0f / 9.0f)

int main(void) {
  float fahrenheit, celsius;

  printf('Enter Fahrenheit temperature: ');
  scanf('%f', &fahrenheit);

  celsius = (fahrenheit - FREEZING_PT) * SCALE_FACTOR;

  printf('Celsius equivalent: %.1f\n', celsius);

  return 0;
}
```

The statement
```c
celsius = (fahrenheit - FREEZING_PT) * SCALE_FACTOR;
```
converts the Fahrenheit temperature to Celsius. Since FREEZING_PT stands for 32.0f and SCALE_FACTOR stands for (5.0f / 9.0f), the compiler sees this statement as
```c
celsius = (fahrenheit - 32.0f) * (5.0f / 9.0f);
```
Defining SCALE_FACTOR to be (5.0f / 9.0f) instead of (5 / 9) is important, because C truncates the result when two integers are divided. The value of (5 / 9) would be 0, which definitely isn't what we want.

The call of printf writes the Celsius temperature:
```c
printf('Celsius equivalent: %.1f\n', celsius);
```
Notice the use of %.1f to display celsius with just one digit after the decimal point.
