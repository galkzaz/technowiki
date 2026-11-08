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

## Importance of Data Structures
data structures are fundamental building blocks of applications, and their selection affects much more than the execution time of individual algorithms.

Data structures are not simply ways to store data; they directly influence an application's performance, predictability, maintainability, and overall design.

Data structures are important components that contribute to, or detract from, the performance of our
Java applications. They are foundational parts that are used throughout our programs and can help us
organize and manipulate data efficiently. Data structures are essential for optimizing the performance
of our Java applications because they can ensure that our data access, memory management, and
caching are efficient. Proper use of data structures can lead to algorithm efficiency, the scalability of
our solutions, and the safety of our threads.

The significance of data structures can be evidenced by reducing the time complexity of operations.
With proper data structure implementation, we can improve the predictability and consistency of
our application’s performance. In addition to improving the performance of our Java applications,
properly chosen data structures result in increased code readability, making them easier to maintain.

### Impact on Application Performance
Data structures contribute to or detract from application performance

Data structures are used throughout an application, from storing user information to managing requests, caching database results, and processing messages.

The choice of data structure can improve or degrade performance depending on the operations being performed.

For example, consider storing users and retrieving them by ID.

Using ArrayList:

```
List<User> users = new ArrayList<>();

User findUser(long id) {
    for (User user : users) {
        if (user.getId() == id) {
            return user;
        }
    }

    return null;
}
```

Searching requires $O(n)$ time.

Using HashMap:

```
Map<Long, User> users = new HashMap<>();

User findUser(long id) {
    return users.get(id);
}
```

Searching takes $O(1)$ average time.

If this operation is executed thousands of times per second, choosing the appropriate data structure can have a significant impact.

### Data structures are foundational components

Data structures aren't isolated components used only when implementing algorithms. They are present throughout the app ecosystem.

Consider some common Java classes:

| Java class      | Underlying data structure | Purpose                         |
| --------------- | ------------------------- | ------------------------------- |
| `ArrayList`     | Dynamic array             | Resizable indexed collection    |
| `LinkedList`    | Doubly linked list        | Sequential collection and deque |
| `HashMap`       | Hash table                | Key-value lookup                |
| `TreeMap`       | Red-Black Tree            | Sorted key-value mapping        |
| `HashSet`       | Hash table                | Unique elements                 |
| `PriorityQueue` | Binary heap               | Priority-based processing       |
| `ArrayDeque`    | Resizable circular array  | Stack and queue operations      |

For example, when you use:

```
Map<String, Integer> productStock = new HashMap<>();

productStock.put("Laptop", 15);
productStock.put("Monitor", 30);

int stock = productStock.get("Laptop");
```

You are benefiting from the underlying hash table implementation without needing to implement hashing, collision handling, resizing, or bucket management yourself.

This is one of the main advantages of understanding data structures: you can select the appropriate Java abstraction while understanding its internal behavior.

### Efficient data access

Data access refers to how efficiently an application retrieves, searches, inserts, updates, and deletes information.

Different data structures optimize different access patterns.

Consider these examples:

| Operation                       | Suitable data structure | Complexity         |
| ------------------------------- | ----------------------- | ------------------ |
| Access element by index         | ArrayList               | $O(1)$         |
| Search by key                   | HashMap                 | $O(1)$ average |
| Search in sorted data           | TreeMap                 | $O(\log n)$    |
| Retrieve minimum element        | PriorityQueue           | $O(1)$         |
| Insert into a priority queue    | PriorityQueue           | $O(\log n)$    |
| Check whether an element exists | HashSet                 | $O(1)$ average |

The important idea is that you should select a data structure according to the operations your application performs most frequently.

For example, if your application frequently retrieves products by product ID, a `HashMap` is generally more appropriate than an `ArrayList`.

### Efficient memory management

Data structures influence how data is organized and stored in memory.

Different implementations have different memory requirements.

Consider an `ArrayList` and a `LinkedList`.

ArrayList — Dynamic Array

```
Array
+------+------+------+------+
|  10  |  20  |  30  |  40  |
+------+------+------+------+
  [0]    [1]    [2]    [3]
```

- Stores references in a contiguous backing array.
- Provides efficient indexed access: $O(1)$.
- May allocate a larger backing array when capacity is exhausted.
- Has relatively low per-element overhead.

LinkedList — Doubly Linked List

```
null <- [10] <-> [20] <-> [30] -> null
         |        |        |
      prev/next prev/next prev/next
```

- Each node stores an element reference and two node references.
- Does not require a contiguous backing array.
- Has additional memory overhead per node.
- Indexed access requires $O(n)$ traversal.

This illustrates an important trade-off:

- Arrays provide better memory locality and usually better cache utilization.
- Linked lists provide efficient insertion and removal when the relevant node is already located, but incur additional memory overhead.

Important: A linked list is not automatically more memory-efficient simply because it allocates nodes individually.

### Efficient caching

Caching is an important technique for improving application performance by storing frequently accessed data so it can be retrieved without repeatedly performing expensive operations.

Data structures are fundamental to implementing caches.

For example, imagine a Java application that frequently retrieves product information from a database.

Instead of querying the database every time, we can maintain an in-memory cache.

```
Map<Long, Product> cache = new HashMap<>();

Product getProduct(long id) {

    Product product = cache.get(id);

    if (product != null) {
        return product;
    }

    product = database.findProductById(id);

    if (product != null) {
        cache.put(id, product);
    }

    return product;
}
```

Here:

- `HashMap` provides efficient lookup.
- Cache hits avoid database queries.
- Cache misses retrieve data from the database and populate the cache.

However, this implementation does not limit cache size or handle expiration.

A more advanced implementation could use an LRU (Least Recently Used) cache.

An LRU cache removes the least recently accessed entry when the cache reaches its capacity.

A common implementation combines:

- `HashMap` for $O(1)$ average lookup.
- Doubly linked list for $O(1)$ removal and movement of entries.

LRU Cache structure

```
     HashMap
+----------------+
| Key -> Node    |
+----------------+
     |     |
     v     v
+------+  +------+
| Node |<->| Node |
+------+  +------+
     ^       ^
     |       |
    LRU     MRU
```

LRU = Least Recently Used · MRU = Most Recently Used

This is a good example of combining multiple data structures to achieve better performance.

### Algorithm efficiency

Data structures and algorithms are closely related.

An algorithm describes how to solve a problem, while a data structure determines how the required data is organized and accessed.

The efficiency of an algorithm often depends on the underlying data structure.

For example, consider Dijkstra's shortest-path algorithm.

There are two common implementations:

| Implementation                | Data structure                   | Time complexity      |
| ----------------------------- | -------------------------------- | -------------------- |
| Linear-scan implementation    | Array for distances              | $O(V^2 + E)$     |
| Priority-queue implementation | Min-priority queue (binary heap) | $O((V+E)\log V)$ |

Where:

- $V$ = number of vertices.
- $E$ = number of edges.

The priority queue allows the algorithm to efficiently retrieve the unprocessed vertex with the smallest tentative distance.

This demonstrates how selecting a suitable data structure can improve the efficiency of an algorithm without changing the fundamental problem being solved.

### Scalability of solutions

Scalability refers to an application's ability to handle increasing workloads without unacceptable performance degradation.

Consider an application that initially handles 1,000 users but eventually needs to handle 1,000,000 users.

An inefficient data structure can become a bottleneck as the dataset grows.

For example:

- Using an `ArrayList` for frequent membership checks can result in $O(n)$ searches.
- Using a `HashSet` provides $O(1)$ average membership checks.
- Using a `TreeSet` provides $O(\log n)$ membership checks while maintaining sorted order.

However, scalability is not exclusively about time complexity. Memory consumption, garbage collection pressure, contention, and workload distribution also matter.

### Thread safety

This is particularly important in Java applications that use multiple threads.

A data structure that works correctly with one thread might produce incorrect results when accessed concurrently without proper synchronization.

Consider:

```
Map<String, Integer> counters = new HashMap<>();
```

Suppose two threads execute:

```
counters.put("requests",
    counters.getOrDefault("requests", 0) + 1);
```

Both threads might read the same previous value and overwrite each other's updates.

This is a race condition.

Java provides concurrent data structures designed for multithreaded environments.

| Data structure          | Java implementation     | Purpose                                             |
| ----------------------- | ----------------------- | --------------------------------------------------- |
| Concurrent hash table   | `ConcurrentHashMap`     | Concurrent key-value access                         |
| Blocking queue          | `ArrayBlockingQueue`    | Thread-safe bounded producer-consumer communication |
| Concurrent linked queue | `ConcurrentLinkedQueue` | Non-blocking concurrent queue                       |
| Copy-on-write array     | `CopyOnWriteArrayList`  | Read-heavy concurrent collections                   |
| Blocking deque          | `LinkedBlockingDeque`   | Concurrent operations at both ends                  |

For example:

```
Map<String, Integer> counters =
    new ConcurrentHashMap<>();

counters.merge("requests", 1, Integer::sum);
```

`merge()` performs the update atomically for the specified key.

This avoids the lost-update problem in the previous example.

Note that thread-safe data structures do not automatically make every multi-operation workflow atomic. The synchronization requirements still depend on the operation.

### Reducing time complexity of operations


Different data structures provide different time complexities for the same operation.

The significance of data structures can be evidenced by reducing the time complexity of operations.

For example, suppose we need to search for an element among $n$ elements.

Consider three data structures:

| Data structure     | Search operation | Time complexity    |
| ------------------ | ---------------- | ------------------ |
| Array (unsorted)   | Linear search    | $O(n)$         |
| Hash Table         | Search by key    | $O(1)$ average |
| Balanced BST (AVL) | Search by key    | $O(\log n)$    |

Suppose we have 1,000,000 elements:

- Array: potentially 1,000,000 comparisons.
- Hash Table: approximately one lookup on average (assuming a good hash function and distribution).
- AVL Tree: approximately 20 comparisons.

The difference becomes increasingly significant as the dataset grows.

Important: These complexities describe how the number of operations grows, not the exact execution time in milliseconds.

### Improving predictability and consistency of performance

Choosing an appropriate data structure doesn't just improve average performance; it can also make performance more predictable.

With proper data structure implementation, we can improve the predictability and consistency of our application’s performance.

Consider two implementations of a dictionary.

Implementation A: Unsorted Array

To find an element, we potentially need to inspect every element.

```
for (int i = 0; i < elements.length; i++) {
    if (elements[i].equals(target)) {
        return i;
    }
}
```

Time complexity:

$$
O(n)
$$

As the dataset grows, search time grows linearly.

Implementation B: Balanced Binary Search Tree (AVL)

An AVL tree maintains its balance through rotations during insertion and deletion.

Searching takes:

$$
O(\log n)
$$

Even as the dataset grows, the tree maintains a logarithmic search complexity.

This provides a more predictable upper bound on search operations.

However, an important distinction:

- Hash tables provide $O(1)$ average lookup but can degrade to $O(n)$ in the worst case.
- AVL trees guarantee $O(\log n)$ search, insertion, and deletion.

Therefore, when predictable worst-case performance matters, a balanced tree may be preferable to a hash table.

### Improving code readability and maintainability

Choosing the right data structure also makes code easier to understand.

Consider a scenario where we need to maintain a collection of unique users.

Approach A: Using an ArrayList

```
List<String> users = new ArrayList<>();

public boolean addUser(String username) {
    if (!users.contains(username)) {
        users.add(username);
        return true;
    }

    return false;
}
```

We must explicitly check whether the user already exists.

The `contains()` operation takes $O(n)$.

Approach B: Using a HashSet

```
Set<String> users = new HashSet<>();

public boolean addUser(String username) {
    return users.add(username);
}
```

The second implementation is simpler.

Why?

- A `Set` naturally represents unique elements.
- `HashSet.add()` handles duplicate detection internally.
- Average insertion complexity is $O(1)$.
- The code communicates its intention more clearly.

The data structure itself expresses the application's requirements.

This is an example of how choosing the right abstraction improves both performance and readability.

### Choosing the appropriate data structure

The best data structure depends on the operations your application performs most frequently.

| Requirement                              | Suitable data structure | Main advantage                        |
| ---------------------------------------- | ----------------------- | ------------------------------------- |
| Fast lookup by key                       | HashMap                 | Average $O(1)$ lookup             |
| Maintain unique elements                 | HashSet                 | Automatic duplicate handling          |
| Maintain sorted elements                 | TreeSet                 | Sorted order                          |
| Frequent insertion/removal at both ends  | Deque                   | Efficient operations at both ends     |
| Process elements in FIFO order           | Queue                   | First In, First Out                   |
| Process elements in LIFO order           | Stack                   | Last In, First Out                    |
| Maintain hierarchical data               | Tree                    | Represents parent-child relationships |
| Represent relationships between entities | Graph                   | Models connections and dependencies   |
| Frequent indexed access                  | Array / ArrayList       | $O(1)$ indexed access             |

### Practical Java example

Imagine implementing a user authentication service.

You need to retrieve a user by username.

Using an `ArrayList`:

```
User findUser(List<User> users, String username) {
    for (User user : users) {
        if (user.getUsername().equals(username)) {
            return user;
        }
    }

    return null;
}
```

Using a `HashMap`:

```
User findUser(Map<String, User> users, String username) {
    return users.get(username);
}
```

The difference:

| Aspect            | ArrayList           | HashMap            |
| ----------------- | ------------------- | ------------------ |
| Lookup            | $O(n)$          | $O(1)$ average |
| Worst-case lookup | $O(n)$          | $O(n)$         |
| Code intention    | Search a collection | Retrieve by key    |
| Memory overhead   | Generally lower     | Generally higher   |
| Best use          | Sequential access   | Key-based lookup   |

For an authentication service that frequently retrieves users by username, `HashMap` is generally a better choice.

### Important takeaway

 important areas where data structures influence Java applications.

| Area                 | How data structures contribute                                         |
| -------------------- | ---------------------------------------------------------------------- |
| Data access          | Efficient searching, insertion, deletion, and retrieval                |
| Memory management    | Control memory overhead and improve memory locality                    |
| Caching              | Store and retrieve frequently accessed data efficiently                |
| Algorithm efficiency | Improve algorithm complexity through appropriate underlying structures |
| Scalability          | Handle growing datasets and workloads                                  |
| Thread safety        | Support safe concurrent access and modification                        |

The relationship can be summarized as follows:

```
              Java Application
                     |
                     v
              Data Structures
                     |
       +-------------+-------------+
       |             |             |
       v             v             v
   Data Access    Memory       Concurrency
                 Management
       |             |             |
       +-------------+-------------+
                     |
                     v
             Algorithm Efficiency
                     |
                     v
               Scalability
                     |
                     v
          Application Performance
```
Treat these six areas as the practical motivations for studying data structures. When learning each structure, don't focus only on its implementation. Also understand its time complexity, space complexity, memory layout, typical Java use cases, and concurrency characteristics.

That will help you connect DSA concepts directly to real-world Java application development.

There are three major benefits of selecting appropriate data structures:

1. Performance: Reduce the computational complexity of operations.
2. Predictability: Choose structures with suitable average-case and worst-case performance guarantees.
3. Maintainability: Express application requirements naturally through appropriate data structures and abstractions.

One final point: The fastest data structure is not necessarily the best data structure.

You should consider:

- Time complexity.
- Space complexity.
- Frequency of operations.
- Memory overhead.
- Ordering requirements.
- Uniqueness requirements.
- Worst-case performance.
- Concurrency requirements.

The goal is to choose a data structure that best matches the application's actual workload and requirements.

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

Stored in: Array

Algorithm: Sorting

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
data structures provide concrete ways to organize data in computer memory. Different data structures require different operations for storing, deleting, searching, and running though stored data. There’s no silver bullet: you should choose which data structure to use according to the situation at hand.

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

instead of using data structures directly in our
code, it’s better to use Abstract Data Types. This isolates your code
from data manipulation details, and lets you easily switch the data
structure of your programs without changing any of the code.

Don’t reinvent the wheel by trying to create the basic data structures and abstract data types from scratch. Unless if you’re doing it for fun, for learning, or for research. Use third-party data handling libraries that were already well tested. Most languages have built-in support for these structures.

TODO: consider merge this with above topics on data srtcutre importance

This section explains why data structures matter, how they affect real software applications, and how to choose the appropriate data structure for a particular problem.

It is an introductory chapter. The goal is not to implement arrays, linked lists, trees, or hash tables yet. Instead, we want to understand the engineering reasons behind using them.

I'll explain each section with practical Java examples and show how the topics relate to one another.

## 1. Importance of Data Structures

This section answers a fundamental question:

Why do we need data structures, and why does choosing the right one matter?

Data structures organize information in memory and provide operations to manipulate that information. Their internal organization determines how efficiently those operations can be performed.

### 1.1. Impact on Application Performance

Application performance is influenced by how efficiently data is stored, accessed, searched, inserted, updated, and deleted.

Consider an application that manages one million customers. We frequently need to retrieve a customer using their ID.

We could use an `ArrayList`:

```
List<Customer> customers = new ArrayList<>();

Customer findCustomer(long id) {
    for (Customer customer : customers) {
        if (customer.getId() == id) {
            return customer;
        }
    }

    return null;
}
```

Or we could use a `HashMap`:

```
Map<Long, Customer> customers = new HashMap<>();

Customer findCustomer(long id) {
    return customers.get(id);
}
```

The difference:

| Characteristic        | ArrayList       | HashMap            |
| --------------------- | --------------- | ------------------ |
| Internal organization | Dynamic array   | Hash table         |
| Search by customer ID | $O(n)$      | $O(1)$ average |
| Access by index       | $O(1)$      | Not applicable     |
| Memory overhead       | Generally lower | Generally higher   |

If customer retrieval is performed frequently, `HashMap` is generally more appropriate.

However, if the application frequently accesses customers by their position, `ArrayList` might be preferable.

The important idea: Application performance depends not only on the algorithm we write but also on the data structure supporting that algorithm.

### 1.2. Reducing Time Complexity

Time complexity describes how the number of operations performed by an algorithm grows as the input size increases.

Choosing a suitable data structure can reduce the complexity of operations.

Consider searching for an element in a collection.

| Data structure | Search complexity  | Conditions                    |
| -------------- | ------------------ | ----------------------------- |
| Unsorted array | $O(n)$         | Linear search                 |
| Sorted array   | $O(\log n)$    | Binary search                 |
| Hash table     | $O(1)$ average | Good hashing and distribution |
| Balanced BST   | $O(\log n)$    | Tree remains balanced         |

Let's compare the growth of these complexities.

Growth of common time complexities

Illustrative operation counts as input size increases; not measured execution time.

O(1)O(log n)O(n)O(n log n)O(n²)

030M60M90M120M101001,00010,000

For example:

- Linear search examines elements one by one.
- Binary search eliminates approximately half of the remaining search space at each step.
- Hash table lookup uses a hash function to locate a bucket.

This is why understanding data structures is essential before studying algorithm optimization.

Important distinction: A data structure doesn't automatically improve every operation. A `HashMap` improves key-based lookup but doesn't provide sorted traversal or efficient range queries.

### 1.3. Performance Predictability and Consistency

Performance predictability means understanding how an operation behaves as the amount of data grows, including its worst-case behavior.

Consider two ways to implement a dictionary:

Hash table:

- Average search: $O(1)$.
- Worst-case search: $O(n)$ in the general hash-table model.
- Performance depends on hash distribution, collisions, and resizing.

AVL tree:

- Search: $O(\log n)$.
- Insertion: $O(\log n)$.
- Deletion: $O(\log n)$.

An AVL tree maintains its height logarithmic through rotations.

For example, with one million elements:

$$
\log_2(1,000,000) \approx 20
$$

An AVL tree therefore requires at most roughly 20 tree levels to search.

This makes its worst-case search complexity predictable.

Hash tables are often faster in practice for simple key lookups, but AVL trees offer stronger worst-case guarantees.

When does this matter?

- Real-time or latency-sensitive applications.
- High-throughput backend services.
- Systems handling large and unpredictable datasets.
- Applications with strict response-time requirements.

### 1.4. Code Readability and Maintainability

An appropriate data structure can make code simpler because its operations naturally express the application's requirements.

Consider maintaining unique usernames.

Using an `ArrayList`:

```
List<String> usernames = new ArrayList<>();

boolean addUsername(String username) {

    if (!usernames.contains(username)) {
        usernames.add(username);
        return true;
    }

    return false;
}
```

Using a `HashSet`:

```
Set<String> usernames = new HashSet<>();

boolean addUsername(String username) {
    return usernames.add(username);
}
```

The second implementation is simpler because `Set` already represents a collection of unique elements.

Compare the concepts:

| Requirement               | Appropriate abstraction |
| ------------------------- | ----------------------- |
| Unique elements           | Set                     |
| Key-value relationships   | Map                     |
| FIFO processing           | Queue                   |
| LIFO processing           | Stack                   |
| Priority-based processing | Priority Queue          |

The data structure communicates the intention of the code.

This improves:

- Readability.
- Maintainability.
- Reduction of unnecessary implementation logic.
- Reusability.
- Correctness by relying on established collection contracts.

## 2. Data Structures in Software Applications

The first section explained why data structures matter.

This section explains where and how data structures are used in actual software applications.

### 2.1. Data Structures as Foundational Components

Data structures are not limited to academic algorithm exercises. They are used throughout application architecture and the Java ecosystem.

Consider a typical Spring Boot application:

```
             Spring Boot Application
                       |
          +------------+------------+
          |            |            |
          v            v            v
      Controllers   Services    Repositories
          |            |            |
          +------------+------------+
                       |
                       v
                 Data Structures
                       |
       +---------------+---------------+
       |               |               |
       v               v               v
    HashMap          List           Queue
  User lookup    Query results   Async requests
```

Examples:

| Application component    | Possible data structure | Purpose                        |
| ------------------------ | ----------------------- | ------------------------------ |
| Authentication service   | HashMap                 | User lookup                    |
| Product service          | ArrayList               | Store query results            |
| Message processing       | Queue                   | Process incoming messages      |
| Task scheduling          | PriorityQueue           | Process tasks by priority      |
| Dependency management    | Graph                   | Represent dependencies         |
| Configuration management | Map                     | Store configuration properties |

Data structures are foundational because almost every application needs to organize and manipulate information.

### 2.2. Data Organization and Manipulation

Data organization describes how information is structured in memory.

Data manipulation describes the operations performed on that information.

The fundamental operations include:

1. Insertion.
2. Deletion.
3. Searching.
4. Access.
5. Updating.
6. Traversal.
7. Sorting.

Different data structures organize data differently.

For example:

Array:

```
Index:  0    1    2    3
       +----+----+----+----+
Array: | 10 | 20 | 30 | 40 |
       +----+----+----+----+
```

Elements are accessed using their indexes.

Linked List:

```
+----+    +----+    +----+
| 10 |--->| 20 |--->| 30 |
+----+    +----+    +----+
```

Elements are connected through references.

Binary Search Tree:

```
          50
         /  \
       30    70
      / \    / \
     20 40  60 80
```

Elements are organized according to ordering rules.

These different organizations determine how efficiently operations can be performed.

### 2.3. Data Access Efficiency

Data access efficiency concerns the cost of retrieving information from a data structure.

Different structures support different access patterns.

| Access pattern          | Suitable data structure | Complexity         |
| ----------------------- | ----------------------- | ------------------ |
| Access by index         | Array                   | $O(1)$         |
| Search by key           | HashMap                 | $O(1)$ average |
| Search by ordered key   | TreeMap                 | $O(\log n)$    |
| Access minimum priority | PriorityQueue           | $O(1)$         |
| Sequential traversal    | LinkedList              | $O(n)$         |
| Search in sorted array  | Array + binary search   | $O(\log n)$    |

Consider a product catalog.

If we need to retrieve products using their IDs, a map is suitable:

```
Map<Long, Product> products = new HashMap<>();

products.put(101L, new Product("Laptop"));
products.put(102L, new Product("Monitor"));

Product product = products.get(101L);
```

If we need to retrieve products in sorted order by their IDs, a `TreeMap` may be more suitable:

```
Map<Long, Product> products = new TreeMap<>();
```

The appropriate structure depends on how the application accesses its data.

### 2.4. Memory Management and Memory Efficiency

Data structures affect how objects and references are organized in the Java heap.

Their internal implementations have different memory requirements.

Consider `ArrayList` and `LinkedList`.

ArrayList:

```
ArrayList
    |
    v
Object[] backing array
+------+------+------+------+
| Ref1 | Ref2 | Ref3 | Ref4 |
+------+------+------+------+
   |      |      |      |
   v      v      v      v
  Obj1   Obj2   Obj3   Obj4
```

LinkedList:

```
Head
 |
 v
+------------------+
| Prev | Data | Next |
+------------------+
         |
         v
+------------------+
| Prev | Data | Next |
+------------------+
         |
         v
+------------------+
| Prev | Data | Next |
+------------------+
```

The differences:

| Characteristic   | ArrayList                   | LinkedList                   |
| ---------------- | --------------------------- | ---------------------------- |
| Storage          | Backing array of references | Individually allocated nodes |
| Extra references | Array slots                 | Previous and next references |
| Indexed access   | $O(1)$                  | $O(n)$                   |
| Memory locality  | Generally better            | Generally worse              |
| Memory overhead  | Generally lower             | Generally higher             |

Why does this matter?

In Java, objects are allocated on the heap, and references connect objects.

A linked list requires a separate node object for every element. This introduces additional object headers, references, and allocation overhead.

An `ArrayList` stores element references in an array, which usually provides better memory locality.

This can affect:

- Heap consumption.
- Garbage collection pressure.
- CPU cache utilization.
- Application throughput.

Important: Data structures influence memory usage, but they do not replace the JVM garbage collector or directly control heap allocation policies.

### 2.5. Caching and Data Retrieval

Caching stores frequently accessed information so that future requests can retrieve it without repeating expensive operations.

A common example is caching database query results.

```
Map<Long, Product> cache = new HashMap<>();

Product getProduct(long id) {

    Product product = cache.get(id);

    if (product != null) {
        return product;
    }

    product = database.findProductById(id);

    if (product != null) {
        cache.put(id, product);
    }

    return product;
}
```

The process:

```
          Client Request
                |
                v
          Search Cache
                |
          +-----+-----+
          |           |
        Found       Not Found
          |           |
          v           v
      Return       Query Database
      Cached           |
      Product          v
                    Store in Cache
                        |
                        v
                    Return Product
```

A more advanced example is an LRU cache.

LRU stands for Least Recently Used.

It removes the least recently accessed element when the cache reaches its capacity.

A typical LRU implementation combines:

- HashMap: Locate entries quickly.
- Doubly linked list: Maintain access order and remove entries efficiently.

This combination can provide $O(1)$ average lookup, insertion, and eviction operations.

## 3. Impact on Application Design and Scalability

This section goes beyond individual operations and examines how data structures influence the overall design and scalability of software systems.

### 3.1. Algorithm Efficiency

Algorithms and data structures are closely related.

An algorithm defines the steps required to solve a problem.

A data structure determines how the information required by that algorithm is organized and accessed.

Consider Dijkstra's shortest-path algorithm.

We can implement it using two different approaches.

Version 1: Linear Search

Use an array to store distances and find the unprocessed vertex with the smallest distance by scanning all vertices.

Time complexity:

$$
O(V^2 + E)
$$

Version 2: Priority Queue

Use a min-priority queue to retrieve the vertex with the smallest tentative distance.

With an indexed binary heap, the complexity can be:

$$
O((V+E)\log V)
$$

Where:

- $V$: Number of vertices.
- $E$: Number of edges.

The priority queue improves the efficiency of selecting the next vertex.

This is a practical demonstration of how choosing a different data structure can improve an algorithm.

### 3.2. Application Scalability

Scalability means the ability of an application to handle increasing workloads and datasets without unacceptable performance degradation.

Imagine a user management application growing from 1,000 users to 10 million users.

If every user lookup requires scanning an entire list, the increasing dataset can create a performance bottleneck.

Using a hash table can significantly improve average lookup performance.

However, scalability involves more than choosing a faster data structure.

You must also consider:

- Memory consumption.
- CPU utilization.
- Garbage collection.
- Concurrent access.
- Data distribution.
- Network and database overhead.

For example, an in-memory `HashMap` may be efficient for one application instance, but it does not automatically provide shared caching across multiple application instances.

For distributed caching, technologies such as Redis may be more appropriate.

### 3.3. Memory and Performance Trade-offs

A data structure that provides faster operations may consume more memory.

This is an important engineering trade-off.

Consider:

| Data structure | Performance advantage              | Memory consideration                   |
| -------------- | ---------------------------------- | -------------------------------------- |
| Array          | Fast indexed access                | May reserve unused capacity            |
| LinkedList     | Efficient local insertion/deletion | Additional node overhead               |
| HashMap        | Fast average lookup                | Buckets, nodes, and unused capacity    |
| AVL Tree       | Guaranteed logarithmic operations  | Node references and balancing metadata |
| Trie           | Efficient prefix searches          | Potentially large number of nodes      |

For example, a hash table provides fast key-based retrieval but needs additional memory to maintain its buckets and entries.

A sorted array may use less memory and provide efficient binary search, but insertion can require shifting many elements.

There is no universally optimal data structure.

The correct choice depends on the application's workload and resource constraints.

### 3.4. Concurrent Data Access

Modern Java applications frequently execute multiple threads simultaneously.

For example, a Spring Boot server may handle hundreds of HTTP requests concurrently.

Multiple threads might access the same shared collection.

Consider:

```
Map<String, Integer> counters = new HashMap<>();
```

Two threads may attempt to update the same counter simultaneously.

Without proper synchronization, updates can be lost.

This is a concurrency problem.

Java provides concurrent data structures:

| Data structure          | Java implementation     |
| ----------------------- | ----------------------- |
| Concurrent hash table   | `ConcurrentHashMap`     |
| Blocking queue          | `ArrayBlockingQueue`    |
| Concurrent linked queue | `ConcurrentLinkedQueue` |
| Copy-on-write list      | `CopyOnWriteArrayList`  |

For example:

```
Map<String, Integer> counters =
    new ConcurrentHashMap<>();

counters.merge("requests", 1, Integer::sum);
```

`ConcurrentHashMap` supports concurrent access and atomic per-key operations such as `merge()`.

Another common example is producer-consumer communication.

```
BlockingQueue<String> queue =
    new ArrayBlockingQueue<>(100);
```

The producer adds messages:

```
queue.put("OrderCreated");
```

The consumer retrieves messages:

```
String message = queue.take();
```

The blocking queue handles synchronization between producers and consumers.

### 3.5. Thread Safety

Thread safety is the ability of code or an object to behave correctly when accessed by multiple threads concurrently.

It is related to concurrent data access, but they are not exactly the same concept.

- Concurrent data access describes multiple threads accessing shared data.
- Thread safety describes whether that access is correctly coordinated.

Consider the following:

```
List<Integer> numbers =
    new ArrayList<>();
```

`ArrayList` is not designed for concurrent modification without external synchronization.

One possible alternative is:

```
List<Integer> numbers =
    new CopyOnWriteArrayList<>();
```

This collection creates a new backing array for modifications, making it suitable for workloads with many more reads than writes.

However, it has a performance cost for writes.

Another alternative is:

```
List<Integer> numbers =
    Collections.synchronizedList(
        new ArrayList<>()
    );
```

This synchronizes individual collection operations.

The important distinction is that thread safety is not free. Different concurrent data structures use different synchronization techniques and have different performance characteristics.

## 4. Choosing the Appropriate Data Structure

After understanding the importance and practical applications of data structures, we reach one of the most important topics:

How do we decide which data structure to use when solving a particular problem?

There is no single best data structure. The choice depends on application requirements and workload characteristics.

### 4.1. Application Requirements and Access Patterns

Start by identifying what your application needs to do with the data.

For example, consider an order management system.

| Requirement                          | Suitable data structure |
| ------------------------------------ | ----------------------- |
| Retrieve an order by ID              | HashMap                 |
| Maintain unique customer IDs         | HashSet                 |
| Process orders in arrival order      | Queue                   |
| Process urgent orders first          | PriorityQueue           |
| Maintain orders sorted by date       | TreeMap or sorted list  |
| Represent dependencies between tasks | Graph                   |

The most important question is:

Which operations will be performed most frequently?

If searching dominates, optimize for searching.

If insertion and deletion dominate, consider structures that support those operations efficiently.

If sorted traversal is required, choose a structure that maintains ordering.

### 4.2. Time and Space Complexity

Every data structure has time and space costs.

Consider:

| Data structure   | Search             | Insertion                              | Deletion                      |
| ---------------- | ------------------ | -------------------------------------- | ----------------------------- |
| Array (unsorted) | $O(n)$         | $O(n)$ at arbitrary position       | $O(n)$                    |
| ArrayList        | $O(n)$         | $O(1)$ amortized at end            | $O(n)$ at arbitrary index |
| LinkedList       | $O(n)$         | $O(1)$ when position/node is known | $O(1)$ when node is known |
| HashMap          | $O(1)$ average | $O(1)$ average                     | $O(1)$ average            |
| AVL Tree         | $O(\log n)$    | $O(\log n)$                        | $O(\log n)$               |

The complexity of insertion and deletion in a linked list deserves special attention: finding the target position still takes $O(n)$ if it is not already known.

Space complexity is equally important.

For example:

- Arrays generally have low per-element overhead.
- Linked lists require additional references for each node.
- Hash tables require bucket storage and may have unused capacity.
- Trees require references to child nodes and potentially parent nodes.

A suitable choice should balance execution time and memory consumption.

### 4.3. Memory Overhead

Memory overhead refers to the additional memory required by a data structure beyond the actual stored information.

For example, compare these structures:

```
Array:
+------+------+------+------+
| Ref1 | Ref2 | Ref3 | Ref4 |
+------+------+------+------+
```

```
Linked List:
+-------------+
| Prev | Next |
| Data        |
+-------------+
      |
      v
+-------------+
| Prev | Next |
| Data        |
+-------------+
```

Each linked-list node requires additional references.

A hash table also requires extra storage for its bucket array and entries.

This becomes important when an application stores millions of objects.

In Java, memory overhead can increase:

- Heap consumption.
- Garbage collection frequency.
- Object allocation costs.
- Memory fragmentation or locality-related costs.

Therefore, selecting a data structure should consider not only operation complexity but also its memory footprint.

### 4.4. Ordering and Uniqueness

Some applications require data to maintain a particular order or prevent duplicate values.

These requirements directly influence data structure selection.

Uniqueness

If duplicates are not allowed:

```
Set<String> usernames =
    new HashSet<>();
```

Sorted ordering

If elements must remain sorted:

```
Set<Integer> numbers =
    new TreeSet<>();
```

Insertion ordering

If elements should preserve insertion order:

```
Set<String> usernames =
    new LinkedHashSet<>();
```

Comparison:

| Structure     | Duplicates  | Ordering                      |
| ------------- | ----------- | ----------------------------- |
| ArrayList     | Allowed     | Insertion order               |
| HashSet       | Not allowed | No guaranteed iteration order |
| LinkedHashSet | Not allowed | Insertion order               |
| TreeSet       | Not allowed | Sorted order                  |
| HashMap       | Unique keys | No guaranteed iteration order |
| LinkedHashMap | Unique keys | Insertion order by default    |
| TreeMap       | Unique keys | Sorted key order              |

The ordering requirement is often more important than the raw performance difference.

### 4.5. Worst-Case Performance

Average-case complexity is useful, but it does not tell the entire story.

Consider `HashMap`.

- Average lookup: $O(1)$.
- Worst-case lookup: $O(n)$ in the general model.

Now consider an AVL tree:

\- Worst-case lookup: $O(\log n)$.

If an application requires predictable upper bounds, worst-case complexity becomes an important selection criterion.

Some examples:

| Requirement                       | Possible choice                               |
| --------------------------------- | --------------------------------------------- |
| Fast average lookup               | HashMap                                       |
| Guaranteed logarithmic lookup     | AVL Tree                                      |
| Sorted range queries              | TreeMap                                       |
| Constant-time indexed access      | ArrayList                                     |
| Bounded priority queue operations | Binary heap with suitable capacity management |

Also remember that Big-O worst-case bounds describe algorithmic growth, not guaranteed wall-clock latency. Runtime scheduling, memory allocation, garbage collection, and hardware also affect actual response times.

### 4.6. Concurrency Requirements

Finally, determine whether multiple threads will access the data structure.

Consider:

| Requirement                                | Suitable structure    |
| ------------------------------------------ | --------------------- |
| Single-threaded key-value storage          | HashMap               |
| Concurrent key-value storage               | ConcurrentHashMap     |
| Single-threaded queue                      | ArrayDeque            |
| Concurrent producer-consumer communication | BlockingQueue         |
| Read-heavy concurrent list                 | CopyOnWriteArrayList  |
| Concurrent non-blocking queue              | ConcurrentLinkedQueue |

For example, a Spring Boot application receiving requests from multiple threads might need to maintain shared counters.

A `ConcurrentHashMap` can be a suitable choice.

However, if multiple operations must be performed as one indivisible transaction, additional synchronization or a different design may be necessary.

## 5. Putting Everything Together: Data Structure Selection Workflow

The four sections are connected. They describe a decision-making process rather than four unrelated topics.

Consider a practical example: designing a task-processing system.

We need to process incoming tasks according to their priority.

Step 1: Identify requirements

- Store multiple tasks.
- Process the highest-priority task first.
- Insert new tasks dynamically.
- Retrieve and remove the highest-priority task.

Step 2: Identify access patterns

The most frequent operations are:

- Insert task.
- Retrieve highest-priority task.
- Remove highest-priority task.

Step 3: Evaluate possible structures

| Data structure     | Insert               | Retrieve highest priority | Remove highest priority |
| ------------------ | -------------------- | ------------------------- | ----------------------- |
| Unsorted ArrayList | $O(1)$ amortized | $O(n)$                | $O(n)$              |
| Sorted ArrayList   | $O(n)$           | $O(1)$                | $O(1)$              |
| Binary Heap        | $O(\log n)$      | $O(1)$                | $O(\log n)$         |

Step 4: Select the appropriate structure

A `PriorityQueue` is a natural choice:

```
PriorityQueue<Task> tasks =
    new PriorityQueue<>(
        Comparator.comparingInt(Task::getPriority)
    );
```

Assuming smaller priority values represent higher priority:

```
tasks.offer(new Task("Critical", 1));
tasks.offer(new Task("Normal", 5));
tasks.offer(new Task("Low", 10));

Task nextTask = tasks.poll();
```

The priority queue provides efficient priority-based processing.

If multiple threads need to access the queue, consider `PriorityBlockingQueue`, while accounting for its unbounded nature and the need for any required capacity control.

## 6. Final Summary

The entire chapter can be understood through four questions:

| Section                                         | Main question                             | What you learn                                                  |
| ----------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------- |
| 1. Importance of Data Structures                | Why do they matter?                       | Performance, complexity, readability, predictability            |
| 2. Data Structures in Software Applications     | Where are they used?                      | Data access, memory, caching, application components            |
| 3. Impact on Application Design and Scalability | How do they affect software architecture? | Algorithms, scalability, trade-offs, concurrency                |
| 4. Choosing the Appropriate Data Structure      | How do we select one?                     | Requirements, complexity, memory, ordering, worst-case behavior |

Recommended learning progression:

```
Why Data Structures Matter
          |
          v
Where They Are Used
          |
          v
How They Affect Application Design
          |
          v
How to Choose the Right Structure
          |
          v
Complexity Analysis
          |
          v
Fundamental Data Structures
          |
          v
Advanced Data Structures
          |
          v
Algorithms
```

One architectural recommendation for your TechnoWiki DSA documentation: keep this chapter relatively conceptual. Detailed explanations of JVM memory layout, garbage collection, Java concurrency mechanisms, and caching systems should have their own dedicated chapters or references. Here, focus on explaining how and why data structure choices influence those areas.