For your TechnoWiki structure, I recommend treating `service-communication/observability/` as the observability of communication between distributed services: how requests, messages, and service-to-service interactions are traced, measured, logged, and diagnosed.

This section should focus on architecture concepts and practices. Framework-specific implementations such as Spring Boot Actuator, Micrometer, OpenTelemetry SDKs, Prometheus, and Grafana can be documented in their respective technology or integration sections.

# Detailed TOC

```
software-engineering/
└── design-architecture/
    └── distributed-systems/
        └── service-communication/
            └── observability/
                ├── overview/
                │   ├── index.mdx
                │   ├── what-is-observability.mdx
                │   ├── observability-in-distributed-systems.mdx
                │   ├── observability-vs-monitoring.mdx
                │   ├── observability-vs-diagnostics.mdx
                │   ├── observability-vs-telemetry.mdx
                │   └── observability-challenges.mdx
                │
                ├── observability-pillars/
                │   ├── logs.mdx
                │   ├── metrics.mdx
                │   ├── distributed-tracing.mdx
                │   └── signals-correlation.mdx
                │
                ├── distributed-tracing/
                │   ├── overview.mdx
                │   ├── traces-spans-and-trace-context.mdx
                │   ├── trace-lifecycle.mdx
                │   ├── parent-child-span-relationships.mdx
                │   ├── span-context-propagation.mdx
                │   ├── trace-context-propagation.mdx
                │   ├── synchronous-request-tracing.mdx
                │   ├── asynchronous-request-tracing.mdx
                │   ├── cross-service-tracing.mdx
                │   ├── trace-sampling.mdx
                │   ├── trace-aggregation.mdx
                │   └── trace-analysis.mdx
                │
                ├── context-propagation/
                │   ├── overview.mdx
                │   ├── trace-context.mdx
                │   ├── correlation-ids.mdx
                │   ├── request-ids.mdx
                │   ├── baggage-and-context-metadata.mdx
                │   ├── http-header-propagation.mdx
                │   ├── rpc-context-propagation.mdx
                │   ├── message-header-propagation.mdx
                │   ├── asynchronous-context-propagation.mdx
                │   └── context-propagation-failures.mdx
                │
                ├── communication-metrics/
                │   ├── overview.mdx
                │   ├── request-rate.mdx
                │   ├── error-rate.mdx
                │   ├── latency.mdx
                │   ├── throughput.mdx
                │   ├── saturation.mdx
                │   ├── connection-metrics.mdx
                │   ├── timeout-metrics.mdx
                │   ├── retry-metrics.mdx
                │   ├── circuit-breaker-metrics.mdx
                │   ├── dependency-health-metrics.mdx
                │   └── service-level-indicators.mdx
                │
                ├── communication-logging/
                │   ├── overview.mdx
                │   ├── structured-logging.mdx
                │   ├── request-response-logging.mdx
                │   ├── correlation-id-logging.mdx
                │   ├── trace-id-and-span-id-logging.mdx
                │   ├── inter-service-error-logging.mdx
                │   ├── asynchronous-message-logging.mdx
                │   ├── log-levels-and-severity.mdx
                │   ├── log-aggregation.mdx
                │   └── sensitive-data-and-log-redaction.mdx
                │
                ├── service-dependency-observability/
                │   ├── overview.mdx
                │   ├── service-dependency-mapping.mdx
                │   ├── dependency-health.mdx
                │   ├── upstream-and-downstream-services.mdx
                │   ├── dependency-latency.mdx
                │   ├── dependency-failure-propagation.mdx
                │   ├── service-graphs.mdx
                │   └── critical-dependency-identification.mdx
                │
                ├── asynchronous-communication/
                │   ├── overview.mdx
                │   ├── message-tracing.mdx
                │   ├── producer-consumer-correlation.mdx
                │   ├── message-correlation-ids.mdx
                │   ├── queue-depth-and-consumer-lag.mdx
                │   ├── message-processing-latency.mdx
                │   ├── delivery-failure-observability.mdx
                │   ├── retry-and-redelivery-observability.mdx
                │   ├── dead-letter-queue-monitoring.mdx
                │   └── end-to-end-event-tracing.mdx
                │
                ├── error-diagnostics/
                │   ├── overview.mdx
                │   ├── tracing-request-failures.mdx
                │   ├── locating-failing-services.mdx
                │   ├── timeout-diagnostics.mdx
                │   ├── intermittent-failure-diagnostics.mdx
                │   ├── cascading-failure-diagnostics.mdx
                │   ├── retry-amplification-diagnostics.mdx
                │   ├── partial-failure-diagnostics.mdx
                │   └── root-cause-analysis.mdx
                │
                ├── sampling-and-telemetry-costs/
                │   ├── overview.mdx
                │   ├── head-based-sampling.mdx
                │   ├── tail-based-sampling.mdx
                │   ├── sampling-policies.mdx
                │   ├── error-aware-sampling.mdx
                │   ├── telemetry-volume.mdx
                │   ├── cardinality.mdx
                │   └── observability-cost-optimization.mdx
                │
                ├── service-level-objectives/
                │   ├── overview.mdx
                │   ├── service-level-indicators.mdx
                │   ├── service-level-objectives.mdx
                │   ├── service-level-agreements.mdx
                │   ├── latency-objectives.mdx
                │   ├── availability-objectives.mdx
                │   ├── error-budgets.mdx
                │   └── dependency-level-objectives.mdx
                │
                ├── security-and-privacy/
                │   ├── overview.mdx
                │   ├── sensitive-telemetry-data.mdx
                │   ├── personally-identifiable-information.mdx
                │   ├── trace-data-access-control.mdx
                │   ├── log-redaction.mdx
                │   ├── telemetry-retention.mdx
                │   └── telemetry-integrity.mdx
                │
                ├── observability-architecture/
                │   ├── overview.mdx
                │   ├── instrumentation-strategy.mdx
                │   ├── telemetry-collection.mdx
                │   ├── agents-and-collectors.mdx
                │   ├── telemetry-pipelines.mdx
                │   ├── centralized-telemetry.mdx
                │   ├── multi-environment-observability.mdx
                │   └── observability-for-microservices.mdx
                │
                ├── best-practices/
                │   ├── consistent-trace-context.mdx
                │   ├── structured-and-correlated-logs.mdx
                │   ├── meaningful-service-metrics.mdx
                │   ├── actionable-alerts.mdx
                │   ├── instrumentation-consistency.mdx
                │   ├── avoid-high-cardinality-labels.mdx
                │   └── observability-by-design.mdx
                │
                ├── anti-patterns/
                │   ├── logging-without-correlation.mdx
                │   ├── excessive-request-logging.mdx
                │   ├── high-cardinality-metrics.mdx
                │   ├── tracing-only-at-the-edge.mdx
                │   ├── missing-context-propagation.mdx
                │   ├── excessive-sampling.mdx
                │   └── alerts-without-actionable-context.mdx
                │
                └── related-topics/
                    ├── service-discovery.mdx
                    ├── api-gateway.mdx
                    ├── messaging-systems.mdx
                    ├── distributed-systems-reliability.mdx
                    ├── resilience-patterns.mdx
                    └── infrastructure-monitoring.mdx
```

## 1. Important boundaries

To keep this section consistent with your existing knowledge base, separate it from closely related topics.

| Topic                                                                     | Canonical location                                                                                 |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Distributed tracing, trace context, correlation IDs                       | `service-communication/observability/`                                                             |
| General reliability principles, failure models, recovery                  | `distributed-systems/reliability/`                                                                 |
| Retry, circuit breaker, timeout, bulkhead patterns                        | `distributed-systems/reliability/`                                                                 |
| Message delivery guarantees and ordering                                  | `distributed-systems/messaging-systems/`                                                           |
| Broker-specific consumer lag and message telemetry                        | `service-communication/observability/asynchronous-communication/`, with links to messaging systems |
| Infrastructure CPU, memory, host and container monitoring                 | `infrastructure-devops/monitoring/`                                                                |
| HTTP, gRPC and messaging protocol semantics                               | Their respective service-communication or protocol sections                                        |
| OpenTelemetry, Micrometer, Prometheus, Grafana and Jaeger implementations | Technology and framework-specific sections                                                         |

## 2. Recommended learning order

1\. Foundations

Overview → Observability pillars → Distributed tracing

Understand what observability means and how logs, metrics, and traces complement one another.

2\. Cross-service context

Context propagation → Trace IDs → Correlation IDs

Follow one request across gateways, services, and downstream dependencies.

3\. Measurements and diagnosis

Communication metrics → Dependency observability → Error diagnostics

Identify latency, errors, bottlenecks, and failure propagation.

4\. Distributed and asynchronous flows

Asynchronous communication → Sampling → SLOs

Understand tracing across queues, consumers, retries, and asynchronous workflows.

5\. Production architecture

Observability architecture → Security and privacy → Best practices

Design a useful, secure, and cost-effective telemetry strategy.

## 3. Recommended scope for the overview page

Your `observability/overview/index.mdx` should introduce:

- Why distributed service communication is difficult to observe.
- The three pillars: logs, metrics, and distributed traces.
- The relationship between instrumentation, context propagation, collection, storage, and visualization.
- How observability supports troubleshooting and reliability.
- The difference between synchronous request tracing and asynchronous message tracing.
- How this section relates to reliability, messaging systems, API gateways, and infrastructure monitoring.

One architectural recommendation: make `distributed-tracing/` and `context-propagation/` first-class subsections. In a microservices knowledge base, understanding how trace context travels across service boundaries is central to diagnosing end-to-end behavior.

For your TechnoWiki, I’d organize these tools under framework-specific and technology-specific implementations of distributed tracing, while keeping the tracing concepts themselves in your existing architecture section:

`software-engineering/design-architecture/distributed-systems/service-communication/observability/`

The important distinction is that these technologies play different roles. They should not all be documented as if they were tracing libraries.

| Technology                       | Role in the tracing ecosystem                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Spring Boot Actuator             | Exposes application health and operational endpoints; integrates with Micrometer observation and tracing in Spring Boot applications. |
| Micrometer Observation / Tracing | Provides instrumentation and tracing abstractions for JVM applications, especially Spring applications.                               |
| OpenTelemetry SDK                | Creates, processes, samples, and exports telemetry using OpenTelemetry APIs and SDKs.                                                 |
| Prometheus                       | Primarily collects and stores metrics; it is not a distributed-trace backend.                                                         |
| Zipkin                           | Collects and stores distributed trace data and provides a trace-query UI.                                                             |
| Grafana                          | Visualizes and correlates traces, metrics, and logs from supported data sources.                                                      |

A clean structure separates instrumentation, context propagation, export and collection, storage and querying, and visualization.

## 1. Recommended TOC structure

I would not place all six technologies under a single Spring Boot tracing folder. Use separate locations for framework integrations, instrumentation libraries, and observability platforms.

```
software-engineering/
├── frameworks-platforms/
│   ├── backend-frameworks/
│   │   └── spring-boot/
│   │       └── observability/
│   │           ├── actuator/
│   │           ├── micrometer-observation/
│   │           └── distributed-tracing/
│   │
│   └── observability-libraries/
│       ├── micrometer-tracing/
│       └── opentelemetry/
│           └── java/
│
└── infrastructure-devops/
    └── observability/
        ├── metrics/
        │   └── prometheus/
        ├── tracing-backends/
        │   └── zipkin/
        ├── visualization/
        │   └── grafana/
        └── telemetry-collection/
            └── opentelemetry-collector/
```

This layout follows the role of each component rather than grouping everything by the fact that it participates in observability.

## 2. Spring Boot tracing integration

Location:

`frameworks-platforms/backend-frameworks/spring-boot/observability/distributed-tracing/`

```
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
```

Spring Boot's Actuator integration provides much of the auto-configuration, while Micrometer Observation and Tracing connect application instrumentation to the chosen tracing implementation. Exact dependencies and properties vary by Spring Boot version and tracer.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.spring.io\&sz=32)

Home+1



## 3. Micrometer Tracing

Location:

`frameworks-platforms/observability-libraries/micrometer-tracing/`

```
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
```

Keep this section focused on the Micrometer APIs, abstractions, and bridges. Spring Boot configuration examples should link back to the Spring Boot section instead of being duplicated here.

## 4. OpenTelemetry Java SDK

Location:

`frameworks-platforms/observability-libraries/opentelemetry/java/`

```
java/
├── overview/
│   ├── index.mdx
│   ├── opentelemetry-java-architecture.mdx
│   ├── api-vs-sdk.mdx
│   ├── zero-code-vs-manual-instrumentation.mdx
│   └── opentelemetry-vs-micrometer.mdx
│
├── instrumentation/
│   ├── manual-instrumentation.mdx
│   ├── automatic-instrumentation-java-agent.mdx
│   ├── java-agent-configuration.mdx
│   ├── spring-boot-instrumentation.mdx
│   └── semantic-conventions.mdx
│
├── sdk-configuration/
│   ├── sdk-initialization.mdx
│   ├── resource-attributes.mdx
│   ├── tracer-provider.mdx
│   ├── span-processor.mdx
│   ├── sampling.mdx
│   └── context-propagators.mdx
│
├── context-propagation/
│   ├── w3c-trace-context.mdx
│   ├── baggage.mdx
│   ├── http-propagation.mdx
│   ├── asynchronous-context.mdx
│   └── messaging-propagation.mdx
│
├── exporters/
│   ├── otlp-http-exporter.mdx
│   ├── otlp-grpc-exporter.mdx
│   ├── zipkin-exporter.mdx
│   └── exporter-retries-and-batching.mdx
│
├── collector-integration/
│   ├── exporting-to-collector.mdx
│   ├── collector-endpoints.mdx
│   └── resource-and-service-identity.mdx
│
├── performance-and-security/
│   ├── sampling-and-overhead.mdx
│   ├── sensitive-span-attributes.mdx
│   ├── attribute-cardinality.mdx
│   └── production-deployment.mdx
│
└── testing/
    ├── in-memory-exporter.mdx
    ├── testing-span-creation.mdx
    └── testing-propagation.mdx
```

OpenTelemetry's Java implementation includes APIs, SDK configuration, instrumentation, and exporters. Keep the generic OpenTelemetry concepts in your architecture observability TOC, and put Java-specific implementation details here.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://opentelemetry.io\&sz=32)

OpenTelemetry+1



## 5. Prometheus — metrics correlated with traces

Location:

`infrastructure-devops/observability/metrics/prometheus/`

Prometheus is primarily a metrics system, so its TOC should live under metrics rather than distributed tracing. Include the tracing-related integration topics below.

```
prometheus/
├── overview/
│   ├── index.mdx
│   ├── prometheus-architecture.mdx
│   └── metrics-vs-traces.mdx
│
├── metrics-collection/
│   ├── scrape-model.mdx
│   ├── scrape-targets.mdx
│   ├── service-discovery.mdx
│   └── exporters.mdx
│
├── metric-model/
│   ├── metric-types.mdx
│   ├── labels-and-cardinality.mdx
│   └── histograms-and-latency.mdx
│
├── querying-and-alerting/
│   ├── promql.mdx
│   ├── latency-and-error-rate-queries.mdx
│   └── alerting-rules.mdx
│
├── tracing-correlation/
│   ├── trace-related-metrics.mdx
│   ├── exemplars.mdx
│   ├── linking-metrics-to-traces.mdx
│   └── trace-based-investigation-workflows.mdx
│
├── integration/
│   ├── spring-boot-micrometer-metrics.mdx
│   ├── grafana-integration.mdx
│   └── trace-backend-integration.mdx
│
└── operations/
    ├── retention-and-storage.mdx
    ├── high-availability.mdx
    └── troubleshooting.mdx
```

Boundary: Prometheus records metrics such as request rate, error rate, and latency. Exemplars can associate selected metric observations with trace IDs, allowing a user to move from a metrics graph to an individual trace.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://grafana.com\&sz=32)

Grafana documentation



## 6. Zipkin — distributed tracing backend

Location:

`infrastructure-devops/observability/tracing-backends/zipkin/`

```
zipkin/
├── overview/
│   ├── index.mdx
│   ├── zipkin-architecture.mdx
│   └── zipkin-components.mdx
│
├── ingestion/
│   ├── span-ingestion.mdx
│   ├── collector-and-reporter.mdx
│   ├── supported-ingestion-formats.mdx
│   └── ingestion-troubleshooting.mdx
│
├── storage-and-querying/
│   ├── storage-backends.mdx
│   ├── trace-indexing.mdx
│   ├── trace-search.mdx
│   └── trace-retrieval.mdx
│
├── trace-analysis/
│   ├── viewing-traces.mdx
│   ├── span-timelines.mdx
│   ├── service-dependencies.mdx
│   └── latency-investigation.mdx
│
├── instrumentation-integration/
│   ├── spring-boot-integration.mdx
│   ├── micrometer-tracing-integration.mdx
│   ├── brave-integration.mdx
│   └── opentelemetry-integration.mdx
│
├── deployment/
│   ├── local-development.mdx
│   ├── docker-deployment.mdx
│   ├── storage-and-retention.mdx
│   └── production-security.mdx
│
└── troubleshooting/
    ├── missing-traces.mdx
    ├── incomplete-traces.mdx
    └── ingestion-and-storage-errors.mdx
```

Zipkin's role is to receive trace data, persist and index it, and provide APIs and a UI for querying traces.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://zipkin.io\&sz=32)

OpenZipkin



## 7. Grafana — trace visualization and correlation

Location:

`infrastructure-devops/observability/visualization/grafana/`

```
grafana/
├── overview/
│   ├── index.mdx
│   ├── grafana-observability-architecture.mdx
│   └── dashboards-vs-exploration.mdx
│
├── data-sources/
│   ├── prometheus-data-source.mdx
│   ├── tempo-data-source.mdx
│   ├── zipkin-data-source.mdx
│   └── data-source-configuration.mdx
│
├── trace-exploration/
│   ├── searching-for-traces.mdx
│   ├── trace-details-and-span-timelines.mdx
│   ├── filtering-by-service-and-attributes.mdx
│   └── investigating-errors-and-latency.mdx
│
├── cross-signal-correlation/
│   ├── metrics-to-traces.mdx
│   ├── traces-to-logs.mdx
│   ├── trace-ids-in-logs.mdx
│   ├── exemplars-and-trace-navigation.mdx
│   └── service-graphs.mdx
│
├── dashboards-and-alerting/
│   ├── service-health-dashboards.mdx
│   ├── latency-and-error-dashboards.mdx
│   └── trace-derived-metrics.mdx
│
├── access-and-operations/
│   ├── data-source-access-control.mdx
│   ├── dashboard-provisioning.mdx
│   └── troubleshooting.mdx
│
└── deployment/
    ├── local-development.mdx
    └── production-deployment.mdx
```

Grafana is the visualization and exploration layer, not the tracing SDK or the trace storage engine. For a Grafana-centered deployment, also consider Grafana Tempo as a dedicated tracing backend. Grafana supports trace-to-metrics and trace-to-logs correlation, and Tempo provides trace querying and visualization integration.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://grafana.com\&sz=32)

Grafana documentation+1



## 8. Optional: OpenTelemetry Collector

If you plan to document production observability architecture, give the collector its own section:

`infrastructure-devops/observability/telemetry-collection/opentelemetry-collector/`

```
opentelemetry-collector/
├── overview/
│   ├── index.mdx
│   └── collector-architecture.mdx
├── pipelines/
│   ├── receivers.mdx
│   ├── processors.mdx
│   ├── exporters.mdx
│   └── service-pipelines.mdx
├── trace-processing/
│   ├── batching.mdx
│   ├── tail-based-sampling.mdx
│   ├── filtering-and-redaction.mdx
│   └── routing-and-export.mdx
├── deployment/
│   ├── agent-vs-gateway.mdx
│   ├── docker-and-kubernetes.mdx
│   └── high-availability.mdx
└── operations/
    ├── collector-self-observability.mdx
    ├── capacity-planning.mdx
    └── troubleshooting.mdx
```

This lets you explain a common production flow without tying your architecture to a particular backend:

Spring Boot microservices

Actuator · Micrometer Tracing · OpenTelemetry SDK

OpenTelemetry Collector

Receive · Process · Sample · Export

Tracing backend

Zipkin or Grafana Tempo

Grafana

Trace exploration · Metrics correlation · Log correlation

## 9. Final placement rules

| Topic                                         | Canonical location                                                                  |
| --------------------------------------------- | ----------------------------------------------------------------------------------- |
| Traces, spans, propagation, sampling concepts | `design-architecture/.../observability/`                                            |
| Spring Boot Actuator tracing integration      | `frameworks-platforms/backend-frameworks/spring-boot/observability/`                |
| Micrometer APIs and tracer bridges            | `frameworks-platforms/observability-libraries/micrometer-tracing/`                  |
| OpenTelemetry Java APIs and SDK               | `frameworks-platforms/observability-libraries/opentelemetry/java/`                  |
| Prometheus metrics and trace correlation      | `infrastructure-devops/observability/metrics/prometheus/`                           |
| Zipkin trace ingestion and querying           | `infrastructure-devops/observability/tracing-backends/zipkin/`                      |
| Grafana visualization and correlation         | `infrastructure-devops/observability/visualization/grafana/`                        |
| OpenTelemetry Collector pipelines             | `infrastructure-devops/observability/telemetry-collection/opentelemetry-collector/` |

One versioning note: Spring Boot's tracing configuration changes across major releases. For example, current Spring Boot 4.x documentation describes OpenTelemetry with OTLP and Brave with Zipkin as common combinations, while the OpenTelemetry Zipkin exporter integration is deprecated in the newer documentation. Keep version-specific setup examples under the appropriate Spring Boot version rather than presenting one dependency list as universal.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://docs.spring.io\&sz=32)

Home+1
