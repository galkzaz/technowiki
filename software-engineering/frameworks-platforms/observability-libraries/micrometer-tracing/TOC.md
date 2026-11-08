micrometer-tracing/
├── overview/
│   ├── index.mdx
│   ├── micrometer-tracing-architecture.mdx
│   ├── micrometer-tracing-vs-observation.mdx
│   └── micrometer-tracing-vs-opentelemetry.mdx
│
├── core-concepts/
│   ├── tracer.mdx
│   ├── span.mdx
│   ├── trace-context.mdx
│   ├── baggage.mdx
│   └── sampling.mdx
│
├── instrumentation/
│   ├── creating-spans.mdx
│   ├── adding-span-attributes.mdx
│   ├── adding-events-and-errors.mdx
│   ├── current-span.mdx
│   └── custom-tracing-instrumentation.mdx
│
├── tracer-bridges/
│   ├── opentelemetry-bridge.mdx
│   └── brave-bridge.mdx
│
├── context-propagation/
│   ├── propagation-formats.mdx
│   ├── w3c-trace-context.mdx
│   ├── baggage-propagation.mdx
│   └── propagation-across-threads.mdx
│
├── sampling/
│   ├── probability-based-sampling.mdx
│   └── sampling-configuration.mdx
│
├── exporters-and-reporters/
│   ├── otlp.mdx
│   └── zipkin.mdx
│
└── testing/
    ├── unit-testing-instrumentation.mdx
    └── verifying-trace-context.mdx