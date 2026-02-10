import { Config } from "@docusaurus/types";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { remarkKroki } from "remark-kroki";

const config: Config = {
  title: "TechnoWiki",
  url: "https://example.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  markdown: {
    format: "detect",
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  themes: [],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.ts"),
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
          rehypePlugins: [rehypeKatex],
          admonitions: {
            keywords: ["question"],
            extendDefaults: true,
          },
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/customTheme.scss"),
            require.resolve("./src/css/index.scss"),
            require.resolve("./src/css/custom.scss"),
          ],
        },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    "@docusaurus/theme-mermaid",
    [require.resolve("@easyops-cn/docusaurus-search-local"), { hashed: true }],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      defaultLanguage: "tsx",
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 6,
    },
    navbar: {
      title: "TechnoWiki",
      logo: {
        src: "img/logo.svg",
        alt: "",
      },
      //style: "primary",
      hideOnScroll: true,
      items: [
        {
          label: "Computer Science",
          position: "right",
          items: [
            { label: "Glossary", to: "/glossary" },
            { label: "Contribute", to: "/contribute" },
          ],
        },
        {
          label: "Mathematics",
          position: "right",
          items: [
            {
              label: "Discrete Mathematics",
              to: "/mathematics/discrete-mathematics/sets",
            },
            {
              label: "Linear Algebra",
              to: "/mathematics/linear-algebra/vectors",
            },
            {
              label: "Probability",
              to: "/mathematics/probability/probability-basics",
            },
          ],
        },

        {
          label: "Hardware Design",
          position: "right",
          items: [
            {
              label: "Computer Organization",
              to: "/hardware-design/computer-organization",
            },
            {
              label: "Digital Logic",
              type: "doc",
              docId: "hardware-design/digital-logic/digital-logic",
            },
            {
              label: "Microarchitecture",
              to: "/hardware-design/microarchitecture",
            },
          ],
        },

        {
          label: "Software Systems",
          position: "right",
          items: [
            {
              label: "Algorithms And Data Structures",
              to: "/software-systems/algorithms-data-structures/algorithms",
            },
            {
              label: "Programming Languages",
              to: "/software-systems/programming-languages/c-lang/Introduction",
            },
            {
              label: "Operating Systems",
              to: "/software-systems/operating-systems",
            },
            { label: "Databases", to: "/software-systems/databases" },
            { label: "Compilers", to: "/software-systems/compilers" },
            {
              label: "Distributed Systems",
              to: "/software-systems/distributed-systems",
            },
            {
              label: "Parallel Computing",
              to: "/software-systems/parallel-computing/parallel-computing",
            },
          ],
        },
        {
          label: "Embedded Systems",
          position: "right",
          items: [
            {
              label: "Microcontrollers",
              to: "/embedded-systems/microcontrollers/gpio",
            },
            { label: "RTOS", to: "/embedded-systems/rtos/tasks" },
            {
              label: "Embedded Linux",
              to: "/embedded-systems/embedded-linux/boot-process",
            },
          ],
        },
        /*{
          label: 'Reference',
          position: 'right',
          items: [
            { label: 'Glossary', to: '/glossary' },
            { label: 'Contribute', to: '/contribute' },
          ],
          },*/
      ],
    },
  },
};
export default config;
