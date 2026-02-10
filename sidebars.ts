import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
export default {
  CS: ["getting-started"],
  "digital-logic": [
    "hardware-design/digital-logic/digital-logic",
    "hardware-design/digital-logic/concepts/number-systems-and-data-representation",
    "hardware-design/digital-logic/concepts/boolean-algebra-and-logic",
    //'hardware-design/digital-logic/concepts/logic-gates',
    //'hardware-design/digital-logic/concepts/combinational-circuits',
    //'hardware-design/digital-logic/concepts/sequential-circuits',
    //'hardware-design/digital-logic/concepts/finite-state-machines',
    //'hardware-design/digital-logic/concepts/counters',
  ],
  "computer-organization": [
    "hardware-design/computer-organization/computer-organization",
    //'hardware-design/digital-logic/concepts/logic-gates',
    //'hardware-design/digital-logic/concepts/combinational-circuits',
    //'hardware-design/digital-logic/concepts/sequential-circuits',
    //'hardware-design/digital-logic/concepts/finite-state-machines',
    //'hardware-design/digital-logic/concepts/counters',
    "hardware-design/computer-organization/concepts/parallelism",
  ],
  "algorithms-data-structures": [
    {
      type: "category",
      label: "Algorithms",
      items: [
        "software-systems/algorithms-data-structures/algorithms",
        "software-systems/algorithms-data-structures/algorithms/performance-families",
        {
          type: "category",
          label: "Algorithm Approaches(strategies)",
          items: [
            "software-systems/algorithms-data-structures/algorithms/approaches-strategies",
            "software-systems/algorithms-data-structures/algorithms/approaches-strategies/iteration-strategy",
            "software-systems/algorithms-data-structures/algorithms/approaches-strategies/power-set-strategy",
            "software-systems/algorithms-data-structures/algorithms/approaches-strategies/recursion-strategy",
            "software-systems/algorithms-data-structures/algorithms/approaches-strategies/brute-force-strategy",
            "software-systems/algorithms-data-structures/algorithms/approaches-strategies/greedy-strategy",
            "software-systems/algorithms-data-structures/algorithms/approaches-strategies/divide-and-conquer-strategy",
            "software-systems/algorithms-data-structures/algorithms/approaches-strategies/backtracking-strategy",
            "software-systems/algorithms-data-structures/algorithms/approaches-strategies/dynamic-programming-strategy",
            "software-systems/algorithms-data-structures/algorithms/approaches-strategies/heuristics-strategy",
            /*'software-systems/algorithms-data-structures/algorithms/sorting/performance-families',*/
            /*'software-systems/algorithms-data-structures/algorithms/sorting/approaches-strategies',*/
          ],
        },
        {
          type: "category",
          label: "Sorting",

          items: [
            "software-systems/algorithms-data-structures/algorithms/sorting/introduction",
            "software-systems/algorithms-data-structures/algorithms/sorting/sort-algorithms",
            /*'software-systems/algorithms-data-structures/algorithms/sorting/performance-families',*/
            /*'software-systems/algorithms-data-structures/algorithms/sorting/approaches-strategies',*/
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Data Structures",
      collapsible: false,
      collapsed: false,
      items: ["software-systems/algorithms-data-structures/data-structures"],
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
                "software-systems/programming-languages/c-lang/Operators",
                "software-systems/programming-languages/c-lang/FormattedInputOutput",
                "software-systems/programming-languages/c-lang/StatementsAndExpressions",
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
                  label: "Basics",
                  collapsible: true,
                  collapsed: false,
                  items: [
                    "software-systems/programming-languages/c-lang/laps/basics/computing-the-dimensional-weight-of-a-box",
                    "software-systems/programming-languages/c-lang/laps/basics/converting-from-fahrenheit-to-celsius",
                  ],
                },
                /*{
                  type: 'category',
                  label: 'Intermediate',
                  collapsible: true,
                  collapsed: false,
                  items: []
                },
                {
                  type: 'category',
                  label: 'Advanced',
                  collapsible: true,
                  collapsed: false,
                  items: []
                },*/
              ],
            },
            {
              type: "category",
              label: "Exams",
              collapsible: true,
              collapsed: false,
              items: [
                  'software-systems/programming-languages/c-lang/exam/c-lang-exam-basic'
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
        "software-systems/operating-systems/linux-development",
        "software-systems/operating-systems/process-development",
        "software-systems/operating-systems/file-system-development",
      ],
    },
  ],
  "parallel-computing": [
    "software-systems/parallel-computing/parallel-computing",
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
