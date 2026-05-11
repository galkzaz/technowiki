---
id: data-structures
title: Introduction
description: Data Structures
---

## Mathematical Foundations

### Sets, Relations, and Functions
### Proof Techniques (Induction, Contradiction)
### Summations and Recurrences
### Asymptotic Analysis
#### Big-O, Big-Ω, Big-Θ
#### Amortized Analysis
#### Probabilistic Analysis

## Memory & Data Representation

### Memory Model (Stack vs Heap)
### Pointers and References
### Value vs Reference Semantics
### Alignment & Padding
### Cache Behavior & Locality
### Static vs Dynamic Allocation
### Fragmentation (Internal / External)

## Abstract Data Types (ADT)
### Abstraction in data handling

Control over data is essential to computer science: All computational processes are made of data operations that transform input into output. 
```
Input → Operations on data → Output
```
An algorithm is basically a sequence of data transformations.
Examples:
- Sorting transforms an unsorted list → sorted list
- Searching transforms a dataset → found/not found
- Merge transforms two sorted lists → one sorted list

But Algorithms Don’t Specify Everything, algorithms usually don’t specify how their data operations are performed.
When we write an algorithm like merge, we describe what happens logically, not how memory works internally.

When we write an algorithm like merge, we describe what happens logically, not how memory works internally. For Example (conceptually):
```
create empty result list
while both lists not empty:
    compare heads
    append smaller to result
```
Notice something:
- What is a "list" exactly?
- How is it stored in memory?
- How does append actually work?
- Is it array-based? linked list? dynamic buffer?

Instead of worrying about memory layout, we rely on an interface:
```
List.create()
List.empty()
List.top()
List.remove_top()
List.append()
```
The algorithm only assumes these operations exist. How they are implemented is hidden.

merge relies on unspecified external code to create lists of numbers, to check if lists are empty, and to append items into lists. The algorithm doesn’t care.

The merge algorithm relies on:
- Creating lists
- Checking emptiness
- Removing the first element
- Appending to another list

But merge itself does NOT define:
- Whether lists are arrays
- Whether they are linked lists
- Whether they are persistent or mutable

Those details are abstracted away.

The queens algorithm does the same: it doesn’t care how operations on the chessboard are made, nor how positions are stored in memory. the N-Queens algorithm:
- Places queens on a chessboard
- Checks if a position is safe
- Stores positions

But it doesn’t care:
- How the board is stored (2D array? bitmask? list of coordinates?)
- How memory is allocated
- How conflicts are checked internally

It just assumes operations like:
```
placeQueen(row, column)
isSafe(row, column)
removeQueen(row, column)
```
These details are hidden behind what we call abstractions.

Abstraction means: Hiding implementation details and exposing only necessary operations.

Abstraction gives us:
1. **Modularity**: You can change the data structure without rewriting the algorithm.
2. **Reusability**: The same algorithm can work with different implementations.
3. **Scalability**: High-level reasoning becomes possible.
4. Separation of concerns
    * Algorithm designer focuses on logic.
    * Data structure designer focuses on efficiency.

In real systems this appears as:
- Abstract Data Types (ADTs)
- Classes in OOP
- Interfaces
- APIs
- Modules

Abstraction allows:
- Algorithm analysis independent of hardware
- Clean mathematical reasoning
- Proof of correctness
- Complexity analysis independent of implementation details

This is why algorithm textbooks describe:
- "assume list operations take O(1) time"
- "assume stack supports push/pop"

They reason at the abstract level.

In summary Algorithms describe what is done. Data structures describe how it is done. Abstraction separates the two.

#### Effect of Abstraction on Time Complexity Analysis
When we analyze algorithms, we do not analyze machine instructions.
We analyze operations of an abstract data type.

**Example: Merge algorithm assumes:**
- empty() → O(1)
- remove_top() → O(1)
- append() → O(1)

Under these assumptions:
Merge runs in O(n)

But here is the subtle truth: The complexity depends on the abstraction’s cost model.

**Case A: Linked List**

If lists are implemented as linked lists:
- remove from head → O(1)
- append with tail pointer → O(1)

Merge = O(n) ✔

**Case B: Dynamic Array (bad usage)**

If:
- remove from front → O(n) (shifting elements)

Then merge becomes:
O(n²)

Same algorithm.
Different abstraction cost.

So When we write: Assume stack operations take O(1), We are analyzing at the ADT level, not the memory level.
Time complexity is relative to:
- the abstraction boundary
- the cost of primitive operations

That’s why textbooks say: "Assume priority queue supports insert in O(log n)", They isolate algorithm complexity from implementation complexity.

#### Effect of Abstraction on Performance
{/*How Bad Abstraction Can Destroy Performance*/}
**Example 1: Hidden Linear Cost**

Suppose:
```
for i in range(n):
    if x in my_list:
```       
If my_list is:
- a hash set → O(1)
- a Python list → O(n)

The abstraction hides this difference.
So total complexity becomes:
- O(n)
- or O(n²)

Huge difference.

**Example 2: Over-Abstracted Layers**

Imagine:
Algorithm
- Service layer
- Repository layer
- ORM
- Database

If each abstraction:
- copies data
- allocates new objects
- performs hidden sorting

Performance collapses.

**Example 3: Functional Abstraction Trap**

In functional pipelines:
```
data.map(...).filter(...).map(...)
```
If each step creates a new list,
you get:
- multiple passes
- extra allocations
- cache inefficiency

Bad abstraction → memory churn → slower runtime.

Abstraction has:
- ✔ cognitive benefit
- ❌ possible performance cost

Good system design requires: `Abstraction + awareness of cost model`

### Data Types
We distinguish different types of fasteners (like screws, bolts, and nails) according to the operations we can perform on them (like screwing, wrenching, and hammering). Similarly, we distinguish
different types of data according to the operations that can be performed on the data.
- For instance, a data variable that can be split in positional characters, that can be converted to upper or lower case, that can receive appended characters, is of the String type. Strings represent texts. 
- A data variable that can be inverted, that can receive XOR, OR, AND operations, is of the Boolean type. Booleans can be either True or False. 
- Variables that can be summed, divided, subtracted, are of the Number type.

Every data type is associated with a specific set of procedures. The procedures that work on variables that store Lists are different to the ones that work on variables that store Sets, which are different from the ones that work on Numbers.

<!--🔹 How abstraction relates to information hiding (Parnas)

🔹 Leaky abstractions (and why they matter)-->
### ADT Concept and Specification
An **Abstract Data Type (ADT)** is the specification of a group of operations that make sense for a given data type. They define an interface for working with variables holding data of a given type hiding all details of how data is stored and operated in memory.

When our algorithms needs to operate on data, we don’t directly instruct the computer’s memory to read and write. We use external data-handling modules that provide procedures defined in ADTs.
For example, to operate with variables that store lists, we need:
1. procedures for creating and deleting lists; 
2. procedures for accessing or removing the nth item of a list; 
3. and a procedure for appending a new item to a list. 

The definitions of these procedures (their names and what they do) are a List ADT. We can work with lists by exclusively relying on these procedures. That way, we never manipulate the computer’s memory directly.

An **Abstract Data Type** is A mathematical model of a data structure defined by its **behavior (operations and rules), not its implementation**.

An Abstract Data Type is A contract describing what operations are allowed and how they behave — without revealing how they are implemented.
It is the foundation of:
- Data structures
- Algorithms
- Object-oriented programming
- Modular design
- Clean architecture

An Abstract Data Type formally consists of:
1. A set of **Values** the structure can hold
2. A set of **Operations** allowed on those values
3. A set of axioms (behavior rules) describing how operations behave

It does not specify:
- Memory layout
- Pointers
- Arrays
- CPU instructions
- Storage strategy

An ADT is defined by:
1. **Domain (Set of Values)**
    * The collection of possible states.
    * Example: Stack: All possible finite sequences of elements.
2. **Operations**
    * Functions that manipulate or observe the state.
    * For a Stack:
        * create()
        * push(S, x)
        * pop(S)
        * top(S)
        * empty(S)

3. **Axioms (Behavioral Rules)**
    * These describe how operations relate to each other.
    * For Stack:
        * top(push(S, x)) = x
        * pop(push(S, x)) = S
        * empty(create()) = true

Notice:
- No mention of arrays.
- No mention of linked lists.
- Only behavior. That is abstraction.

Example: Stack ADT

Values:
- sequences of elements

Operations:
- push(x)
- pop()
- top()
- empty()

Axioms:
- pop(push(S, x)) = S
- top(push(S, x)) = x

Notice, The ADT does NOT specify:
- memory layout
- pointer arithmetic
- resizing strategy

It specifies behavior, not implementation.

{/*Algorithm Analysis with ADTs*/}
When analyzing an algorithm using a stack:
We assume:
- push → O(1)
- pop → O(1)

Thus complexity is expressed in terms of: number of ADT operations, This is called cost abstraction. It allows:
- clean proofs
- machine-independent analysis
- implementation substitution

### ADT vs Data Structure
An Abstract Data Type only describes how variables of a given data type are operated. It provides a list of operations, but doesn’t explain how data operations happen. Conversely, data structures describe how data is to be organized and accessed in the computer’s memory. They provide ways for implementing ADTs in data-handling modules.

There are different ways to implement ADTs because there are different data structures. Selecting an ADT implementation that
uses the best data structure according to your needs is essential for creating efficient computer programs.

| Abstract Data Type  | Data Structure          |
| ------------------- | ----------------------- |
| What it does        | How it does it          |
| Logical model       | Physical implementation |
| Behavioral contract | Memory representation   |
| Mathematical        | Engineering             |

Example: Stack ADT, can be implemented using:
- Array
- Linked list
- Dynamic array
- Deque

Same ADT, different implementations.

**Stack ADT in Depth**

Logical Model: Stack is a Last-In-First-Out (LIFO) collection.

Operations:
```
create()
push(S, x)
pop(S)
top(S)
empty(S)
```
Behavioral properties:
- LIFO ordering
- No random access
- Only top element visible

1. **Implementation 1: Array-Based**

Memory:
```
[ 10, 20, 30 ]
          ^
        top index
```
push:
- increment index
- assign value
pop:
- decrement index

Time complexity:
- O(1)

**Implementation 2: Linked List**

Memory:
```
30 → 20 → 10 → null
^
top pointer
```
push:
- allocate node
- link to old top

pop:
- remove head node

Also O(1)

Both satisfy the same ADT.

#### Data Structures Derived from ADTs
{/*Visual Taxonomy of Data Structures Derived from ADTs*/}
All major structures come from a few core ADTs.

Below is a conceptual map.
```
                         COLLECTION
                              |
        ------------------------------------------------
        |                                              |
     SEQUENCE                                      SET-LIKE
        |                                              |
   -------------                             ---------------------
   |           |                             |                   |
 LIST      RESTRICTED SEQ                 SET                 MAP
               |                            |                   |
         --------------                 -----------          ----------
         |            |                 |         |          |         |
       STACK        QUEUE           HASH SET   TREE SET    HASH MAP  TREE MAP
                                                         
```
**Priority Structures**

Another branch focuses on ordering.
```
               PRIORITY COLLECTION
                       |
                   PRIORITY QUEUE
                       |
              ----------------------
              |                    |
            HEAP              ORDERED TREE
              |                    |
        Binary Heap          Red-Black Tree
        Fibonacci Heap       AVL Tree
```
**Structural Families of Data Structures**

We can also classify by physical structure.
| Family      | Structures                        |
| ----------- | --------------------------------- |
| Array-based | Dynamic array, heap, hash table   |
| Linked      | Linked list, skip list            |
| Tree        | AVL tree, B-tree, red-black tree  |
| Graph-based | adjacency lists, adjacency matrix |
| Hash-based  | hash set, hash map                |

**Mapping ADTs → Data Structures**
| ADT            | Typical Implementations       |
| -------------- | ----------------------------- |
| Stack          | Array stack, linked stack     |
| Queue          | Circular buffer, linked queue |
| List           | Dynamic array, linked list    |
| Set            | Hash set, balanced tree       |
| Map            | Hash table, tree map          |
| Priority Queue | Heap, tournament tree         |

All data structures are combinations of:
1. Collection
2. Ordering constraint
3. Access restriction
4. Uniqueness rule
5. Key mapping

Different constraints produce different ADTs. Then hardware considerations produce different implementations.

In short: Evolution path:
```
Abstract Data Types
        ↓
Basic Data Structures
        ↓
Hardware-optimized structures
        ↓
Cache-aware / cache-oblivious algorithms
```
### ADTs and Algorithms
Algorithms are often defined in terms of ADTs, not implementations.

Example: Dijkstra requires: A structure supporting extract-min and decrease-key. That defines the ADT contract — not the heap type.

When analyzing algorithms, we count:
- number of stack operations
- number of queue operations
- number of map lookups

We do NOT count:
- pointer arithmetic
- memory allocations
- CPU instructions

This makes algorithm analysis:
- Clean
- Machine independent
- Mathematically provable

### Advantages of Using ADTs
1. **simplicity**: ADTs make our code simpler to understand and modify. By omitting details from data handling procedures, you focus on the big picture: the problem-solving process of the algorithm.
2. **Flexibilty**: There are different ways to structure data in memory, leading to different data-handling modules for a same data type. We should choose the best for the situation at hand. Modules implementing the same ADT provide the same procedures. This means we can change the way the data is stored and manipulated just by using a different data-handling module. It’s like cars: electric cars and gas-powered cars all have the same driving interface. Anyone who can drive a car can effortlessly switch to any other.
3. **Reusabilty**: We can use the same data-handling modules in projects that require handling data of the same type. For instance, both `power_set` and `recursive_power_set` operate with variables representing sets. This means we can use the same Set module in both algorithms.
4. **Organization**:  We usually need to operate several data types: numbers, text, geographical coordinates, images, and more. To better organize our code, we create distinct modules that each host code specific to a data type. That’s called separation of concerns: parts of code that deal with the same logical aspect should be grouped in their own, separate module. When they’re entangled with other functionalities, we call it spaghetti code.
5. **Convenience**: We can get a data-handling module coded by someone else, and learn to use the procedures defined by its ADT. Then we can use these procedures to operate with variables of a new data type right away. Understanding how the data-handling module works isn’t required.
6. **Bug-Fixing**: If you’re using a bug-free data-handling module, your code will be free of data-handling bugs. If you find a bug in a data-handling module, fixing it once means you instantly fix all parts of
your code affected by the bug.
### Interface vs Implementation
### Encapsulation
{/*Abstraction vs encapsulation (precise difference)*/}
In programming languages:
- ADT = interface
- Implementation = hidden private data

In Java:
```
public interface Stack {
    void push(int x);
    int pop();
}
```
The interface defines the ADT.
The class defines the data structure.


### Design by Contract
### Common Abstractions
To solve a computational problem, it is very important to understand the type of data you’re working on and the operations you’ll need to perform on it. Deciding the ADT you’ll use is equally important. 

There are Common Abstractions and well known Abstract Data Types. They appear in countless algorithms. They even come built-in with many programming languages.

#### Primitive data types
Primitive data types are those with built-in support in the programming language you’re using—they work without external modules.

These always include integers, floating points, and generic operations with them (addition, subtraction, division). Most languages also come with built-in support for storing text, booleans and other simple data types in their variables.

#### Stack
Picture a pile of papers. You can put a sheet onto the top of the pile, or take the top sheet off. The first sheet to be added is always the last to be removed. The Stack is used when we have a pile of
items, and only work with its top item. The item on top is always the pile’s most recently inserted one. A Stack implementation must provide at least these two operations:
- `push(e)`: add an item `e` to the top of the stack,
- `pop()` retrieve and remove the item on top of the stack.

More "advanced" stacks may provide more operations: to check whether the stack is empty, or to get the number of items currently in the stack.

Processing data this way is know as **LIFO (Last-In, First-Out)**; we only ever remove items from the top, which always has the stack’s most recent insertion. 

The Stack is an important data type that occurs in many algorithms:
1. For implementing the "undo" feature in your text editor, every edition you make is pushed onto a stack. Should you want to undo, the text editor pops an edition from the stack and reverts it.
2. To implement backtracking without recursive algorithms, you must remember the sequence of choices that got you to the current spot in a stack. When exploring a new node, we push a reference to the node into a stack. To go back, simply `pop()` from the stack to get a reference of where to go back to.

#### Queue
The Queue is like Stack also used for storing and retrieving items, but the retrieved item is always the one in front of the Queue, i.e., the one that has been on the queue the longest, just like a real-life queue of people waiting in a restaurant! The Queue’s essential operations are:
- `enqueue(e)`: add an item `e` to the back of the queue,
- `dequeue()`: remove the item at the front of the queue.

The Queue works by organizing data the **FIFO** way (**First-In, First-Out**), because the first (and oldest) item that was inserted in the
queue is always the first to leave the queue.

Queues are used in many computing scenarios. If you are implementing an online pizza service, you will likely store the pizza orders in a queue.

#### Priority Queue
Removes element with highest priority.

The Priority Queue is similar to the Queue, with the difference that enqueued items must have an assigned priority. 

People waiting for medical attention in a hospital is a real life example of a Priority Queue. The urgent cases receive top priority and go directly to the front of the queue, whereas the minor cases are added to the bottom of the queue. These are the Priority Queue’s operations:
- `enqueue(e, p)`: add an item `e` to the queue according to the priority level `p`,
- `dequeue()`: remove the item at the front of the queue and return it.

In a computer there are typically many running processes but only one (or a few) CPUs to execute them. An operating system organizes all these processes waiting for execution in a Priority Queue. Each process waiting in the queue is assigned a priority level. The operating system dequeues a process and lets it run for a little while. Afterwards, if the process isn't finished it gets enqueued again. The operating system keeps repeating this. Some processes are more time-sensitive and get immediate CPU time, others wait in the queue longer. The process that gets input from the keyboard typically receives a super-high priority. If the keyboard stops responding, the user might believe the computer crashed and try to cold-restart it, which is never good.

Used in:
- Dijkstra’s algorithm
- Heapsort

#### List
When storing a bunch of items, you sometimes need more flexibility. For instance, you could want to freely reorder the items; or to access, insert and remove items at any position. In these cases, the List is handy. 

Commonly defined operations in a List ADT include:
- `insert(n, e)`: insert the item `e` at position `n`,
- `remove(n)`: remove the item at position `n`,
- `get(n)`: get the item at position n,
- `sort()`: sort the items in the list,
- `slice(start, end)`: return a sub-list slice starting at the position start up until the position end,
- `reverse()`: reverse the order of the list.

The List is one of the most used ADTs. For instance, if you need to store links to the most frequently accessed files in a system, a list is ideal: you can sort the links for display purposes, and remove links at will as the corresponding files become less frequently accessed.

The Stack or Queue should be preferred when the flexibility of List isn’t needed. Using a simpler ADT ensures data is handled in a strict and robust way (FIFO or LIFO). It also makes the code easier to understand: knowing a variable is a Stack helps to see how data flows in and out.

#### Sorted List
The **Sorted List** is useful when you need to maintain an always sorted list of items. In these cases, instead of figuring out the right position before each insertion in the list (and manually sorting it periodically), we use a Sorted List. Its insertions always keep the list sorted. None of its operations allow reordering its items: the list is guaranteed to be always sorted. 

The Sorted List has fewer operators than the List:
- `insert(e)`: insert item `e` at the right position in the list,
- `remove(n)`: remove the item at the position n in the list,
- `get(n)`: get the item at position n.

#### Map
**Map** is a data structure that associates keys to values.

The **Map (aka Dictionary)** is used to store mappings between two objects: a key object and a value object. You can query a map with a key and get its associated value. 

For instance, you might use a map to store a user’s ID number as key, and its full name as value. Then, given the ID number of a user, the map returns the related name. 

The operations for the Map are:
- `set(key, value)`: add a key-value mapping,
- `delete(key)`: remove key and its associated value,
- `get(key)`: retrieve the value that was associated to key

#### Set
**Set** is a collection with no duplicates.

The **Set** represents unordered groups of unique items, like mathematical sets. They’re used when the order of items you need to store is meaningless, or if you must ensure no items in the group occurs more than once. 

The common Set operations are:
- `add(e)`: add an item to the set or produce an error if the item is already in the set,
- `list()`: list the items in the set,
- `delete(e)`: remove an item from the set.

#### Comparison of Classic Abstract Data Types (ADTs)
All these ADTs differ primarily in:
1. Access restriction
2. Ordering rule
3. Uniqueness constraint
4. Performance contract

Their implementations differ, but their identity is defined by behavioral specification.

We can think of ADTs forming a hierarchy based on constraints.
```
                  Collection
                      |
          --------------------------------
          |                              |
      Sequence                        Unordered
          |                              |
    -------------                 --------------
    |           |                 |            |
    List     Restricted          Set          Map
              Sequence            |
         (Access limited)         |
          -----------             |
          |         |             |
          Stack      Queue    Ordered Variant
                                  |
                            Sorted Set / Tree
```
Priority Queue can be viewed as:
- An ordered multiset
- With restricted access (only min/max visible)

Sorted List is:
- List + ordering invariant

Map is:
- Set of (key,value) pairs
- With key uniqueness

All these ADTs can be understood as variations of:
1. A collection
2. **Plus constraints**:
    * Order constraint
    * Access constraint
    * Uniqueness constraint
    * Priority constraint
    * Key-mapping constraint

Different constraints → different algorithmic power.

| ADT                  | Logical Model                  | Ordering Rule                      | Core Operations                        | Access Pattern                     | Typical Implementation      | Typical Time Complexity*                 |
| -------------------- | ------------------------------ | ---------------------------------- | -------------------------------------- | ---------------------------------- | --------------------------- | ---------------------------------------- |
| **Stack**            | LIFO collection                | Last-In-First-Out                  | `push`, `pop`, `top`, `empty`          | Only top element visible           | Array, Linked List          | push/pop: O(1)                           |
| **Queue**            | FIFO collection                | First-In-First-Out                 | `enqueue`, `dequeue`, `front`, `empty` | Front & rear only                  | Circular array, Linked List | enqueue/dequeue: O(1)                    |
| **Priority Queue**   | Collection ordered by priority | Highest (or lowest) priority first | `insert`, `extract-min/max`, `peek`    | Only best-priority element visible | Binary Heap, Fibonacci Heap | insert: O(log n), extract: O(log n)      |
| **List**             | Ordered sequence               | Insertion order preserved          | `insert`, `delete`, `get(i)`, `set(i)` | Random access allowed              | Dynamic Array, Linked List  | get(i): O(1) (array), O(n) (linked list) |
| **Sorted List**      | Ordered sequence               | Always sorted                      | `insert`, `delete`, `search`           | Ordered traversal                  | Balanced BST, Sorted Array  | search: O(log n)                         |
| **Map (Dictionary)** | Key → Value mapping            | No ordering required               | `put`, `get`, `remove`, `containsKey`  | Access by key only                 | Hash Table, Balanced BST    | average O(1) (hash), O(log n) (tree)     |
| **Set**              | Collection of unique elements  | No duplicates                      | `add`, `remove`, `contains`            | Membership testing                 | Hash Set, Balanced BST      | average O(1) (hash), O(log n) (tree)     |

1️⃣ Stack vs Queue
Both restrict access.
- Stack → depth-first behavior
- Queue → breadth-first behavior
They differ only in removal policy, yet this small rule leads to completely different algorithms (DFS vs BFS).

2️⃣ List vs Sorted List
Regular List:
- Preserves insertion order
- Allows arbitrary indexing
- No automatic ordering
Sorted List:
- Maintains sorted invariant
- Inserts may be expensive
- Searching becomes faster
Tradeoff:
Maintaining order costs insertion time.

3️⃣ Map vs Set
Map:
- Stores (key, value) pairs
- Key uniqueness required
Set:
- Stores only elements
- Essentially a Map where value is irrelevant
In Python:
- dict implements Map
- set implements Set

4️⃣ Priority Queue vs Sorted List
Both give access to smallest/largest element.
| Priority Queue                           | Sorted List                      |
| ---------------------------------------- | -------------------------------- |
| Only best element accessible efficiently | All elements accessible in order |
| Often heap-based                         | Often tree or sorted array       |
| Optimized for repeated extract-min       | Optimized for ordered traversal  |

**Abstract Behavioral Comparison**

| ADT            | Visibility Restriction | Invariant Maintained   |
| -------------- | ---------------------- | ---------------------- |
| Stack          | Only top visible       | LIFO order             |
| Queue          | Only front visible     | FIFO order             |
| Priority Queue | Only min/max visible   | Heap or priority order |
| List           | All positions visible  | Sequence structure     |
| Sorted List    | All positions visible  | Sorted order           |
| Map            | Only by key            | Key uniqueness         |
| Set            | Only membership        | Element uniqueness     |

**Mathematical Perspective**
- Stack and Queue → restricted sequences
- List → full sequence
- Sorted List → ordered sequence with invariant
- Map → partial function from Keys → Values
- Set → mathematical set
- Priority Queue → ordered multiset with restricted access

**Memory Usage Patterns Comparison**
| ADT                | Typical Implementation       | Memory Layout                      | Extra Metadata             | Growth Behavior         | Cache Friendliness           | Overhead Level |
| ------------------ | ---------------------------- | ---------------------------------- | -------------------------- | ----------------------- | ---------------------------- | -------------- |
| **Stack**          | Array / Linked List          | Contiguous (array) or nodes        | Top index / pointer        | Grows linearly          | Excellent (array)            | Low            |
| **Queue**          | Circular array / Linked List | Contiguous (array) or nodes        | Front & rear indices       | May wrap (circular)     | Good (array)                 | Low–Medium     |
| **Priority Queue** | Binary Heap                  | Contiguous array                   | Heap structure implicit    | Grows dynamically       | Good                         | Medium         |
| **List**           | Dynamic Array                | Contiguous block                   | Capacity tracking          | Resizes (often doubles) | Excellent                    | Medium         |
| **Sorted List**    | Sorted Array / BST           | Contiguous (array) or nodes (tree) | Order invariant            | May shift elements      | Array: Excellent, Tree: Poor | Medium–High    |
| **Map**            | Hash Table                   | Array of buckets                   | Hash function, load factor | Resizes when load high  | Good (hash), Poor (tree)     | Medium         |
| **Set**            | Hash Table / BST             | Same as Map without values         | Same as Map                | Same as Map             | Same as Map                  | Medium         |

Key Memory Observations
- Contiguous structures (arrays, heaps, dynamic arrays)
    * better cache locality
    * fewer pointer dereferences
- Node-based structures (linked lists, trees)
    * higher pointer overhead
    * fragmented memory
    * worse cache performance
- Hash-based structures
    * extra unused capacity
    * memory tradeoff for O(1) access

<!--If you'd like, we can go even deeper into:
- Algebraic vs operational specification of ADTs
- Persistent (immutable) ADTs
- ADTs in functional programming
- Category-theoretic view of ADTs
- Or amortized analysis of ADT operations-->

### Algorithms and Their Required ADTs
| Algorithm                  | Required ADT         | Why                           |
| -------------------------- | -------------------- | ----------------------------- |
| Depth-First Search (DFS)   | Stack                | LIFO exploration              |
| Breadth-First Search (BFS) | Queue                | FIFO frontier                 |
| Dijkstra’s Algorithm       | Priority Queue       | Extract-min repeatedly        |
| Heapsort                   | Priority Queue       | Heap property                 |
| Merge Sort                 | List                 | Sequential merging            |
| Binary Search              | Sorted List          | Ordered structure             |
| Hash Join                  | Map                  | Fast key lookup               |
| Kruskal’s Algorithm        | Set + Priority Queue | Disjoint sets + edge ordering |
| Topological Sort           | Queue / Stack        | Process zero in-degree nodes  |
| Expression Evaluation      | Stack                | Nested structure resolution   |

Algorithms are often defined in terms of ADTs, not implementations.

Example: Dijkstra requires a structure supporting extract-min and decrease-key. That defines the ADT contract — not the heap type.

## The 12 most important data structures every algorithms expert must master
- Array
- Linked List
- Stack
- Queue
- Hash Table
- Binary Search Tree
- Heap (Priority Queue)
- Balanced Binary Tree (e.g., AVL / Red-Black Tree)
- B-Tree
- Trie (Prefix Tree)
- Disjoint Set (Union–Find)
- Graph
