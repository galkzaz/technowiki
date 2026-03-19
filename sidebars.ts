import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
export default {
  CS: ["getting-started"],
  "digital-logic": [
    {
      type: "category",
      label: "Concepts",
      collapsible: true,
      collapsed: false,
      items: [
        "hardware-design/digital-logic/digital-logic",
        "hardware-design/digital-logic/concepts/number-systems-and-data-representation",
        "hardware-design/digital-logic/concepts/boolean-algebra-and-logic",
        "hardware-design/digital-logic/concepts/logic-gates",
        //'hardware-design/digital-logic/concepts/combinational-circuits',
        //'hardware-design/digital-logic/concepts/sequential-circuits',
        //'hardware-design/digital-logic/concepts/finite-state-machines',
        //'hardware-design/digital-logic/concepts/counters',
      ],
    },
    {
      type: "category",
      label: "Exams",
      collapsible: true,
      collapsed: true,
      items: [
        "hardware-design/digital-logic/exams/exams-number-systems-and-data-representation",
        "hardware-design/digital-logic/exams/exams-logic-gates",
      ],
    },
  ],
  "computer-organization": [
    "hardware-design/computer-organization/computer-organization",
    "hardware-design/computer-organization/concepts/history",
    {
      type: "category",
      label: "Technology Trends",
      items: [
        "hardware-design/computer-organization/concepts/technology-trends/silicon-technology",
        "hardware-design/computer-organization/concepts/technology-trends/moores-law",
        "hardware-design/computer-organization/concepts/technology-trends/implications-for-cpu-design",
      ],
    },
    {
      type: "category",
      label: "Performance",
      items: [
        "hardware-design/computer-organization/concepts/performance/computer-organization-performance",
        "hardware-design/computer-organization/concepts/performance/measuring-performance",
        "hardware-design/computer-organization/concepts/performance/amdahls-law",
        "hardware-design/computer-organization/concepts/performance/performance-fallacies",
        "hardware-design/computer-organization/concepts/performance/performance-pitfalls",
      ],
    },
    "hardware-design/computer-organization/concepts/computer-architecture-strategies-and-ideas",
    {
      type: "category",
      label: "Instruction Set Architecture & Abstraction",
      items: [
        "hardware-design/computer-organization/concepts/isa/introduction-to-isa",
        "hardware-design/computer-organization/concepts/isa/isa-components",
        "hardware-design/computer-organization/concepts/isa/instruction-set-design",
        "hardware-design/computer-organization/concepts/isa/instruction-execution",
        "hardware-design/computer-organization/concepts/isa/data-representation",
        "hardware-design/computer-organization/concepts/isa/performance-considerations",
        "hardware-design/computer-organization/concepts/isa/specialized-instructions",
        "hardware-design/computer-organization/concepts/isa/isa-extensions-evolution",
        "hardware-design/computer-organization/concepts/isa/case-studies",
        "hardware-design/computer-organization/concepts/isa/tools-for-isa-study",
        "hardware-design/computer-organization/concepts/isa/role-of-isa",
        "hardware-design/computer-organization/concepts/isa/layers-of-abstraction",
        "hardware-design/computer-organization/concepts/isa/trade-offs-innovation",
        {
          type: "category",
          label: "Exams",
          items: ["hardware-design/computer-organization/exams/isa-exams"],
        },
      ],
    },
    {
      type: "category",
      label: "Processor Microarchitecture",
      items: [
        "hardware-design/computer-organization/concepts/microarchitecture/pipeline-design",
        "hardware-design/computer-organization/concepts/microarchitecture/superscalar-out-of-order",
        "hardware-design/computer-organization/concepts/microarchitecture/exploiting-parallelism",
        "hardware-design/computer-organization/concepts/microarchitecture/multicore-parallel-software",
      ],
    },
    {
      type: "category",
      label: "Memory Hierarchy",
      items: [
        "hardware-design/computer-organization/concepts/memory-hierarchy/locality-of-reference",
        "hardware-design/computer-organization/concepts/memory-hierarchy/caches",
        "hardware-design/computer-organization/concepts/memory-hierarchy/main-memory-virtual-memory",
        "hardware-design/computer-organization/concepts/memory-hierarchy/performance-implications",
      ],
    },
    {
      type: "category",
      label: "Power and Energy Efficiency",
      items: [
        "hardware-design/computer-organization/concepts/energy-efficiency/power-limiting-factor",
        "hardware-design/computer-organization/concepts/energy-efficiency/energy-proportional-computing",
        "hardware-design/computer-organization/concepts/energy-efficiency/multicore-energy-efficiency",
        "hardware-design/computer-organization/concepts/energy-efficiency/software-parallelism-required",
      ],
    },
    {
      type: "category",
      label: "Advanced Topics",
      items: [
        "hardware-design/computer-organization/concepts/advanced/specialized-accelerators",
        "hardware-design/computer-organization/concepts/advanced/heterogeneous-architectures",
        "hardware-design/computer-organization/concepts/advanced/future-trends",
      ],
    },
    "hardware-design/computer-organization/concepts/parallelism",
    "hardware-design/computer-organization/concepts/benchmarking",
    {
      type: "category",
      label: "Case Studies & Benchmarks",
      items: [
        "hardware-design/computer-organization/concepts/case-studies/spec-cpu-benchmarks",
        "hardware-design/computer-organization/concepts/case-studies/energy-performance-analysis",
        "hardware-design/computer-organization/concepts/case-studies/real-cpu-examples",
      ],
    },
  ],
  "algorithms-data-structures": [
    {
      type: "category",
      label: "Algorithms",
      items: [
        "software-systems/algorithms-data-structures/algorithms/concepts/algorithms",
        "software-systems/algorithms-data-structures/algorithms/concepts/performance-families",
        {
          type: "category",
          label: "Algorithm Approaches(strategies)",
          items: [
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/approaches-strategies",
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/iteration-strategy",
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/power-set-strategy",
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/recursion-strategy",
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/brute-force-strategy",
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/greedy-strategy",
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/divide-and-conquer-strategy",
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/backtracking-strategy",
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/dynamic-programming-strategy",
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/branch-and-bound-strategy",
            "software-systems/algorithms-data-structures/algorithms/concepts/approaches-strategies/heuristics-strategy",
            /*'software-systems/algorithms-data-structures/algorithms/concepts/sorting/performance-families',*/
            /*'software-systems/algorithms-data-structures/algorithms/concepts/sorting/approaches-strategies',*/
          ],
        },
        {
          type: "category",
          label: "Sorting",

          items: [
            "software-systems/algorithms-data-structures/algorithms/concepts/sorting/introduction",
            "software-systems/algorithms-data-structures/algorithms/concepts/sorting/comparison-based-sorting",
            "software-systems/algorithms-data-structures/algorithms/concepts/sorting/insertion-based-sorting",
            "software-systems/algorithms-data-structures/algorithms/concepts/sorting/divide-and-conquer-sorts",
            "software-systems/algorithms-data-structures/algorithms/concepts/sorting/selection-by-heap-sorts",
            /*'software-systems/algorithms-data-structures/algorithms/concepts/sorting/performance-families',*/
            /*'software-systems/algorithms-data-structures/algorithms/concepts/sorting/approaches-strategies',*/
          ],
        },
        {
          type: "category",
          label: "Optimization Problems",
          items: [
            "software-systems/algorithms-data-structures/algorithms/concepts/optimization-problems/optimization-problems",
          ],
        },
        {
          type: "category",
          label: "Exams",
          items: [
            "software-systems/algorithms-data-structures/algorithms/exams/sorting-exams",
            "software-systems/algorithms-data-structures/algorithms/exams/exam-approaches-strategies",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Data Structures",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Concepts",
          collapsible: false,
          collapsed: false,
          items: [
            "software-systems/algorithms-data-structures/data-structures/concepts/data-structures",
            {
              type: "category",
              label: "Linear Data Structures",
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: "category",
                  label: "Arrays",
                  collapsible: true,
                  collapsed: true,
                  items: [
                    "software-systems/algorithms-data-structures/data-structures/concepts/linear-data-structures/arrays/data-structures-arrays",
                    "software-systems/algorithms-data-structures/data-structures/concepts/linear-data-structures/arrays/data-structures-arrays-algorithm-patterns",
                    "software-systems/algorithms-data-structures/data-structures/concepts/linear-data-structures/arrays/data-structures-arrays-transformations",
                  ],
                },
                "software-systems/algorithms-data-structures/data-structures/concepts/linear-data-structures/linked-list/data-structures-linked-list",
              ],
            },
            {
              type: "category",
              label: "Heaps",
              collapsible: true,
              collapsed: true,
              items: [
                "software-systems/algorithms-data-structures/data-structures/concepts/data-structures-heaps",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Exams",
          collapsible: true,
          collapsed: true,
          items: [
            "software-systems/algorithms-data-structures/data-structures/exams/data-structures-exams-arrays",
          ],
        },
      ],
    },
  ],
  "programming-languages": [
    {
      type: "category",
      label: "Programming Languages",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "category",
          label: "C Language",
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: "category",
              label: "Concepts",
              collapsible: true,
              collapsed: false,
              items: [
                "software-systems/programming-languages/c-lang/Introduction",
                "software-systems/programming-languages/c-lang/basics",
                "software-systems/programming-languages/c-lang/DataTypes",
                //'software-systems/programming-languages/c-lang/Operators',
                "software-systems/programming-languages/c-lang/FormattedInputOutput",
                "software-systems/programming-languages/c-lang/c-lang-statements-and-expressions",
                "software-systems/programming-languages/c-lang/Functions",
                "software-systems/programming-languages/c-lang/ArraysStrings",
                "software-systems/programming-languages/c-lang/Pointers",
                "software-systems/programming-languages/c-lang/StructUnion",
                "software-systems/programming-languages/c-lang/EnumsTypedef",
                "software-systems/programming-languages/c-lang/MemoryManagement",
                "software-systems/programming-languages/c-lang/Preprocessor",
                "software-systems/programming-languages/c-lang/FileIO",
                "software-systems/programming-languages/c-lang/AdvancedDataStructures",
                "software-systems/programming-languages/c-lang/DynamicGeneric",
                "software-systems/programming-languages/c-lang/StandardLibrary",
                "software-systems/programming-languages/c-lang/ErrorDebug",
                "software-systems/programming-languages/c-lang/Multithreading",
                "software-systems/programming-languages/c-lang/Networking",
                "software-systems/programming-languages/c-lang/BestPractices",
                "software-systems/programming-languages/c-lang/Appendices",
              ],
            },
            {
              type: "category",
              label: "Labs",
              collapsible: true,
              collapsed: false,
              items: [
                {
                  type: "category",
                  label: "Formatted Input/Output",
                  collapsible: true,
                  collapsed: false,
                  items: [
                    "software-systems/programming-languages/c-lang/laps/basics/computing-the-dimensional-weight-of-a-box",
                    "software-systems/programming-languages/c-lang/laps/basics/converting-from-fahrenheit-to-celsius",
                    "software-systems/programming-languages/c-lang/laps/basics/computing-volume-of-sphere",
                    "software-systems/programming-languages/c-lang/laps/basics/printing-shapes",
                    "software-systems/programming-languages/c-lang/laps/basics/c-lang-lap-rmatting-input-output",
                    "software-systems/programming-languages/c-lang/laps/basics/c-lang-lap-computing-upc-check-digit",
                    "software-systems/programming-languages/c-lang/laps/basics/others",
                  ],
                },
                {
                  type: "category",
                  label: "Statements And Expressions",
                  collapsible: true,
                  collapsed: false,
                  items: ["software-systems/programming-languages/c-lang/laps/basics/c-lang-lap-statements-and-expressions"],
                },
                {
                  type: "category",
                  label: "Applications",
                  collapsible: true,
                  collapsed: false,
                  items: [
                    "software-systems/programming-languages/c-lang/laps/advanced/c-lang-lap-advanced-general",
                    "software-systems/programming-languages/c-lang/laps/advanced/c-lang-lap-advanced-min-c-expression-parser",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Exams",
              collapsible: true,
              collapsed: false,
              items: [
                "software-systems/programming-languages/c-lang/exam/c-lang-exam-basic",
                "software-systems/programming-languages/c-lang/exam/c-lang-exam-formatting-input-output",
                "software-systems/programming-languages/c-lang/exam/c-lang-exam-statements-and-expressions",
              ],
            },
          ],
        },
      ],
    },
  ],
  "operating-systems": [
    "software-systems/operating-systems/operating-systems",
    {
      type: "category",
      label: "Processes",
      collapsible: true,
      collapsed: true,
      items: [
        "software-systems/operating-systems/process/process",
        "software-systems/operating-systems/process/process-threads",
        {
          type: "category",
          label: "Interprocess Communication(IPC)",
          collapsible: true,
          collapsed: true,
          items: [
            "software-systems/operating-systems/process/ipc/process-ipc",
            "software-systems/operating-systems/process/ipc/process-ipc-busy-waiting",
            "software-systems/operating-systems/process/ipc/process-ipc-sleep-wakeup",
            "software-systems/operating-systems/process/ipc/process-ipc-semaphores",
            "software-systems/operating-systems/process/ipc/process-ipc-mutexes",
            "software-systems/operating-systems/process/ipc/process-ipc-monitors",
            "software-systems/operating-systems/process/ipc/process-ipc-futex",
            "software-systems/operating-systems/process/ipc/process-ipc-message-passing",
            "software-systems/operating-systems/process/ipc/process-ipc-comparison",
          ],
        },
      ],
    },
    "software-systems/operating-systems/file-system",
    {
      type: "category",
      label: "Linux Development",
      collapsible: true,
      collapsed: true,
      items: [
        "software-systems/operating-systems/development/linux-development",
        "software-systems/operating-systems/development/process-development",
        "software-systems/operating-systems/development/operating-systems-thread-development",
        "software-systems/operating-systems/development/file-system-development",
      ],
    },
  ],
  "parallel-computing": [
    "software-systems/parallel-computing/parallel-computing",
  ],
  ai: [
    "software-systems/ai/ai",
    {
      type: "category",
      label: "AI Development",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Agents",
          collapsible: true,
          collapsed: true,
          items: [
            "software-systems/ai/agents/agents",
            {
              type: "category",
              label: "Projects",
              collapsible: true,
              collapsed: true,
              items: [
                "software-systems/ai/agents/labs/managing-customer-support-for-an-ecommerce-platform",
              ],
            },
          ],
        },
      ],
    },
  ],
} satisfies SidebarsConfig;

/*
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Home',
    },

    {
      type: 'category',
      label: 'Mathematics',
      items: [
        {
          type: 'category',
          label: 'Discrete Mathematics',
          items: [
            'mathematics/discrete-mathematics/sets',
            'mathematics/discrete-mathematics/logic',
            'mathematics/discrete-mathematics/relations',
            'mathematics/discrete-mathematics/functions',
            'mathematics/discrete-mathematics/proof-techniques',
          ],
        },
        {
          type: 'category',
          label: 'Linear Algebra',
          items: [
            'mathematics/linear-algebra/vectors',
            'mathematics/linear-algebra/matrices',
            'mathematics/linear-algebra/determinants',
          ],
        },
        {
          type: 'category',
          label: 'Probability',
          items: [
            'mathematics/probability/probability-basics',
            'mathematics/probability/random-variables',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Hardware Design',
      items: [
        {
          type: 'category',
          label: 'Digital Logic',
          items: [
            {
              type: 'category',
              label: 'Concepts',
              items: [
                'hardware-design/digital-logic/concepts/boolean-algebra',
                'hardware-design/digital-logic/concepts/logic-gates',
                'hardware-design/digital-logic/concepts/combinational-circuits',
                'hardware-design/digital-logic/concepts/sequential-circuits',
                'hardware-design/digital-logic/concepts/finite-state-machines',
                'hardware-design/digital-logic/concepts/counters',
              ],
            },
            {
              type: 'category',
              label: 'Labs',
              items: [
                'hardware-design/digital-logic/labs/truth-table-verification',
                'hardware-design/digital-logic/labs/adder-design',
                'hardware-design/digital-logic/labs/fsm-implementation',
              ],
            },
            {
              type: 'category',
              label: 'Exams',
              items: [
                'hardware-design/digital-logic/exams/mcqs',
                'hardware-design/digital-logic/exams/short-questions',
                'hardware-design/digital-logic/exams/design-problems',
              ],
            },
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Software Systems',
      items: [
        {
          type: 'category',
          label: 'Operating Systems',
          items: [
            'software-systems/operating-systems/processes',
            'software-systems/operating-systems/threads',
            'software-systems/operating-systems/scheduling',
            'software-systems/operating-systems/memory-management',
          ],
        },
        {
          type: 'category',
          label: 'Databases',
          items: [
            'software-systems/databases/relational-model',
            'software-systems/databases/sql-basics',
          ],
        },
        {
          type: 'category',
          label: 'Compilers',
          items: [
            'software-systems/compilers/lexical-analysis',
            'software-systems/compilers/parsing',
          ],
        },
        {
          type: 'category',
          label: 'Distributed Systems',
          items: [
            'software-systems/distributed-systems/consistency',
            'software-systems/distributed-systems/replication',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Embedded Systems',
      items: [
        {
          type: 'category',
          label: 'Microcontrollers',
          items: [
            'embedded-systems/microcontrollers/gpio',
            'embedded-systems/microcontrollers/timers',
            'embedded-systems/microcontrollers/interrupts',
          ],
        },
        {
          type: 'category',
          label: 'RTOS',
          items: [
            'embedded-systems/rtos/tasks',
            'embedded-systems/rtos/scheduling',
            'embedded-systems/rtos/synchronization',
          ],
        },
        {
          type: 'category',
          label: 'Embedded Linux',
          items: [
            'embedded-systems/embedded-linux/boot-process',
            'embedded-systems/embedded-linux/device-drivers',
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Reference',
      items: [
        'glossary',
        'contribute',
      ],
    },
  ],
};

export default sidebars;
*/
