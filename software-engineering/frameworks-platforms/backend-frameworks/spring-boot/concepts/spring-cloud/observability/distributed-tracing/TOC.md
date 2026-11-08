distributed-tracing/
├── overview/
│   ├── index.mdx
│   ├── spring-boot-tracing-architecture.mdx
│   ├── tracing-dependencies.mdx
│   └── supported-tracing-implementations.mdx
│
├── actuator-integration/
│   ├── actuator-and-observability.mdx
│   ├── actuator-auto-configuration.mdx
│   ├── tracing-configuration-properties.mdx
│   ├── service-name-and-resource-attributes.mdx
│   └── health-and-diagnostic-endpoints.mdx
│
├── micrometer-integration/
│   ├── observation-registry.mdx
│   ├── automatic-instrumentation.mdx
│   ├── custom-observations.mdx
│   ├── observation-to-span-creation.mdx
│   ├── trace-and-span-ids-in-logs.mdx
│   └── observation-filtering-and-conventions.mdx
│
├── context-propagation/
│   ├── automatic-http-client-propagation.mdx
│   ├── restclient-and-resttemplate.mdx
│   ├── webclient.mdx
│   ├── asynchronous-execution.mdx
│   ├── messaging-propagation.mdx
│   └── custom-propagation.mdx
│
├── exporter-configuration/
│   ├── opentelemetry-otlp.mdx
│   ├── zipkin-export.mdx
│   ├── sampling-configuration.mdx
│   ├── exporter-endpoints-and-authentication.mdx
│   └── batching-and-resource-management.mdx
│
├── configuration/
│   ├── application-properties.mdx
│   ├── environment-based-configuration.mdx
│   ├── sampling-probability.mdx
│   └── production-configuration.mdx
│
├── testing/
│   ├── verifying-span-creation.mdx
│   ├── testing-context-propagation.mdx
│   ├── testing-exporters.mdx
│   └── integration-testing-with-a-trace-backend.mdx
│
└── troubleshooting/
    ├── missing-spans.mdx
    ├── broken-trace-context.mdx
    ├── missing-trace-ids-in-logs.mdx
    └── exporter-connectivity-errors.mdx