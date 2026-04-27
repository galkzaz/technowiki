---
id: computing-volume-of-sphere
title: computes the volume of a spher
description: computes the volume of a spher
---

Write a program that computes the volume of a sphere with a 10-meter radius, using the for-
mula v = 4/3πr3. Write the fraction 4/3 as 4.0f/3.0f. (Try writing it as 4/3. What hap-
pens?) Hint: C doesn't have an exponentiation operator, so you'll need to multiply r by itself
twice to compute r3.

```c
/*
 * Write a program that computes the volume of a sphere with a 10-meter radius,
 * using the form ula v = 4/3πr3. Wri*te the fraction 4/3 as 4.0f/3.0f. (Try
 * writing it as 4/3. What happens?) Hint: C doesn't have an exponentiation
 * operator, so you'll need to multiply r by itself twice to compute r3.
 */

#include <stdio.h>

#define PI 3.141592653589793

double simple_get_volume_of_sphere(double raduis);
double get_volume_of_sphere(double radius);

int main(void)
{
    printf('the volume of a sphere with a %.2f-meter radius: %.2f\n',10.0f,simple_get_volume_of_sphere(10.0f));

    double radius, volume;

    /* Ask the user to input the radius */
    printf('Enter the radius of the sphere: ');
    if (scanf('%lf', &radius) != 1 || radius < 0) {
        printf('Invalid input. Radius must be a non-negative number.\n');
        return 1;
    }

    /* Compute the volume using the function */
    volume = get_volume_of_sphere(radius);

    /* Display the result */
    printf('The volume of the sphere with radius %.2f is %.2f\n', radius, volume);

    return 0;

}

double simple_get_volume_of_sphere(double raduis) {
  return (4.0f / 3.0f) * PI * raduis * raduis * raduis;
}

double get_volume_of_sphere(double radius) {
    return (4.0 / 3.0) * PI * radius * radius * radius;
}
```
