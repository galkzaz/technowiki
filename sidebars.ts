import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
export default {
  CS: ["getting-started"],
  "digital-logic": [
    "hardware-design/digital-logic/digital-logic",
    "hardware-design/digital-logic/concepts/boolean-algebra",
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
  ],
  "algorithms-data-structures": [
    {
      type: "category",
      label: "Algorithms",
      items: [
        "software-systems/algorithms-data-structures/algorithms",
        "software-systems/algorithms-data-structures/algorithms/performance-families",
        "software-systems/algorithms-data-structures/algorithms/approaches-strategies",
        {
          type: "category",
          label: "Sorting",

          items: [
            "software-systems/algorithms-data-structures/algorithms/sorting/sorting",
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
              label: "Core",
              collapsible: true,
              collapsed: false,
              items: ["software-systems/programming-languages/c-lang/c-lang"],
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
      label: "Process",
      collapsible: false,
      collapsed: false,
      items: [
        "software-systems/operating-systems/process",
        "software-systems/operating-systems/process-development",
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
