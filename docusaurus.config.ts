import { Config } from "@docusaurus/types";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { remarkKroki } from "remark-kroki";
import { themes } from "prism-react-renderer";
import remarkExcalidraw from "./src/plugins/remark-excalidraw/index.js";
import remarkBracketMath from "./src/plugins/remark-bracket-math/index.js";

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** * SHARED DOCS CONFIGURATION
 */
const sharedDocsConfig = {
  //sidebarPath: "./sidebars.ts",
  remarkPlugins: [
    remarkMath,
    remarkBracketMath,
    // Kroki diagrams
    [
      remarkKroki,
      {
        server: "https://kroki.io",
        output: "img-base64",
        alias: ["plantuml", "ditaa", "goat"],
        target: "mdx3",
      },
    ],

    // Excalidraw diagrams — separate plugin entry
    remarkExcalidraw,
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
const isDeploying = process.env.NODE_ENV === 'production';
const config: Config = {
  title: "TechnoWiki",
  tagline: "Computer Science & Engineering Knowledge Base",
  url: "https://galkzaz.github.io",
  baseUrl: isDeploying ? '/technowiki/' : '/', // Use sub-path only for production
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
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.28/dist/katex.min.css",
      type: "text/css",
      //integrity: "sha384-Wsr4Nh3yrvMf2KCebJchRJoVo1gTU6kcP05uRSh5NV3sj9+a8IomuJoQzf3sMq4T",
      //crossorigin: "anonymous",
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
    // Artificial Intelligence Instance
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "artificial-intelligence",
        path: "artificial-intelligence",
        routeBasePath: "artificial-intelligence",
        sidebarPath: require.resolve("./artificial-intelligence/sidebars.ts"),
        ...sharedDocsConfig,
      },
    ],
    // // Embedded Systems Instance
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "embedded-systems",
    //     path: "embedded-systems",
    //     routeBasePath: "embedded-systems",
    //     //sidebarPath: require.resolve("./embedded-systems/sidebars.ts"),
    //     ...sharedDocsConfig,
    //   },
    //],
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
    // Add this Webpack resolution fix plugin
    function fixFullySpecifiedWebpack() {
      return {
        name: 'fix-fully-specified-webpack',
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.m?js$/,
                  resolve: {
                    fullySpecified: false,
                  },
                },
              ],
            },
          };
        },
      };
    },
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
          label: "Artificial Intelligence",
          to: "/artificial-intelligence",
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
              to: "/software-systems/algorithms-data-structures/algorithms/concepts",
            },
            {
              label: "Data Structures",
              sidebarId: "DataStructuresSidebar",
              to: "/software-systems/algorithms-data-structures/data-structures/concepts",
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
            {
              label: "Security",
              sidebarId: "SecuritySidebar",
              to: "/software-engineering/design-architecture/security",
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
              label: "Containerization",
              sidebarId: "DockerSidebar",
              to: "/software-engineering/infrastructure-devops/containerization/concepts/docker/basics",
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
        /** * 6. PROMOTED ITEMS: ARTIFICIAL INTELLIGENCE
         */
        {
          label: "Introduction",
          to: "/artificial-intelligence/introduction-to-ai",
          position: "left",
          sidebarId: "IntroductionToAISidebar",
          className: "nav-ai-only",
        },
        {
          label: "Foundations",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "Computational Foundations",
              sidebarId: "ComputationalFoundationsSidebar",
              to: "/artificial-intelligence/02-ai-foundations/computational-foundations",
            },
            {
              label: "Mathematics For AI",
              sidebarId: "MathematicsForAISidebar",
              to: "/artificial-intelligence/02-ai-foundations/mathematics-for-ai",
            },
            {
              label: "Programming For AI",
              sidebarId: "ProgrammingForAISidebar",
              to: "/artificial-intelligence/02-ai-foundations/programming-for-ai",
            },
          ],
        },
        {
          label: "Data",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "Data Collection",
              sidebarId: "DataCollectionSidebar",
              to: "/artificial-intelligence/03-data-for-ai/data-collection",
            },
            {
              label: "Data Engineering For AI",
              sidebarId: "DataEngineeringForAISidebar",
              to: "/artificial-intelligence/03-data-for-ai/data-engineering-for-ai",
            },
            {
              label: "Data Fundamentals",
              sidebarId: "DataFundamentalsSidebar",
              to: "/artificial-intelligence/03-data-for-ai/data-fundamentals",
            },
            {
              label: "Data Preprocessing",
              sidebarId: "DataPreprocessingSidebar",
              to: "/artificial-intelligence/03-data-for-ai/data-preprocessing",
            },
            {
              label: "Dataset Management",
              sidebarId: "DatasetManagementSidebar",
              to: "/artificial-intelligence/03-data-for-ai/dataset-management",
            },
            {
              label: "Exploratory Data Analysis",
              sidebarId: "ExploratoryDataAnalysisSidebar",
              to: "/artificial-intelligence/03-data-for-ai/exploratory-data-analysis",
            },
          ],
        },
        {
          label: "Classical AI",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "Constraint Satisfaction Problems",
              sidebarId: "ConstraintSatisfactionProblemsSidebar",
              to: "/artificial-intelligence/04-classical-artificial-intelligence/constraint-satisfaction-problems",
            },
            {
              label: "Expert Systems",
              sidebarId: "ExpertSystemsSidebar",
              to: "/artificial-intelligence/04-classical-artificial-intelligence/expert-systems",
            },
            {
              label: "Intelligent Agents",
              sidebarId: "IntelligentAgentsSidebar",
              to: "/artificial-intelligence/04-classical-artificial-intelligence/intelligent-agents",
            },
            {
              label: "Knowledge Representation",
              sidebarId: "KnowledgeRepresentationSidebar",
              to: "/artificial-intelligence/04-classical-artificial-intelligence/knowledge-representation",
            },
            {
              label: "Planning And Decision Making",
              sidebarId: "PlanningAndDecisionMakingSidebar",
              to: "/artificial-intelligence/04-classical-artificial-intelligence/planning-and-decision-making",
            },
            {
              label: "Problem Solving And Search",
              sidebarId: "ProblemSolvingAndSearchSidebar",
              to: "/artificial-intelligence/04-classical-artificial-intelligence/problem-solving-and-search",
            },
            {
              label: "Reasoning And Inference",
              sidebarId: "ReasoningAndInferenceSidebar",
              to: "/artificial-intelligence/04-classical-artificial-intelligence/reasoning-and-inference",
            },
          ],
        },
        {
          label: "Machine Learning",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "Feature Engineering",
              sidebarId: "FeatureEngineeringSidebar",
              to: "/artificial-intelligence/05-machine-learning/feature-engineering",
            },
            {
              label: "Introduction To ML",
              sidebarId: "IntroductionToMLSidebar",
              to: "/artificial-intelligence/05-machine-learning/introduction-to-ml",
            },
            {
              label: "Model Evaluation",
              sidebarId: "ModelEvaluationSidebar",
              to: "/artificial-intelligence/05-machine-learning/model-evaluation",
            },
            {
              label: "Model Training And Optimization",
              sidebarId: "ModelTrainingAndOptimizationSidebar",
              to: "/artificial-intelligence/05-machine-learning/model-training-and-optimization",
            },
            {
              label: "Self-Supervised Learning",
              sidebarId: "SelfSupervisedLearningSidebar",
              to: "/artificial-intelligence/05-machine-learning/self-supervised-learning",
            },
            {
              label: "Semi-Supervised Learning",
              sidebarId: "SemiSupervisedLearningSidebar",
              to: "/artificial-intelligence/05-machine-learning/semi-supervised-learning",
            },
            {
              label: "Supervised Learning",
              sidebarId: "SupervisedLearningSidebar",
              to: "/artificial-intelligence/05-machine-learning/supervised-learning",
            },
            {
              label: "Unsupervised Learning",
              sidebarId: "UnsupervisedLearningSidebar",
              to: "/artificial-intelligence/05-machine-learning/unsupervised-learning",
            },
          ],
        },
        {
          label: "Deep Learning",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "Deep Learning Frameworks",
              sidebarId: "DeepLearningFrameworksSidebar",
              to: "/artificial-intelligence/06-deep-learning/deep-learning-frameworks",
            },
            {
              label: "Distributed Deep Learning",
              sidebarId: "DistributedDeepLearningSidebar",
              to: "/artificial-intelligence/06-deep-learning/distributed-deep-learning",
            },
            {
              label: "Neural Network Architectures",
              sidebarId: "NeuralNetworkArchitecturesSidebar",
              to: "/artificial-intelligence/06-deep-learning/neural-network-architectures",
            },
            {
              label: "Neural Network Fundamentals",
              sidebarId: "NeuralNetworkFundamentalsSidebar",
              to: "/artificial-intelligence/06-deep-learning/neural-network-fundamentals",
            },
            {
              label: "Optimization And Regularization",
              sidebarId: "OptimizationAndRegularizationSidebar",
              to: "/artificial-intelligence/06-deep-learning/optimization-and-regularization",
            },
            {
              label: "Transfer Learning",
              sidebarId: "TransferLearningSidebar",
              to: "/artificial-intelligence/06-deep-learning/transfer-learning",
            },
          ],
        },
        {
          label: "Specializations",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "Computer Vision",
              sidebarId: "ComputerVisionSidebar",
              to: "/artificial-intelligence/07-ai-specializations/computer-vision",
            },
            {
              label: "Natural Language Processing",
              sidebarId: "NaturalLanguageProcessingSidebar",
              to: "/artificial-intelligence/07-ai-specializations/natural-language-processing",
            },
            {
              label: "Other AI Applications",
              sidebarId: "OtherAIApplicationsSidebar",
              to: "/artificial-intelligence/07-ai-specializations/other-ai-applications",
            },
            {
              label: "Recommender Systems",
              sidebarId: "RecommenderSystemsSidebar",
              to: "/artificial-intelligence/07-ai-specializations/recommender-systems",
            },
            {
              label: "Reinforcement Learning",
              sidebarId: "ReinforcementLearningSidebar",
              to: "/artificial-intelligence/07-ai-specializations/reinforcement-learning",
            },
            {
              label: "Robotics And Autonomous Systems",
              sidebarId: "RoboticsAndAutonomousSystemsSidebar",
              to: "/artificial-intelligence/07-ai-specializations/robotics-and-autonomous-systems",
            },
            {
              label: "Speech And Audio AI",
              sidebarId: "SpeechAndAudioAISidebar",
              to: "/artificial-intelligence/07-ai-specializations/speech-and-audio-ai",
            },
            {
              label: "Time Series And Forecasting",
              sidebarId: "TimeSeriesAndForecastingSidebar",
              to: "/artificial-intelligence/07-ai-specializations/time-series-and-forecasting",
            },
          ],
        },
        {
          label: "GenAI",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "Generative AI Frameworks",
              sidebarId: "GenerativeAIFrameworksSidebar",
              to: "/artificial-intelligence/generative-ai/generative-ai-frameworks",
            },
            {
              label: "Generative AI Fundamentals",
              sidebarId: "GenerativeAIFundamentalsSidebar",
              to: "/artificial-intelligence/generative-ai/generative-ai-fundamentals",
            },
            {
              label: "Generative Image And Video",
              sidebarId: "GenerativeImageAndVideoSidebar",
              to: "/artificial-intelligence/generative-ai/generative-image-and-video",
            },
            {
              label: "Large Language Models",
              sidebarId: "LargeLanguageModelsSidebar",
              to: "/artificial-intelligence/generative-ai/large-language-models",
            },
            {
              label: "Multimodal AI",
              sidebarId: "MultimodalAISidebar",
              to: "/artificial-intelligence/generative-ai/multimodal-ai",
            },
            {
              label: "Prompt Engineering",
              sidebarId: "PromptEngineeringSidebar",
              to: "/artificial-intelligence/generative-ai/prompt-engineering",
            },
            {
              label: "Retrieval Augmented Generation",
              sidebarId: "RetrievalAugmentedGenerationSidebar",
              to: "/artificial-intelligence/generative-ai/retrieval-augmented-generation",
            },
          ],
        },
        {
          label: "Agentic Systems",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "Agent Evaluation And Safety",
              sidebarId: "AgentEvaluationAndSafetySidebar",
              to: "/artificial-intelligence/09-ai-agents-and-agentic-systems/agent-evaluation-and-safety",
            },
            {
              label: "Agent Frameworks",
              sidebarId: "AgentFrameworksSidebar",
              to: "/artificial-intelligence/09-ai-agents-and-agentic-systems/agent-frameworks",
            },
            {
              label: "Agent Fundamentals",
              sidebarId: "AgentFundamentalsSidebar",
              to: "/artificial-intelligence/09-ai-agents-and-agentic-systems/agent-fundamentals",
            },
            {
              label: "Agent Memory",
              sidebarId: "AgentMemorySidebar",
              to: "/artificial-intelligence/09-ai-agents-and-agentic-systems/agent-memory",
            },
            {
              label: "Agent Orchestration",
              sidebarId: "AgentOrchestrationSidebar",
              to: "/artificial-intelligence/09-ai-agents-and-agentic-systems/agent-orchestration",
            },
          ],
        },
        {
          label: "Engineering",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "AI Frameworks And Platforms",
              sidebarId: "AIFrameworksAndPlatformsSidebar",
              to: "/artificial-intelligence/10-ai-engineering-and-mlops/ai-frameworks-and-platforms",
            },
            {
              label: "AI System Design",
              sidebarId: "AISystemDesignSidebar",
              to: "/artificial-intelligence/10-ai-engineering-and-mlops/ai-system-design",
            },
            {
              label: "AI Testing",
              sidebarId: "AITestingSidebar",
              to: "/artificial-intelligence/10-ai-engineering-and-mlops/ai-testing",
            },
            {
              label: "Experiment Management",
              sidebarId: "ExperimentManagementSidebar",
              to: "/artificial-intelligence/10-ai-engineering-and-mlops/experiment-management",
            },
            {
              label: "ML Pipelines",
              sidebarId: "MLPipelinesSidebar",
              to: "/artificial-intelligence/10-ai-engineering-and-mlops/ml-pipelines",
            },
            {
              label: "Model Deployment",
              sidebarId: "ModelDeploymentSidebar",
              to: "/artificial-intelligence/10-ai-engineering-and-mlops/model-deployment",
            },
            {
              label: "Model Monitoring",
              sidebarId: "ModelMonitoringSidebar",
              to: "/artificial-intelligence/10-ai-engineering-and-mlops/model-monitoring",
            },
          ],
        },
        {
          label: "Security&Governance",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "AI Security",
              sidebarId: "AISecuritySidebar",
              to: "/artificial-intelligence/11-responsible-ai-security-and-governance/ai-security",
            },
            {
              label: "Explainable AI",
              sidebarId: "ExplainableAISidebar",
              to: "/artificial-intelligence/11-responsible-ai-security-and-governance/explainable-ai",
            },
            {
              label: "Governance And Compliance",
              sidebarId: "GovernanceAndComplianceSidebar",
              to: "/artificial-intelligence/11-responsible-ai-security-and-governance/governance-and-compliance",
            },
            {
              label: "Privacy",
              sidebarId: "PrivacySidebar",
              to: "/artificial-intelligence/11-responsible-ai-security-and-governance/privacy",
            },
            {
              label: "Responsible AI",
              sidebarId: "ResponsibleAISidebar",
              to: "/artificial-intelligence/11-responsible-ai-security-and-governance/responsible-ai",
            },
          ],
        },
        {
          label: "Labs",
          type: "dropdown",
          position: "left",
          className: "nav-ai-only",
          items: [
            {
              label: "Advanced Projects",
              sidebarId: "AdvancedProjectsSidebar",
              to: "/artificial-intelligence/12-ai-projects-and-practical-labs/advanced-projects",
            },
            {
              label: "Beginner Projects",
              sidebarId: "BeginnerProjectsSidebar",
              to: "/artificial-intelligence/12-ai-projects-and-practical-labs/beginner-projects",
            },
            {
              label: "Capstone Projects",
              sidebarId: "CapstoneProjectsSidebar",
              to: "/artificial-intelligence/12-ai-projects-and-practical-labs/capstone-projects",
            },
            {
              label: "Intermediate Projects",
              sidebarId: "IntermediateProjectsSidebar",
              to: "/artificial-intelligence/12-ai-projects-and-practical-labs/intermediate-projects",
            },
          ],
        },
        {
          label: "Resources",
          to: "/artificial-intelligence/13-ai-resources",
          position: "left",
          sidebarId: "AIResourcesSidebar",
          className: "nav-ai-only",
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
        "docker"
      ],
    },
  },
};

export default config;
