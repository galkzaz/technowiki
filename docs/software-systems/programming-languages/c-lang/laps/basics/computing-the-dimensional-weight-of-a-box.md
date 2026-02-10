---
id: computing-the-dimensional-weight-of-a-box
title: Computing the Dimensional Weight of a Box
description: C Programming Labs, Computing the Dimensional Weight of a Box
---

## Program
Shipping companies don’t especially like boxes that are large but very light, since
they take up valuable space in a truck or airplane. In fact, companies often charge
extra for such a box, basing the fee on its volume instead of its weight. In the
United States, the usual method is to divide the volume by 166 (the allowable num-
ber of cubic inches per pound). If this number—the box’s “dimensional” or “volu-
metric” weight—exceeds its actual weight, the shipping fee is based on the
dimensional weight. (The 166 divisor is for international shipments; the dimen-
sional weight of a domestic shipment is typically calculated using 194 instead.)

Let’s say that you’ve been hired by a shipping company to write a program
that computes the dimensional weight of a box.

### Version 1
Since you’re new to C, you decide
to start off by writing a program that calculates the dimensional weight of a partic-
ular box that’s 12″ × 10″ × 8″. Division is represented by / in C, so the obvious
way to compute the dimensional weight would be
```
weight = volume / 166;
```
where weight and volume are integer variables representing the box’s weight and volume.

Unfortunately, this formula isn’t quite what we need. In C, when one
integer is divided by another, the answer is “truncated”: all digits after the decimal
point are lost. The volume of a 12″ × 10″ × 8″ box will be 960 cubic inches. Dividing by 166 gives the answer 5 instead of 5.783, so we have in effect rounded down
to the next lowest pound; the shipping company expects us to round up(so the correct result is 6).

One solution is to add 165 to the volume before dividing by 166:
```
weight = (volume + 165) / 166;
```

A volume of 166 would give a weight of 331/166, or 1, while a volume of 167
would yield 332/166, or 2.

:::tip Rounding Up with Integer Arithmetic

To compute:$n/d$

using only integers, use:
$$
(n + d - 1) / d
$$
This forces truncation to behave like rounding up.

So for dimensional weight:

weight = (volume + 165) / 166;
:::

Calculating the weight in this fashion gives us the following program.
```c
/* Computes the dimensional weight of a 12" x 10" x 8" box */
#include <stdio.h>

int main(void) {
  int height, length, width, volume, weight;
  height = 8;
  length = 12;
  width = 10;

  volume = height * length * width;

  weight = (volume + 165) / 166;

  printf("Dimensions: %dx%dx%d\n", length, width, height);
  printf("Volume (cubic inches): %d\n", volume);
  printf("Dimensional weight (pounds): %d\n", weight);

  return 0;
}
```
### Version 2
Because the v1 program calculates the dimensional weight of just one
box, it isn’t especially useful. To improve the program, we’ll need to allow the user
to enter the dimensions.
To obtain input, we’ll use the scanf function, the C library’s counterpart to
printf.

Here’s an improved version of the dimensional weight program in which the user
enters the dimensions. Note that each call of scanf is immediately preceded by a call of printf. That way, the user will know when to enter input and what input
to enter.

The output of the program has the following appearance (input entered by the user
is underlined):
```
Enter height of box: 8
Enter length of box: 12
Enter width of box: 10
Volume (cubic inches): 960
Dimensional weight (pounds): 6
```
A message that asks the user to enter input (a prompt) normally shouldn’t end with
a new-line character, because we want the user to enter input on the same line as
the prompt itself. When the user presses the Enter key, the cursor automatically
moves to the next line—the program doesn’t need to display a new-line character
to terminate the current line.
The v2 program suffers from one problem: it doesn’t work correctly if the user enters nonnumeric input.

```c
/* Computes the dimensional weight of a
box from input provided by the user */
#include <stdio.h>

int main(void) {
  int height, length, width, volume, weight;

  printf("Enter height of box: ");
  scanf("%d", &height);

  printf("Enter length of box: ");
  scanf("%d", &length);

  printf("Enter width of box: ");
  scanf("%d", &width);

  volume = height * length * width;
  weight = (volume + 165) / 166;

  printf("Volume (cubic inches): %d\n", volume);
  printf("Dimensional weight (pounds): %d\n", weight);

  return 0;
}
```
