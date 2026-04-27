---
id: c-lang-exam-basic
title: Basics
description: C Programming Exam, Basics
---

:::question

Q: What does GCC stand for? [p. 11]

:::

A: GCC originally stood for "GNU C compiler." It now stands for "GNU Compiler
Collection," because the current version of GCC compiles programs written in a
variety of languages, including Ada, C, C++, Fortran, Java, and Objective-C.

:::question

Q: OK, so what does GNU stand for?

:::

A: GNU stands for "GNU's Not UNIX!" (and is pronounced guh-NEW, by the way).
GNU is a project of the Free Software Foundation, an organization set up by Rich-
ard M. Stallman as a protest against the restrictions of licensed UNIX software.
According to its web site, the Free Software Foundation believes that users should
be free to "run, copy, distribute, study, change and improve" software. The GNU
Project has rewritten much traditional UNIX software from scratch and made it
publicly available at no charge.
GCC and other GNU software are crucial to Linux. Linux itself is only the
"kernel" of an operating system (the part that handles program scheduling and
basic I/O services); the GNU software is necessary to have a fully functional oper-
ating system.
For more information on the GNU Project, visit www.gnu.org.

:::question

Q: What's the big deal about GCC, anyway?
:::

A: GCC is significant for many reasons, not least the fact that it's free and capable of
compiling a number of languages. It runs under many operating systems and gen-
erates code for many different CPUs, including all the widely used ones. GCC is the primary compiler for many UNIX-based operating systems, including Linux,
BSD, and Mac OS X, and it's used extensively for commercial software develop-
ment. For more information about GCC, visit gcc.gnu.org.

:::question

Q: How good is GCC at finding errors in programs?

:::

A: GCC has various command-line options that control how thoroughly it checks pro-
grams. When these options are used, GCC is quite good at finding potential trouble
spots in a program. Here are some of the more popular options:
-Wall Causes the compiler to produce warning messages when it
detects possible errors. (-W can be followed by codes for
specific warnings; -Wall means "all -W options.") Should
be used in conjunction with -O for maximum effect.
-W Issues additional warning messages beyond those produced
by -Wall.
-pedantic Issues all warnings required by the C standard. Causes pro-
grams that use nonstandard features to be rejected.
-ansi Turns off features of GCC that aren't standard C and enables
a few standard features that are normally disabled.
-std=c89
-std=c99 Specifies which version of C the compiler should use to
check the program.
These options are often used in combination:
% gcc -O -Wall -W -pedantic -ansi -std=c99 -o pun pun.c

:::question

Q: Why is C so terse? It seems as though programs would be more readable if C
used begin and end instead of { and }, integer instead of int, and so
forth. [p. 12]

:::

A: Legend has it that the brevity of C programs is due to the environment that existed
in Bell Labs at the time the language was developed. The first C compiler ran on a
DEC PDP-11 (an early minicomputer); programmers used a teletype—essentially
a typewriter connected to a computer—to enter programs and print listings.
Because teletypes were very slow (they could print only 10 characters per second),
minimizing the number of characters in a program was clearly advantageous.

:::question
Q: In some C books, the main function ends with exit(0) instead of return
0. Are these the same? [p. 14]

:::

A: When they appear inside main, these statements are indeed equivalent: both ter-
minate the program, returning the value 0 to the operating system. Which one to
use is mostly a matter of taste.

:::question

Q: What happens if a program reaches the end of the main function without exe-
cuting a return statement? [p. 14]

:::

A: The return statement isn't mandatory; if it's missing, the program will still ter-minate. In C89, the value returned to the operating system is undefined. In C99, if
main is declared to return an int (as in our examples), the program returns 0 to
the operating system; otherwise, the program returns an unspecified value.

:::question

Q: Does the compiler remove a comment entirely or replace it with blank space?

:::

A: Some old C compilers deleted all the characters in each comment, making it possi-
ble to write
a/**/b = 0;
and have the compiler interpret it as
ab = 0;
According to the C standard, however, the compiler must replace each comment by
a single space character, so this trick doesn't work. Instead, we'd end up with the
following (illegal) statement:
a b = 0;

:::question

Q: How can I tell if my program has an unterminated comment?

:::

A: If you're lucky, the program won't compile because the comment has rendered the
program illegal. If the program does compile, there are several techniques that you
can use. Stepping through the program line by line with a debugger will reveal if
any lines are being skipped. Some IDEs display comments in a distinctive color to
distinguish them from surrounding code. If you're using such an environment, you
can easily spot unterminated comments, since program text will have a different
color if it's accidentally included in a comment. A program such as lint can also
help.

:::question

Q: Is it legal to nest one comment inside another?

:::

A: Old-style comments (/* … */) can't be nested. For instance, the following code
is illegal:
/*
/*** WRONG ***/
*/
The */ symbol on the second line matches the /* symbol on the first line, so the
compiler will flag the */ symbol on the third line as an error.
C's prohibition against nested comments can sometimes be a problem. Sup-
pose we've written a long program containing many short comments. To disable a
portion of the program temporarily (during testing, say), our first impulse is to
"comment out" the offending lines with /* and */. Unfortunately, this method
won't work if the lines contain old-style comments. C99 comments (those begin-
ning with //) can be nested inside old-style comments, however—another advan-
tage to using this kind of comment.
In any event, there's a better way to disable portions of a program, as we'll see
later.

:::question

Q: Where does the float type get its name? [p. 17]

:::

A: float is short for "floating-point," a technique for storing numbers in which the
decimal point "floats." A float value is usually stored in two parts: the fraction
(or mantissa) and the exponent. The number 12.0 might be stored as 1.5 × 23, for
example, where 1.5 is the fraction and 3 is the exponent. Some programming lan-
guages call this type real instead of float.

:::question

Q: Why do floating-point constants need to end with the letter f? [p. 19]

:::

A: For the full explanation, see Chapter 7. Here's the short answer: a constant that
contains a decimal point but doesn't end with f has type double (short for "dou-
ble precision"). double values are stored more accurately than float values.
Moreover, double values can be larger than float values, which is why we
need to add the letter f when assigning to a float variable. Without the f, a
warning may be generated about the possibility of a number being stored into a
float variable that exceeds the capacity of the variable.
*
:::question

Q: Is it really true that there's no limit on the length of an identifier? [p. 26]

:::

A: Yes and no. The C89 standard says that identifiers may be arbitrarily long. How-
ever, compilers are only required to remember the first 31 characters (63 characters
in C99). Thus, if two names begin with the same 31 characters, a compiler might
be unable to distinguish between them.
To make matters even more complicated, there are special rules for identifiers
with external linkage; most function names fall into this category. Since these
names must be made available to the linker, and since some older linkers can han-
dle only short names, only the first six characters are significant in C89. Moreover,
the case of letters may not matter. As a result, ABCDEFG and abcdefh might be
treated as the same name. (In C99, the first 31 characters are significant, and the
case of letters is taken into account.)
Most compilers and linkers are more generous than the standard, so these rules
aren't a problem in practice. Don't worry about making identifiers too long—
worry about making them too short.


:::question

Which of the following are not legal C identifiers?
(a) 100_bottles
(b) _100_bottles
(c) one__hundred__bottles
(d) bottles_by_the_hundred_

:::

A:

(a) 100_bottles
❌ Not legal
Reason:
Identifiers cannot begin with a digit.

(b) _100_bottles
✅ Legal (but discouraged)
Reason:
- Starts with underscore → allowed.
- Contains letters, digits, underscores → allowed.
⚠ However:
Identifiers beginning with _ are reserved in certain contexts (especially at global scope), so it's bad style even though it's technically legal.

(c) one__hundred__bottles
✅ Legal
Reason:
- Starts with a letter → allowed.
- Double underscores are legal in C (but discouraged stylistically).
- No reserved keyword conflict.
⚠ In C++, identifiers containing __ are reserved, but in C they are only reserved if they begin with __ or _ + uppercase.

(d) bottles_by_the_hundred_
✅ Legal
Reason:
- Starts with a letter.
- Ends with underscore → allowed.
- Contains only valid characters.

✅ Final Answer
The only illegal identifier is:
(a) 100_bottles


:::question

Which of the following are keywords in C?
(a) for
(b) If
(c) main
(d) printf
(e) while

:::

A:

(a) for
✅ Keyword
for is a loop control keyword in C.
Example:
for (int i = 0; i < 10; i++)

(b) If
❌ Not a keyword
C is case-sensitive.
The keyword is:
if
But If (capital I) is just a normal identifier.

(c) main
❌ Not a keyword
main is a special function name by convention, but it is not a C keyword.
You could technically name a variable main in another scope (though not recommended).

(d) printf
❌ Not a keyword
printf is a function declared in <stdio.h>.
It is part of the standard library — not the core language.

(e) while
✅ Keyword
while is a loop control keyword in C.
Example:
while (x > 0)

✅ Final Answer
The keywords are:
(a) for
(e) while

:::question

How many tokens are there in the following statement?

answer=(3*q-p*p)/3;

:::

A:

|    | Token    | Type             |
| -- | -------- | ---------------- |
| 1  | `answer` | identifier       |
| 2  | `=`      | operator         |
| 3  | `(`      | punctuation      |
| 4  | `3`      | integer constant |
| 5  | `*`      | operator         |
| 6  | `q`      | identifier       |
| 7  | `-`      | operator         |
| 8  | `p`      | identifier       |
| 9  | `*`      | operator         |
| 10 | `p`      | identifier       |
| 11 | `)`      | punctuation      |
| 12 | `/`      | operator         |
| 13 | `3`      | integer constant |
| 14 | `;`      | punctuation      |
There are 14 tokens.

:::question

Q: Create and run Kernighan and Ritchie's famous "hello, world" program:
#include <stdio.h>
int main(void)
{
printf('hello, world\n');
}
Do you get a warning message from the compiler? If so, what's needed to make it go away?

:::

A:

if you compile that exact K&R version with a modern compiler and warnings enabled, you'll almost certainly see one.
What warning do you get?
Typically something like:
```
warning: control reaches end of non-void function
```
This happens because main is declared to return an int, but it doesn't explicitly return anything.
In old K&R-era C, falling off the end of main was tolerated.
In modern C (C99 and later), reaching the end of main is defined to be equivalent to returning 0, but many compilers still warn unless you say it explicitly — especially with -Wall -Wextra.

How do you make the warning go away?
Add an explicit return 0;:
```c
#include <stdio.h>

int main(void)
{
    printf('hello, world\n');
    return 0;
}
```
Why this matters
- return 0; signals successful program termination to the operating system
- Writing it explicitly:
        ◦ silences warnings
        ◦ documents intent
        ◦ matches modern C style and teaching
