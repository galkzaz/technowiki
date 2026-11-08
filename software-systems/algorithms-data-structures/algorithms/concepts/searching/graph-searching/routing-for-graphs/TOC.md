Single-Source Shortest Path (SSSP) and Dijkstra’s Algorithm belong under the Graph Algorithms section of Data Structures and Algorithms, specifically within Graph Algorithms → Shortest Path Algorithms.

I recommend organizing them after Graph Traversal Algorithms (BFS and DFS).

## 1. Where they fit in the DSA roadmap

```
Data Structures and Algorithms
│
├── Data Structures
│   ├── Linear Data Structures
│   ├── Trees
│   ├── Heaps
│   ├── Hash Tables
│   └── Graphs
│
└── Algorithms
    │
    ├── Searching Algorithms
    │   ├── Linear Search
    │   └── Binary Search
    │
    ├── Sorting Algorithms
    │   ├── Quick Sort
    │   ├── Merge Sort
    │   └── Heap Sort
    │
    └── Graph Algorithms
        │
        ├── Graph Traversal
        │   ├── Breadth-First Search (BFS)
        │   └── Depth-First Search (DFS)
        │
        ├── Connectivity Algorithms
        │   ├── Connected Components
        │   └── Strongly Connected Components
        │
        ├── Shortest Path Algorithms
        │   ├── Shortest Path Fundamentals
        │   ├── Single-Source Shortest Path (SSSP)
        │   ├── Dijkstra's Algorithm
        │   ├── Bellman-Ford Algorithm
        │   ├── Shortest Path in DAGs
        │   └── All-Pairs Shortest Path (APSP)
        │       └── Floyd-Warshall Algorithm
        │
        ├── Minimum Spanning Tree (MST)
        │   ├── Prim's Algorithm
        │   └── Kruskal's Algorithm
        │
        └── Network Flow Algorithms
            ├── Ford-Fulkerson
            └── Edmonds-Karp
```

## 2. Relationship between SSSP and Dijkstra

These terms represent different levels of abstraction.

| Concept               | Meaning                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Shortest Path Problem | Find a minimum-cost path between vertices.                                                                               |
| SSSP                  | Find shortest paths from one source vertex to every reachable vertex.                                                    |
| Dijkstra              | An algorithm that solves SSSP for graphs with non-negative edge weights.                                                 |
| Bellman-Ford          | An algorithm that solves SSSP and supports negative edge weights (provided there is no reachable negative-weight cycle). |
| APSP                  | Find shortest paths between every pair of vertices.                                                                      |

Think of SSSP as the problem, and Dijkstra as one of the algorithms that solves that problem.

## 3. Recommended learning sequence

I would follow this order:

| Order | Topic                             | What you learn                                 |
| ----- | --------------------------------- | ---------------------------------------------- |
| 1     | Shortest Path Fundamentals        | Paths, path costs, weighted graphs, relaxation |
| 2     | Single-Source Shortest Path       | Problem definition and requirements            |
| 3     | BFS for Unweighted Shortest Paths | Shortest paths when all edges have equal cost  |
| 4     | Dijkstra's Algorithm              | Shortest paths with non-negative weights       |
| 5     | Priority Queue / Min-Heap         | Efficient vertex selection                     |
| 6     | Bellman-Ford                      | Handling negative edge weights                 |
| 7     | Shortest Paths in DAGs            | Topological ordering and relaxation            |
| 8     | All-Pairs Shortest Path           | Shortest paths between all vertex pairs        |
| 9     | Floyd-Warshall                    | Dynamic programming for APSP                   |

## 4. Important distinction: BFS vs Dijkstra

Both BFS and Dijkstra can solve SSSP, but they work under different conditions.

Consider this weighted graph:

```
        2
   A -------- B
   |          |
  10          3
   |          |
   C -------- D
        1
```

- BFS minimizes the number of edges (hops).
- Dijkstra minimizes the sum of edge weights (total cost).

For example, from A to D:

- A → B → D: cost = 2 + 3 = 5
- A → C → D: cost = 10 + 1 = 11

Dijkstra finds the path with cost 5.

One important point: BFS is a special-case solution for SSSP when all edges have equal weights. Dijkstra generalizes this to non-negative weighted graphs.

## 5. Suggested Docusaurus directory structure

For your DSA documentation, I would use:

```
algorithms/
└── graph-algorithms/
    ├── graph-traversal/
    │   ├── overview.mdx
    │   ├── breadth-first-search.mdx
    │   └── depth-first-search.mdx
    │
    ├── connectivity/
    │   ├── connected-components.mdx
    │   └── strongly-connected-components.mdx
    │
    ├── shortest-path/
    │   ├── overview.mdx
    │   ├── shortest-path-fundamentals.mdx
    │   ├── single-source-shortest-path.mdx
    │   ├── dijkstra.mdx
    │   ├── bellman-ford.mdx
    │   ├── dag-shortest-path.mdx
    │   └── all-pairs-shortest-path.mdx
    │
    ├── minimum-spanning-tree/
    │   ├── overview.mdx
    │   ├── prim.mdx
    │   └── kruskal.mdx
    │
    └── network-flow/
        ├── overview.mdx
        └── ford-fulkerson.mdx
```

My recommendation: Keep `single-source-shortest-path.mdx` as the conceptual introduction and `dijkstra.mdx` as a separate algorithm implementation/tutorial. This makes it easier to introduce Bellman-Ford and other SSSP algorithms without repeating the fundamentals.