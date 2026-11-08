You're right to distinguish between the graph data structure and the BFS algorithm. If your BFS chapter spends most of its time explaining queues, adjacency lists, visited arrays, and parent arrays, it can feel like a data-structures chapter rather than an algorithm chapter.

The solution is not to remove those concepts, but to treat them as supporting mechanisms and focus the chapter on BFS's behavior, correctness, properties, and applications.

## 1. What should a BFS algorithm chapter focus on?

Think of the topics as three layers:

### Graph Data Structure

How the graph is represented and stored

Adjacency lists · Adjacency matrices · Vertices · Edges

### BFS Algorithm

How the search explores the graph and why it works

Traversal · Invariants · Correctness · Complexity · Shortest paths

### BFS Applications

What we can solve using BFS

Shortest paths · Reachability · Connected components · Bipartite testing

The queue is a supporting data structure. The central algorithmic idea is that BFS explores vertices in nondecreasing order of their distance from the source.

That property is what makes BFS useful for shortest paths in unweighted graphs.

## 2. Recommended BFS table of contents

For your TechnoWiki documentation, I'd structure the BFS chapter like this.

```
graph-algorithms/
└── graph-search/
    ├── overview.mdx
    └── breadth-first-search/
        ├── overview.mdx
        ├── algorithm.mdx
        ├── correctness.mdx
        ├── complexity.mdx
        ├── shortest-paths.mdx
        ├── applications.mdx
        ├── variants.mdx
        ├── implementation-c.mdx
        └── implementation-java.mdx
```

Here is what belongs in each page.

### `overview.mdx` — Understand the algorithm

1. What BFS solves
2. The central idea: explore level by level
3. A small graph traversal example
4. BFS versus DFS — conceptual difference
5. When BFS is appropriate and when it is not

Keep queue explanations short here. Refer to the queue data structure page if the reader needs to learn how a queue works.

### `algorithm.mdx` — The algorithm itself

1. Inputs and outputs
2. BFS pseudocode
3. Initialization
4. Main loop and neighbor exploration
5. The role of discovery and visited marking
6. The BFS traversal order
7. A step-by-step execution trace
8. Handling disconnected graphs
9. Directed versus undirected graphs

This should be the core of the chapter.

### `correctness.mdx` — Why BFS works

1. BFS levels and distance from the source
2. The invariant: vertices are processed in nondecreasing distance order
3. Why a vertex is discovered at its shortest distance
4. Proof sketch by induction on distance
5. Why marking a vertex on discovery prevents repeated exploration
6. Assumptions and limitations

This is one of the most important differences between documenting an algorithm and merely documenting its implementation.

### `complexity.mdx` — Analyze its efficiency

1. Time complexity: $O(V+E)$ with adjacency lists
2. Space complexity: $O(V)$ auxiliary space
3. Why every vertex is discovered at most once
4. Why each edge is examined at most twice in an undirected adjacency-list representation
5. Adjacency matrix versus adjacency list
6. Output-sensitive considerations and implementation overhead

### `shortest-paths.mdx` — The key algorithmic property

1. Why BFS finds shortest paths in unweighted graphs
2. Distance array
3. Parent/predecessor array
4. Reconstructing a path
5. Unreachable destinations
6. Example: minimum number of flights
7. Why ordinary BFS does not solve general weighted shortest-path problems
8. When to use 0–1 BFS or Dijkstra's algorithm instead

### `applications.mdx` — Problems solved by BFS

1. Reachability
2. Shortest paths in unweighted graphs
3. Connected components in undirected graphs
4. Bipartite graph checking
5. Multi-source BFS
6. Grid and maze traversal
7. Minimum-move problems
8. Social networks and degrees of separation

### `variants.mdx` — Adaptations of BFS

1. BFS from multiple sources
2. BFS for disconnected graphs
3. Reverse-graph BFS
4. Bidirectional BFS
5. Level-limited BFS
6. BFS on implicit graphs, such as state spaces

### Implementation pages

Keep implementation-specific details here:

- C: queue implementation, arrays, memory management, debug output.
- Java: `Queue`, `ArrayDeque`, graph representation, tests, and path reconstruction.
- Edge cases and implementation-specific pitfalls.

This keeps language details from dominating the conceptual algorithm pages.

## 3. What to move out of the BFS chapter

| Topic                                    | Best location             | Treatment in BFS                                        |
| ---------------------------------------- | ------------------------- | ------------------------------------------------------- |
| Graph terminology                        | Graph Data Structure      | Brief reference                                         |
| Adjacency list and matrix implementation | Graph Data Structure      | Explain how representation affects complexity           |
| Queue implementation                     | Queue Data Structure      | Explain why BFS uses FIFO                               |
| Generic visited arrays                   | Graph Search Fundamentals | Explain when BFS marks vertices                         |
| Generic parent arrays                    | Graph Search Fundamentals | Show how BFS uses parents to reconstruct shortest paths |
| BFS traversal and pseudocode             | BFS Algorithm             | Main focus                                              |
| BFS correctness proof                    | BFS Correctness           | Main focus                                              |
| BFS complexity analysis                  | BFS Complexity            | Main focus                                              |
| Shortest-path reconstruction             | BFS Shortest Paths        | Main focus                                              |
| C/Java implementations                   | BFS Implementation        | Concrete code and tests                                 |

You do not need to explain how to implement a queue from scratch in every algorithm that uses one. Link to the queue page and explain only why its FIFO behavior matters to BFS.

## 4. The central idea to emphasize: BFS levels

Consider this graph:

```
        A
       / \
      B   C
     / \   \
    D   E   F
         \
          G
```

Starting at `A`, BFS explores the graph by distance:

```
Distance 0: A
Distance 1: B, C
Distance 2: D, E, F
Distance 3: G
```

The exact order within a level depends on neighbor ordering, but BFS never processes a vertex at distance $k+1$ before all vertices at distance $k$ have been processed.

That is the algorithm's defining property.

It follows that, in an unweighted graph, when BFS first discovers a vertex, the path used to reach it has the minimum possible number of edges.

The queue makes this order possible; the level-order property is the algorithmic result.

## 5. A practical rule for writing every BFS section

For each topic, ask:

- Is this explaining how the graph is stored? Put it under Graph Data Structure.
- Is this explaining a reusable search concept? Put it under Graph Search Fundamentals.
- Is this explaining why BFS behaves as it does, why it is correct, or what it can solve? Keep it under BFS Algorithm.
- Is this explaining language syntax, memory management, or concrete code? Put it under BFS Implementation.

My recommendation is to make `algorithm.mdx`, `correctness.mdx`, `complexity.mdx`, and `shortest-paths.mdx` the conceptual heart of BFS. The implementation pages should demonstrate those ideas rather than introduce them for the first time.