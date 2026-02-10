---
id: algorithms
title: Introduction
description: algorithms
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

How much time does it take to sort 26 shuffled cards? If
instead you had 52 cards, would it take twice as long?
How much longer would it take for a thousand decks of
cards? The answer is intrinsic to the method used to sort the cards.

A method is a list of unambiguous instructions for achieving a
goal. A method that always requires a finite series of operations
is called an algorithm. For instance, a card-sorting algorithm is a
method that will always specify some operations to sort a deck of
26 cards per suit and per rank.

An algorithm is a set of logical instructions to perform a particular task.

An algorithm can be seen as a roadmap or a set of instructions to accomplish a well-defined task.

The common examples of algorithms include traffic lights
regulating congestion on the streets, face recognition software on
smartphones, recommendation technologies, and so on.
It’s important for you to understand that an algorithm is just a small part
of an application used to solve a well-defined problem. Examples such
as sorting a list of numbers, finding the shortest route, or word prediction
are all correct. Big software applications, such as email clients or an
operating system are improper examples.

## Floating-Point Computation
Historically, mathematical computations over integer-based values—such as Booleans, 8-bit bytes, and 16- and 32-bit integers—have been among the most efficient operations performed by central processing units (CPUs). Early processor designs either lacked dedicated floating-point hardware or relied on slow coprocessors, resulting in a significant performance gap between integer and floating-point arithmetic. As a consequence, software systems were frequently optimized to minimize or entirely avoid floating-point calculations.

Modern CPU architectures, however, have substantially reduced this performance disparity. Contemporary processors include highly optimized floating-point units (FPUs), deep instruction pipelines, and vectorized execution units (e.g., SSE, AVX, NEON), enabling floating-point operations to achieve throughput comparable to—or in some cases exceeding—that of integer arithmetic. Consequently, performance considerations alone no longer justify avoiding floating-point arithmetic.

Instead, developers must focus on the semantic and numerical properties of floating-point computation. As extensively analyzed by Goldberg (1991), floating-point arithmetic introduces a set of correctness and reliability challenges that differ fundamentally from integer arithmetic.

Floating-point arithmetic is an essential and highly optimized feature of modern processors. However, its behavior deviates fundamentally from both integer arithmetic and real-number mathematics. Developers must therefore treat floating-point computation as a numerical model with defined limitations, rather than a transparent approximation of real arithmetic.

A deep understanding of these issues—finite representation, rounding, non-associativity, cancellation, comparison pitfalls, exceptional values, and precision limits—is critical for writing correct, portable, and robust software on modern systems.

* Algorithm correctness may depend on numerical stability, not complexity.
* Asymptotically optimal algorithms can still be numerically useless.
* Performance tuning that ignores FP behavior can introduce subtle bugs.

Modern developers must:

* Prioritize numerical correctness
* Understand IEEE-754 behavior
* Avoid unsafe assumptions inherited from older hardware

### Finite Representation of Real Numbers((Not All Numbers Are Representable)
Floating-point numbers represent real values using a finite number of bits divided into a sign, an exponent, and a significand (mantissa). This representation inherently limits the set of numbers that can be represented exactly.

Examples: Decimal fractions such as 0.1, 0.01, or 1/3 have no exact binary representation.The decimal value 0.1 is stored as a repeating binary fraction, resulting in approximation. Even simple arithmetic expressions may yield unexpected results:
```
0.1 + 0.2 ≠ 0.3
```
Implications:

* Floating-point values should be interpreted as approximations, not exact real numbers.
* Assumptions of exactness inherited from integer arithmetic are invalid.

### Rounding Errors and Error Accumulation(Rounding Errors Are Inevitable)
Each floating-point operation rounds its result to the nearest representable value. While individual rounding errors are typically small, repeated operations can accumulate significant numerical error.

Any computation using floating-point values may introduce rounding errors
because of the nature of the floating-point representation. In general, a floating-
point number is a finite representation designed to approximate a real number
whose representation may be infinite.

Examples: Iterative summation of small values:
```
sum = 0
repeat 1,000,000 times:
sum = sum + 0.000001
```
The final result may differ measurably from the mathematically expected value of 1.0.

Numerical integration and simulation loops often amplify rounding errors over time.

Implications:

* Long-running computations may drift from correct results(Small inaccuracies can grow into large numerical errors in long computations).
* Algorithm design must consider numerical stability, not just asymptotic complexity.

### Lack of Algebraic Associativity(Non-Associativity of Operations)
Floating-point arithmetic does not satisfy many algebraic properties that hold for real numbers, including associativity.

Formally:
(a + b) + c ≠ a + (b + c)

because Intermediate rounding differs based on operation order.

Examples: Adding a very small number to a very large number may produce no change:

(1e20 + 1) - 1e20 = 0

Reordering summations for optimization or parallelization can change results.

Implications:

* Compiler optimizations that reorder expressions may alter numerical results(change results).
* Parallel reductions (e.g., in multithreaded or SIMD code) can yield nondeterministic outcomes(numerically unstable).

### Cancellation and Loss of Significance(Cancellation Errors)
Cancellation occurs when subtracting two nearly equal floating-point numbers, causing significant digits to be lost.

Examples: Subtracting nearly equal numbers causes loss of significant digits. Subtraction of close values:
```
x = 1.0000001
y = 1.0000000
x - y = 0.0000001 (with reduced precision)
```
Quadratic equation formulations that subtract similar terms may produce unstable results.

Implications:

* Numerically equivalent formulas may differ dramatically in accuracy.
* Stable reformulations are often required in scientific and engineering code(Common in physics simulations, statistics, and numerical solvers).

### Equality Comparison and Logical Errors(Comparison Pitfalls)
Due to rounding and representation error, direct equality comparisons between floating-point values are unreliable.

Example: consider a practical example: three
points p0 = (a, b), p1 = (c, d), and p2 = (e, f) in the Cartesian plane define an ordered
pair of line segments (p0, p1) and (p1, p2). The value of the expression (c - a)*(f - b)
- (d - b)*(e - a) can determine whether these two line segments are collinear (i.e.,
on the same line). If the value is:

* 0 then the segments are collinear
* &lt; 0 then the segments are turning to the left (or counterclockwise)
* > 0 then the segments are turning to the right (or clockwise)

To show how floating-point errors can occur in Java computations, consider defin‐
ing three points using the values of a to f in table
|     |     |     |
| --- | --- | --- |
|  | 32-bit floating point (float) | 64-bit floating point (double) |
| a = 1/3 | 0.33333334 | 0.3333333333333333 |
| b = 5/3 | 1.6666666 | 1.6666666666666667 |
| c = 33 | 33.0 | 33.0 |
| d = 165 | 165.0 | 165.0 |
| e = 19 | 19.0 | 19.0 |
| f = 95 | 95.0 | 95.0 |
| (c - a)**(f - b - (d - b)**(e - a) | 4.8828125 E-4 | −4.547473508864641 E - 13 |
the three points p0, p1, and p2 are collinear on the line
y = 5*x. When computing the floating-point computation test for collinearity, how‐
ever, the errors inherent in floating-point arithmetic affect the result of the compu‐
tation. Using 32-bit floating-point values, the calculation results in 0.00048828125;
using 64-bit floating-point values, the computed value is actually a very small nega‐
tive number! This example shows that both 32-bit and 64-bit floating-point repre‐
sentations fail to capture the true mathematical value of the computation. And
in this case, the result is a disagreement over whether the points represent a clock‐
wise turn, a counterclockwise turn, or collinearity

Example: Exact equality comparisons are unsafe, Loop termination conditions:
```
while (x != 1.0) { ... }
if (a == b)   // often incorrect
```
may never terminate.

Conditional branching based on equality may behave inconsistently across platforms.

Correct approach: Use tolerance-based comparisons(Compare within a tolerance):
```
|a - b| < ε
```
Under this scheme, if
|a - b| &lt; ε, then we consider a and b to be equal

Still, by this simple measure, even
when a ≅ b and b ≅ c, it’s possibly not true that a ≅ c. This breaks the principle of
transitivity in mathematics and makes it really challenging to write correct code.
Additionally, this solution won’t solve the collinearity problem, which used the sign
of the value (0, positive, or negative) to make its decision.

Implications:

* Floating-point values should rarely be compared for exact equality.
* Logical correctness depends on robust comparison strategies.
* Logic errors, infinite loops, incorrect branching.

### Exceptional Values: Overflow, Underflow, and NaNs
IEEE 754 floating-point arithmetic defines special values, including positive and negative infinity and NaN (Not a Number) (and
are often not able to participate in the standard mathematical computations, such as
addition or multiplication).

These values have been designed to
make it easier to recover from common errors, such as divide by zero, square root
of a negative number, overflow of computations, and underflow of computations.

These special quantities can result from computations that go outside the acceptable
bounds. The expression 1/0.0 in Java computes to be the quantity positive infinity.
If the statement had instead read double x=1/0, then the Java virtual machine
would throw an ArithmeticException since this expression computes the integer
division of two numbers.

Examples:

Division by zero:

1.0 / 0.0 → +∞

Invalid operations:

0.0 / 0.0 → NaN

Gradual underflow produces denormalized numbers with reduced precision.

Implications:

* Programs may continue executing with invalid numerical states.
* Errors may silently propagate unless explicitly checked.

### Fixed Precision and Scale Sensitivity
Floating-point types have fixed precision regardless of magnitude.

Examples:

* Single precision (float) provides approximately 7 decimal digits.
* Double precision (double) provides approximately 15-16 decimal digits.

Adding a small value to a large value may have no effect:

1e16 + 1 = 1e16

Implications:

* Precision is relative to magnitude(Large values lose precision in lower bits.).
* Small increments may have no effect at all.
* Algorithms must be designed to avoid mixing vastly different scales.

### Reconsidering Performance Assumptions(Performance Assumptions Are Often Wrong)
The historical assumption that integer arithmetic is inherently faster than floating-point arithmetic is no longer universally valid.

Examples:

* Vectorized floating-point operations may outperform scalar integer loops(Faster in vectorized code).
* Integer-heavy code may suffer from branching ,Type conversions and memory access bottlenecks.
* Floating-point pipelines can sustain high throughput under predictable workloads(More efficiently pipelined).

Implications:

* "Use integers for speed" is often a myth on modern CPUs.
* Performance optimization must be guided by profiling, not folklore.
* Numerical correctness should take precedence over outdated performance heuristics.

## Complexities

### Time complexity
Less operations need less computing power. We like fast so-
lutions, so we monitor the number of operations in our algorithms.
Many algorithms require a fast-growing number of operations when
the input grows in size. For example, our card-sorting algorithm
could take few operations to sort 26 cards, but four times more
operations to sort 52 cards!
To avoid bad surprises when our problem size grows, we find
the algorithm’s time complexity.

Algorithmic complexity is a way to describe the efficiency of an algorithm as a relation of its input. It can be used to describe various properties of our code, such as runtime speed or memory requirements. It’s also a very important tool programmers should understand to write efficient software.

When calculating the space complexity, the memory consumed for the
input arguments should be ignored. Only memory allocated inside the
algorithms should be considered.

Time complexity is written T(n). It gives the number of oper-
ations the algorithm performs when processing an input of size n.
We also refer to an algorithm’s T(n) as its running cost. If our card-
sorting algorithm follows T(n) = n^2, we can predict how much
longer it takes to sort a deck once we double its size: $T(2n)/T(n) = 4$

We find the time complexity of an algorithm by counting the num-
ber of basic operations it requires for a hypothetical input of size n.

### space complexity
Even if we could perform operations infinitely fast, there would still
be a limit to our computing power. During execution, algorithms
need working storage to keep track of their ongoing calculations.
This consumes computer memory, which is not infinite.

The measure for the working storage an algorithm needs is
called space complexity. Space complexity analysis is similar to
time complexity analysis. The difference is that we count computer
memory, and not computing operations. We observe how space
complexity evolves when the algorithm’s input size grows, just as
we do for time complexity.

many other algorithms need working storage that
grows with input size. Sometimes, it’s impossible to meet an al-
gorithm’s memory requirements. You won’t find an appropriate
sorting algorithm with O(n log n) time complexity and O(1) space
complexity. Computer memory limitations sometimes force a trade-
off. With low memory, you’ll probably need an algorithm with slow
O(n2) time complexity because it has O(1) space complexity.

### Examples
**Selection Sort**

**Time complexity**

Selection Sort, a sorting algorithm that uses a nested loop. An outer for loop updates the current position being sorted, and an inner for loop selects the item that goes in the current position.

```
SelectionSort(A, n):
    for i ← 0 to n − 2 do
        minIndex ← i
        for j ← i + 1 to n − 1 do
            if A[j] < A[minIndex] then
                minIndex ← j
        swap A[i] and A[minIndex]
```
Let’s see what happens with a list of n items, assuming the worst
case.

1. The outer loop runs n − 1 times and does two operations
per run (one assignment and one swap) totaling 2n − 2 operations.
2. The inner loop first runs n − 1 times, then n − 2 times, n − 3 times,
and so on.

   $"# of inner loop runs" = (n − 1) + (n − 2) + .... + 2+1=sum_(i=)^(n-1) i=((n-1)(n))/2=(n^2-n)/2$
3. In the case, the if condition is always met.
   * This means the
   inner loop does one comparison and one assignment (n2 − n)/2
   times, hence n2 −n operations.
4. In total, the algorithm costs 2n−2
operations for the outer loop, plus n2 − n operations for the inner
loop. We thus get the time complexity:

   T(n) = n^2 + n − 2

|     |     |     |
| --- | --- | --- |
| Expression | Executes | Notes |
| for i ← 0 to n − 2 | n − 1 |  |
| minIndex ← i | **n − 1** | Executes once per outer loop |
| for j ← i + 1 to n − 1 | n(n − 1)/2 |  |
| if A[j] &lt; A[minIndex] | **n(n − 1)/2** | Executes every inner loop iteration |
| minIndex ← j | **n(n − 1)/2** | Executes only when condition is true,assignment is O(1) |
| swap A[i] and A[minIndex] | **n − 1** | Executes once per outer loop,Each swap is O(1) |
| Total | **n2 + n − 2** |  |
Now what? If our list size was n = 8 and we double it, the sorting
time will be multiplied by:

$T(16)/T(8) = (162 + 16 − 2)/(82 + 8 − 2) ≈ 3.86$

If we double it again we will multiply time by 3.90. Double it over
and over and find 3.94, 3.97, 3.98. Notice how this gets closer and
closer to 4? This means it would take four times as long to sort two
million items than to sort one million items.

**space complexity**

Selection Sort just needs working stor-
age for a fixed set of variables. The number of variables does not
depend on the input size. Therefore, we say Selection Sort’s space
complexity is O(1): no matter what the input size, it requires the
same amount of computer memory for working storage.

Variables Used
|     |     |     |
| --- | --- | --- |
| Variable	 | Purpose	 | Memory |
| i	 | Outer loop index	 | O(1) |
| j	 | Inner loop index	 | O(1) |
| minIndex	 | Index of smallest element	 | O(1) |
| temp	 | Used during swap	 | O(1) |
All extra memory is constant.

Input Space

* Array A of size n
* This is input, not counted as extra space

Auxiliary (Extra) Space

* No additional arrays
* No recursion
* No dynamic memory allocation

✔ Only a constant number of variables

Worst-Case Space Complexity: O(1)

Best / Average / Worst Space: All cases: O(1)

Because Selection Sort:

* Is in-place
* Uses no recursion
* Uses no extra data structures

Selection Sort trades:

* ❌ Poor time complexity → Θ(n²)
* ✅ Excellent space efficiency → O(1)

This makes it useful when:

* Memory is extremely limited
* Dataset is small
* Swaps are expensive but comparisons are cheap

Comparison with Other Sorts
|     |     |     |
| --- | --- | --- |
| Algorithm	 | Time (Worst)	 | Space |
| Selection Sort	 | O(n²)	 | O(1) |
| Insertion Sort	 | O(n²)	 | O(1) |
| Merge Sort	 | O(n log n)	 | O(n) |
| Quick Sort	 | O(n²)	 | O(log n) |

## Big O Notation
here’s a special notation to refer to classes of growth: the Big-O
notation. A function with a fastest-growing term of 2n or weaker is
O(2n); one with a quadratic or weaker growth is O(n2); growing
linearly or less, O(n), and so on. The notation is used for expressing
the dominant term of algorithms’ cost functions in the case—
that’s the standard way of expressing time complexity.

There are two simple rules to follow when we want to express an algorithm using the big O notation.

1. drop any constants

   * n + 4 becomes n
   * 5 becomes 1 \-> O(1), also known as constant time complexity.
2. drop everything except the highest order
   * n + n2 + n3 becomes n3 \-> O(n3)

|     |     |     |     |
| --- | --- | --- | --- |
| Expression | First Rule | Second Rule | big O notation |
| 3mn | 3mn | mn | O(mn) |
| 5n + 44n2+ 4 | 5n + 44n2 | n2 | O(n2) |
| 4 + 5 log n | 5 log n | log n | O(log n) |
| $3{caret}n + 5n2 + 8$ | $3{caret}n + 5n2$ | $3{caret}n$ | O($3{caret}n$) |

### Why Big-O is necessary but insufficient
Why Big-O is necessary, Big-O tells you:

* How an algorithm scales as input grows
* What happens in the long run

Without Big-O, you might pick an algorithm that looks fast at small sizes but becomes unusable later.

Example

* Algorithm A: O(n²)
* Algorithm B: O(n log n)

For very large n, B will always win, regardless of constants. so Big-O protects you from disaster at scale.

Why Big-O is insufficient, Big-O hides important details:

* Constant factors
* Cache behavior
* Input order
* Probability of cases
* Memory usage

Example

* Insertion Sort → O(n²)
* Quick Sort → O(n log n)
* For:
  * n = 20
  * nearly sorted data

Insertion Sort is faster, despite "worse" Big-O. Big-O tells you what can happen, not what usually happens.

Big-O tells you what could happen in the case;
real systems care about what usually happens and adjust accordingly

Big-O describes growth limits, not real performance.

Real performance = Big-O + data distribution + constants + hardware effects

## Mathematics of Algorithms
One of the most important factors for choosing an algorithm is the speed with
which it is likely to complete. Characterizing the expected computation time of an
algorithm is inherently a mathematical process.

### Size of a Problem Instance
An instance of a problem is a particular input data set given to a program.

In most
problems, the execution time of a program increases with the size of this data set. At
the same time, Very compact or compressed representations (possibly using compression techni‐
ques) may slow execution of a program due to extra processing.

It is
difficult to define the optimal way to encode an instance because problems occur in
the real world and must be translated into an appropriate representation to be
solved by a program.

When evaluating an algorithm, we want to assume the encoding
of the problem instance is not the determining factor in whether the algorithm can
be implemented efficiently(Algorithm analysis should minimize dependence on input encoding details.).

Your representation of a problem instance should
depend just on the type and variety of operations that need to be performed(Performance comparisons should focus on the algorithm’s logic, not on clever or awkward representations.).

Designing efficient algorithms often starts by selecting the proper data structures in
which to represent the problem.

Choose representations based on:

* The types of operations required (e.g., search, insert, traverse)
* The variety and frequency of those operations

### Rate of Growth of Functions
Say the input size of an algorithm is very large, and we increase it
even more. To predict how the execution time will grow, we don’t
need to know all terms of T(n). We can approximate T(n) by its
fastest-growing term, called the dominant term.

We describe the behavior of an algorithm by representing the rate of growth of its
execution time as a function of the size of the input problem instance.

The rate of growth describes how an algorithm’s Running time, or Resource usage increases as the input size grows. It is usually expressed using asymptotic notation (e.g., O(n), O(n log n), O(n²)).

With O(n2)
algorithms, 10× the input size resulted in 100× the running cost.
Using a O(n log n) algorithm, 10× the input size results in only
10 log 10 ≈ 34× the running cost.

When n is a million, n2 is a trillion, whereas n log n is just a few
million. Years running a quadratic algorithm on a large input could
be equivalent to minutes if a O(n log n) algorithm was used. That’s
why you need time complexity analysis when you design systems
that handle very large inputs.

When using the abstraction of the rate of growth to choose between algorithms,
remember that:

* **Constants matter**: That’s why we use supercomputers and upgrade our computers on a regular
basis.
* **Size of n is not always large**: for example the rate of growth of the execution time of Quick‐
sort is less than the rate of growth of the execution time of Insertion Sort. Yet
Insertion Sort outperforms Quicksort for small arrays on the same platform

An algorithm’s rate of growth determines how it will perform on increasingly larger
problem instances.

For small inputs, different algorithms may perform similarly. For large inputs Algorithms with slower growth rates scale better. Algorithms with faster growth rates become impractical, even if they are fast for small inputs.

Performance comparisons should focus on How fast costs grow, not exact running times. Long-term scalability, not short-term speed.

Imagine sorting 10 items takes 1 second. Sorting 20 items might take 2 seconds for a fast algorithm, but 4 seconds for a slower one.

Some algorithms grow slowly (good), like O(n log n). Some grow fast (bad), like O(n²).

different algorithms can differ dramatically in the number of operations they require, even for the same problem.

Suppose we want to sort n items.

Different algorithms solve the same task, but the number of operations they perform grows at very different rates as n increases.

different algorithms solving the same problem can require vastly different numbers of operations.
These differences are captured by their time complexity, and the gap grows rapidly as the input size increases.

An inefficient algorithm wastes work faster than hardware can compensate.
|     |     |
| --- | --- |
| Algorithm	 | Approx. operations |
| Selection Sort	 | ~ n² / 2 |
| Insertion Sort	 | ~ n² / 2 (average) |
| Merge Sort	 | ~ n log₂ n |
| Quick Sort (avg)	 | ~ n log₂ n |
| Heap Sort	 | ~ n log₂ n |
Let’s take n = 1,000,000 (one million items).

Quadratic algorithm (Θ(n²)): n² = (10⁶)² = 10¹² operations

Even at 1 billion ops/second: 10¹² / 10⁹ = 1,000 seconds ≈ 16.7 minutes

nlogn algorithm (Θ(n log n)): n log₂ n ≈ 10⁶ × 20 = 20,000,000 operations

At the same speed: 0.02 seconds

Why the difference grows so fast?The key is the growth rate, not constants.
|     |     |
| --- | --- |
| Growth type	 | Meaning |
| Θ(1)	 | Constant time |
| Θ(log n)	 | Very slow growth |
| Θ(n)	 | Linear |
| Θ(n log n)	 | Efficient for large data |
| Θ(n²)	 | Becomes unusable fast |
| Θ(2ⁿ)	 | Explodes immediately |
As n increases:

* n² grows much faster than n log n
* No hardware upgrade can fix a bad growth rate

Why algorithm choice matters more than hardware

* Faster CPU: Gives you maybe 10× or 100× improvement
* Better algorithm: Gives you 10,000× to 1,000,000× improvement

This is why: Algorithm choice dominates performance

#### Asymptotic Growth of Algorithmic Time Complexity(Scalability of Algorithms as Input Size Increases)
Whether an algorithm continues to perform a reasonable number of operations as the input size grows depends entirely on its time complexity, i.e., how the number of operations scales with input size n.

An algorithm performs a reasonable number of operations for large input sizes only if its time complexity grows slowly (O(1), O(log n), O(n), or O(n log n)).
Algorithms with quadratic, cubic, or exponential growth quickly become impractical as n increases.

An algorithm is said to be scalable if T(n) grows slowly enough that the runtime remains practical as n increases.

"Reasonable" depends on hardware limits and acceptable runtime.
|     |     |     |
| --- | --- | --- |
| Time Complexity | Behavior as n grows | Practicality for large n |
| O(1) | Constant | Always practical |
| O(log n) | Very slow growth | Very practical |
| O(n) | Linear growth | Practical up to large n |
| O(n log n) | Slightly more than linear | Practical for moderately large n |
| O(n²) | Quadratic growth | Quickly becomes impractical as n grows |
| O(n³) | Cubic growth | Very quickly impractical |
| O(2^n), O(n!) | Exponential / factorial | Feasible only for very small n |
Examples

1. Example 1: Linear Search (O(n))
   * For 1 million items: ~1 million checks → feasible with modern CPUs.
   * For 1 billion items: ~1 billion checks → still feasible with distributed systems, but slower.
2. Example 2: Selection Sort (O(n²))
   * For 1,000 items: 1,000² = 1,000,000 operations → reasonable
   * For 1,000,000 items: 1,000,000² = 10¹² operations → unreasonably slow (~hours even on fast hardware)
3. Example 3: Merge Sort (O(n log n))
   * For 1 million items: n log₂ n ≈ 20 million operations → very fast
   * For 1 billion items: ~30 billion operations → feasible on modern servers

**Practical . Rule of Thumb**

* O(1), O(log n), O(n) → scales well even to millions or billions of inputs
* O(n log n) → usually practical for millions of inputs
* O(n²) or worse → practical only for small inputs (hundreds or thousands)
* Exponential (O(2^n), O(n!)) → practical only for tiny inputs (n &lt; 50 in many cases)

#### Effect of Scaling Input Size on Algorithmic Running Time
The scaling of runtime is dominated by the algorithm’s asymptotic growth rate rather than the absolute input size. Linear or log-linear algorithms remain manageable under moderate scaling, whereas quadratic, cubic, or exponential algorithms become prohibitively expensive. Consequently, algorithmic efficiency is typically more significant than hardware improvements.

Let an algorithm have an input of size n, with running time T(n). Suppose the input size is multiplied by a constant factor k>1, resulting in a new input size k⋅n. The impact on running time depends fundamentally on the algorithm’s asymptotic growth rate or time complexity.

1. Constant-Time Algorithms (
O(1)
O(1))
T(n)=c  ⟹  T(k⋅n)=c
T(n)=c⟹T(k⋅n)=c

Running time remains unchanged, independent of input size.

Example: Accessing an element in an array.

1. Linear-Time Algorithms (
O(n)
O(n))
T(n)=c⋅n  ⟹  T(k⋅n)=c⋅(k⋅n)=k⋅T(n)
T(n)=c⋅n⟹T(k⋅n)=c⋅(k⋅n)=k⋅T(n)

Running time scales linearly with input.

Doubling the input approximately doubles the runtime.

1. Quadratic-Time Algorithms (
O(n2)
O(n
2
))
T(n)=c⋅n2  ⟹  T(k⋅n)=c⋅(k⋅n)2=k2⋅T(n)
T(n)=c⋅n
2
⟹T(k⋅n)=c⋅(k⋅n)
2
=k
2
⋅T(n)

Running time increases quadratically with the input factor.

Doubling the input size results in approximately four times the runtime.

1. Cubic-Time Algorithms (
O(n3)
O(n
3
))
T(n)=c⋅n3  ⟹  T(k⋅n)=c⋅(k⋅n)3=k3⋅T(n)
T(n)=c⋅n
3
⟹T(k⋅n)=c⋅(k⋅n)
3
=k
3
⋅T(n)

Running time grows cubically with input scaling.

1. Log-Linear-Time Algorithms (
O(nlog_n)
O(nlogn))
T(n)=c⋅nlog_n  ⟹  T(k⋅n)=c⋅kn⋅log_(kn)=k⋅T(n)+c⋅kn⋅log_k
T(n)=c⋅nlogn⟹T(k⋅n)=c⋅kn⋅log(kn)=k⋅T(n)+c⋅kn⋅logk

Running time increases slightly faster than linearly with input scaling.

Example: Merge Sort or average-case Quick Sort.

1. Exponential-Time Algorithms (
O(2n)
O(2
n
))
T(n)=2n  ⟹  T(k⋅n)=2k⋅n=(2n)k=T(n)k
T(n)=2
n
⟹T(k⋅n)=2
k⋅n
=(2
n
)
k
=T(n)
k

Running time increases exponentially with input size.

Even small increases in input size result in dramatic runtime growth.
|     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- |
| Complexity	 | T(n) | T(k⋅n) | Doubling Input (k = 2)	 | Growth Behavior | Notes | Example |
| O(1)	 | c | c | ×1	 | Constant(×1 (no change)) | Running time remains unchanged, independent of input size | Accessing an element in an array. |
| O(log n)	 | c⋅logn |  | ~ ×1.3              	 | Very slow |  |  |
| O(n)	 | c⋅n | c⋅(k⋅n)=k⋅T(n) | ×2                  	 | Linear | Running time scales linearly with input |  |
| O(n log n)	 | c⋅nlogn | k⋅T(n)+c⋅kn⋅logk | ~ ×2.3             	 | Log-linear | Running time increases slightly faster than linearly with input scaling | Merge Sort or average-case Quick Sort. |
| O(n²)	 | c⋅n2 | k^2⋅T(n) | ×4                 	 | Quadratic | Running time increases quadratically with the input factor. |  |
| O(n³)	 | c⋅n3 | k3⋅T(n) | ×8	 | Cubic | Running time grows cubically with input scaling. |  |
| O(2^n)	 | 2^n | T(n)^k | ×2^n	 | Exponential | Running time increases exponentially with input size. |  |

Multiplying the input by a constant increases the running time depending on the growth rate.

* Linear → proportional increase
* Quadratic → squared increase
* Cubic → cubed increase
* Exponential → grows exponentially

Hardware improvements cannot compensate for poor algorithmic growth, especially quadratic or worse.

**relative runtime for different algorithm complexities as we scale the input size by factors 1, 2, 4, 8, and 16**
| Complexity | Input ×1 | Input ×2 | Input ×4 | Input ×8 | Input ×16 |
| --- | --- | --- | --- | --- | --- |
| O(1) | 1 | 1 | 1 | 1 | 1 |
| O(log n)  (base 2) | log₂1=0 | log₂2=1 | log₂4=2 | log₂8=3 | log₂16=4 |
| O(n) | 1 | 2 | 4 | 8 | 16 |
| O(n log n)  (log₂ n) | 1*log₂1=0 | 2*log₂2=2 | 4*log₂4=8 | 8*log₂8=24 | 16*log₂16=64 |
| O(n²) | 1 | 4 | 16 | 64 | 256 |
| O(n³) | 1 | 8 | 64 | 512 | 4096 |
| O(2^n) | 2^1=2 | 2^2=4 | 2^4=16 | 2^8=256 | 2^16=65536 |
* O(1) and O(log n) grow very slowly
* O(n log n) grows moderately, still feasible for large inputs
* O(n²) and O(n³) explode quickly
* O(2^n) becomes infeasible even for moderate inputs
|     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Algorithm | Time Complexity (Best / Avg / Worst) | Space (Worst) | Runtime ×1 | Runtime ×2 | Runtime ×4 | Runtime ×8 | Runtime ×16 |
| Selection Sort | Ω(n²) / Θ(n²) / O(n²) | O(1) | 1 | 4 | 16 | 64 | 256 |
| Insertion Sort | Ω(n) / Θ(n²) / O(n²) | O(1) | 1 | 4 | 16 | 64 | 256 |
| Bubble Sort | Ω(n) / Θ(n²) / O(n²) | O(1) | 1 | 4 | 16 | 64 | 256 |
| Merge Sort | Ω(n log n) / Θ(n log n) / O(n log n) | O(n) | 1 | 2 | 8 | 24 | 64 |
| Quick Sort (average) | Ω(n log n) / Θ(n log n) / O(n²) | O(log n) | 1 | 2 | 8 | 24 | 64 |
| Heap Sort | Ω(n log n) / Θ(n log n) / O(n log n) | O(1) | 1 | 2 | 8 | 24 | 64 |
| Timsort | Ω(n) / Θ(n log n) / O(n log n) | O(n) | 1 | 2 | 8 | 24 | 64 |
| Radix Sort | Ω(nk) / Θ(nk) / O(nk) | O(n + k) | 1 | 2 | 4 | 8 | 16 |
| Counting Sort | Ω(n + k) / Θ(n + k) / O(n + k) | O(k) | 1 | 2 | 4 | 8 | 16 |
| Cubesort | Ω(n) / Θ(n log n) / O(n log n) | O(n) | 1 | 2 | 8 | 24 | 64 |
* Relative runtime numbers are based on scaling the input by 1×, 2×, 4×, 8×, 16×, assuming arbitrary units.
* n log n values are calculated with base 2 logarithm (e.g., Merge Sort: 1, 2, 8, 24, 64).
* Quadratic algorithms (Selection, Bubble, Insertion) explode quickly as input grows.
* Linear / n log n algorithms grow moderately.
* Space complexity is included for quick reference; in-place sorts (Selection, Insertion, Bubble, Heap) are O(1).

#### Examples
**Example1**:Yesterday, you knocked over one box of
index cards. It took you two hours of Selection Sort to fix
it. Today, you spilled ten boxes. How much time will you
need to arrange the cards back in?

Selection Sort follows T(n) = n2 + n − 2. The fastest growing term is n2, therefore we can write T(n) ≈ n2.

For a Θ(n²) algorithm: If the input size increases by a factor of k,the running time increases by a factor of k²

Assuming there are n cards per box, we find:

$(T(10n))/(T(n)) ≈ (10n)^2/(n^2) = 100$

It will take you approximately 100 × (2 hours) = 200 hours!

What if we had used a different sorting method? For example, there’s
one called "Bubble Sort" whose time complexity is T(n) = 0.5n2\
0.5n. The fastest-growing term then gives T(n) ≈ 0.5n2, hence:

$(T(10n))/(T(n)) ≈ ( 0.5 × (10n)^2)/(0.5 × n^2) = 100$

The 0.5 coefficient cancels itself out! The idea that n2 − n − 2
and 0.5n2 + 0.5n both grow like n2 isn’t easy to get.

Using Merge Sort(Θ(n log n)) =10 × log₂(10) ≈ 10 × 3.3 ≈ 33

It will take you approximately 33 × (2 hours) = 66 hours!

### Analysis in the Best, Average, and Cases
Isn’t it faster to sort a pile of cards that’s almost sorted already?
Input size isn’t the only characteristic that impacts the number of
operations required by an algorithm. When an algorithm can have
different values of T(n) for the same value of n, we resort to cases:

* **case**

  Defines a class of problem instances for which an algorithm exhibits its worst
  runtime behavior. Instead of trying to identify the specific input, algorithm
  designers typically describe properties of the input that prevent an algorithm
  from running efficiently.
* **Average case**

  Defines the expected behavior when executing the algorithm on random prob‐
  lem instances. While some instances will require greater time to complete
  because of some special cases, the vast majority will not. This measure
  describes the expectation an average user of the algorithm should have
* **Best case**

  Defines a class of problem instances for which an algorithm exhibits its best
  runtime behavior. For these instances, the algorithm does the least work. In
  reality, the best case rarely occurs.

By knowing the performance of an algorithm under each of these cases, you can
judge whether an algorithm is appropriate to use in your specific situation.

no single optimal algorithm
exists. There is no one algorithm that is always the best for every situation. An algorithm can be: Very fast in some cases,Slow or wasteful in others ,So "best" depends on what kind of problem you actually have.

for example in Sorting algorithms:

* **Insertion Sort**
  * Very fast for small or almost sorted data
  * Very slow for large random data
* **Quick Sort**
  * Very fast on average
  * Can be very slow in rare bad cases
* **Merge Sort**
  * Predictable speed
  * Uses more memory

Choosing an algorithm depends on:

* **understanding the problem being solved**, Before picking an algorithm, you must understand:
  * What you are trying to do
  * What constraints matter (time, memory, simplicity, worst-case guarantees)
  * Example, If you need:
    * Fast response in a real-time system → predictable algorithm (Merge Sort)
    * Minimal memory usage → in-place algorithm (Quick Sort)
    * Very small inputs → simple algorithm (Insertion Sort)
    * Same task (sorting), different needs → different algorithm choice.
* **the underlying probability distribution of the instances likely to be treated**:This refers to what inputs usually look like, not worst-case fantasy inputs. In plain words: "What kind of data do you expect most of the time?"
  * Examples
    * Example 1: Sorted or almost sorted data
      * User keeps adding items to a list
      * Data is mostly already sorted
      * Best choice: Insertion Sort (almost linear time)
      * Bad choice: A complex algorithm with high overhead
    * Example 2: Random data
      * Strings, IDs, hashes, sensor values
      * Best choice: Quick Sort (average-case excellent)
      * Worst-case slowdowns are unlikely if the data is truly random.
    * Example 3: Adversarial or untrusted data
      * Data comes from users or the network
      * Attackers may try to trigger worst-case behavior
      * Best choice: Merge Sort or Heap Sort
      * Predictable worst-case performance
* **the behavior of the algorithms being considered**.You must understand how algorithms behave, not just their Big-O label.
  * Behavior includes:
    * Best / average / case
    * Memory usage
    * Cache friendliness
    * Sensitivity to input order
  * Example, Two algorithms both labeled O(n log n):
    * One may be:
      * Faster in practice
      * Worse in worst-case
    * Another may be:
      * Slower on average
      * More predictable
  * Big-O alone does not tell the full story.

so There is no universally best algorithm. The right choice depends on:

* What problem you are solving
* What the data usually looks like
* How each algorithm behaves in practice

Choosing an algorithm is like choosing a vehicle:

* Bicycle → best for short trips
* Car → best for daily driving
* Truck → best for heavy loads
* Sports car → fast but risky in bad conditions

There is no "best vehicle", only the right one for the situation

The following table provides Algorithms vs data distributions comparison table.

This table shows why data shape matters as much as Big-O.
|     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Algorithm | Big-O (Average) | Big-O (Worst) | Best For Data That Is | Performs Poorly When | Typical Real-World Use | Kernel / System Use | Database Use | Notes |
| Insertion Sort | O(n) | O(n^2) | Small, nearly sorted | Large, random inputs | Small buffers, incremental updates | Small kernel lists, local adjustments | Sorting tiny result sets | Extremely low overhead; adaptive |
| Quick Sort | O(n log n) | O(n^2) | Random inputs | Adversarial or ordered inputs | Fast general-purpose sorting | Avoided (unbounded case) | User-space analytics, utilities | Cache-friendly; pivot choice critical |
| Merge Sort | O(n log n) | O(n log n) | Any distribution | Tight memory constraints | Stable sorting, external data | list_sort() for linked lists | External sort, merge join | Stable; predictable runtime |
| Heap Sort | O(n log n) | O(n log n) | Unknown or adversarial | Cache-sensitive workloads | Predictable in-place sorting | sort() in lib/sort.c | Rarely used | Guaranteed bounds; poor locality |
| TimSort | O(n) | O(n log n) | Real-world, partially sorted | Crafted pathological patterns | Language standard libraries | Not used (complexity, memory) | Client-side sorting | Hybrid; detects sorted runs |
| Radix Sort | O(n * k) | O(n * k) | Fixed-length keys | Variable-length or large alphabets | High-throughput classification | Networking, packet handling | Index building, analytics | Non-comparison based |
| Binary Search | O(log n) | O(log n) | Sorted data | Unsorted collections | Fast lookup | Kernel tables, sysfs | B-tree traversal | Requires total order |
| Hash Table | O(1) | O(n) | Uniform key distribution | Many collisions | Key-based lookup | Slab caches, dentry cache | Hash joins, hash indexes | Depends on hash quality |
| Red-Black Tree | O(log n) | O(log n) | Ordered dynamic data | When order not required | Balanced search structure | Scheduler, VMAs, timers | Index internals | Self-balancing BST |
| B-Tree | O(log n) | O(log n) | Disk-backed sorted data | In-memory-only workloads | Storage-friendly indexing | Rare (disk-oriented) | Primary DB indexes | Optimized for block I/O |
| Sequential Scan | O(n) | O(n) | High selectivity queries | Low selectivity queries | Full traversal | Linear kernel scans | Full table scan | Often underestimated |
| Merge Join | O(n + m) | O(n + m) | Pre-sorted inputs | Unsorted join inputs | Ordered data processing | Not typical | Range queries, analytics | Exploits ordering |
| Hash Join | O(n + m) | O(n * m) | Uniform join keys | Severe hash collisions | Fast equi-joins | Not typical | OLAP / OLTP joins | Memory-sensitive |

### Worst Case
CASE: when the input requires the maximum num-
ber of operations for any input of that size. In many sorting
algorithms, that’s when the input was given in reverse order

For any particular value of n, the work done by an algorithm or program may vary
dramatically over all the instances of size n(For a fixed input size n, not all inputs are equally hard. Some inputs make an algorithm fast Some make it slow,so Same input size ≠ same running time). For a given program and a given value
n, the worst-case execution time is the maximum execution time, where the maxi‐
mum is taken over all instances of size n(The case is the slowest possible input of that size).

Worst-case execution time = the maximum time the algorithm could take on any input of size n(case = slowest possible input of size n).

For every possible input of size n, measure how long the algorithm takes. The case is the largest of those times.

**Why do different inputs of the same size behave differently?**

Even if two inputs have the same size n, their structure can be very different. Example: sorting n = 5 numbers

* [1, 2, 3, 4, 5] (already sorted)
* [5, 4, 3, 2, 1] (reverse sorted)

Some algorithms treat these cases very differently.

**Why do we care about worst-case behavior?**

We are interested in the worst-case behavior of an algorithm because

* it often is the easiest case to analyze.
  * case often has clear patterns
* Best and average cases may depend on probability assumptions
* case avoids guessing how "likely" inputs are
* Safety guarantee:
  * It also explains how slow the program could be in any situation. No matter what happens, the algorithm will never be slower than this
  * This is crucial for: Operating systems, Real-time systems, Databases, Security-critical code

**Formal definition**

if Sn is the set of instances si of size n, and t() is a function that meas‐
ures the work done by an algorithm on each instance, then work done by an algo‐
rithm on Sn in the case is the maximum of t(si) over all si ∈ Sn. Denoting this
worst-case performance on Sn by Twc(n).

So

* Sₙ → the set of all possible inputs of size n
* t(sᵢ) → how much work the algorithm does on one input sᵢ
* case T_wc(n) → the largest value of t(sᵢ) for all sᵢ ∈ Sₙ(T_wc(n) = maximum work over all inputs of size n).

**worst-case complexity**

the rate of growth of Twc(n) defines the worst-case complexity of the algorithm(how fast time grows as n grows,so Complexity depends on growth rate, not exact time). Examples:

* T_wc(n) = 10n² + 3n + 5 → O(n²)
* T_wc(n) = n log n → O(n log n)

|  | Example 1: Linear search | Example 2: Bubble sort |
| --- | --- | --- |
| **Problem**: | Find a value in an array of size | Bubble sort repeatedly swaps adjacent elements. |
| **Best case** | Value is at index 0 Time ≈ 1 step | Already sorted ≈ n comparisons |
| **case** | Value is at the last position, or not present Time ≈ n steps | Reverse sorted ≈ n² comparisons |
| **Worst-case complexity**: | O(n) | O(n²) |

**Why not just measure it experimentally?**

There are not enough resources to compute each individual instance si on which to
run the algorithm to determine empirically the one that leads to worst-case perfor‐
mance because

* Number of possible inputs grows exponentially
* For n = 100, the number of permutations is enormous
* Impossible to test all cases

Instead, an adversary crafts a worst-case problem instance given the
description of the algorithm("adversary" idea).

So, Instead of testing all inputs, we imagine an adversary(Adversary thinking helps identify worst-case inputs):

* The adversary knows the algorithm
* It deliberately constructs the possible input

This helps us reason: "If someone wanted to make this algorithm as slow as possible, what would they give it?" For Example: For quicksort with bad pivot choice → adversary gives already sorted input

**Step-by-Step Adversary Example**

We’ll use Quicksort (bad pivot choice) because it’s the classic adversary example.

Algorithm (simplified quicksort), Assume this version of quicksort: Always chooses the first element as the pivot
```
quicksort(A):
    pick A[0] as pivot
    partition remaining elements into:
        left  (≤ pivot)
        right (> pivot)
    recursively sort left and right
```
Step 1: What does the adversary know?

The adversary knows:

* How the algorithm works
* That the pivot is always the first element
* The adversary’s goal: Make quicksort as slow as possible

Step 2: What input should the adversary choose?

To hurt quicksort:

* The pivot should be the smallest or largest element
* That creates maximally unbalanced partitions

So the adversary chooses: Already sorted input: [1, 2, 3, 4, 5, 6, 7]

Step 3: Run the algorithm (n = 7)
|  | First call(n = 7) | Second call (size = 6) | Third call (size = 5) |
| --- | --- | --- | --- |
| Pivot = | 1 | 2 | 3 |
| Left = | [] | [] | [] |
| Right = | [2, 3, 4, 5, 6, 7] | [3, 4, 5, 6, 7] | [4, 5, 6, 7] |
| Work done ≈ | n comparisons | n-1 | n-2 |
Continues until size = 1

Total work: **n + (n-1) + (n-2) + ... + 1**

Step 4: Compute the total work

That sum equals:$Twc_(n)= stem:n(n+1)/2=O(n2)$

Step 5: Adversary conclusion

The adversary has forced the algorithm into its possible behavior.

Worst-case time complexity of this quicksort = O(n²)

Conclustion

Even though quicksort is usually fast, the adversary shows: "There exists an input of size n that makes it this slow."

### Key takeaways (in one place)

* Same input size ≠ same running time
* case = slowest possible input of size n
* T_wc(n) = maximum work over all inputs of size n
* Complexity depends on growth rate, not exact time
* case gives strong guarantees
* Adversary thinking helps identify worst-case inputs

### Average Case
AVERAGE CASE: refers to the average number of operations
required for typical inputs of that size. For sorting, an input
in random order is usually considered.

**Why case is sometimes unrealistic**

Consider a telephone system designed to support a large number n of telephones. In
the case, it must be able to complete all calls where n/2 people pick up their
phones and call the other n/2 people. Although this system will never crash because
of overload, it would be prohibitively expensive to construct. In reality, the proba‐
bility that each of n/2 people calls a unique member of the other n/2 people is
exceedingly small. Instead, we could design a system that is cheaper to build and use
mathematical tools to consider the probability of crash due to overload.

so this telephone example explains why case can be misleading. for worst-case telephone system

* n telephones
* case: n/2 people all call different n/2 people at the same time
* System must support n/2 simultaneous calls

This is possible, but extremely unlikely. If we design for this:

* The system becomes very expensive
* Most capacity is never used

so Instead of asking: "What is the absolute that could happen?". Average case asks: "What usually happens, considering how likely each situation is?" This matches real-world behavior much better.
|     |     |     |
| --- | --- | --- |
| Concept	 | Telephone system	 | Algorithm |
| case	 | Everyone calls simultaneously	 | Adversarial input |
| Probability	 | Very small	 | Rare input |
| Average case	 | Typical call patterns	 | Typical inputs |
| Design goal	 | Cheaper, reliable	 | Faster in practice |
**the average-case complexity of the algorithm**

For the set of instances of size n, we associate a probability distribution $Pr{si}$, which
assigns a probability between 0 and 1 to each instance si such that the sum of the
probabilities over all instances of size n is 1. More formally, if Sn is the set of instances of size n, then:

For inputs of size n:

* Let Sₙ = all possible inputs of size n
* Each input sᵢ has a probability $Pr{sᵢ}$
* Rules:
  * 0 ≤ $Pr{sᵢ}$ ≤ 1
  * All probabilities add up to 1, $∑si∈SnPr{si}=1$, This just means: "One of these inputs must occur."

If t() measures the work done by an algorithm on each instance(Each input:Takes some time → $t(sᵢ)$, Occurs with some probability → $Pr{sᵢ}$), then the average case work done by an algorithm on Sn is(Multiply how long an input takes by how likely it is, then add everything up.):

$$Tac(n) = ∑si ∈ Snt si Pr si$$

Denoting this average-case work on Sn by $Tac(n)$, then the rate of growth of $Tac(n)$ defines the average-case
complexity of the algorithm.

**Why unlikely cases don’t matter much**

the actual work done on instance si, $t(si)$, is weighted with the probability
that $si$ will actually be presented as input. If $Pr{si} = 0$, then the actual value of $t(si)$
does not impact the expected work done by the program.

So, If An input is very slow ,but $Pr{sᵢ} = 0$ (or extremely small),Then Its contribution to average time is zero (or negligible),So Rare worst-case inputs don’t dominate average performance.

#### Examples

### Best Case
BEST CASE: when the input requires the minimum number of
operations for any input of that size. In sorting, it happens
when the input is already sorted.

For a fixed input size n, Best-case execution time = the smallest amount of work the algorithm can possibly do on any input of size n. It answers: "If everything goes perfectly, how fast could this algorithm be?"

Knowing the best case for an algorithm is useful even though the situation rarely
occurs in practice:

* Insight: In many cases, Best case shows:
  * The optimal circumstances for an algorithm
  * Whether the algorithm can take advantage of good situations
* Algorithm design quality: If the best case is still slow, the algorithm is inherently inefficient, even when lucky.

Best case does not guarantee real-world speed. But it tells you what the algorithm is capable of. for Example: Binary search best case = O(1), Linear search best case = O(1), But their average and cases differ greatly.

For example, the best case for Sequential Search is when it
searches for a desired value, v, which ends up being the first element in the list.
Consider a slightly different approach, which we’ll call Counting Search, that
counts the number of times that v appears in a list. If the computed count is zero,
then the item was not found, so it returns false; otherwise, it returns true. Note
that Counting Search always searches through the entire list; therefore, even
though its worst-case behavior is O(n)—the same as Sequential Search—its best-
case behavior remains O(n), so it is unable to take advantage of either the best-case
or average-case situations in which it could have performed better.

#### Examples
**Example 1: Sequential (Linear) Search**

**Problem**: Search for a value v in a list of size n

**Best case for Sequential Search**

Input: [v, 12, 9, 20, 7]

* v is the first element
* Algorithm checks once and stops
* Work done: 1 comparison
* So: $Tbest(n)=O(1)$
* Sequential Search can exit early.

case (for comparison)

* v is last or not present
* Must check all n elements
* O(n)

**Example 2: Counting Search (important contrast)**

Counting Search idea:

* Go through the entire list
* Count how many times v appears
* Return true if count > 0

Key observation

Counting Search:

* Always scans the entire list
* Never exits early
* Even if: [v, 99, 3, 8, 1], It still: Checks every element Counts occurrences

Best case for Counting Search

* Still must inspect all n elements
* No shortcut possible
* So: Tbest(n)=O(n)

**Why this is a big deal**

* Both algorithms have: case: O(n)
* But:

  | Algorithm	 | Best Case	 | Can exploit good inputs?l |
  | --- | --- | --- |
  | Sequential Search	 | O(1)	 | Yes |
  | Counting Search	 | O(n)	 | No |
  Same case ≠ same quality algorithm

Counting Search: Best = Average = = O(n)

Sequential Search: Best = O(1), Average = O(n), = O(n)

**Sequential Search can take advantage of lucky situations, while Counting Search cannot.**

So A good algorithm should benefit from favorable situations. Counting Search:

* Is blind to best-case and average-case inputs
* Always behaves like the case

#### when best-case analysis is misleading

#### Key takeaways

* Average case considers how likely inputs are
* Uses a probability distribution over inputs
* Computes expected running time
* Rare cases don’t dominate the average
* Final complexity still focuses on growth rate
* Example: Sequential search → average O(n)

### Lower and Upper Bounds
These are mathematical notations used to describe how the running time of an algorithm grows as the input size n increases. where f(n) is most commonly a function such as n, n3, or 2n.

1. **O(f(n))** → Upper bound
   * Describes the worst-case scenario.
   * "The algorithm will take no more than roughly f(n) steps for large n."
2. **Ω(f(n))** → Lower bound
   * Describes the best-case scenario.
   * "The algorithm will take at least roughly f(n) steps for large n."
3. **Θ(f(n))** → Tight bound
   * Both the lower and upper bounds are proportional to f(n).
   * "The algorithm’s running time grows roughly like f(n), both in the best and cases."

**Formal Definition**

Suppose an algorithm’s running time is t(n) for input size n:

1. **O(f(n))**: There exists a constant c>0 and n0 threshold problem size,such that t(n)≤c⋅f(n) for all n>n0 → Worst-case guarantee.

   assume there is an algorithm whose worst-case performance is never
   greater than directly proportional to the size of the input problem instance, once the
   size is "large enough."
2. **Ω(f(n))**: There exists a different constant c>0 and a different threshold
problem size, n0 such that t(n)≥c⋅f(n) for all n>n0 → Best-case guarantee.

   Assume that its best-case perfor‐
   mance is never smaller than directly proportional to the size of the input problem
   instance
3. **Θ(f(n))**: The running time is sandwiched: c1⋅f(n)≤t(n)≤c2⋅f(n)  for large n. → Tight bound, precise growth rate.

**Why Both Upper and Lower Bounds Matter**

* Upper bounds (O) tell you how slow the algorithm could get → useful for planning resources.
* Lower bounds (Ω) tell you how fast it could go → useful to know if an algorithm can ever be really fast.
* Θ is used when the algorithm’s growth rate is consistent in both best and cases.

#### Examples
1. Linear Search (searching for a value in an array of n elements)
   * Best case: The value is the first element → checks 1 element → Ω(1)
   * case: The value is the last element or not present → checks all n elements → O(n)
   * Average case: About half the elements → Θ(n) approximately for analysis
2. Binary Search (on a sorted array)
   * Best case: The middle element is the target → Ω(1)
   * case: Target requires log₂(n) steps → O(log n)
   * Tight bound: Θ(log n) (since the number of steps is always proportional to log n)
3. Merge Sort
   * Best case: Already sorted array → O(n log n)
   * case: Random or reverse-sorted → O(n log n)
   * Tight bound: Θ(n log n) (always grows like n log n)

Analogy (Simple)

* Think of O(f(n)) as the maximum time your commute could take.
* Think of Ω(f(n)) as the minimum time your commute could take.
* Think of Θ(f(n)) as the typical time, always roughly the same.

##### Identifying the Best and Performance of an Algorithm While Checking for Duplicates in an Array
Assume that the inner loop results in eight operations every time it executes.
For the outer loop, assume four operations:

```java
public boolean containsDuplicates(int[] numbers) {
    for (int i=0; i<numbers.length; i++) {
        for (int j=0; j<numbers.length; j++) {
            if (i != j && numbers[i] == numbers[j]) return true;
        }
    }
    return false;
}
```

**Outer lopp operations**
| Operation name | Code | Count |
| --- | --- | --- |
| Reading array length and comparing to pointer | i&lt;numbers.length | 2 |
| Array pointer increment and assignment | $i{pp}(i = i + 1)$ | 2 |
| Total |  | 4 |
**Inner lopp operations**
| Operation name | Code | Count |
| --- | --- | --- |
| Reading array length and comparing to pointer | j&lt;numbers.length | 2 |
| Array pointer increment and assignment | $j{pp}(j = j + 1)$ | 2 |
| int equality | i != | 1 |
| Array access and equality | numbers[i] == numbers[j]) | 3 |
| Total |  | 8 |

To do this, we should perform the following steps:

1. In the worst- case, we execute the inner loop n times (array length).
2. In the best case, we only execute the inner loop only twice.
3. The best case is when the duplicate numbers are in the front of the input array.
The is when the array doesn’t contain any duplicates.
4. The case is when the array doesn’t contain duplicates and is of size n:
   * For the outer loop, we have 4*n operations
   * For the inner loop, we have n__(n__8) operations
   * In total, we have 4n + 8n2 operations
5. In the best case, the duplicates are the first two items in the array:
   * For the outer loop, we have 4 operations
   * For the inner loop, we have 2*8 operations as the inner loop executes twice to get to the second item in the array where the duplicate is located
   * In total, we have 20 operations

### Comparison of Worst-Case, Average-Case, and Best-Case Behavior Across Common Algorithms

#### Searching Algorithms

##### Linear (Sequential) Search

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(1) | Target element is the first item in the list |
| Average | O(n) | Target is equally likely to be anywhere |
|  | O(n) | Target is last or not present |

Insight: Best case is rare; average and cases dominate real performance.

##### Binary Search (Sorted Array)

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(1) | Middle element matches target |
| Average | O(log n) | Search space halves each step |
|  | O(log n) | Target not present |

Insight: Best case is trivial; logarithmic growth defines efficiency.

#### Sorting Algorithms

##### Bubble Sort

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(n) | Already sorted with early-exit optimization |
| Average | O(n^2) | Random input order |
|  | O(n^2) | Reverse sorted input |

Insight: Quadratic behavior dominates despite linear best case.

##### Insertion Sort

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(n) | Input already sorted |
| Average | O(n^2) | Random order |
|  | O(n^2) | Reverse sorted input |

Insight: Performs well on nearly sorted data.

##### Merge Sort

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | Θ(n log n) | Always divides evenly |
| Average | Θ(n log n) | Input order irrelevant |
|  | Θ(n log n) | Guaranteed bound |

Insight: Predictable performance in all cases.

##### Quicksort (Random Pivot)

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | Θ(n log n) | Perfectly balanced partitions |
| Average | Θ(n log n) | Randomized splits |
|  | Θ(n^2) | Extremely unbalanced partitions |

Insight: Excellent average performance; case exists without safeguards.

#### Data Structures

##### Hash Table (Good Hash Function)

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(1) | Direct access, no collisions |
| Average | O(1) | Few collisions |
|  | O(n) | All keys collide |

Insight: Average case is excellent; case must be considered in security contexts.

##### Binary Search Tree (Unbalanced)

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(1) | Target at root |
| Average | O(log n) | Random insertions |
|  | O(n) | Tree degenerates into a list |

Insight: Structure heavily influences performance.

##### Balanced Binary Search Tree (AVL, Red-Black)

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(1) | Root access |
| Average | Θ(log n) | Height maintained |
|  | Θ(log n) | Guaranteed balance |

Insight: Worst-case guarantees outweigh fast best cases.

#### Graph Algorithms

##### Breadth-First Search (BFS)

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(1) | Start node is target |
| Average | O(V + E) | Typical traversal |
|  | O(V + E) | Entire graph explored |

Insight: Best case irrelevant; traversal cost dominates.

##### Dijkstra’s Algorithm (With Heap)

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(E log V) | No shortcuts possible |
| Average | O(E log V) | Typical behavior |
|  | O(E log V) | Same asymptotic bound |

Insight: Input structure does not change asymptotic cost.

#### Dynamic Programming

##### Fibonacci (Naive Recursive)

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(1) | n = 0 or 1 |
| Average | O(2^n) | Exponential recursion |
|  | O(2^n) | Same behavior |

Insight: Best case is meaningless for scalability.

##### Fibonacci (Dynamic Programming / Memoization)

|     |     |     |
| --- | --- | --- |
| Case | Time Complexity | Explanation |
| Best | O(n) | Table computed once |
| Average | O(n) | Same |
|  | O(n) | Same |

Insight: Dynamic programming removes variability.

#### Summary Insights

Best case shows what is possible, not what is likely

Average case models expected behavior

case provides guarantees

Algorithms are primarily judged by average and worst-case growth, not best case
== algorithm design is more important than hardware speed for scalable systems
If an algorithm is too slow for a given input size, optimizing the algorithm is usually far more effective than using more powerful hardware.

When an algorithm is fundamentally too slow, changing the algorithm is essential.
Hardware improvements and low-level optimizations help only after a suitable algorithm has been chosen.

* Algorithmic complexity dominates performance
  * If an algorithm has poor asymptotic complexity (e.g., O(n^2), O(2n)), its running time grows too fast as input size increases.
  * Hardware improvements only reduce constant factors, not the growth rate.
* Optimization has limited impact
  * Code-level optimizations (better data structures, cache-friendly code, compiler optimizations) can improve performance by a constant factor.
  * They cannot change an algorithm from O(n2) to O(nlog_n).
* Supercomputers help only in specific cases
  * Faster processors or more cores may help if:
    * The algorithm is parallelizable
    * The bottleneck is I/O or constant-factor overhead
  * Even then, exponential or high-degree polynomial algorithms quickly become infeasible.

Illustrative Example

* An O(n2) algorithm with n=10^7 performs about 10^14 operations.
* A machine that is 1000× faster only reduces runtime by a factor of 1000—not enough to make it practical.
* Replacing it with an O(nlog_n) algorithm reduces operations to roughly 2.3×10^8, a dramatic improvement.

### Examples
**Identifying the Best and Performance of an Algorithm While Checking for Duplicates in an Array**

Assume that the inner loop results in eight operations every time it executes.
For the outer loop, assume four operations:
```java
public boolean containsDuplicates(int[] numbers) {
    for (int i=0; i&lt;numbers.length; i++) {
        for (int j=0; j&lt;numbers.length; j++) {
            if (i != j && numbers[i] == numbers[j]) return true;
        }
    }
    return false;
}
```
***Outer lopp operations***
|     |     |     |
| --- | --- | --- |
| Operation name | Code | Count |
| Reading array length and comparing to pointer | i&lt;numbers.length | 2 |
| Array pointer increment and assignment | i++(i = i + 1) | 2 |
| Total |  | 4 |

***Inner lopp operations***
|     |     |     |
| --- | --- | --- |
| Operation name | Code | Count |
| Reading array length and comparing to pointer | j&lt;numbers.length | 2 |
| Array pointer increment and assignment | j++(j = j + 1) | 2 |
| int equality | i != | 1 |
| Array access and equality | numbers[i] == numbers[j]) | 3 |
| Total |  | 8 |

To do this, we should perform the following steps:
. In the worst- case, we execute the inner loop n times (array length).
. In the best case, we only execute the inner loop only twice.
. The best case is when the duplicate numbers are in the front of the input array.
The is when the array doesn’t contain any duplicates.
. The case is when the array doesn’t contain duplicates and is of size n:
** For the outer loop, we have 4*n operations
*** For the inner loop, we have n**(n*8) operations
** In total, we have 4n + 8n2 operations
. In the best case, the duplicates are the first two items in the array:
** For the outer loop, we have 4 operations
** For the inner loop, we have 2*8 operations as the inner loop executes twice to get to the second item in the array where the duplicate is located
** In total, we have 20 operations

**Example 1: Sequential (Linear) Search**

**Problem**: Search for a value in an array of size n.

**Assumptions**: Target is equally likely to be at any position, Or not present.

**Cost per position**
|     |     |
| --- | --- |
| Position	 | Probes |
| 1st	 | 1 |
| 2nd	 | 2 |
| ...	 | ... |
| nth	 | n |
| Not found	 | n |
**Average number of probes**

Under these assumptions:

Average probes=½n + ½

**Conculsion**
When analyzing growth rate, we:

* Ignore constants (1/2, +1/2)
* Focus on how it grows as n increases

So we say: Tac(n)=O(n)

Even though the exact average is ½n + ½, we just say linear time.

**Example 1: quicksort**

To make average-case analysis reasonable, we assume one of these equivalent models:

* Pivot is chosen uniformly at random, or
* Input is a random permutation, and pivot is first element

These two give the same average behavior. This avoids adversarial inputs and lets
probability matter.

**What "average case" means here**

For input size n:

* All n! permutations are equally likely
* We compute the expected number of operations
* We focus on: Comparisons (dominant cost)

**One partition step (local view)**

* Take an array of size n.
* Choose pivot
* Compare pivot to the other n − 1 elements
* Partition into:
  * Left subarray of size k(k is random and can be anything from 0 to n − 1.)
  * Right subarray of size n − k − 1

**Expected cost of the first step**

Regardless of how the array splits:

* Partition cost=n−1 comparisons

This part is deterministic.

**Expected recursive cost (key idea)**

Let: T(n)=expected comparisons for size n

After partitioning:

* Left side size = k
* Right side size = n - k - 1

So: T(n)=(n−1)+E[T(k)+T(n−k−1)]

**Where probability enters**

Each element is equally likely to be the pivot.

So: Each $k ∈ {0, 1, ..., n−1}$ occurs with probability 1/n

Thus:
$$
T(n)=(n−1)+(1/n)∑k=0n−1(T(k)+T(n−k−1))

    =(n−1)+(n/2)_k=0∑n−1_T(k)
$$
This is the average-case recurrence.

**Intuition before solving**

What does this mean?

* Each level of recursion processes all n elements once
* Expected depth of recursion ≈ log n
* So total work ≈ n × log n
* This already suggests: T(n)=Θ(nlog_n)

**Solving the recurrence (high level)**

With standard techniques (telescoping or induction):

T(n)=2(n+1)Hn−4n

Where: Hₙ = harmonic number ≈ ln n + γ

So: T(n)≈2nln_n

gnoring constants: T(n)∈Θ(nlog_n)

Average-case quicksort is Θ(n log n)

**Visual intuition (recursion tree)**
```
Level 0:        n
Level 1:     n/2   n/2
Level 2:   n/4 n/4 n/4 n/4
...
```
* Each level costs ≈ n
* Number of levels ≈ log n
* Total ≈ n log n

**Why case doesn’t dominate the average**

* case:
  * Highly unbalanced splits every time
  * Probability ≈ 2 / n! (vanishingly small)
* Average case:
  * Balanced-ish splits are far more likely
  * Rare bad cases don’t affect expectation much

**Comparison summary**
| Case	 | Complexity	 | Why |
| --- | --- | --- |
| Best	 | Θ(n log n)	 | Perfect splits |
| Average	 | Θ(n log n)	 | Random splits |
| Worst	 | Θ(n²)	 | Adversarial splits |

**Key takeaway**

* Average-case quicksort uses probability
* Expected split is reasonably balanced
* Total work spreads across log n levels
* Result: Θ(n log n)
