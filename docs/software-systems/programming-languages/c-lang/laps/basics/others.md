---
id: others
title: others
description: others
---

:::question

Write a program that asks the user to enter a dollars-and-cents amount, then displays the
amount with 5% tax added:

Enter an amount: 100.00

With tax added: $105.00

:::

```c
#include <stdio.h>

int main() {
    float amount;

    // Ask user for input
    printf("Enter an amount: ");
    scanf("%f", &amount);

    // Calculate the total (Amount + 5% tax)
    float total = amount * 1.05f;

    // Display the result formatted to two decimal places
    printf("With tax added: $%.2f\n", total);

    return 0;
}
```
- float amount: We use the float data type because currency involves decimals.
- scanf("%f", &amount): This reads the user's input and stores it in the amount variable.
- The Math: Multiplying by 1.05 is the shorthand way to add 5%. If you prefer to be explicit, you could also write it as amount + (amount * 0.05).
- %.2f: This is the "magic" formatter in the printf function. It tells C to display the number with exactly two digits after the decimal point, which is perfect for cents.

<details>
    <summary>Write a program that asks the user to enter a value for x and then displays the value of the
    following polynomial: 3x5 + 2x4 – 5x3 – x2 + 7x – 6</summary>


Hint: C doesn't have an exponentiation operator, so you'll need to multiply x by itself
repeatedly in order to compute the powers of x. (For example, x * x * x is x cubed.)

In C, you can use the pow() function from the math.h library, but for a simple polynomial like this, it is often more efficient (and better practice for basic assignments) to write out the multiplications or use a method called Horner's Rule.

Here is the straightforward approach using standard multiplication:
```c
#include <stdio.h>

int main() {
    float x, result;

    // Ask user for input
    printf("Enter a value for x: ");
    scanf("%f", &x);

    // Calculate the polynomial: 3x^5 + 2x^4 - 5x^3 - x^2 + 7x - 6
    result = (3 * x * x * x * x * x) + 
             (2 * x * x * x * x) - 
             (5 * x * x * x) - 
             (x * x) + 
             (7 * x) - 6;

    // Display the result
    printf("The value of the polynomial is: %.2f\n", result);

    return 0;
}
```
- The Math: C doesn't have a built-in exponent operator like ^ (in C, ^ is actually for bitwise XOR). To get x5, we multiply x by itself five times.
- Precision: I used float again to allow for decimal inputs, and %.2f to keep the output clean.
- Operator Precedence: C follows standard algebraic order (PEMDAS), so it handles the multiplications before the additions and subtractions automatically.
- 
</details>
