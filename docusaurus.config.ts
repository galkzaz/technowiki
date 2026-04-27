import { Config } from "@docusaurus/types";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { remarkKroki } from "remark-kroki";
import { themes } from "prism-react-renderer";

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** * SHARED DOCS CONFIGURATION
 */
const sharedDocsConfig = {
  //sidebarPath: "./sidebars.ts",
  remarkPlugins: [
    remarkMath,
    [
      remarkKroki,
      {
        server: "https://kroki.io",
        output: "img-base64",
        alias: ["plantuml", "ditaa"],
        target: "mdx3",
      },
    ],
  ],
  rehypePlugins: [
    [
      rehypeKatex,
      {
        // TODO remove this and fix all issues
        strict: false, // This will ignore the newLineInDisplayMode warning
      },
    ],
  ],
  admonitions: {
    keywords: ["question"],
    extendDefaults: true,
  },
};

const config: Config = {
  title: "TechnoWiki",
  tagline: "Computer Science & Engineering Knowledge Base",
  url: "https://galkzaz.github.io",
  baseUrl: "/technowiki/",
  organizationName: 'galkzaz', // Usually your GitHub org/user name.
  projectName: 'technowiki', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,
  //onBrokenLinks: "warn",
  //onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  markdown: {
    format: "detect",
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGitSBRDoLaUI8fTPazskKNwXV6cnzLrdSD/EVDG7nqaG6ELCL9XBaQHzl",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          id: "default",
          path: "docs",
          routeBasePath: "docs",
          ...sharedDocsConfig,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.scss"),
            require.resolve("./src/css/print.scss"),
          ],
        },
      },
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",
    [require.resolve("@easyops-cn/docusaurus-search-local"), { hashed: true }],
    // Mathematics Instance
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "mathematics",
        path: "mathematics",
        routeBasePath: "mathematics",
        sidebarPath: require.resolve("./mathematics/sidebars.js"),
        ...sharedDocsConfig,
      },
    ],
    // Hardware Design Instance
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "hardware-design",
        path: "hardware-design",
        routeBasePath: "hardware-design",
        sidebarPath: require.resolve("./hardware-design/sidebars.ts"),
        ...sharedDocsConfig,
      },
    ],
    // Software Systems Instance
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "software-systems",
        path: "software-systems",
        routeBasePath: "software-systems",
        sidebarPath: require.resolve("./software-systems/sidebars.ts"),
        ...sharedDocsConfig,
      },
    ],
    // Software Engineering Instance
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "software-engineering",
        path: "software-engineering",
        routeBasePath: "software-engineering",
        sidebarPath: require.resolve("./software-engineering/sidebars.ts"),
        ...sharedDocsConfig,
      },
    ],
    // Embedded Systems Instance
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "embedded-systems",
        path: "embedded-systems",
        routeBasePath: "embedded-systems",
        //sidebarPath: require.resolve("./embedded-systems/sidebars.ts"),
        ...sharedDocsConfig,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    tableOfContents: {
      minHeadingLevel: 2, // The minimum heading level to include
      maxHeadingLevel: 6, // Increased to 5 to show H4 and H5
    },
    docs: {
      sidebar: {
        hideable: true, // This is what enables the collapse button
        //autoCollapseCategories: true, // Optional: collapses other categories when one is opened
      },
    },
    navbar: {
      title: "TechnoWiki",
      logo: {
        alt: "TechnoWiki Logo",
        src: "img/logo.svg",
      },
      hideOnScroll: true,
      items: [
        /** * 1. THE GATEKEEPERS (Main Hub Links)
         * These will be hidden when you are inside any specific sub-wiki.
         */
        /*{
          label: "Computer Science",
          position: "right",
          className: "nav-main-hub",
          items: [
            { label: "Glossary", to: "/glossary" },
            { label: "Contribute", to: "/contribute" },
          ],
        },*/
        {
          label: "Mathematics",
          to: "/mathematics",
          position: "right",
          className: "nav-main-hub",
        },
        {
          label: "Hardware Design",
          to: "/hardware-design",
          position: "right",
          className: "nav-main-hub",
        },
        {
          label: "Software Systems",
          to: "/software-systems",
          position: "right",
          className: "nav-main-hub",
        },
        {
          label: "Software Engineering",
          to: "/software-engineering",
          position: "right",
          className: "nav-main-hub",
        },
        {
          label: "Embedded Systems",
          to: "/embedded-systems/microcontrollers/gpio",
          position: "right",
          className: "nav-main-hub",
        },

        /** * 2. PROMOTED ITEMS: MATHEMATICS
         * These only show when pathname starts with /mathematics
         */
        {
          label: "Discrete Mathematics",
          to: "/mathematics/discrete-mathematics",
          position: "left",
          sidebarId: "discreteMathSidebar",
          className: "nav-math-only",
        },
        {
          label: "Linear Algebra",
          to: "/mathematics/linear-algebra",
          position: "left",
          sidebarId: "linearAlgebraSidebar",
          className: "nav-math-only",
        },
        {
          label: "Probability",
          to: "/mathematics/probability/probability-basics",
          position: "left",
          className: "nav-math-only",
        },

        /** * 3. PROMOTED ITEMS: HARDWARE
         * These only show when pathname starts with /hardware-design
         */
        {
          label: "Computer Organization",
          to: "/hardware-design/computer-organization/concepts",
          position: "left",
          sidebarId: "ComputerOrganizationSidebar",
          className: "nav-hardware-only",
        },
        {
          label: "Digital Logic",
          to: "/hardware-design/digital-logic/concepts",
          sidebarId: "DigitalLogicSidebar",
          position: "left",
          className: "nav-hardware-only",
        },
        {
          label: "Microarchitecture",
          to: "/hardware-design/microarchitecture",
          position: "left",
          className: "nav-hardware-only",
        },

        /** * 4. PROMOTED ITEMS: SOFTWARE
         * These only show when pathname starts with /software-systems
         */
        {
          label: "Algorithms And Data Structures",
          type: "dropdown",
          position: "left",
          className: "nav-software-only",
          items: [
            {
              label: "Algorithms",
              sidebarId: "algorithmsSidebar",
              to: "/software-systems/algorithms-data-structures/algorithms/concepts/algorithms",
            },
            {
              label: "Data Structures",
              sidebarId: "DataStructuresSidebar",
              to: "/software-systems/algorithms-data-structures/data-structures/concepts/algorithms",
            },
          ],
        },
        {
          label: "Languages",
          type: "dropdown",
          position: "left",
          className: "nav-software-only",
          items: [
            {
              label: "C Language",
              sidebarId: "CLangSidebar",
              to: "/software-systems/programming-languages/c-lang/concepts/basics",
            },
            {
              label: "Java",
              sidebarId: "JavaSidebar",
              to: "/software-systems/programming-languages/java/concepts/foundations/overview",
            },
          ],
        },
        {
          label: "Operating Systems",
          to: "/software-systems/operating-systems",
          position: "left",
          sidebarId: "OSSidebar",
          className: "nav-software-only",
        },
        // ... add others as needed with className: "nav-software-engineering-only"
        /** * 5. PROMOTED ITEMS: Software Engineering
         */
        {
          label: "Principles Theory",
          type: "dropdown",
          position: "left",
          className: "nav-software-engineering-only",
          items: [
            {
              label: "Core Principles",
              sidebarId: "CorePrinciplesSidebar",
              to: "/software-engineering/principles-theory/core-principles",
            },
            {
              label: "OOP Principles",
              sidebarId: "OOPPrinciplesSidebar",
              to: "/software-engineering/principles-theory/oop-principles",
            },
            {
              label: "Functional & Reactive",
              sidebarId: "FunctionalReactiveSidebar",
              to: "/software-engineering/principles-theory/functional-reactive",
            },
            {
              label: "Complexity Tradeoffs",
              sidebarId: "ComplexityTradeoffsSidebar",
              to: "/software-engineering/principles-theory/complexity-tradeoffs",
            },
            {
              label: "System Qualities",
              sidebarId: "SystemQualitiesSidebar",
              to: "/software-engineering/principles-theory/system-qualities",
            },
          ],
        },
        {
          label: "Design & Architecture",
          type: "dropdown",
          position: "left",
          className: "nav-software-engineering-only",
          items: [
            {
              label: "System Design",
              sidebarId: "SystemDesignSidebar",
              to: "/software-engineering/design-architecture/system-design",
            },
            {
              label: "Architectural Styles",
              sidebarId: "ArchitecturalStylesSidebar",
              to: "/software-engineering/design-architecture/architectural-styles",
            },
            {
              label: "Architectural Patterns",
              sidebarId: "ArchitecturalPatternsSidebar",
              to: "/software-engineering/design-architecture/architectural-patterns",
            },
            {
              label: "Design Patterns",
              sidebarId: "DesignPatternsSidebar",
              to: "/software-engineering/design-architecture/design-patterns/concepts",
            },
            {
              label: "Distributed Systems",
              sidebarId: "DistributedSystemsSidebar",
              to: "/software-engineering/design-architecture/distributed-systems",
            },
          ],
        },
        {
          label: "Implementation",
          type: "dropdown",
          position: "left",
          className: "nav-software-engineering-only",
          items: [
            {
              label: "Code Structure",
              sidebarId: "CodeStructureSidebar",
              to: "/software-engineering/implementation/code-structure",
            },
            {
              label: "Coding Practices",
              sidebarId: "CodingPracticesSidebar",
              to: "/software-engineering/implementation/coding-practices",
            },
            {
              label: "Dependency Management",
              sidebarId: "DependencyManagementSidebar",
              to: "/software-engineering/implementation/dependency-management",
            },
            {
              label: "Data Handling",
              sidebarId: "DataHandlingSidebar",
              to: "/software-engineering/implementation/data-handling",
            },
            {
              label: "Error & Logging",
              sidebarId: "ErrorLoggingSidebar",
              to: "/software-engineering/implementation/error-logging",
            },
            {
              label: "Security in Code",
              sidebarId: "SecurityCodeSidebar",
              to: "/software-engineering/implementation/security-code",
            },
            {
              label: "Performance",
              sidebarId: "PerformanceSidebar",
              to: "/software-engineering/implementation/performance-optimization",
            },
          ],
        },
        {
          label: "Frameworks & Platforms",
          type: "dropdown",
          position: "left",
          className: "nav-software-engineering-only",
          items: [
            {
              label: "Spring Boot",
              sidebarId: "SpringBootSidebar",
              to: "/software-engineering/frameworks-platforms/backend-frameworks/spring-boot/concepts",
            },
            {
              label: "Django",
              sidebarId: "DjangoSidebar",
              to: "/software-engineering/frameworks-platforms/backend-frameworks/django",
            },
            {
              label: "FastAPI",
              sidebarId: "FastAPISidebar",
              to: "/software-engineering/frameworks-platforms/backend-frameworks/fastapi",
            },
            {
              label: "Express.js",
              sidebarId: "ExpressSidebar",
              to: "/software-engineering/frameworks-platforms/backend-frameworks/express",
            },
            {
              label: "Frontend Frameworks",
              sidebarId: "FrontendFrameworksSidebar",
              to: "/software-engineering/frameworks-platforms/frontend-frameworks",
            },
            {
              label: "Persistence Frameworks",
              sidebarId: "PersistenceFrameworksSidebar",
              to: "/software-engineering/frameworks-platforms/persistence-frameworks",
            },
          ],
        },
        {
          label: "Infrastructure & DevOps",
          type: "dropdown",
          position: "left",
          className: "nav-software-engineering-only",
          items: [
            {
              label: "Build & Packaging",
              sidebarId: "BuildPackagingSidebar",
              to: "/software-engineering/infrastructure-devops/build-packaging",
            },
            {
              label: "Docker",
              sidebarId: "DockerSidebar",
              to: "/software-engineering/infrastructure-devops/containerization/docker",
            },
            {
              label: "Kubernetes",
              sidebarId: "KubernetesSidebar",
              to: "/software-engineering/infrastructure-devops/orchestration/kubernetes",
            },
            {
              label: "CI/CD",
              sidebarId: "CICDSidebar",
              to: "/software-engineering/infrastructure-devops/cicd",
            },
            {
              label: "Cloud",
              sidebarId: "CloudSidebar",
              to: "/software-engineering/infrastructure-devops/cloud",
            },
            {
              label: "Monitoring",
              sidebarId: "MonitoringSidebar",
              to: "/software-engineering/infrastructure-devops/monitoring",
            },
            {
              label: "Deployment Strategies",
              sidebarId: "DeploymentSidebar",
              to: "/software-engineering/infrastructure-devops/deployment-strategies",
            },
            {
              label: "Reliability Engineering",
              sidebarId: "ReliabilitySidebar",
              to: "/software-engineering/infrastructure-devops/reliability",
            },
          ],
        },
        /** * 5. PROMOTED ITEMS: EMBEDDED
         */
        {
          label: "Microcontrollers",
          to: "/embedded-systems/microcontrollers/gpio",
          position: "left",
          className: "nav-embedded-only",
        },
        {
          label: "RTOS",
          to: "/embedded-systems/rtos/tasks",
          position: "left",
          className: "nav-embedded-only",
        },
        {
          label: "Embedded Linux",
          to: "/embedded-systems/embedded-linux/boot-process",
          position: "left",
          className: "nav-embedded-only",
        },

        /**
         * 6. UTILITY
         */
        /*{
          to: "/",
          label: "🏠 Hub",
          position: "right",
          className: "nav-back-hub",
        },*/
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      //additionalLanguages: ['java', 'maven', 'groovy', "nasm",'asm6502', "cpp", "bash", "pascal"],
      additionalLanguages: [
        "java",
        "groovy",
        "nasm",
        "asm6502",
        "cpp",
        "bash",
        "pascal",
      ],
    },
  },
};

export default config;
