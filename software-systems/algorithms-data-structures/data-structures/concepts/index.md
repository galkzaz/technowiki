---
id: data-structures
title: Introduction
description: Data Structures
sidebar_position: 1
---


A **Data Structure** is a way of **organizing, storing, and managing data** in memory (or storage) so that operations on the data can be performed efficiently.

Think of a data structure as a **container with rules** that determine:

* How data is stored
* How data is accessed
* How data is modified
* How efficiently operations can be performed

## Why Do We Need Data Structures?

Suppose you have one million records.

Questions:

* How do you find a record quickly?
* How do you insert a new record efficiently?
* How do you keep records sorted?
* How do you represent relationships between records?

Different data structures provide different answers.

Example:

| Problem                       | Suitable Data Structure |
| ----------------------------- | ----------------------- |
| Fast lookup by key            | Hash Table              |
| Sorted data                   | Binary Search Tree      |
| First-In-First-Out processing | Queue                   |
| Last-In-First-Out processing  | Stack                   |
| Network relationships         | Graph                   |
| Hierarchical data             | Tree                    |

## Relationship Between Data and Data Structures

```text
Raw Data
   ↓
Organized Using
   ↓
Data Structure
   ↓
Algorithms Operate On It
   ↓
Efficient Solution
```

Example:

```text
Numbers: 5 8 2 9 1

Stored in:
Array

Algorithm:
Sorting

Result:
1 2 5 8 9
```

## Data Structures vs Algorithms

**Data Structure**: Defines **how data is organized**.

Example:

```text
Array
Linked List
Stack
Queue
Tree
Graph
```

**Algorithm**: Defines **what operations are performed**.

Example:

```text
Searching
Sorting
Traversal
Shortest Path
Dynamic Programming
```

Analogy:

```text
Data Structure = Library shelves

Algorithm = Method used to find a book
```

## Classification of Data Structures

```text
Data Structures
├── Primitive
└── Non-Primitive
```

### 1. Primitive Data Structures

Built-in types provided by programming languages.

Examples:

```text
Integer
Float
Double
Character
Boolean
Pointer/Reference
```

Example:

```python
age = 25
price = 99.5
flag = True
```

### 2. Non-Primitive Data Structures

Constructed using primitive types.

```text
Non-Primitive
├── Linear
└── Non-Linear
```

#### Linear Data Structures

Elements are arranged sequentially.

```text
A → B → C → D
```

Examples:

```text
Array
Linked List
Stack
Queue
Deque
String
```

##### Array

Elements stored in contiguous memory.

```text
Index: 0 1 2 3

Data:  5 8 2 9
```

Properties:

* Fixed size (traditional arrays)
* Random access
* Cache friendly

Operations:

```text
Access: O(1)
Search: O(n)
Insert: O(n)
Delete: O(n)
```

##### Linked List

Elements connected by pointers.

```text
[5|•] → [8|•] → [2|•] → [9|null]
```

Properties:

* Dynamic size
* Easy insertion/deletion
* Sequential access

Operations:

```text
Access: O(n)
Search: O(n)
Insert: O(1)*
Delete: O(1)*
```

(*when position/node is known)

##### Stack

Last In First Out (LIFO).

```text
Push 1
Push 2
Push 3

Top
 ↓
[3]
[2]
[1]
```

Operations:

```text
Push
Pop
Peek
```

Applications:

* Function calls
* Recursion
* Undo operations
* Expression evaluation

##### Queue

First In First Out (FIFO).

```text
Front → [A][B][C] ← Rear
```

Operations:

```text
Enqueue
Dequeue
Front
```

Applications:

* Scheduling
* Buffers
* Breadth-First Search

##### Deque

Double-ended queue.

```text
Front ← [A][B][C] → Rear
```

Operations:

```text
Insert Front
Insert Rear
Delete Front
Delete Rear
```

Applications:

* Sliding window algorithms
* Caches
* Scheduling systems

#### Non-Linear Data Structures

Elements are not arranged sequentially.

```text
Non-Linear
├── Trees
└── Graphs
```

##### Tree

Hierarchical structure.

Example:

```text
        A
      / | \
     B  C  D
       / \
      E   F
```

Terminology:

```text
Root
Parent
Child
Leaf
Subtree
Height
Depth
```

Applications:

* File systems
* Databases
* XML/HTML
* Compilers

###### Binary Tree

Each node has at most two children.

```text
      A
     / \
    B   C
```

###### Binary Search Tree (BST)

```text
       50
      /  \
    30    70
   / \    / \
 20 40 60 80
```

Property:

```text
Left < Root < Right
```

Average operations:

```text
Search : O(log n)
Insert : O(log n)
Delete : O(log n)
```

###### Heap

Complete binary tree.

Max Heap:

```text
       100
      /   \
     80   70
    / \
   20 60
```

Property:

```text
Parent ≥ Children
```

Applications:

* Priority Queue
* Scheduling
* Heap Sort

###### Trie

Stores strings character by character.

```text
(root)
  |
  c
 / \
a   o
|
t
```

Stores:

```text
cat
cot
```

Applications:

* Dictionaries
* Autocomplete
* Spell checking

##### Graph

Represents relationships between objects.

```text
A ----- B
|       |
|       |
C ----- D
```

Components:

```text
Vertices (Nodes)
Edges
```

Types:

- Directed
- Undirected
- Weighted
- Unweighted
- Cyclic
- Acyclic

Applications:

* Social networks
* Maps
* Routing
* Recommendation systems

## Abstract Data Types (ADT)

An **ADT** defines behavior without defining implementation.

Example:

```text
Stack ADT
```

Operations:

```text
push()
pop()
peek()
```

Possible implementations:

```text
Array
Linked List
```

Thus:

```text
ADT = What
Data Structure = How
```

## Data Structures Hierarchy

```text
Data Structures
├── Primitive
│   ├── Integer
│   ├── Float
│   ├── Character
│   ├── Boolean
│   └── Pointer
│
└── Non-Primitive
    ├── Linear
    │   ├── Array
    │   ├── String
    │   ├── Linked List
    │   │   ├── Singly Linked List
    │   │   ├── Doubly Linked List
    │   │   └── Circular Linked List
    │   ├── Stack
    │   ├── Queue
    │   │   ├── Simple Queue
    │   │   ├── Circular Queue
    │   │   ├── Priority Queue
    │   │   └── Deque
    │   └── Skip List
    │
    └── Non-Linear
        ├── Trees
        │   ├── Binary Tree
        │   ├── Binary Search Tree
        │   ├── AVL Tree
        │   ├── Red-Black Tree
        │   ├── Heap
        │   ├── B-Tree
        │   ├── B+ Tree
        │   ├── Trie
        │   ├── Segment Tree
        │   ├── Fenwick Tree
        │   └── Suffix Tree
        │
        ├── Graphs
        │   ├── Directed Graph
        │   ├── Undirected Graph
        │   ├── Weighted Graph
        │   ├── DAG
        │   └── Network Graph
        │
        ├── Hash Structures
        │   ├── Hash Table
        │   ├── Hash Map
        │   └── Hash Set
        │
        └── Disjoint Set (Union-Find)
```

## Core Idea

A data structure is fundamentally a trade-off between:

```text
Memory Usage
      vs
Operation Efficiency
```

Different data structures optimize different operations:

```text
Array        → Fast Access
Linked List  → Fast Insert/Delete
Hash Table   → Fast Lookup
Heap         → Fast Priority Access
BST          → Ordered Data
Graph        → Relationships
```

Algorithms become efficient only when paired with the right data structure.

