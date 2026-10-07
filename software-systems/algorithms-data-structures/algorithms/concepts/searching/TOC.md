# Detailed TOC — Searching Algorithms

This structure treats **Searching Algorithms** as a complete Data Structures & Algorithms topic, progressing from basic search techniques to advanced indexing, string searching, geometric searching, and external-memory search.

# Searching Algorithms

## 1. Introduction to Searching

### 1.1 What Is Searching?

### 1.2 Search Problem

### 1.3 Search Key

### 1.4 Search Target

### 1.5 Search Space

### 1.6 Successful Search

### 1.7 Unsuccessful Search

### 1.8 Exact-Match Searching

### 1.9 Range Searching

### 1.10 Approximate Searching

### 1.11 Static vs Dynamic Search

### 1.12 Internal vs External Searching

## 2. Search Problem Model

### 2.1 Input Representation

### 2.2 Search Key and Records

### 2.3 Key Comparisons

### 2.4 Equality Tests

### 2.5 Ordering Comparisons

### 2.6 Search Result

### 2.7 First Occurrence

### 2.8 Last Occurrence

### 2.9 All Occurrences

### 2.10 Insertion Position

### 2.11 Predecessor and Successor

### 2.12 Range of Matching Elements

## 3. Linear Search

### 3.1 Basic Linear Search

### 3.2 Linear Search on Arrays

### 3.3 Linear Search on Linked Lists

### 3.4 Iterative Linear Search

### 3.5 Recursive Linear Search

### 3.6 Searching Unsorted Data

### 3.7 Searching Sorted Data

### 3.8 Early Termination

### 3.9 Sentinel Linear Search

### 3.10 Linear Search for Multiple Matches

### 3.11 Finding the First Match

### 3.12 Finding the Last Match

### 3.13 Finding All Matches

### 3.14 Linear Search Complexity

### 3.15 Best, Average, and Worst Cases

### 3.16 Advantages and Limitations

## 4. Binary Search

### 4.1 Binary Search Concept

### 4.2 Requirements for Binary Search

### 4.3 Divide-and-Conquer Structure

### 4.4 Search Interval

### 4.5 Middle Element

### 4.6 Comparison with the Middle Element

### 4.7 Eliminating Half of the Search Space

### 4.8 Iterative Binary Search

### 4.9 Recursive Binary Search

### 4.10 Binary Search Invariants

### 4.11 Binary Search Termination

### 4.12 Binary Search Complexity

### 4.13 Best Case

### 4.14 Average Case

### 4.15 Worst Case

### 4.16 Space Complexity

### 4.17 Overflow-Safe Middle Calculation

### 4.18 Common Binary Search Bugs

## 5. Binary Search Variations

### 5.1 Finding the First Occurrence

### 5.2 Finding the Last Occurrence

### 5.3 Finding Any Occurrence

### 5.4 Finding the Lower Bound

### 5.5 Finding the Upper Bound

### 5.6 Finding the Insertion Position

### 5.7 Counting Occurrences

### 5.8 Finding the Range of a Key

### 5.9 Finding Predecessor

### 5.10 Finding Successor

### 5.11 Finding Floor

### 5.12 Finding Ceiling

### 5.13 Searching with Duplicates

### 5.14 Binary Search on Descending Data

### 5.15 Binary Search on a Rotated Array

### 5.16 Finding the Rotation Point

### 5.17 Searching Nearly Sorted Arrays

### 5.18 Searching Bitonic Arrays

### 5.19 Searching Infinite or Unbounded Arrays

## 6. Interpolation Search

### 6.1 Interpolation Search Concept

### 6.2 Motivation

### 6.3 Position Estimation

### 6.4 Interpolation Formula

### 6.5 Algorithm

### 6.6 Requirements

### 6.7 Uniformly Distributed Data

### 6.8 Best Case

### 6.9 Average Case

### 6.10 Worst Case

### 6.11 Comparison with Binary Search

### 6.12 Limitations

### 6.13 Applications

## 7. Jump Search

### 7.1 Jump Search Concept

### 7.2 Block-Based Searching

### 7.3 Choosing the Jump Size

### 7.4 Square-Root Decomposition

### 7.5 Search Procedure

### 7.6 Linear Search Within a Block

### 7.7 Complexity Analysis

### 7.8 Comparison with Binary Search

### 7.9 Advantages and Limitations

## 8. Exponential Search

### 8.1 Exponential Search Concept

### 8.2 Finding the Search Bound

### 8.3 Exponential Growth of the Search Range

### 8.4 Binary Search Within the Range

### 8.5 Searching Unbounded Arrays

### 8.6 Complexity Analysis

### 8.7 Comparison with Binary Search

### 8.8 Applications

## 9. Fibonacci Search

### 9.1 Fibonacci Search Concept

### 9.2 Fibonacci Numbers

### 9.3 Search Interval Division

### 9.4 Search Procedure

### 9.5 Complexity

### 9.6 Comparison with Binary Search

### 9.7 Historical Motivation

### 9.8 Practical Considerations

# 10. Searching in Special Arrays

## 10.1 Searching Sorted Arrays

### 10.1.1 Ascending Arrays

### 10.1.2 Descending Arrays

### 10.1.3 Arrays with Duplicates

### 10.1.4 Arrays with Gaps

### 10.1.5 Nearly Sorted Arrays

## 10.2 Searching Rotated Sorted Arrays

### 10.2.1 Rotation Concept

### 10.2.2 Finding the Pivot

### 10.2.3 Search Without Duplicates

### 10.2.4 Search with Duplicates

### 10.2.5 Complexity

## 10.3 Searching Bitonic Arrays

### 10.3.1 Bitonic Sequence

### 10.3.2 Finding the Peak

### 10.3.3 Searching the Increasing Part

### 10.3.4 Searching the Decreasing Part

## 10.4 Searching a 2D Array

### 10.4.1 Row-Wise Sorted Matrix

### 10.4.2 Row-and-Column Sorted Matrix

### 10.4.3 Staircase Search

### 10.4.4 Binary Search by Rows

### 10.4.5 Matrix Search Complexity

# 11. Searching in Linked Data Structures

## 11.1 Linear Search in Linked Lists

## 11.2 Search in Singly Linked Lists

## 11.3 Search in Doubly Linked Lists

## 11.4 Search in Circular Linked Lists

## 11.5 Sorted Linked List Search

## 11.6 Search Complexity

## 11.7 Why Binary Search Is Usually Inefficient on Linked Lists

# 12. Searching Trees

## 12.1 Tree Search Fundamentals

### 12.1.1 Search Paths

### 12.1.2 Tree Height

### 12.1.3 Comparison-Based Tree Search

## 12.2 Binary Search Tree Search

### 12.2.1 BST Search Property

### 12.2.2 Iterative BST Search

### 12.2.3 Recursive BST Search

### 12.2.4 Successful Search

### 12.2.5 Unsuccessful Search

### 12.2.6 Search Complexity

## 12.3 Minimum and Maximum

### 12.3.1 Finding Minimum

### 12.3.2 Finding Maximum

## 12.4 Predecessor and Successor

### 12.4.1 BST Predecessor

### 12.4.2 BST Successor

## 12.5 Range Searching in BSTs

### 12.5.1 Range Query

### 12.5.2 Reporting All Values in a Range

### 12.5.3 Range Query Complexity

# 13. Balanced Tree Searching

## 13.1 Motivation for Balanced Search Trees

## 13.2 Search Complexity and Tree Height

### 13.2.1 Degenerate BST

### 13.2.2 Balanced BST

### 13.2.3 Height and Search Time

## 13.3 AVL Tree Searching

### 13.3.1 Search Operation

### 13.3.2 Search Complexity

## 13.4 Red-Black Tree Searching

### 13.4.1 Search Operation

### 13.4.2 Search Complexity

## 13.5 B-Tree Searching

### 13.5.1 Motivation

### 13.5.2 Node Structure

### 13.5.3 Search Within a Node

### 13.5.4 Tree Traversal During Search

### 13.5.5 Search Complexity

## 13.6 B+ Tree Searching

### 13.6.1 Internal Nodes

### 13.6.2 Leaf Nodes

### 13.6.3 Exact-Match Search

### 13.6.4 Range Search

### 13.6.5 Database Indexing

# 14. Hash-Based Searching

## 14.1 Hash Search Concept

## 14.2 Hash Tables as Search Structures

## 14.3 Hash Functions

## 14.4 Direct Addressing

## 14.5 Collision Handling

### 14.5.1 Separate Chaining

### 14.5.2 Open Addressing

### 14.5.3 Linear Probing

### 14.5.4 Quadratic Probing

### 14.5.5 Double Hashing

## 14.6 Hash Search Complexity

### 14.6.1 Expected Search Time

### 14.6.2 Worst-Case Search

### 14.6.3 Load Factor

## 14.7 Hash Table Search Operations

### 14.7.1 Search

### 14.7.2 Insert

### 14.7.3 Delete

# 15. String Searching

## 15.1 Introduction to String Searching

### 15.1.1 Text

### 15.1.2 Pattern

### 15.1.3 Exact String Matching

### 15.1.4 Multiple Pattern Searching

## 15.2 Naive String Search

### 15.2.1 Brute-Force Matching

### 15.2.2 Algorithm

### 15.2.3 Complexity

### 15.2.4 Advantages and Limitations

## 15.3 Knuth-Morris-Pratt (KMP)

### 15.3.1 Motivation

### 15.3.2 Prefix Function

### 15.3.3 Longest Proper Prefix

### 15.3.4 Longest Proper Prefix That Is Also a Suffix

### 15.3.5 Failure Function

### 15.3.6 Building the Prefix Table

### 15.3.7 Search Procedure

### 15.3.8 Complexity

### 15.3.9 Applications

## 15.4 Boyer-Moore

### 15.4.1 Motivation

### 15.4.2 Right-to-Left Comparison

### 15.4.3 Bad Character Rule

### 15.4.4 Good Suffix Rule

### 15.4.5 Shift Calculation

### 15.4.6 Search Procedure

### 15.4.7 Complexity

### 15.4.8 Practical Performance

## 15.5 Rabin-Karp

### 15.5.1 Hash-Based String Searching

### 15.5.2 Rolling Hash

### 15.5.3 Pattern Hash

### 15.5.4 Window Hash

### 15.5.5 Hash Collision

### 15.5.6 Verification

### 15.5.7 Complexity

### 15.5.8 Multiple Pattern Searching

## 15.6 Aho-Corasick

### 15.6.1 Multiple Pattern Matching

### 15.6.2 Trie Construction

### 15.6.3 Failure Links

### 15.6.4 Output Links

### 15.6.5 Search Procedure

### 15.6.6 Complexity

### 15.6.7 Applications

# 16. Trie-Based Searching

## 16.1 Trie

### 16.1.1 Trie Structure

### 16.1.2 Character-Based Paths

### 16.1.3 Search Operation

### 16.1.4 Insert Operation

### 16.1.5 Delete Operation

## 16.2 Prefix Searching

### 16.2.1 Prefix Queries

### 16.2.2 Autocomplete

### 16.2.3 Prefix Enumeration

## 16.3 Compressed Tries

### 16.3.1 Radix Tree

### 16.3.2 Patricia Trie

### 16.3.3 Search Complexity

## 16.4 Ternary Search Trees

### 16.4.1 Structure

### 16.4.2 Search

### 16.4.3 Prefix Search

### 16.4.4 Comparison with Tries

# 17. Probabilistic Searching

## 17.1 Skip Lists

### 17.1.1 Motivation

### 17.1.2 Multi-Level Linked Lists

### 17.1.3 Search Operation

### 17.1.4 Insertion

### 17.1.5 Deletion

### 17.1.6 Randomization

### 17.1.7 Expected Complexity

### 17.1.8 Worst-Case Complexity

## 17.2 Bloom Filters

### 17.2.1 Membership Testing

### 17.2.2 Bit Array

### 17.2.3 Multiple Hash Functions

### 17.2.4 False Positives

### 17.2.5 False Negatives

### 17.2.6 Search Procedure

### 17.2.7 Choosing the Number of Hash Functions

### 17.2.8 Space Efficiency

### 17.2.9 Applications

### 17.2.10 Limitations

## 17.3 Cuckoo Hashing

### 17.3.1 Multiple Hash Tables

### 17.3.2 Search

### 17.3.3 Insertion

### 17.3.4 Relocation

### 17.3.5 Worst-Case Search

# 18. Search in External Memory

## 18.1 External Searching

### 18.1.1 Internal vs External Memory

### 18.1.2 Disk Access Cost

### 18.1.3 Block-Based Searching

### 18.1.4 I/O Complexity

## 18.2 Indexed Sequential Search

### 18.2.1 Index Structure

### 18.2.2 Search Procedure

### 18.2.3 Complexity

## 18.3 B-Trees

### 18.3.1 Disk-Oriented Search

### 18.3.2 Node Size

### 18.3.3 Page Access

### 18.3.4 Search Complexity

## 18.4 B+ Trees

### 18.4.1 Database Indexes

### 18.4.2 Exact Search

### 18.4.3 Range Search

### 18.4.4 Sequential Access

# 19. Geometric Searching

## 19.1 Introduction to Geometric Search

## 19.2 Point Searching

## 19.3 Range Searching

## 19.4 Orthogonal Range Queries

## 19.5 Nearest-Neighbor Search

## 19.6 Spatial Indexing

### 19.6.1 k-d Trees

### 19.6.2 Range Search with k-d Trees

### 19.6.3 Nearest-Neighbor Search

## 19.7 Quadtrees

## 19.8 R-Trees

## 19.9 Spatial Databases

# 20. Graph Searching

## 20.1 Graph Search Fundamentals

### 20.1.1 Search State

### 20.1.2 Visited Nodes

### 20.1.3 Search Frontier

### 20.1.4 Parent Relationships

## 20.2 Breadth-First Search (BFS)

### 20.2.1 BFS Concept

### 20.2.2 Queue-Based Search

### 20.2.3 BFS Algorithm

### 20.2.4 Visited Set

### 20.2.5 Shortest Paths in Unweighted Graphs

### 20.2.6 BFS Complexity

### 20.2.7 Applications

## 20.3 Depth-First Search (DFS)

### 20.3.1 DFS Concept

### 20.3.2 Recursive DFS

### 20.3.3 Iterative DFS

### 20.3.4 DFS Tree

### 20.3.5 DFS Complexity

### 20.3.6 Applications

## 20.4 Bidirectional Search

### 20.4.1 Forward Search

### 20.4.2 Backward Search

### 20.4.3 Meeting Point

### 20.4.4 Complexity

### 20.4.5 Applications

## 20.5 Heuristic Graph Search

### 20.5.1 Search Heuristics

### 20.5.2 Greedy Best-First Search

### 20.5.3 A* Search

### 20.5.4 Heuristic Function

### 20.5.5 Admissible Heuristics

### 20.5.6 Consistent Heuristics

### 20.5.7 Open and Closed Sets

### 20.5.8 Applications

# 21. Search with Heuristics

## 21.1 Heuristic Search

## 21.2 Evaluation Functions

## 21.3 Greedy Search

## 21.4 Best-First Search

## 21.5 A* Search

## 21.6 Search Trees

## 21.7 State-Space Search

## 21.8 Game-Tree Search

### 21.8.1 Minimax

### 21.8.2 Alpha-Beta Pruning

# 22. Search in Ordered Data

## 22.1 Order-Based Searching

## 22.2 Lower Bound

## 22.3 Upper Bound

## 22.4 Rank Queries

## 22.5 Selection Queries

## 22.6 Predecessor Queries

## 22.7 Successor Queries

## 22.8 Range Queries

# 23. Search and Selection Algorithms

## 23.1 Searching vs Selection

## 23.2 Finding the Minimum

## 23.3 Finding the Maximum

## 23.4 Finding the k-th Smallest Element

## 23.5 Finding the k-th Largest Element

## 23.6 Quickselect

## 23.7 Median Finding

## 23.8 Median of Medians

## 23.9 Selection Complexity

# 24. Search Algorithms and Data Structures

## 24.1 Array-Based Searching

## 24.2 Linked-List Searching

## 24.3 Stack-Based Search

## 24.4 Queue-Based Search

## 24.5 Tree-Based Search

## 24.6 Hash-Based Search

## 24.7 Trie-Based Search

## 24.8 Graph-Based Search

## 24.9 Index-Based Search

## 24.10 Spatial Search

# 25. Complexity Analysis of Searching

## 25.1 Search Complexity Fundamentals

## 25.2 Time Complexity

## 25.3 Space Complexity

## 25.4 Best-Case Complexity

## 25.5 Average-Case Complexity

## 25.6 Worst-Case Complexity

## 25.7 Expected Complexity

## 25.8 Amortized Complexity

## 25.9 Comparison-Based Search

## 25.10 Hash-Based Search

## 25.11 Tree-Based Search

## 25.12 External-Memory Search

## 25.13 I/O Complexity

# 26. Comparison of Searching Algorithms

## 26.1 Linear Search vs Binary Search

## 26.2 Binary Search vs Interpolation Search

## 26.3 Binary Search vs Jump Search

## 26.4 Binary Search vs Exponential Search

## 26.5 Hash Search vs Tree Search

## 26.6 BST Search vs AVL Search

## 26.7 BST Search vs Red-Black Tree Search

## 26.8 B-Tree vs B+ Tree

## 26.9 Trie vs Hash Table

## 26.10 KMP vs Boyer-Moore

## 26.11 KMP vs Rabin-Karp

## 26.12 BFS vs DFS

## 26.13 Exact Search vs Approximate Search

# 27. Practical Search Patterns

## 27.1 Find an Element

## 27.2 Find the First Matching Element

## 27.3 Find the Last Matching Element

## 27.4 Find All Matching Elements

## 27.5 Count Matching Elements

## 27.6 Find an Insertion Position

## 27.7 Find a Range

## 27.8 Find a Boundary

## 27.9 Find the Minimum Valid Value

## 27.10 Find the Maximum Valid Value

## 27.11 Binary Search on the Answer

## 27.12 Search Over a Monotonic Predicate

## 27.13 Search in a Rotated Sequence

## 27.14 Search in an Unknown-Sized Sequence

# 28. Binary Search on the Answer

## 28.1 Concept

## 28.2 Monotonic Predicate

## 28.3 Feasibility Function

## 28.4 Defining the Search Space

## 28.5 Finding the First Feasible Value

## 28.6 Finding the Last Feasible Value

## 28.7 Integer Answer Search

## 28.8 Floating-Point Answer Search

## 28.9 Complexity

## 28.10 Common Applications

# 29. Parallel and Distributed Searching

## 29.1 Parallel Search

## 29.2 Parallel Linear Search

## 29.3 Parallel Tree Search

## 29.4 Parallel Graph Search

## 29.5 Distributed Search

## 29.6 Partitioning the Search Space

## 29.7 Synchronization

## 29.8 Load Balancing

## 29.9 Search Scalability

# 30. Search in Databases

## 30.1 Database Search

## 30.2 Sequential Table Scan

## 30.3 Index Search

## 30.4 B-Tree Index

## 30.5 B+ Tree Index

## 30.6 Hash Index

## 30.7 Composite Index

## 30.8 Covering Index

## 30.9 Range Queries

## 30.10 Full-Text Search

## 30.11 Query Optimization

## 30.12 Index Selectivity

# 31. Full-Text and Information Retrieval

## 31.1 Text Retrieval

## 31.2 Inverted Index

## 31.3 Term Dictionary

## 31.4 Posting Lists

## 31.5 Boolean Search

## 31.6 Phrase Search

## 31.7 Prefix Search

## 31.8 Wildcard Search

## 31.9 Fuzzy Search

## 31.10 Ranking Search Results

## 31.11 TF-IDF

## 31.12 Search Engine Architecture

# 32. Approximate and Fuzzy Searching

## 32.1 Exact vs Approximate Search

## 32.2 Edit Distance

## 32.3 Levenshtein Distance

## 32.4 Hamming Distance

## 32.5 Approximate String Matching

## 32.6 Fuzzy Search

## 32.7 Similarity Search

## 32.8 Locality-Sensitive Hashing

## 32.9 Approximate Nearest Neighbor Search

# 33. Search Optimization

## 33.1 Reducing the Search Space

## 33.2 Choosing the Appropriate Data Structure

## 33.3 Preprocessing for Faster Search

## 33.4 Sorting Before Searching

## 33.5 Indexing

## 33.6 Caching Search Results

## 33.7 Memory Locality

## 33.8 Branch Prediction

## 33.9 Parallelization

## 33.10 Time-Space Trade-offs

# 34. Correctness of Searching Algorithms

## 34.1 Search Invariants

## 34.2 Loop Invariants

## 34.3 Termination

## 34.4 Correctness of Linear Search

## 34.5 Correctness of Binary Search

## 34.6 Correctness of Tree Search

## 34.7 Correctness of Hash Search

## 34.8 Correctness of Graph Search

# 35. Common Searching Problems

## 35.1 Two-Sum Search

## 35.2 Three-Sum Search

## 35.3 Pair Search in Sorted Arrays

## 35.4 Duplicate Detection

## 35.5 Missing Element Search

## 35.6 First Missing Positive

## 35.7 Majority Element Search

## 35.8 Peak Element Search

## 35.9 Local Minimum Search

## 35.10 Search in Rotated Arrays

## 35.11 Search in Bitonic Arrays

## 35.12 Median of Two Sorted Arrays

## 35.13 K-th Element of Two Sorted Arrays

## 35.14 Search in a Matrix

## 35.15 Range Queries

## 35.16 Nearest Value Search

# 36. Implementation Labs

## 36.1 Linear Search Lab

### 36.1.1 Array Implementation

### 36.1.2 Linked-List Implementation

### 36.1.3 Test Cases

### 36.1.4 Complexity Measurement

## 36.2 Binary Search Lab

### 36.2.1 Iterative Implementation

### 36.2.2 Recursive Implementation

### 36.2.3 First/Last Occurrence

### 36.2.4 Lower/Upper Bound

### 36.2.5 Test Cases

## 36.3 Interpolation Search Lab

## 36.4 Jump Search Lab

## 36.5 Exponential Search Lab

## 36.6 Fibonacci Search Lab

## 36.7 BST Search Lab

## 36.8 AVL Search Lab

## 36.9 Hash Table Search Lab

## 36.10 Trie Search Lab

## 36.11 KMP Lab

## 36.12 Rabin-Karp Lab

## 36.13 Boyer-Moore Lab

## 36.14 BFS Lab

## 36.15 DFS Lab

## 36.16 A* Search Lab

## 36.17 B-Tree Search Lab

## 36.18 Inverted Index Lab

# 37. Search Algorithm Selection

## 37.1 Is the Data Sorted?

## 37.2 Is the Data Static or Dynamic?

## 37.3 Is Exact Search Required?

## 37.4 Is Range Search Required?

## 37.5 Is Prefix Search Required?

## 37.6 Is the Dataset Small or Large?

## 37.7 Is Memory Limited?

## 37.8 Is Data Stored in RAM or on Disk?

## 37.9 Is Data Frequently Updated?

## 37.10 Is Approximate Search Required?

## 37.11 Is Parallel Search Required?

# 38. Advanced Topics

## 38.1 Succinct Search Structures

## 38.2 Rank and Select

## 38.3 Wavelet Trees

## 38.4 FM-Index

## 38.5 Suffix Arrays

## 38.6 Suffix Trees

## 38.7 Suffix Automata

## 38.8 Compressed Indexes

## 38.9 Cache-Oblivious Searching

## 38.10 Cache-Aware Searching

## 38.11 Learned Indexes

## 38.12 Approximate Nearest Neighbor Structures

# 39. Searching Algorithms — Complexity Reference

| Algorithm / Structure |      Typical Search | Worst Case |
| --------------------- | ------------------: | ---------: |
| Linear Search         |              `O(n)` |     `O(n)` |
| Binary Search         |          `O(log n)` | `O(log n)` |
| Jump Search           |             `O(√n)` |    `O(√n)` |
| Interpolation Search  |     `O(log log n)`* |     `O(n)` |
| Exponential Search    |          `O(log n)` | `O(log n)` |
| Fibonacci Search      |          `O(log n)` | `O(log n)` |
| BST Search            |        `O(log n)`** |     `O(n)` |
| AVL Search            |          `O(log n)` | `O(log n)` |
| Red-Black Tree Search |          `O(log n)` | `O(log n)` |
| Hash Table            |     `O(1)` expected |     `O(n)` |
| Trie Search           |              `O(m)` |     `O(m)` |
| Skip List             | `O(log n)` expected |     `O(n)` |
| B-Tree Search         |          `O(log n)` | `O(log n)` |
| KMP                   |          `O(n + m)` | `O(n + m)` |
| Rabin-Karp            | `O(n + m)` expected |    `O(nm)` |
| BFS                   |          `O(V + E)` | `O(V + E)` |
| DFS                   |          `O(V + E)` | `O(V + E)` |

* For appropriately distributed keys.
** Assuming a reasonably balanced tree; an arbitrary BST can degenerate to `O(n)`.

## Recommended Learning Order

For a **Data Structures & Algorithms** curriculum, I would organize the actual learning sequence more narrowly as:

```text
Searching Algorithms
│
├── 1. Searching Fundamentals
│
├── 2. Linear Search
│
├── 3. Binary Search
│   ├── Basic Binary Search
│   ├── First/Last Occurrence
│   ├── Lower/Upper Bound
│   ├── Rotated Arrays
│   ├── Bitonic Arrays
│   └── Binary Search on Answer
│
├── 4. Advanced Array Searching
│   ├── Jump Search
│   ├── Interpolation Search
│   ├── Exponential Search
│   └── Fibonacci Search
│
├── 5. Tree Searching
│   ├── BST
│   ├── AVL
│   ├── Red-Black Tree
│   ├── B-Tree
│   └── B+ Tree
│
├── 6. Hash-Based Searching
│   ├── Hash Tables
│   ├── Hash Functions
│   ├── Collision Resolution
│   └── Bloom Filters
│
├── 7. String Searching
│   ├── Naive
│   ├── KMP
│   ├── Rabin-Karp
│   ├── Boyer-Moore
│   └── Aho-Corasick
│
├── 8. Trie Searching
│   ├── Trie
│   ├── Radix Tree
│   └── Ternary Search Tree
│
├── 9. Graph Searching
│   ├── BFS
│   ├── DFS
│   ├── Bidirectional Search
│   └── A*
│
├── 10. External Searching
│   ├── Indexed Sequential Search
│   ├── B-Tree
│   └── B+ Tree
│
├── 11. Geometric Searching
│   ├── Range Search
│   ├── k-d Tree
│   ├── Quadtree
│   └── R-Tree
│
├── 12. Approximate Searching
│   ├── Fuzzy Search
│   ├── Edit Distance
│   ├── LSH
│   └── Approximate Nearest Neighbor
│
└── 13. Advanced Search Structures
    ├── Inverted Index
    ├── Suffix Array
    ├── Suffix Tree
    ├── Wavelet Tree
    ├── FM-Index
    └── Learned Indexes
```

This ordering keeps the **core comparison-based searching algorithms** together first, then connects searching naturally to the data structures that make search efficient: **BSTs → balanced trees → hash tables → tries → indexes → graphs → specialized search structures**.
