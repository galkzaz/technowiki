---
id: performance-families
title: Performance Families
description: Performance Families
sidebar_position: 2
---

We compare algorithms by evaluating
1. their performance on problem instances of size n. By doing so, we can determine which algorithms scale to solve problems of a nontrivial size by evaluating the running time needed by the algorithm in relation to the size of the provided input.
2. A secondary performance evaluation is to consider how much memory or storage an algorithm needs

When evaluating the performance of an algorithm, you must identify the most expensive computation within an algorithm to determine its classification. For example, consider an algorithm that is subdivided into two tasks, a task classified as linear followed by a task classified as quadratic. The overall performance of the algorithm must therefore be classified as quadratic.

When we analyze algorithms, we care about how fast the running time grows as the input size n becomes large, not how fast it runs for small inputs.

An algorithm with better asymptotic growth (for example O(n log n)) will eventually outperform an algorithm with worse growth (for example O(n²)), even if the slower-growing algorithm has larger constant factors.

So, An algorithm with better asymptotic growth will eventually execute faster than one with worse asymptotic growth, regardless of the actual constants.

**Role of constants and break-even point**

Suppose we have two algorithms:

1. **Algorithm A**: t₁(n) = 1000·n
2. **Algorithm B**: t₂(n) = n²

For small values of n, Algorithm B might actually be faster:
- n = 10 → n² = 100, 1000·n = 10,000
- n = 100 → n² = 10,000, 1000·n = 100,000

But eventually:
- n = 2000 → n² = 4,000,000, 1000·n = 2,000,000

From this point onward, the linear algorithm is faster forever.

This input size where one algorithm overtakes another is called the break-even point. Its exact value depends on constants, hardware, and implementation—but it always exists when asymptotic growth differs.

Big-O notation deliberately ignores:
* Constant multipliers
* Low-order terms

Because:
* They only affect where the crossover happens
* They do not affect which algorithm wins for large n

This is why:
```
O(5n) = O(n)
O(1000n log n) = O(n log n)
```
For this reason, if the number of operations for an algorithm can be computed as $c*n^3 + d*n*log(n)$, we would classify
this algorithm as $O(n^3)$ because that is the dominant term that grows far more rapidly than n*log(n).

As n grows large:
* n³ grows much faster than n·log(n)
* The n·log(n) term becomes insignificant by comparison

For example:
|     |     |     |
| --- | --- | --- |
| n	 | n³	 | n·log₂(n) |
| 10	 | 1,000	 | ~33 |
| 100	 | 1,000,000	 | ~664 |
| 1,000	 | 1,000,000,000	 | ~9,966 |

The cubic term dominates completely. Therefore, we classify the algorithm as: O(n³), even though another term exists.

This principle allows us to:
* Compare algorithms independent of machine speed
* Predict scalability
* Avoid being misled by small-input benchmarks

It explains why:
* Quadratic algorithms become unusable at scale
* Linearithmic algorithms dominate sorting
* Exponential algorithms are avoided except for very small inputs

We use the following classifications, which are ordered by decreasing efficiency:

![Big-O Complexity Chart](/docs/assets/software-systems/data-structures-and-algorithms/algorithms/Big-O-Complexity-Chart.png)

## Constant: O(1)
In programming, we say an operation has constant behavior if the time it takes to finish doesn't change, even if the input gets larger.

An operation is O(1) if its cost is bounded by a fixed constant, even if that constant is large—as long as it does not grow with the input size.

When we say an operation has constant time, written as O(1), we mean: It takes the same amount of time no matter how big the input is. Not exactly the same number of CPU cycles, but:

* It does not grow as the input size grows
* It is bounded by a fixed limit

Primitive operations are treated as constant, such as:

* Comparing two numbers
* Adding two numbers
* Assigning a value to a variable
* Accessing an array element by index

These are assumed O(1).

For example, checking if a number
is odd or even: we see if its last digit is odd and boom, problem
solved. No matter how big the number.

Example (32-bit integers)
```
if (x == y) {
    // do something
}
```
Here:

* x and y are 32-bit integers
* The CPU compares them in one machine instruction
* Time does not depend on the values of x and y

So this is O(1).

**comparing bigger numbers**

What about the performance of comparing two 256-bit numbers? Or two 1,024-bit
numbers?

The time depends on how many bits the CPU must compare.

* A 32-bit number → 1 machine word
* A 256-bit number → 8 machine words (on a 32-bit word system)
* A 1024-bit number → many machine words

So physically:

* The CPU must compare multiple chunks
* More bits → more work

we still call this O(1), Because of a crucial assumption: The size k of the numbers is fixed and cannot grow. If k is a constant, then 32-bit, 256-bit, 1024-bit … are all fixed sizes, not inputs that grow with the problem. So even though: Comparing 1024-bit numbers takes more time than 32-bit numbers. That extra work is bounded We treat it as:
```
Time = c × k   →   O(1)
```
Because k is constant.

It turns out that for a predetermined fixed size k, you can compare two k-bit numbers in constant time. The key is that the problem size (i.e., the values x and
y being compared) cannot grow beyond the fixed size k. We abstract the extra effort,
which is multiplicative in terms of k, using the notation O(1). This means:

* Yes, comparing larger fixed-size numbers costs more
* But Big-O ignores constant multipliers

We only care whether time grows with input size n

So, comparing two numbers—even very large ones like 1,024-bit numbers—is still considered 'constant' as long as there is a limit (k) that we don't cross.

* **The Logic**: If your computer is designed to handle numbers up to 1,024 bits, it has the 'machinery' ready to do that work. Whether you compare two 5-bit numbers or two 1,000-bit numbers, the computer uses that same 'machinery' every time.
* **The 'Wait' Factor**: Even if comparing 1,024-bit numbers takes 10 times longer than 32-bit numbers, it's still O(1) because that time stays the same every time you run the operation. It doesn't grow as you add more data to your overall program.

while hardware makes a difference in actual speed (a supercomputer is faster than a calculator), in the world of Algorithms, we ignore those small hardware differences. If the work doesn't increase when the input increases, we call it O(1).

Example: If an operation always takes at most 500 steps, it's still O(1).

Example: Compare a Constant operation vs. a Non-Constant operation:
|     |     |     |
| --- | --- | --- |
| Scenario	 | Behavior	 | Why? |
| **Checking the first letter of a word**	 | **Constant O(1)**	 | It doesn't matter if the word has 3 letters or 3 million letters; you only ever look at the very first spot. |
| **Counting all letters in a word**	 | **Linear O(n)**	 | As the word gets longer, the work increases. A 10-letter word takes twice as long as a 5-letter word. |
| **Comparing two 256-bit IDs**	 | **Constant O(1)**	 | Because 256 is a 'fixed limit.' The computer treats it as one 'chunk' of work. |

**When Does Constant Time Not Apply?** it STOP being O(1) when

* The number of bits depends on input size n
* Comparison may require checking all bits

line in Arbitrary-length integers
```
a = big_integer_with_n_bits
b = big_integer_with_n_bits
if a == b:
    ...
```
⟶ Time is O(n)

1. Rule of thumb
|     |     |     |
| --- | --- | --- |
| Data type	 | Size grows? | Time |
| int, long	 | No	 | O(1) |
| Fixed 256-bit integer	 | No	 | O(1) |
| BigInt / bignum	 | Yes	 | O(n) |

**How this assumption breaks in cryptography**

Cryptography intentionally violates the 'fixed k' assumption.

Example: RSA key sizes

* RSA-2048 → 2048-bit integers
* RSA-4096 → 4096-bit integers

Here:

* Security depends on large k
* Operations are defined in terms of k

So:

* k is not a constant
* k is the input size

Big-O now changes meaning

Modular multiplication
```
O(k²)   (schoolbook)
O(k^1.585) (Karatsuba)
O(k log k) (FFT-based)
```
Modular exponentiation
```
O(k³) (naive)
O(k² log e) (square-and-multiply)
```
So: In cryptography, integer operations are never O(1).

General algorithm analysis assumes:

* Numbers fit in machine words
* Arithmetic is constant time

Cryptography cannot make that assumption without becoming insecure.

**CPU instructions and word size**

**CPU word size**

Modern CPUs:

* 64-bit word size
* Registers hold 64 bits

Example x86-64 instruction
```
CMP RAX, RBX
```
* Compares two 64-bit values
* Executes in 1-2 cycles

so its O(1)

**What if integers exceed word size?**

256-bit integer (software-emulated), Stored as:
```
[ w0 | w1 | w2 | w3 ]   (4 × 64-bit words)
```
Comparison becomes:
```
if (w3 != v3) return;
if (w2 != v2) return;
if (w1 != v1) return;
if (w0 != v0) return;
```
* Multiple instructions
* Cost ∝ number of words

If word count grows: Time ∝ words → O(k / word_size)

neverthless, this still becomes O(1) in textbooks, Because:

* Word count is fixed
* Max words known at compile time

So compilers and algorithms treat it as constant

**O(1) vs O(log n) using integer sizes**

For integer operations: n = number of bits in the integer. This is crucial and often misunderstood.

1. **O(1): Fixed-size machine integers**

   Example

   ```
   uint64_t a, b;
   if (a == b) { }
   ```

   Why O(1)?

   * uint64_t is always 64 bits
   * Fits in one CPU register
   * Comparison is one machine instruction

     Even though:

   * A 64-bit compare costs more than 32-bit
   * That cost is constant

     So: Time = constant → O(1)
2. **O(log n): Integers whose size grows with input**

   Now consider integers that scale with the problem.

   Example

   ```
   a = 10**1000000
   b = 10**1000000
   a == b
   ```

   Here:

   * The number of bits ≈ log₂(value)
   * Bigger numbers → more bits → more work

     Why O(log n)?

     If:

   * n = numeric value
   * Bits needed = ⌈log₂ n⌉

     Then: Comparison time ∝ number of bits → O(log n)

**Summary table**
|     |     |     |
| --- | --- | --- |
| **Integer type**	 | **Bit width**	 | **Complexity** |
| int32, int64	 | Fixed	 | O(1) |
| 256-bit fixed	 | Fixed	 | O(1) |
| Arbitrary precision	 | Grows	 | O(log n) |

**Why this matters in algorithm analysis**

Algorithm analysis asks: 'What happens when the input gets bigger?', If an operation:

* Has a fixed upper bound
* Does not depend on input size n

Then it does not affect scalability, and we safely call it O(1). This lets us focus on: Loops, Recursion, Data structure growth, instead of hardware details.

**Real-world analogy**

Think of it like flipping a light switch. It takes the same amount of effort to flip a switch in a tiny closet as it does in a massive ballroom. The 'size' of the room doesn't change the time it takes to do that specific task.

Comparing two IDs

* Two passport numbers (fixed length)
  * → Constant time
* Two entire books character by character
  * → Time grows with book length

Same idea.

## Logarithmic: O(log n)
An algorithm is O(log n) when each step cuts down the remaining problem by a constant factor — often by half — rather than scanning everything.

The binary logarithm log₂(n) appears because many common divide-and-conquer strategies 'halve' the search space every step.

For example:

* Searching a sorted list of size n by halving the search range → ~log₂(n) steps
* Traversing a balanced binary tree of n nodes → ~log₂(n) height

As n grows, the number of steps grows very slowly — much slower than linear (O(n)). That's why O(log n) is considered very efficient.

Suppose the secret number is between: 1 and n

1. **At the start**:
   * You have n possibilities
   * You know nothing except the bounds
2. **After one good guess**:
   * Half the numbers are impossible
   * Remaining possibilities ≈ n / 2
3. **After two guesses**:
   * Remaining possibilities ≈ n / 4
4. **After i guesses**:
   * Remaining possibilities ≈ n / 2ⁱ

That 'divide by 2 each time' behavior is exactly what creates log₂(n).

**number of iterations**

the guess stop when only one number is left. That happens when:

$n/2^k≤1$

Solving for k:

$2^k≥n⇒k≥log_2(n)$

So:

At most $1 + log₂(n)$ guesses are needed — guaranteed,where the added one is: +1 → the final decisive guess

### Real-world parallels
|     |     |     |
| --- | --- | --- |
| Problem	 | Strategy	 | Complexity |
| Guessing a number	 | Binary search	 | O(log n) |
| Looking up a word	 | Dictionary halves pages	 | O(log n) |
| Database index lookup	 | B-tree search	 | O(log n) |
| CPU branch prediction | Decision tree | O(log n) |

### Performance
Logarithmic algorithms are extremely efficient because they rapidly converge on a
solution. These algorithms succeed because they reduce the size of the problem by
about half each time. The Guessing algorithm reaches a solution after at most k = 1
+ ⌊log2 (n)⌋ iterations, and at the ith iteration (0 &lt; i ≤ k), the algorithm computes a
guess that is known to be within ±ϵ = 2k-i - 1 from the actual hidden number. The
quantity ϵ is considered the error, or uncertainty. After each iteration of the loop, ϵ
is cut in half

Logarithmic algorithms (like binary search / guessing games) are fast because:

* They don't try everything
* Each step eliminates about half of the remaining possibilities
* The uncertainty shrinks very quickly

This is why they are described as rapidly converging.

### Why O(log n) matters in practice
* **Large data sets**

  Searching through 1 million sorted items:

  Linear search → ~1 million comparisons (O(n))

  Binary search → ~20 comparisons (O(log₂(1,000,000)))

  That's orders of magnitude faster as n grows.
* **Balanced trees help for dynamic data**

  When data is constantly inserted and deleted, balanced trees like red-black trees keep lookups punchy, while worst-case trees would degrade to O(n).

### Examples
**Example**: A bartender offers the following $10,000 bet to any patron: 'I will choose a secret
number from 1 to 1,000,000 and you will have 20 chances to guess my number.
After each guess, I will either tell you Too Low, Too High, or You Win. If you guess
my number in 20 or fewer questions, I give you $10,000. If none of your 20 guesses
is my secret number you must give me $10,000.' Would you take this bet?

**Answer**

The winning strategy is binary search. Instead of guessing randomly, you:

* Guess the middle number
* Use 'Too Low' / 'Too High' feedback
* Eliminate half of the remaining possibilities each time

In each round, depending upon the specific answers from the bartender, the size of
the potential range containing the secret number is cut in about half each time.
Eventually, the range of the secret number will be limited to just one possible num‐
ber; this happens after 1 + ⌊log2 (n)⌋ rounds, where log2(x) computes the logarithm
of x in base 2

**Why 20 guesses is enough**

Each guess cuts the search space in half. Starting range
```
1 to 1,000,000  →  1,000,000 possibilities
```
After each guess:
| Guess  | Max remaining numbers |
| --- | --- |
| 1 | 500,000 |
| 2 | 250,000 |
| 3 | 125,000 |
| 4 | 62,500 |
| 5 | 31,250 |
| 6 | 15,625 |
| 7 | 7,813 |
| 8 | 3,907 |
| 9 | 1,954 |
| 10 | 977 |
| 11 | 489 |
| 12 | 245 |
| 13 | 123 |
| 14 | 62 |
| 15 | 31 |
| 16 | 16 |
| 17 | 8 |
| 18 | 4 |
| 19 | 2 |
| 20 | 1 ✅ |
After 20 guesses, you are guaranteed to have exactly one number left.

If there are 1,000,000 numbers, this algorithm will locate the number in at most 1 + ⌊log2
(1,000,000)⌋ = 1 + ⌊19.93⌋, or 20 guesses (the case). Meaning It takes at most ⌈log₂ n⌉ guesses to find a number among n possibilities.

**Why random guessing loses**

If you guess randomly:

* You get no systematic reduction
* Probability of success in 20 guesses is: 20/1,000,000=0.002%

You will almost certainly lose.

Following Table shows a sample scenario for the range 1-8 that asks a series of questions, reducing the problem size by about half each time.

| Number | First Round | Second Round | Third Round | Fourth Round |
| --- | --- | --- | --- | --- |
| 1 | Is it 4? →Too High | Is it 2? →Too High | Must be 1! → You Win | — |
| 2 | Is it 4? →Too High | Is it 2? → You Win | — | — |
| 3 | Is it 4? →Too High | Is it 2? → Too Low | Must be 3! → You Win | — |
| 4 | Is it 4? → You Win | — | — | — |
| 5 | Is it 4? → Too Low | Is it 6?<br /> →Too High | Must be 5! → You Win | — |
| 6 | Is it 4? → Too Low | Is it 6? → You Win | — | — |
| 7 | Is it 4? → Too Low | Is it 6? → Too Low | Is it 7? → You Win | — |
| 8 | Is it 4? → Too Low | Is it 6? → Too Low | Is it 7? → Too Low | Must be 8! → You Win |

You should take the bet because binary search guarantees finding any number from 1 to 1,000,000 in at most 20 guesses, which is exactly O(log n) behavior.

**Example: the Bisection algorithm**

The bisection algorithm finds a solution to: $f(x)=0$

That solution is called a root. In plain words: We want to find the value of x where the function crosses the x-axis.

**Why continuity and opposite signs matter**

The method relies on a basic fact from calculus: If a function is continuous, and $f(a)>0$, $f(b)&lt;0$ (or vice versa), then there must be at least one root between a and b.

This is why the algorithm starts with two values a and b where the function has opposite signs.

At every iteration, the bisection method maintains this guarantee: The true root lies somewhere in the interval [a, b]. This is true because: f(a) and f(b) have opposite signs. A continuous function that changes sign must cross zero (Intermediate Value Theorem)

**How the algorithm works (step by step)**

At every iteration:

1. Start with two values, a and b, for which f(a) and f(b)
are opposite signs—that is, one is positive and one is negative
2. **Compute the midpoint**: c=(a+b)/2
3. Evaluate f(c)
4. **Decide which half contains the root**:
   * If
   f(a)  and  f(c) have opposite signs → root is in [a, c]
     * Otherwise → root is in [c, b]
5. Discard the other half
6. Estimate root
   * the root estimate at iteration i is simply the value c in that row.
   * The actual root is guaranteed to be within: [c − error, c + error]

Each step:

1. Keeps the root inside the interval
2. Cuts the interval size in half
3. Cuts the error in half.

**Why bisection is logarithmic (O(log n))**

Let:

* Initial interval length = b−a
* After 1 step → interval length = (b−a)/2
* After 2 steps → (b−a)/4
* After k steps → (b−a)/2k

To reach a desired precision

$(b−a)/2^k≤ε⇒k≥log_2_⁣((b−a)/ε)$

So:

The number of iterations grows logarithmically, not linearly.

This is exactly the same efficiency idea as binary search.

To find a root of f(x) = x*sin(x) - 5*x - cos(x), start with a = -1 and b = 1. As shown
in Table, the algorithm converges on the solution of f(x) = 0, where x =
-0.189302759 is a root of the function.
| Iteration | a | b | c | f(a) | f(c) | Interval size | Error |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | -1.000000 | 1.000000 | 0.000000 | 5.301169 | -1.000000 | 2.000000 | 1.000000 |
| 2 | -1.000000 | 0.000000 | -0.500000 | 5.301169 | 1.862130 | 1.000000 | 0.500000 |
| 3 | -0.500000 | 0.000000 | -0.250000 | 1.862130 | 0.342939 | 0.500000 | 0.250000 |
| 4 | -0.250000 | 0.000000 | -0.125000 | 0.342939 | -0.351613 | 0.250000 | 0.125000 |
| 5 | -0.250000 | -0.125000 | -0.187500 | 0.342939 | -0.010023 | 0.125000 | 0.062500 |
| 6 | -0.250000 | -0.187500 | -0.218750 | 0.342939 | 0.165051 | 0.062500 | 0.031250 |
| 7 | -0.218750 | -0.187500 | -0.203125 | 0.165051 | 0.077161 | 0.031250 | 0.015625 |
| 8 | -0.203125 | -0.187500 | -0.195313 | 0.077161 | 0.033480 | 0.015625 | 0.007813 |
| 9 | -0.195313 | -0.187500 | -0.191406 | 0.033480 | 0.011709 | 0.007813 | 0.003906 |
| 10 | -0.191406 | -0.187500 | -0.189453 | 0.011709 | 0.000843 | 0.003906 | 0.001953 |
| 11 | -0.189453 | -0.187500 | -0.188477 | 0.000843 | -0.004589 | 0.001953 | 0.000977 |
| 12 | -0.189453 | -0.188477 | -0.188965 | 0.000843 | -0.001873 | 0.000977 | 0.000488 |
| 13 | -0.189453 | -0.188965 | -0.189209 | 0.000843 | -0.000515 | 0.000488 | 0.000244 |
| 14 | -0.189453 | -0.189209 | -0.189331 | 0.000843 | 0.000164 | 0.000244 | 0.000122 |
| 15 | -0.189331 | -0.189209 | -0.189270 | 0.000164 | -0.000176 | 0.000122 | 0.000061 |
| 16 | -0.189331 | -0.189270 | -0.189301 | 0.000164 | -0.000006 | 0.000061 | 0.000031 |
| 17 | -0.189331 | -0.189301 | -0.189316 | 0.000164 | 0.000079 | 0.000031 | 0.000015 |
| 18 | -0.189316 | -0.189301 | -0.189308 | 0.000079 | 0.000030 | 0.000015 | 0.000008 |
| 19 | -0.189308 | -0.189301 | -0.189304 | 0.000030 | 0.000009 | 0.000008 | 0.000004 |
| 20 | -0.189304 | -0.189301 | -0.189302 | 0.000009 | -0.000002 | 0.000004 | 0.000002 |

Interval size = b−a

Error = (b−a)2

The bisection algorithm is logarithmically efficient because each iteration halves the uncertainty interval, guaranteeing convergence to a root in O(log n) steps.

### Real World examples
**Example 1: Binary Search — used in glibc**

bsearch() is a binary search function in the C standard library that looks for a key in a sorted array. Its time complexity is O(log n).
```C
#include <stdlib.h>

void *bsearch(
    const void *key,
    const void *base,
    size_t nel,
    size_t width,
    int (*compar)(const void *, const void *)
);
```
* base is a pointer to a sorted array
* nel = number of elements
* compar() is the comparator function

Returns a pointer to the matched element or NULL if not found, You only need to compare key with the middle of the current range, reducing half of the remaining range every iteration.

These follow the binary search logic: pick the mid index, call compar(), then adjust low/high accordingly — halving the search range each time.

**What the code looks like (simplified)**

https://github.com/lattera/glibc/blob/master/stdlib/bsearch.c

https://github.com/walac/glibc/blob/master/bits/stdlib-bsearch.h

Here's the typical binary search pattern that glibc follows in that inline header:
```c
size_t lo = 0;
size_t hi = nmemb;

while (lo < hi) {
    size_t mid = lo + ((hi - lo) >> 1);
    int cmp = compar(key, base + mid * width);
    if (cmp < 0)
        hi = mid;
    else if (cmp > 0)
        lo = mid + 1;
    else
        return base + mid * width;
}
return NULL; /* not found */
```
Why this is O(log n)

* Each loop iteration halves the search interval (hi - lo).
* So even for very large arrays, the number of comparisons grows only with log₂(n), not n itself.

This code pattern is typical for binary search and is what bsearch() uses under the hood.

**Example 2: Red-Black Trees in the Linux Kernel**

In many parts of the kernel, ordered data must be looked up, inserted, or deleted efficiently. For this, Linux uses red-black trees, a kind of self-balancing binary search tree with O(log n) operations.

Red-black trees are like binary search trees but keep themselves roughly balanced so that the tree height stays ~log₂(n). This guarantees:

* Search: O(log n)
* Insert: O(log n)
* Delete: O(log n)

for n nodes.

Kernel code that uses rbtrees doesn't usually call a general 'search' API; instead it implements lookup by walking the tree manually (because function pointers would slow down hot paths).

Red-black trees show up in multiple kernel subsystems:

* Scheduler (CFS) uses rbtrees for tracking runnable processes
* Timers use rbtrees for keeping timer events in order
* File systems track metadata (like Virtual memory area (VMA) tracking) using rbtrees

That means logarithmic performance in critical low-level code, scaling well even as the number of scheduled entities or timers grows.

**What the code looks like (simplified)**

include/linux/rbtree.h — basic definitions for node structure, links, and traversal macros/functions.

```c
struct mytype *my_search(struct rb_root *root, char *string)
{
    struct rb_node *node = root->rb_node;

    while (node) {
        struct mytype *data = container_of(node, struct mytype, node);
        int result = strcmp(string, data->keystring);

        if (result < 0)
            node = node->rb_left;
        else if (result > 0)
            node = node->rb_right;
        else
            return data; /* Found it */
    }
    return NULL;
}
```
Why this is O(log n)

* A red-black tree remains roughly balanced as nodes are inserted and removed.
* The tree height is at most about 2 × log₂(n) in the case.
* Each comparison moves left or right by one level — so the number of comparisons is proportional to log₂(n) for n nodes.

## Sublinear: O(nd) for d < 1
In some cases, the behavior of an algorithm is better than linear, yet not as efficient
as logarithmic.

This includes complexities like:

* O(n^0.5)
* O(n^0.9)
* O(n/log_n)
* Randomized versions with sampling

This is strictly less than linear time and is only possible when the algorithm does not inspect every element of the input (in the case).

When the exponent d&lt;1, you see: $O(n^d)$ is sublinear time for large enough n

This is different from logarithmic (e.g., O(log_n) , which is also sublinear but decreases even faster relative to n.

**Why Sublinear is Possible**

Sublinear time is achievable only if the algorithm:

* Requires only a partial view of the input
* Uses sampling or sketches
* Has strong structural assumptions about the input
* Uses randomization with high expected success

You can't compute an exact answer that depends on all input items without seeing them all (that's linear time or worse). But you can:

* Approximate answers
* Test properties
* Estimate statistics
* This is the heart of 'sublinear algorithms' in theoretical computer science.

### Real Examples of Sublinear Behavior
**Approximate Algorithms**

In many big-data or streaming situations, you don't need exact answers — just close enough. Sublinear methods often:

* Sample a subset of the input
* Build a sketch (compact summary)
* Estimate a property with bounded error

These techniques can achieve running times like O(n^0.9), O(n^0.5), or even lower.

Example idea (theoretical): Estimate the number of distinct items in a huge dataset by hashing and sampling only a subset of elements.

**Distributed Graph Algorithms**

In distributed computing, clever algorithms can compute things like shortest paths in time sublinear in n under certain graph assumptions. These algorithms don't traverse the entire input before producing answers — they only examine important parts.

For example, an algorithm that solves shortest paths in: O((nlog_n)^5/6) is sublinear for large n.

**When It Arises**
|     |     |     |
| --- | --- | --- |
| Domain	 | Sublinear Example	 | Why it's sublinear |
| Theory	 | Approximate property testing	 | Samples &lt; n |
| Big data	 | Sketch/streaming algorithms	 | Only subset processed |
| Distributed	 | Shortest path approximations	 | Doesn't see all nodes |
| Kernel	HTree directory index	 | Hash + multi-level | reduces work |
| Data structure	 | Skip lists adaptive search	 | Popular entries get fast paths |

## Linear Algorithm Performance (O(n))
Linear algorithms are the ones where the work done varies in direct proportion with the input size, that is, if you double the input size, you double the work done. These typically involve a single pass through the input and thus scale proportionally with the input size.

A linear-time algorithm is one whose running time grows in direct proportion to the size of the input n.
If the input size doubles, the execution time approximately doubles.

This behavior is written as O(n).

Linear algorithms typically occur when:

* Every element must be examined at least once
* No shortcuts, indexing, or early termination is possible
* Exact results are required

This is often the best possible complexity for many problems.

We can classify an algorithm as being linear with respect to its input size
n. That is, there is some constant c > 0 such that t(n) ≤ c*n for 'large enough' n, or
more precisely, all n > n0. We don't actually need to compute the actual value of c or
n0; we just know they exist and they can be computed

* After the input is 'big enough' (larger than some fixed size n₀),
* The running time grows proportionally to the number of digits
* The algorithm never takes more than a constant amount of work per digit

We do not care about the exact values of:

* c (how fast your computer is)
* n₀ (small input quirks)

We only care that:

* They exist
* The growth trend is linear

When you add two n-digit numbers:

* You start from the least significant digit
* You add digit by digit
* You may propagate a carry

Each digit requires:

* One addition
* Possibly handling a carry

So:

* 1 digit → constant work
* n digits → n × constant work → O(n)

***Intuitive Meaning***

Imagine reading a book page by page.
To know whether a word appears in the book, you may need to read every page.

If the book has n pages, the work is proportional to n.

That is linear behavior.

**counting the number of occurrences of a particular character in a string.**

The algorithm is linear because its runtime is directly proportional to the
string length. If we take the string length to be n, the runtime complexity
of this Java method is O(n). Notice the single loop varying according to
the input size. This is very typical of linear runtime complexity
algorithms, where a constant number of operations are performed for
each input unit. The input unit in this example is each character in the
string.

```c
#include <stddef.h>

int algorithm1(char c, const char *str) {
    int count = 0;
    for (size_t i = 0; str[i] != '\0'; ++i)
        if (str[i] == c)
            ++count;
    return count;
}
```
```c++
#include <string>

int algorithm1(char c, const std::string &str) {
    int count = 0;
    for (size_t i = 0; i < str.size(); ++i)
        if (str[i] == c)
            ++count;
    return count;
}
```
```java
 public static int algorithm1(char c, String str) {
     int count = 0;
     for (int i = 0; i < str.length(); i++) {
         if (str.charAt(i) == c)
             count++;
     }
     return count;
 }
```

***Simple Algorithm Example***

Finding the maximum value in an array:

```c
int max(int *a, int n) {
    int m = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] > m)
            m = a[i];
    }
    return m;
}
```

The loop runs exactly n−1 times.
No matter what the values are, every element must be inspected.

Time complexity: O(n)

Space complexity: O(1)

**add two n-digit numbers**
.Code
======
=====
Clang::
```C
#include <stdlib.h>
#include <string.h>
#include <sys/time.h>
#include <stdio.h>

#include 'report.h'

/** Time before process starts.   */
static struct timeval before;

/** Time after process completes. */
static struct timeval after;

/** Size of problem. */
int n;

/** Add implementation 1. */
void add(int *n1, int *n2, int *sum) {
  int b = n-1;
  int carry = 0;
  while (b >= 0) {
    int s = n1[b] + n2[b] + carry;
    sum[b+1] = s % 10;
    if (s > 9) { carry = 1; } else { carry = 0; }
    b--;
  }

  sum[0] = carry;
}

/** Add implementation 2. */
void add2(int *n1, int *n2, int *sum) {
  int b = n-1;
  /* set carry bit */
  sum[b+1]=0;
  while (b >= 0) {
    int s = n1[b] + n2[b] + sum[b+1];
    sum[b+1] = s % 10;
    if (s > 9) { sum[b] = 1; }
    b--;
  }
}

/** Add implementation 3. */
void alt(int *n1, int *n2, int *sum) {
  int b = n;
  /* set carry bit. */
  sum[b]=0;
  while (--b >= 0) {
    int s = n1[b] + n2[b] + sum[b+1];
    sum[b+1] = s % 10;
    sum[b] = s/10;
  }
}

/** Add implementation 4. */
void last(int *n1, int *n2, int *sum) {
  int b = n;
  int carry = 0;
  while (--b >= 0) {
    int s = n1[b] + n2[b] + carry;
    if (s > 9) {
      sum[b+1] = s-10;
      carry = 1;
    } else {
      sum[b+1] = s;
      carry = 0;
    }
  }

  sum[0] = carry;
}
```

* **C++**
```C++
```
* **Java**
```C++
 /** Output number (for debugging). */
	private static void output (int []n) {
		for (int i : n) {
			System.out.print(i);
		}
		System.out.println();
	}


    /** Add implementation number 1. */
	private static void add(int[] n1, int[] n2, int[] sum) {
		int b = n1.length-1;
		int carry = 0;
		while (b >= 0) {
			int s = n1[b] + n2[b] + carry;
			sum[b+1] = s % 10;
			if (s > 9) { carry = 1; } else { carry = 0; }
			b--;
		}

		sum[0] = carry;
	}

    /** Add implementation number 2. */
	private static void add2(int[] n1, int[] n2, int[] sum) {
		int b = n1.length-1;
		sum[b+1]=0;  // prime the carry bit
		while (b >= 0) {
			int s = n1[b] + n2[b] + sum[b+1];
			sum[b+1] = s % 10;
			if (s > 9) { sum[b] = 1; }
			b--;
		}
	}

    /** Add implementation number 3. */
	private static void alt(int[] n1, int[] n2, int[] sum) {
		int b = n1.length;
		sum[b]=0; // prime the carry bit
		while (--b >= 0) {
			int s = n1[b] + n2[b] + sum[b+1];
			sum[b+1] = s % 10;
			sum[b] = s/10;
		}
	}

    /** Add implementation number 4. */
	private static void last(int[] n1, int[] n2, int[] sum) {
		int b = n1.length;
		int carry = 0;
		while (--b >= 0) {
			int s = n1[b] + n2[b] + carry;
			if (s > 9) {
				sum[b+1] = s-10;
				carry = 1;
			} else {
				sum[b+1] = s;
				carry = 0;
			}
		}

		sum[0] = carry;
	}
```
* **Python**
```C++
```
=====
======

***Why Linear Time Is Often Unavoidable***

Some problems have a lower bound of O(n):

* Checking if an array contains a value
* Computing a checksum
* Copying memory
* Counting items
* Verifying correctness of input

You cannot do better than O(n) because skipping elements risks missing critical data.

***Linux Kernel Example: Linked List Traversal***

The Linux kernel heavily uses linked lists (list_head).
Traversing a list is linear because each node must be visited.

Source:
https://elixir.bootlin.com/linux/latest/source/include/linux/list.h

```c
#define list_for_each(pos, head)     for (pos = (head)->next; pos != (head); pos = pos->next)
```

Each iteration advances to the next element.
If the list has n elements, the loop executes n times.

Time complexity: O(n)

***glibc Example: strlen***

The C standard library function strlen is linear.

Source:
https://sourceware.org/git/?p=glibc.git

```c
size_t strlen(const char *s) {
    const char *p = s;
    while (*p)
        p++;
    return p - s;
}
```

Each character is checked once until '\0' is found.

Time complexity: O(n)

***glibc Example: memcpy***

Memory copying is linear in the number of bytes copied.

```c
void *memcpy(void *dst, const void *src, size_t n) {
    for (size_t i = 0; i < n; i++)
        dst[i] = src[i];
    return dst;
}
```

Each byte must be copied exactly once.

Time complexity: O(n)

***Key Takeaway***

Linear algorithms touch each element once.
They are unavoidable, efficient, and common in kernels, libraries, and systems code.

## Linearithmic (O(n log n)) Algorithm Performance
Linearithmic algorithms arise when a problem of size n is repeatedly divided into smaller subproblems (usually by a constant factor) and each level of division performs linear work. The defining characteristic is that the total work is proportional to n multiplied by the number of times the problem can be halved, which is log n. Formally, the running time satisfies:

T(n) = n log n

This behavior is asymptotically faster than quadratic algorithms yet slower than purely linear ones. Linearithmic complexity is commonly the best achievable bound for comparison-based problems.

To explain how this behavior occurs in practice, let's define t(n) to represent
the time an algorithm takes to solve an input problem instance of size n. Divide and
Conquer is an efficient way to solve a problem in which a problem of size n is divi‐
ded into (roughly equal) subproblems of size n/2, which are solved recursively. The
solutions of these subproblems are combined together in linear time to solve the
original problem of size n. Mathematically, this can be stated as:

    t(n) = 2*t(n/2) + c*n

where:

* 2·t(n/2) represents the cost of solving the two subproblems
* c·n represents the cost of combining their solutions
* c is a constant independent of n

That is, t(n) includes the cost of the two subproblems together with no more than a
linear time cost (i.e., c*n) to merge the results.

Now, on the right side of the equation, t(n/2) is the time to solve a problem of size n/2; using the same logic, this
can be represented as:

    t(n/2) = 2*t(n/4) + c*n/2

and so the original equation is now:

    t(n) = 2*[2*t(n/4) + c*n/2] + c*n

If we expand this out once more, we see that:

    t(n) = 2*[2*[2*t(n/8) + c*n/4] + c*n/2] + c*n

This last equation reduces to t(n) = 8*t(n/8) + 4*c*n/4 + 2*c*n/2 + c*n, which can be
simplified as

    8*t(n/8) + 3*c*n.

We can then say that t(n) = (2k)*t(n/2k) + k*c*n.

At each level, the problem size is halved:

    n → n/2 → n/4 → … → 1

The number of times n can be divided by 2 before reaching 1 is: log₂ n

This
expansion ends when 2k = n (i.e., when k = log(n)).
In the final base case when the
problem size is 1, the performance t(1) is a constant d(the recursion continues until the base case t(1), which is constant time).

Thus, the closed-form formula for t(n) = n*d + c*n*log(n). Because c*n*log(n) is asymptotically greater than
d*n for any fixed constants c and d, t(n) can be simply written as O(n log n)

Since:

* Each level costs Θ(n)
* There are Θ(log n) levels

The total running time is:

    t(n) = Θ(n log n)

Linearithmic behavior emerges naturally when:

* Problems are divided recursively
* Each division level requires linear processing
* Comparisons or tree-based ordering are unavoidable

As a result, O(n log n) algorithms form the backbone of performant systems software, from standard libraries to operating system kernels.

Linearithmic time arises because:

* Work is distributed evenly across recursion levels
* No level dominates the cost
* The logarithmic depth comes from repeated halving
* The linear work comes from processing all elements at each level

This explains why algorithms such as merge sort, quicksort (average case), and balanced tree construction naturally exhibit O(n log n) behavior.

**Lower Bound Argument for Comparison Sorting**

Any comparison-based sorting algorithm must perform Ω(n log n) comparisons in the case. This lower bound is derived from decision tree analysis, where sorting n elements requires distinguishing among n! possible permutations.

Since: log2(n!) ≈ n log n

No comparison-based algorithm can asymptotically beat O(n log n).

**Why Linearithmic Algorithms Are Considered Efficient**

Linearithmic algorithms scale well because:

The logarithmic factor grows slowly

The linear work per level ensures full utilization of memory bandwidth

They often represent the theoretical lower bound

For large inputs, replacing an O(n²) algorithm with an O(n log n) one often means the difference between infeasible and practical execution.

### Examples
**Canonical Example: Merge Sort**

Merge sort divides the input array into two halves, recursively sorts each half, and then merges the two sorted halves in linear time.

At each recursion level:

* The total cost of merging is O(n)
* The number of recursion levels is O(log n)

Thus, the total time complexity is O(n log n).

**Code**

======
=====
Clang::
```C
#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int *L = malloc(n1 * sizeof(int));
    int *R = malloc(n2 * sizeof(int));

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }

    while (i < n1)
        arr[k++] = L[i++];
    while (j < n2)
        arr[k++] = R[j++];

    free(L);
    free(R);
}

void merge_sort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        merge_sort(arr, left, mid);
        merge_sort(arr, mid + 1, right);

        // Linear-time merge step
        merge(arr, left, mid, right);
    }
}

```
Why O(n log n)

Each merge() scans all elements in the subarray → O(n) per level

Recursion depth is log n

* **C++**
```C++
#include <vector>

void merge(std::vector<int>& a, int l, int m, int r) {
    std::vector<int> left(a.begin() + l, a.begin() + m + 1);
    std::vector<int> right(a.begin() + m + 1, a.begin() + r + 1);

    int i = 0, j = 0, k = l;

    while (i < left.size() && j < right.size())
        a[k++] = (left[i] <= right[j]) ? left[i++] : right[j++];

    while (i < left.size()) a[k++] = left[i++];
    while (j < right.size()) a[k++] = right[j++];
}

void merge_sort(std::vector<int>& a, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        merge_sort(a, l, m);
        merge_sort(a, m + 1, r);
        merge(a, l, m, r);
    }
}

```
Mapping to recurrence

Two recursive calls → 2·t(n/2)

merge() → c·n

* **Java**
```Java
public class MergeSort {

    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;

            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];

        int i = left, j = mid + 1, k = 0;

        while (i <= mid && j <= right)
            temp[k++] = (arr[i] <= arr[j]) ? arr[i++] : arr[j++];

        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];

        System.arraycopy(temp, 0, arr, left, temp.length);
    }
}

```
mportant note
Even though Java array access looks constant-time, the algorithmic cost comes from touching every element during merging.
* **Python**
```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result

```
Why Python is still O(n log n)

Slicing and merging traverse all elements

Recursion depth is logarithmic

Constants differ, asymptotic behavior does not
=====
======

The merge operation touches each element once per level, which explains the linear factor.

### Real-World Example:
**glibc qsort**

The GNU C Library implementation of qsort uses introsort, a hybrid algorithm:

* Quicksort (average O(n log n))
* Heapsort fallback (worst-case O(n log n))
* Insertion sort for small partitions

glibc source:
https://sourceware.org/git/?p=glibc.git;a=blob;f=stdlib/qsort.c

Excerpt:

```c
if (n <= MAX_THRESH) {
insertion_sort(base, n, size, cmp);
return;
}
```
The dominant behavior remains O(n log n), even though constant-time optimizations are applied for small inputs.

**Linux Kernel Red-Black Trees**

The Linux kernel uses red-black trees for many subsystems, including:

* Virtual memory areas
* Completely Fair Scheduler (CFS)

Epoll file descriptor management

Operations such as insertion, deletion, and lookup all execute in O(log n). When iterating over all nodes, the combined behavior becomes O(n log n).

Kernel source:
https://elixir.bootlin.com/linux/latest/source/lib/rbtree.c

Excerpt:

```c
while (node) {
parent = node;
if (key < node->key)
node = node->rb_left;
else
node = node->rb_right;
}
```
Each traversal step reduces the remaining search space by roughly half.

**CFS Scheduler Entity Ordering**

The Completely Fair Scheduler maintains runnable tasks in a red-black tree ordered by virtual runtime. Scheduling decisions involve:

* O(log n) insertion/removal
* O(1) selection of the leftmost node
* O(n log n) behavior over many scheduling events

Scheduler code: https://elixir.bootlin.com/linux/v6.18.5/source/kernel/sched/fair.c

This design ensures fairness while scaling efficiently with the number of tasks.

**External Sorting and Filesystems**

When sorting data larger than memory:

* Data is divided into chunks (linear pass)
* Each chunk is sorted
* Sorted chunks are merged in logarithmic passes

Filesystems and databases rely heavily on this pattern, especially in:

* Log-structured merge trees (LSM trees)
* External merge sort in database engines

This results in predictable O(n log n) I/O complexity.

## Quadratic Algorithm Performance (O(n²))
Quadratic algorithms have a running time proportional to the square of the input size, n².

This occurs when every element is compared or combined with every other element, such as in nested loops over the input.

Quadratic algorithms are common for simple sorting, matrix operations, and pairwise comparisons, but they become inefficient for large inputs.

Quadratic complexity algorithms are not very performant for large input sizes. The work done increases following a quadratic proportion as we increase our input size.

Let's define t(n) to be
the actual running time of the Quadratic algorithm on an input of size n. By
this definition, there must be some constant c > 0 such that t(n) ≤ c*n2 for all n > n0.
We don't actually need to know the full details of the c and n0 values, just that they
exist.

### Examples

**finding the common elements contained in two arrays**

(assuming no
duplicate values exist in each array), producing the intersection of the two inputs
+
This results in a runtime complexity of O(mn), where m and n are the sizes of the first and second input arrays. If the input arrays are the same size as n elements, this results in a runtime of O(n2).
+
```java
 public static List<Integer> algorithm1(int[] a, int[] b) {
     List<Integer> result = new ArrayList<>(a.length);
     for (int x : a) {
         for (int y : b) {
             if (x == y)
                 result.add(x);
         }
     }
     return result;
 }
```
+
The amount of memory we use is dictated by the size of our result listed in our method.
 The bigger this list, the more memory we're using.
+
The best case is when we use the least amount of memory. This is when the list is empty, that is, when we have no common elements between the two arrays. Thus, this method has a best case space complexity of O(1), when there is no intersection.
+
The case is just the opposite, when we have all the elements in both arrays. This can happen when the arrays are equal to each other, although the numbers may be in a different order. The memory in this case is equal to the size of one of our input arrays. In short, the space complexity of the method is O(n).

**Digit Multiplication**

<Tabs groupId='code'>

<TabItem value='Clang' label='Clang'>
```C
```
</TabItem>
<TabItem value='C++' label='C++'>
```C++
```
</TabItem>
<TabItem value='Java' label='Java'>
```Java
package algs.chapter2.table4;

/**
 * Launch application to generate results for Table 2-4 and Figure 2-4
 *
 * @author George Heineman
 * @version 2.0, 6/3/15
 * @since 1.0
 */
public class Main {

	// computed tables.
	public static int table[][];
	public static int lookup2[][][][];
	public static int lookup[][][];
	public static int MaxLookup = 10;

	private static void output (int []n) {
		for (int i : n) {
			System.out.print(i);
		}
		System.out.println();
	}

	public static void mult (int[] n1, int[] n2, int[] result) {
		int pos = result.length-1;

		// clear all values
		for (int i = 0; i < result.length; i++) { result[i] = 0; }
		for (int m = n1.length-1; m>=0; m--) {
			int off = n1.length-1 - m;

			for (int n = n2.length-1; n>=0; n--, off++) {
				int prod = n1[m]*n2[n];

				// compute partial total by carrying previous digit's position
				result[pos-off] += prod % 10;
				result[pos-off-1] += result[pos-off]/10 + prod/10;
				result[pos-off] %= 10;
			}
		}
	}

	// generated code embedded within switch...
	public static void times (int[] n1, int[] n2, int[] result) {
		int pos = result.length-1;

		// clear all values....
		for (int i = 0; i < result.length; i++) { result[i] = 0; }

		for (int m = n1.length-1; m>=0; m--) {
			int iPos = pos - (n1.length-1 - m);
			int iPosSubOne = iPos-1;
			if (n1[m] == 0) {
				continue; // skip zero multiplier! Won't affect total.
			}

			for (int n = n2.length-1; n>=0; n--, iPos--,iPosSubOne--) {
				int prod = n1[m]*n2[n];

				// GENERATED-BEGIN
				switch (prod) {
				case 0: break;
				case 1: result[iPos] += 1;break;
				case 2: result[iPos] += 2;break;
				case 3: result[iPos] += 3;break;
				case 4: result[iPos] += 4;break;
				case 5: result[iPos] += 5;break;
				case 6: result[iPos] += 6;break;
				case 7: result[iPos] += 7;break;
				case 8: result[iPos] += 8;break;
				case 9: result[iPos] += 9;break;
				case 10: result[iPosSubOne] += 1;break;
				case 11: result[iPos] += 1;result[iPosSubOne] += 1;break;
				case 12: result[iPos] += 2;result[iPosSubOne] += 1;break;
				case 13: result[iPos] += 3;result[iPosSubOne] += 1;break;
				case 14: result[iPos] += 4;result[iPosSubOne] += 1;break;
				case 15: result[iPos] += 5;result[iPosSubOne] += 1;break;
				case 16: result[iPos] += 6;result[iPosSubOne] += 1;break;
				case 17: result[iPos] += 7;result[iPosSubOne] += 1;break;
				case 18: result[iPos] += 8;result[iPosSubOne] += 1;break;
				case 19: result[iPos] += 9;result[iPosSubOne] += 1;break;
				case 20: result[iPosSubOne] += 2;break;
				case 21: result[iPos] += 1;result[iPosSubOne] += 2;break;
				case 22: result[iPos] += 2;result[iPosSubOne] += 2;break;
				case 23: result[iPos] += 3;result[iPosSubOne] += 2;break;
				case 24: result[iPos] += 4;result[iPosSubOne] += 2;break;
				case 25: result[iPos] += 5;result[iPosSubOne] += 2;break;
				case 26: result[iPos] += 6;result[iPosSubOne] += 2;break;
				case 27: result[iPos] += 7;result[iPosSubOne] += 2;break;
				case 28: result[iPos] += 8;result[iPosSubOne] += 2;break;
				case 29: result[iPos] += 9;result[iPosSubOne] += 2;break;
				case 30: result[iPosSubOne] += 3;break;
				case 31: result[iPos] += 1;result[iPosSubOne] += 3;break;
				case 32: result[iPos] += 2;result[iPosSubOne] += 3;break;
				case 33: result[iPos] += 3;result[iPosSubOne] += 3;break;
				case 34: result[iPos] += 4;result[iPosSubOne] += 3;break;
				case 35: result[iPos] += 5;result[iPosSubOne] += 3;break;
				case 36: result[iPos] += 6;result[iPosSubOne] += 3;break;
				case 37: result[iPos] += 7;result[iPosSubOne] += 3;break;
				case 38: result[iPos] += 8;result[iPosSubOne] += 3;break;
				case 39: result[iPos] += 9;result[iPosSubOne] += 3;break;
				case 40: result[iPosSubOne] += 4;break;
				case 41: result[iPos] += 1;result[iPosSubOne] += 4;break;
				case 42: result[iPos] += 2;result[iPosSubOne] += 4;break;
				case 43: result[iPos] += 3;result[iPosSubOne] += 4;break;
				case 44: result[iPos] += 4;result[iPosSubOne] += 4;break;
				case 45: result[iPos] += 5;result[iPosSubOne] += 4;break;
				case 46: result[iPos] += 6;result[iPosSubOne] += 4;break;
				case 47: result[iPos] += 7;result[iPosSubOne] += 4;break;
				case 48: result[iPos] += 8;result[iPosSubOne] += 4;break;
				case 49: result[iPos] += 9;result[iPosSubOne] += 4;break;
				case 50: result[iPosSubOne] += 5;break;
				case 51: result[iPos] += 1;result[iPosSubOne] += 5;break;
				case 52: result[iPos] += 2;result[iPosSubOne] += 5;break;
				case 53: result[iPos] += 3;result[iPosSubOne] += 5;break;
				case 54: result[iPos] += 4;result[iPosSubOne] += 5;break;
				case 55: result[iPos] += 5;result[iPosSubOne] += 5;break;
				case 56: result[iPos] += 6;result[iPosSubOne] += 5;break;
				case 57: result[iPos] += 7;result[iPosSubOne] += 5;break;
				case 58: result[iPos] += 8;result[iPosSubOne] += 5;break;
				case 59: result[iPos] += 9;result[iPosSubOne] += 5;break;
				case 60: result[iPosSubOne] += 6;break;
				case 61: result[iPos] += 1;result[iPosSubOne] += 6;break;
				case 62: result[iPos] += 2;result[iPosSubOne] += 6;break;
				case 63: result[iPos] += 3;result[iPosSubOne] += 6;break;
				case 64: result[iPos] += 4;result[iPosSubOne] += 6;break;
				case 65: result[iPos] += 5;result[iPosSubOne] += 6;break;
				case 66: result[iPos] += 6;result[iPosSubOne] += 6;break;
				case 67: result[iPos] += 7;result[iPosSubOne] += 6;break;
				case 68: result[iPos] += 8;result[iPosSubOne] += 6;break;
				case 69: result[iPos] += 9;result[iPosSubOne] += 6;break;
				case 70: result[iPosSubOne] += 7;break;
				case 71: result[iPos] += 1;result[iPosSubOne] += 7;break;
				case 72: result[iPos] += 2;result[iPosSubOne] += 7;break;
				case 73: result[iPos] += 3;result[iPosSubOne] += 7;break;
				case 74: result[iPos] += 4;result[iPosSubOne] += 7;break;
				case 75: result[iPos] += 5;result[iPosSubOne] += 7;break;
				case 76: result[iPos] += 6;result[iPosSubOne] += 7;break;
				case 77: result[iPos] += 7;result[iPosSubOne] += 7;break;
				case 78: result[iPos] += 8;result[iPosSubOne] += 7;break;
				case 79: result[iPos] += 9;result[iPosSubOne] += 7;break;
				case 80: result[iPosSubOne] += 8;break;
				case 81: result[iPos] += 1;result[iPosSubOne] += 8;break;
				case 82: result[iPos] += 2;result[iPosSubOne] += 8;break;
				case 83: result[iPos] += 3;result[iPosSubOne] += 8;break;
				case 84: result[iPos] += 4;result[iPosSubOne] += 8;break;
				case 85: result[iPos] += 5;result[iPosSubOne] += 8;break;
				case 86: result[iPos] += 6;result[iPosSubOne] += 8;break;
				case 87: result[iPos] += 7;result[iPosSubOne] += 8;break;
				case 88: result[iPos] += 8;result[iPosSubOne] += 8;break;
				case 89: result[iPos] += 9;result[iPosSubOne] += 8;break;
				case 90: result[iPosSubOne] += 9;break;
				case 91: result[iPos] += 1;result[iPosSubOne] += 9;break;
				case 92: result[iPos] += 2;result[iPosSubOne] += 9;break;
				case 93: result[iPos] += 3;result[iPosSubOne] += 9;break;
				case 94: result[iPos] += 4;result[iPosSubOne] += 9;break;
				case 95: result[iPos] += 5;result[iPosSubOne] += 9;break;
				case 96: result[iPos] += 6;result[iPosSubOne] += 9;break;
				case 97: result[iPos] += 7;result[iPosSubOne] += 9;break;
				case 98: result[iPos] += 8;result[iPosSubOne] += 9;break;
				case 99: result[iPos] += 9;result[iPosSubOne] += 9;break;
				};
				switch (result[iPos]) {
				case 0: break;
				case 1: break;
				case 2: break;
				case 3: break;
				case 4: break;
				case 5: break;
				case 6: break;
				case 7: break;
				case 8: break;
				case 9: break;
				case 10: result[iPosSubOne] += 1; result[iPos] -= 10; break;
				case 11: result[iPosSubOne] += 1; result[iPos] -= 10; break;
				case 12: result[iPosSubOne] += 1; result[iPos] -= 10; break;
				case 13: result[iPosSubOne] += 1; result[iPos] -= 10; break;
				case 14: result[iPosSubOne] += 1; result[iPos] -= 10; break;
				case 15: result[iPosSubOne] += 1; result[iPos] -= 10; break;
				case 16: result[iPosSubOne] += 1; result[iPos] -= 10; break;
				case 17: result[iPosSubOne] += 1; result[iPos] -= 10; break;
				case 18: result[iPosSubOne] += 1; result[iPos] -= 10; break;
				case 19: result[iPosSubOne] += 1; result[iPos] -= 10; break;
				case 20: result[iPosSubOne] += 2; result[iPos] -= 20; break;
				case 21: result[iPosSubOne] += 2; result[iPos] -= 20; break;
				case 22: result[iPosSubOne] += 2; result[iPos] -= 20; break;
				case 23: result[iPosSubOne] += 2; result[iPos] -= 20; break;
				case 24: result[iPosSubOne] += 2; result[iPos] -= 20; break;
				case 25: result[iPosSubOne] += 2; result[iPos] -= 20; break;
				case 26: result[iPosSubOne] += 2; result[iPos] -= 20; break;
				case 27: result[iPosSubOne] += 2; result[iPos] -= 20; break;
				case 28: result[iPosSubOne] += 2; result[iPos] -= 20; break;
				case 29: result[iPosSubOne] += 2; result[iPos] -= 20; break;
				case 30: result[iPosSubOne] += 3; result[iPos] -= 30; break;
				case 31: result[iPosSubOne] += 3; result[iPos] -= 30; break;
				case 32: result[iPosSubOne] += 3; result[iPos] -= 30; break;
				case 33: result[iPosSubOne] += 3; result[iPos] -= 30; break;
				case 34: result[iPosSubOne] += 3; result[iPos] -= 30; break;
				case 35: result[iPosSubOne] += 3; result[iPos] -= 30; break;
				case 36: result[iPosSubOne] += 3; result[iPos] -= 30; break;
				case 37: result[iPosSubOne] += 3; result[iPos] -= 30; break;
				case 38: result[iPosSubOne] += 3; result[iPos] -= 30; break;
				case 39: result[iPosSubOne] += 3; result[iPos] -= 30; break;
				case 40: result[iPosSubOne] += 4; result[iPos] -= 40; break;
				case 41: result[iPosSubOne] += 4; result[iPos] -= 40; break;
				case 42: result[iPosSubOne] += 4; result[iPos] -= 40; break;
				case 43: result[iPosSubOne] += 4; result[iPos] -= 40; break;
				case 44: result[iPosSubOne] += 4; result[iPos] -= 40; break;
				case 45: result[iPosSubOne] += 4; result[iPos] -= 40; break;
				case 46: result[iPosSubOne] += 4; result[iPos] -= 40; break;
				case 47: result[iPosSubOne] += 4; result[iPos] -= 40; break;
				case 48: result[iPosSubOne] += 4; result[iPos] -= 40; break;
				case 49: result[iPosSubOne] += 4; result[iPos] -= 40; break;
				case 50: result[iPosSubOne] += 5; result[iPos] -= 50; break;
				case 51: result[iPosSubOne] += 5; result[iPos] -= 50; break;
				case 52: result[iPosSubOne] += 5; result[iPos] -= 50; break;
				case 53: result[iPosSubOne] += 5; result[iPos] -= 50; break;
				case 54: result[iPosSubOne] += 5; result[iPos] -= 50; break;
				case 55: result[iPosSubOne] += 5; result[iPos] -= 50; break;
				case 56: result[iPosSubOne] += 5; result[iPos] -= 50; break;
				case 57: result[iPosSubOne] += 5; result[iPos] -= 50; break;
				case 58: result[iPosSubOne] += 5; result[iPos] -= 50; break;
				case 59: result[iPosSubOne] += 5; result[iPos] -= 50; break;
				case 60: result[iPosSubOne] += 6; result[iPos] -= 60; break;
				case 61: result[iPosSubOne] += 6; result[iPos] -= 60; break;
				case 62: result[iPosSubOne] += 6; result[iPos] -= 60; break;
				case 63: result[iPosSubOne] += 6; result[iPos] -= 60; break;
				case 64: result[iPosSubOne] += 6; result[iPos] -= 60; break;
				case 65: result[iPosSubOne] += 6; result[iPos] -= 60; break;
				case 66: result[iPosSubOne] += 6; result[iPos] -= 60; break;
				case 67: result[iPosSubOne] += 6; result[iPos] -= 60; break;
				case 68: result[iPosSubOne] += 6; result[iPos] -= 60; break;
				case 69: result[iPosSubOne] += 6; result[iPos] -= 60; break;
				case 70: result[iPosSubOne] += 7; result[iPos] -= 70; break;
				case 71: result[iPosSubOne] += 7; result[iPos] -= 70; break;
				case 72: result[iPosSubOne] += 7; result[iPos] -= 70; break;
				case 73: result[iPosSubOne] += 7; result[iPos] -= 70; break;
				case 74: result[iPosSubOne] += 7; result[iPos] -= 70; break;
				case 75: result[iPosSubOne] += 7; result[iPos] -= 70; break;
				case 76: result[iPosSubOne] += 7; result[iPos] -= 70; break;
				case 77: result[iPosSubOne] += 7; result[iPos] -= 70; break;
				case 78: result[iPosSubOne] += 7; result[iPos] -= 70; break;
				case 79: result[iPosSubOne] += 7; result[iPos] -= 70; break;
				case 80: result[iPosSubOne] += 8; result[iPos] -= 80; break;
				case 81: result[iPosSubOne] += 8; result[iPos] -= 80; break;
				case 82: result[iPosSubOne] += 8; result[iPos] -= 80; break;
				case 83: result[iPosSubOne] += 8; result[iPos] -= 80; break;
				case 84: result[iPosSubOne] += 8; result[iPos] -= 80; break;
				case 85: result[iPosSubOne] += 8; result[iPos] -= 80; break;
				case 86: result[iPosSubOne] += 8; result[iPos] -= 80; break;
				case 87: result[iPosSubOne] += 8; result[iPos] -= 80; break;
				case 88: result[iPosSubOne] += 8; result[iPos] -= 80; break;
				case 89: result[iPosSubOne] += 8; result[iPos] -= 80; break;
				case 90: result[iPosSubOne] += 9; result[iPos] -= 90; break;
				case 91: result[iPosSubOne] += 9; result[iPos] -= 90; break;
				case 92: result[iPosSubOne] += 9; result[iPos] -= 90; break;
				case 93: result[iPosSubOne] += 9; result[iPos] -= 90; break;
				case 94: result[iPosSubOne] += 9; result[iPos] -= 90; break;
				case 95: result[iPosSubOne] += 9; result[iPos] -= 90; break;
				case 96: result[iPosSubOne] += 9; result[iPos] -= 90; break;
				case 97: result[iPosSubOne] += 9; result[iPos] -= 90; break;
				case 98: result[iPosSubOne] += 9; result[iPos] -= 90; break;
				case 99: result[iPosSubOne] += 9; result[iPos] -= 90; break;
				};

				// GENERATED-END
			}
		}
	}

	/**
	 * Compute full multiplication table for digits 0 through 9.
	 */
	public static int[][] computeTable() {
		int [][] ret = new int[10][10];
		for (int m = 0; m < 10; m++) {
			for (int n = 0; n < 10; n++) {
				ret[m][n] = m*n;
			}
		}
		return ret;
	}

	/**
	 * This method will generate a block of code that is optimized logic that is
	 * inserted into the times method.
	 */
	public static void computeSwitch() {
		// result[pos-off] += prod % 10;
		System.out.println ('switch (prod) {');
		for (int i = 0; i < 100; i++) {
			System.out.print ('case ' + i + ': ');
			if (i%10 != 0) {
				System.out.print ('result[iPos] += ' + (i%10) + ';');
			}
			if ((i / 10) != 0) {
				System.out.print ('result[iPosSubOne] += ' + (i/10) + ';');
			}
			System.out.println ('break;');
		}
		System.out.println ('};');

		// middle one
//		if (result[pos-off] > 9) {   // carry internally
//			do {
//				result[pos-off] -= 10;
//				result[pos-off-1]++;
//			} while (result[pos-off] > 9);
//		}
		System.out.println ('switch (result[iPos]) {');
		for (int i = 0; i < 100; i++) {
			int tens = 10*(i/10);
			if (tens == 0) {
				System.out.println ('case ' + i + ': break; ');
			} else {
				System.out.println ('case ' + i + ': result[iPosSubOne] += ' + (i/10) + '; result[iPos] -= ' + tens + '; break; ');
			}
		}
		System.out.println ('};');



	}

	/**
	 * Generate random number of size n directly into num
	 *
	 * @param num
	 * @param n
	 */
	public static void randomNumber (int[] num, int n) {
		for (int j = 0;j < n; j++) {
			num[j] = (int) (Math.random()*10);
		}
	}

	public static void generateTable() {

		// Trials
		int n = 2;
		int MAX_SIZE = 1024;   // have been able to run up to 1024 in the past.
		int NUM_TRIALS = 10000;
		table = computeTable();

		System.out.println('n\tbase\tmult\ttimes');
		while (n < MAX_SIZE) {
			// generate numbers and space for storage
			int[] n1 = new int[n];
			int[] n2 = new int[n];
			randomNumber(n1, n);
			randomNumber(n2, n);
			int[] result = new int[2*n+1];

			int[] copy1 = new int[n];
			int[] copy2 = new int[n];
			System.arraycopy(n1, 0, copy1, 0, n);
			System.arraycopy(n2, 0, copy2, 0, n);

			// BASELINE
			System.gc();
			long baseS = System.currentTimeMillis();
			for (int i = 0; i < NUM_TRIALS; i++) {
				// NOP

				// circular shift.
				int c = n1[0];
				System.arraycopy(n1, 1, n1, 0, n-1);
				n1[n-1] = c;
				c = n2[0];
				System.arraycopy(n2, 1, n2, 0, n-1);
				n2[n-1] = c;
			}
			long baseE = System.currentTimeMillis();

			// MULTIPLY
			System.gc();
			System.arraycopy(copy2, 0, n2, 0, n);
			System.arraycopy(copy1, 0, n1, 0, n);
			long multS = System.currentTimeMillis();
			for (int i = 0; i < NUM_TRIALS; i++) {
				mult(n1,n2,result);

				// circular shift.
				int c = n1[0];
				System.arraycopy(n1, 1, n1, 0, n-1);
				n1[n-1] = c;
				c = n2[0];
				System.arraycopy(n2, 1, n2, 0, n-1);
				n2[n-1] = c;
			}
			long multE = System.currentTimeMillis();

			// TIMES
			System.gc();
			System.arraycopy(copy2, 0, n2, 0, n);
			System.arraycopy(copy1, 0, n1, 0, n);
			long timesS = System.currentTimeMillis();
			for (int i = 0; i < NUM_TRIALS; i++) {
				times(n1,n2,result);

				// circular shift.
				int c = n1[0];
				System.arraycopy(n1, 1, n1, 0, n-1);
				n1[n-1] = c;
				c = n2[0];
				System.arraycopy(n2, 1, n2, 0, n-1);
				n2[n-1] = c;
			}
			long timesE = System.currentTimeMillis();


			long baseLine = (baseE - baseS);

			// n , baseLine, Mult*, Times*
			System.out.println(n + '\t' + baseLine + '\t' + (multE - multS-baseLine) + '\t' + (timesE - timesS-baseLine));

			// advance
			n = n * 2;
		}
	}

	public static void main (String []args) {
		// If you want to generate the code found within times() method, uncomment the
		// next two lines
		//table = computeTable();
		//computeSwitch();

		// sample test (a few times)
		for (int nt = 0; nt < 10; nt++) {
			int t = 3;
			int[] n1 = new int[t];
			int[] n2 = new int[t];
			int[] result = new int [2*t+1];
			int[] result2 = new int [2*t+1];
			randomNumber(n1, t);
			randomNumber(n2, t);
			mult (n1, n2, result);
			times (n1, n2, result2);

			for (int i = 0; i < result.length; i++) {
				if (result[i] != result2[i]) {
					System.out.println('Error when multiplying n1,n2');
					System.out.println('n1:'); output (n1);
					System.out.println('n2:'); output (n2);

					System.out.print ('res :'); output (result);
					System.out.print ('res2:'); output (result2);
					System.exit(0);
				}
			}
		}

		// here is the real table.
		generateTable();
	}
}
```
</TabItem>
<TabItem value='Python' label='Python'>
```Python
```
</TabItem>
</Tabs>

**Bubble Sort**

* Compare each element to every other element in the array
* Swap elements to maintain order
* Outer loop runs n times, inner loop runs n times → O(n²)

**Code**

======
Why O(n²) occurs

* Two nested loops over n elements → n * n = n² comparisons
* Each comparison and swap is constant time → still O(n²)
* Quadratic behavior becomes very expensive for large n (e.g., 10,000 elements → 100 million operations)

=====
Clang::
```C
#include <stdio.h>

// Bubble Sort function
void bubble_sort(int arr[], int n) {
    // Outer loop for each element
    for (int i = 0; i < n - 1; i++) {
        // Inner loop for comparing with remaining elements
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if out of order
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Testing the bubble sort
int main() {
    int arr[] = {5, 2, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    bubble_sort(arr, n);

    printf('Sorted array: ');
    for (int i = 0; i < n; i++)
        printf('%d ', arr[i]);
    printf('\n');

    return 0;
}

```

* **C++**
```C++
#include <iostream>
#include <vector>
using namespace std;

// Bubble Sort function
void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]); // Built-in swap
            }
        }
    }
}

// Testing the bubble sort
int main() {
    vector<int> arr = {5, 2, 9, 1, 5};

    bubbleSort(arr);

    cout << 'Sorted array: ';
    for (int num : arr) cout << num << ' ';
    cout << endl;

    return 0;
}

```
* **Java**
```Java
public class BubbleSort {

    // Bubble Sort function
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j + 1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // Testing the bubble sort
    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 5};
        bubbleSort(arr);

        System.out.print('Sorted array: ');
        for (int num : arr) System.out.print(num + ' ');
        System.out.println();
    }
}

```
* **Python**
```Python
\ Bubble Sort function
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]   Swap elements

\ Testing the bubble sort
if __name__ == '__main__':
    arr = [5, 2, 9, 1, 5]
    bubble_sort(arr)
    print('Sorted array:', arr)

```
=====
======

**selection sorting**

### Real-world examples

* Simple comparison-based sorts like Bubble Sort, Insertion Sort, Selection Sort
* Naive matrix multiplication: multiply two n × n matrices using triple nested loops → O(n³)
* Checking all pairs of elements in a dataset
* Kernel-level or glibc examples:
  * qsort worst-case (naive quicksort without introsort fallback)
  * memcmp with nested loops for multidimensional data

## Exponential: O(2^n)
Exponential algorithms are those whose running time doubles with each additional input element. Formally:

t(n) = O(2^n)

This happens when the algorithm explores all possible subsets, combinations, or sequences of n elements. Exponential complexity grows extremely quickly and becomes infeasible for even moderately large n.

Exponential time grows so much, we consider these algorithms 'not
runnable'. They run for very few input types, and require huge
amounts of computing power if inputs aren't tiny. Optimizing ev-
ery aspect of the code or using supercomputers doesn't help. The
crushing exponential always dominates growth and keeps these al-
gorithms unviable.

Exponential behavior is:

* Acceptable only for very small n
* Grows so quickly that n = 30 already produces over 1 billion combinations (2³⁰)
* Typically replaced with dynamic programming, heuristics, or approximation in practice

**Canonical Example: Subset Generation / Power Set**

Given a set of size n, the number of possible subsets is 2ⁿ.

An algorithm that explicitly enumerates all subsets is naturally O(2ⁿ).

Each additional element doubles the number of subsets.

**Mathematical Recurrence Example**

A simple recursive function that generates all subsets satisfies:

    subset(n) = subset(n-1) + subset(n-1)

The first call excludes the nth element

The second call includes the nth element

Base case: empty set

Total calls = 2ⁿ → exponential time

**Why exponential algorithms appear in practice**

*Brute-force combinatorial problems:

* Traveling Salesman Problem (TSP)
* Knapsack problem (without dynamic programming)
* Boolean satisfiability (SAT) solvers exploring all assignments

*Recursion over all possibilities without pruning → exponential growth

### Examples
**Exponential Performance via the Lock Example**

Consider a lock with three numeric dials in sequence, each of which contains the
digits from 0 to 9. Each dial can be set independently to one of these 10 digits.
Assume you have a found such a lock, but don't have its combination; it is simply a
matter of some manual labor to try each of the 1,000 possible combinations, from
000 to 999.

Consider a lock with three numeric dials, where each dial can take a value from 0 to 9.

Each dial has 10 choices

The dials are independent

Total combinations:

10 × 10 × 10 = 10³ = 1,000

Trying every possible combination from 000 to 999 is a brute-force search.

**Generalizing to n dials**

If the lock has n dials, Each dial has 10 possible values, Total combinations: **10ⁿ**

This means the time required to try all combinations grows exponentially with n. So the running time is: O(10ⁿ)

**Why this is exponential**

An algorithm is exponential when:

* Each new unit of input multiplies the number of possibilities
* Adding one dial increases work by a factor of 10

Example growth:
|     |     |
| --- | --- |
| Dials (n)	 | Combinations |
| 1	 | 10 |
| 2	 | 100 |
| 3	 | 1,000 |
| 6	 | 1,000,000 |
| 10	 | 10,000,000,000 |
This growth is far faster than linear or polynomial growth.

**Base of the exponent does not change the classification**

Although many exponential algorithms are written as: O(2ⁿ), this is not required. Any base greater than 1 produces exponential growth:

* O(2ⁿ) → subsets, bit combinations
*
* O(10ⁿ) → numeric locks, PIN codes
*
* O(bⁿ) for any b > 1 → exponential

The base affects how fast it explodes, but not the classification.

**Why exponential algorithms are impractical**

Exponential algorithms are only feasible for very small n:

* n = 3 → trivial
*
* n = 10 → borderline
*
* n = 30 → billions of operations
*
* n = 60 → completely infeasible

This is why brute-force attacks:

* Fail against large key sizes
* Are avoided in kernel and library code

**Why some exponential algorithms are still used**

Some algorithms have:

* Exponential worst-case behavior
* But excellent average-case performance
A classic example is the Simplex algorithm for linear programming.

---

**Power Set / Subset Generation problem**

Given an array of n elements, generate all possible subsets (the power set).

Number of subsets = 2ⁿ

A subset is any selection of elements from an array, where the order does not matter, and no element appears more than once. It can include any number of elements, from none (the empty subset) to all the elements of the array.

Examples:

Input: arr[] = [1, 2, 3]

Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

**Code**

======
Why this is O(2ⁿ) (formal reasoning)

At each level of recursion:

* One branch includes the element
* One branch excludes the element

This produces the recurrence: T(n) = 2·T(n-1) + O(1)

Solving it yields: T(n) = O(2ⁿ)
=====
Clang::
```C
#include <stdio.h>

// Recursive function to generate subsets
void subsets(int arr[], int n, int index, int chosen[]) {
    // Base case: all elements processed
    if (index == n) {
        printf('{ ');
        for (int i = 0; i < n; i++) {
            if (chosen[i])
                printf('%d ', arr[i]);
        }
        printf('}\n');
        return;
    }

    // Case 1: exclude current element
    chosen[index] = 0;
    subsets(arr, n, index + 1, chosen);

    // Case 2: include current element
    chosen[index] = 1;
    subsets(arr, n, index + 1, chosen);
}

// Testing the exponential algorithm
int main() {
    int arr[] = {1, 2, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    int chosen[3] = {0};

    subsets(arr, n, 0, chosen);
    return 0;
}

```
Why exponential

Each element creates two recursive branches

Total calls = 2ⁿ

* **C++**
```C++
#include <iostream>
#include <vector>
using namespace std;

// Recursive subset generator
void subsets(const vector<int>& arr, int index, vector<int>& current) {
    if (index == arr.size()) {
        cout << '{ ';
        for (int x : current) cout << x << ' ';
        cout << '}\n';
        return;
    }

    // Exclude element
    subsets(arr, index + 1, current);

    // Include element
    current.push_back(arr[index]);
    subsets(arr, index + 1, current);
    current.pop_back(); // backtrack
}

// Testing
int main() {
    vector<int> arr = {1, 2, 3};
    vector<int> current;

    subsets(arr, 0, current);
    return 0;
}

```
* **Java**
```Java
import java.util.*;

public class PowerSet {

    // Recursive subset generator
    static void subsets(int[] arr, int index, List<Integer> current) {
        if (index == arr.length) {
            System.out.println(current);
            return;
        }

        // Exclude element
        subsets(arr, index + 1, current);

        // Include element
        current.add(arr[index]);
        subsets(arr, index + 1, current);
        current.remove(current.size() - 1); // backtrack
    }

    // Testing
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        subsets(arr, 0, new ArrayList<>());
    }
}

```
* **Python**
```Python
def subsets(arr, index, current):
     Base case
    if index == len(arr):
        print(current)
        return

     Exclude element
    subsets(arr, index + 1, current)

     Include element
    subsets(arr, index + 1, current + [arr[index]])


\ Testing
if __name__ == '__main__':
    arr = [1, 2, 3]
    subsets(arr, 0, [])

```
=====
======

## factorial(!n) algorithm
Some algorithms are even worse than exponential time algorithms.
It's the case of factorial time algorithms, whose time complexities
are O(n!). Exponential and factorial time algorithms are horrible,
but we need them for the hardest computational problems: the fa-
mous NP-complete problems


## Common Data Structure Operations

|     |     |     |
| --- | --- | --- |
| Data Structure 8+ | Time Complexity | Space Complexity |
| 4+ | Average 4+ | Worst |
| Worst |  | Access |
| Search | Insert | Delete |
| Access | Search | Insert |
| Delete | - | Array |
| Θ(1) | Θ(n) | Θ(n) |
| Θ(n) | O(1) | O(n) |
| O(n) | O(n) | O(n) |
| Stack | Θ(n) | Θ(n) |
| Θ(1) | Θ(1) | O(n) |
| O(n) | O(1) | O(1) |
| O(n) | Queue | Θ(n) |
| Θ(n) | Θ(1) | Θ(1) |
| O(n) | O(n) | O(1) |
| O(1) | O(n) | Singly-Linked List |
| Θ(n) | Θ(n) | Θ(1) |
| Θ(1) | O(n) | O(n) |
| O(1) | O(1) | O(n) |
| Doubly-Linked List | Θ(n) | Θ(n) |
| Θ(1) | Θ(1) | O(n) |
| O(n) | O(1) | O(1) |
| O(n) | Skip List | Θ(log n) |
| Θ(log n) | Θ(log n) | Θ(log n) |
| O(n) | O(n) | O(n) |
| O(n) | O(n log n) | Hash Table |
| N/A | Θ(1) | Θ(1) |
| Θ(1) | N/A | O(n) |
| O(n) | O(n) | O(n) |
| Binary Search Tree | Θ(log n) | Θ(log n) |
| Θ(log n) | Θ(log n) | O(n) |
| O(n) | O(n) | O(n) |
| O(n) | Cartesian Tree | N/A |
| Θ(log n) | Θ(log n) | Θ(log n) |
| N/A | O(n) | O(n) |
| O(n) | O(n) | B-Tree |
| Θ(log n) | Θ(log n) | Θ(log n) |
| Θ(log n) | O(log n) | O(log n) |
| O(log n) | O(log n) | O(n) |
| Red-Black Tree | Θ(log n) | Θ(log n) |
| Θ(log n) | Θ(log n) | O(log n) |
| O(log n) | O(log n) | O(log n) |
| O(n) | Splay Tree | N/A |
| Θ(log n) | Θ(log n) | Θ(log n) |
| N/A | O(log n) | O(log n) |
| O(log n) | O(n) | AVL Tree |
| Θ(log n) | Θ(log n) | Θ(log n) |
| Θ(log n) | O(log n) | O(log n) |
| O(log n) | O(log n) | O(n) |
| KD Tree | Θ(log n) | Θ(log n) |
| Θ(log n) | Θ(log n) | O(n) |
| O(n) | O(n) | O(n) |

## Array Sorting Algorithms
|     |     |     |
| --- | --- | --- |
| Algorithm 3+ | Time Complexity | Space Complexity |
|  | Best | Average |
| Worst | Worst | Quicksort |
| Ω(n log n) | Θ(n log n) | O(n²) |
| O(log n) | Mergesort | Ω(n log n) |
| Θ(n log n) | O(n log n) | O(n) |
| Timsort | Ω(n) | Θ(n log n) |
| O(n log n) | O(n) | Heapsort |
| Ω(n log n) | Θ(n log n) | O(n log n) |
| O(1) | Bubble Sort | Ω(n) |
| Θ(n²) | O(n²) | O(1) |
| Insertion Sort | Ω(n) | Θ(n²) |
| O(n²) | O(1) | Selection Sort |
| Ω(n²) | Θ(n²) | O(n²) |
| O(1) | Tree Sort | Ω(n log n) |
| Θ(n log n) | O(n²) | O(n) |
| Shell Sort | Ω(n log n) | Θ(n (log n)²) |
| O(n (log n)²) | O(1) | Bucket Sort |
| Ω(n + k) | Θ(n + k) | O(n²) |
| O(n) | Radix Sort | Ω(nk) |
| Θ(nk) | O(nk) | O(n + k) |
| Counting Sort | Ω(n + k) | Θ(n + k) |
| O(n + k) | O(k) | Cubesort |
| Ω(n) | Θ(n log n) | O(n log n) |

## Algorithms & Data Structures Reference Sheet

**Sorting algorithms, data structures, and their best/average/worst time complexity, space complexity, and scaling behavior**
### Sorting Algorithms

| Algorithm | Time Complexity (Best / Avg / Worst) | Space (Worst) | Runtime ×1 | Runtime ×2 | Runtime ×4 | Runtime ×8 | Runtime ×16 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Selection Sort | Ω(n²) / Θ(n²) / O(n²) | O(1) | 1 | 4 | 16 | 64 | 256 |
| Insertion Sort | Ω(n) / Θ(n²) / O(n²) | O(1) | 1 | 4 | 16 | 64 | 256 |
| Bubble Sort | Ω(n) / Θ(n²) / O(n²) | O(1) | 1 | 4 | 16 | 64 | 256 |
| Merge Sort | Ω(n log n) / Θ(n log n) / O(n log n) | O(n) | 1 | 2 | 8 | 24 | 64 |
| Quick Sort (avg) | Ω(n log n) / Θ(n log n) / O(n²) | O(log n) | 1 | 2 | 8 | 24 | 64 |
| Heap Sort | Ω(n log n) / Θ(n log n) / O(n log n) | O(1) | 1 | 2 | 8 | 24 | 64 |
| Timsort | Ω(n) / Θ(n log n) / O(n log n) | O(n) | 1 | 2 | 8 | 24 | 64 |
| Radix Sort | Ω(nk) / Θ(nk) / O(nk) | O(n + k) | 1 | 2 | 4 | 8 | 16 |
| Counting Sort | Ω(n + k) / Θ(n + k) / O(n + k) | O(k) | 1 | 2 | 4 | 8 | 16 |
| Cubesort | Ω(n) / Θ(n log n) / O(n log n) | O(n) | 1 | 2 | 8 | 24 | 64 |

### Data Structures

| Data Structure | Time Complexity (Avg / Worst) | Space Complexity | Notes |
| --- | --- | --- | --- |
| Array | Access Θ(1)/O(1), Search Θ(n)/O(n), Insertion Θ(n)/O(n), Deletion Θ(n)/O(n) | O(n) | Static, contiguous memory |
| Stack | Access Θ(n)/O(n), Search Θ(n)/O(n), Insertion Θ(1)/O(1), Deletion Θ(1)/O(1) | O(n) | LIFO, supports push/pop |
| Queue | Access Θ(n)/O(n), Search Θ(n)/O(n), Insertion Θ(1)/O(1), Deletion Θ(1)/O(1) | O(n) | FIFO, supports enqueue/dequeue |
| Singly Linked List | Access Θ(n)/O(n), Search Θ(n)/O(n), Insertion Θ(1)/O(1), Deletion Θ(1)/O(1) | O(n) | Dynamic memory, sequential traversal |
| Doubly Linked List | Access Θ(n)/O(n), Search Θ(n)/O(n), Insertion Θ(1)/O(1), Deletion Θ(1)/O(1) | O(n) | Two-way traversal, more memory |
| Skip List | Access Θ(log n)/O(n), Search Θ(log n)/O(n), Insertion Θ(log n)/O(n), Deletion Θ(log n)/O(n) | O(n log n) | Probabilistic balancing |
| Hash Table | Access N/A / Search Θ(1)/O(n), Insertion Θ(1)/O(n), Deletion Θ(1)/O(n) | O(n) | Fast lookup, collision resolution required |
| Binary Search Tree | Access Θ(log n)/O(n), Search Θ(log n)/O(n), Insertion Θ(log n)/O(n), Deletion Θ(log n)/O(n) | O(n) | Ordered, supports in-order traversal |
| AVL / Red-Black Tree | Access Θ(log n)/O(log n), Search Θ(log n)/O(log n), Insertion Θ(log n)/O(log n), Deletion Θ(log n)/O(log n) | O(n) | Self-balancing BSTs |
| B-Tree | Access Θ(log n)/O(log n), Search Θ(log n)/O(log n), Insertion Θ(log n)/O(log n), Deletion Θ(log n)/O(log n) | O(n) | Disk-optimized, multi-way tree |
| KD Tree | Access Θ(log n)/O(n), Search Θ(log n)/O(n), Insertion Θ(log n)/O(n), Deletion Θ(log n)/O(n) | O(n) | Multi-dimensional keys, spatial indexing |

## Scaling Insight (Relative Runtime)

| Complexity | Input ×1 | Input ×2 | Input ×4 | Input ×8 | Input ×16 |
| --- | --- | --- | --- | --- | --- |
| O(1) | 1 | 1 | 1 | 1 | 1 |
| O(log n) | 0 | 1 | 2 | 3 | 4 |
| O(n) | 1 | 2 | 4 | 8 | 16 |
| O(n log n) | 1 | 2 | 8 | 24 | 64 |
| O(n²) | 1 | 4 | 16 | 64 | 256 |
| O(n³) | 1 | 8 | 64 | 512 | 4096 |
| O(2^n) | 2 | 4 | 16 | 256 | 65536 |
