## Replace pattern

to replace all bullets with bold ****

^(\d+\.\s)([^**].+)\:
$1**$2**:

## Arrows
↑ ↓ → ← ↔
↖ ↗ ↘ ↙
⇒ ⇐ ⇔

## Tabs
<Tabs groupId="code">
<TabItem value="Clang" label="Clang">
```C
```
</TabItem>
<TabItem value="C++" label="C++">
```C++
```
</TabItem>
<TabItem value="Java" label="Java">
```Java
```
</TabItem>
<TabItem value="Python" label="Python">
```Python
```
</TabItem>
</Tabs>


<Tabs groupId="code">
<TabItem value="maven" label="Maven">
```maven
```
</TabItem>
<TabItem value="gradle" label="Gradle">
```groovy
```
</TabItem>
</Tabs>

<details>
<summary>summary</summary>

details

</details>

<QandA>
<Question>

Can I put an image in the question? 🖼️

</Question>
<Answer>

Yes, you absolutely can.

</Answer>
</QandA>

## algorithm Template
### Description
provide description of algorithm.
### Input/Output
Describes the expected format of input data to the algorithm and the resulting val‐
ues computed.
### Context
A description of a problem that illustrates when an algorithm is useful and when it
will perform at its best. A description of the properties of the problem/solution that
must be addressed and maintained for a successful implementation. They are the
things that would cause you to choose this algorithm specifically.

### Example Walkthrough
### Pseudocode 
Contains High-Level Algorithm
Introduce algorithm in pseudocode with a small example showing its execution.
<Tabs>

<TabItem value="Ps1" label="Pseudocode1" default>

```

```

</TabItem>

<TabItem value="Pseudocode2" label="Pseudocode2">

```

```

</TabItem>
</Tabs>

### Analogy
provide analogy with real world examples.
### Solution
The algorithm description using real working code with documentation. 

#### correctness
provide algorithm correctness, provide correctness proof, using formal loop invariant or any other methods to prove the correctness of the algorithm.
### Analysis
A synopsis of the analysis of the algorithm, including performance data and information to help you understand the behavior of the algorithm. 

provide time complexity, space complexity, and memory usage,External-Memory Analysis
provide references to actual texts that present the appropriate lemmas and proofs to explain
why the algorithms behave as described.
Provide algorithm Stability
#### Time Complexity 
#### Space Complexity
#### Stability
#### External-Memory Analysis

### Advantages and Disadvantages


### Comparison
provide Comparison with other related algorithms(show time complexity,space complexity,stability,performance ,Use caseetc).
add Comparison table if available.
### Variations
Presents variations of the algorithm or different alternatives.

### Performance
confirm the performance of each algorithm by executing with a series of benchmark problems appropriate for each individual algorithm.
To properly evaluate the
performance, a test suite is composed of a set of k individual trials (typically k ≥ 10).
The best and worst performers are discarded as outliers, the remaining k – 2 trials
are aggregated, and the average and standard deviations are computed.

provide Table with problem instances typically ranging in size from n = 2 to 2^20

### Debugging pitfalls

### Usage In Production
provide algorithm Usage in production. why its being used/not used in production
### Real World Implementations

## AI Code Generation
create a multi tab for Sort in Descending order using Heap sort in C,C++,Java,JS,Rust,
add code to test this method, 
always add empty line after <TabItem> tag
always use naming conventions for variables, functions, and classes for every language
add comment to code to explain the algorithm
show under every code explainations,notes

create a multi tab for the following problems in C,C++,Java,JS,Rust, which cover Bidirectional Traversal (Two-Pointer) algorithms when Both pointers move forward, but at different speeds(Same Direction (Fast & Slow Pointers)),add code to test this methods
- removing duplicates from Sorted Array
- partitioning(Partitioning (Move Elements Based on Condition) like Move all non-zero elements to the front.
always add empty line after <TabItem> tag
always use naming conventions for variables, functions, and classes for every language
