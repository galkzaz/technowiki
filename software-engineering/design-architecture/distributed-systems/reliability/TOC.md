For your `software-engineering` Docusaurus knowledge base, I recommend structuring resilience, circuit breaker, time limiter, retry, Resilience4j, and Spring Cloud Circuit Breaker into separate layers.

The key is to distinguish the resilience concept, the individual resilience patterns, the library implementing those patterns, and the Spring abstraction that integrates them into applications.

## 1. Recommended hierarchy

```
software-engineering/
├── design-architecture/
│   └── distributed-systems/
│       └── reliability/
│           └── resilience/
│               ├── overview/
│               ├── circuit-breaker/
│               ├── retry/
│               ├── timeout/
│               ├── time-limiter/
│               ├── bulkhead/
│               ├── fallback/
│               └── rate-limiting/
│
├── frameworks-platforms/
│   └── backend-frameworks/
│       ├── resilience4j/
│       │   ├── overview/
│       │   ├── circuit-breaker/
│       │   ├── retry/
│       │   ├── timelimiter/
│       │   ├── bulkhead/
│       │   ├── ratelimiter/
│       │   ├── fallback/
│       │   ├── decorators/
│       │   └── configuration/
│       │
│       └── spring-cloud/
│           └── circuit-breaker/
│               ├── overview/
│               ├── abstractions/
│               ├── implementations/
│               ├── resilience4j-integration/
│               ├── configuration/
│               ├── reactive-integration/
│               └── testing/
│
└── infrastructure-devops/
    └── reliability/
        ├── health-checks/
        ├── monitoring/
        └── resilience-configuration/
```

This hierarchy is a conceptual starting point. The important distinction is that Resilience4j and Spring Cloud Circuit Breaker are technologies/framework integrations, while circuit breakers, retries, and timeouts are resilience patterns.

## 2. Where each topic belongs

| Topic                        | Recommended location                                                    | What it covers                                                  |
| ---------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------- |
| Resilience                   | `design-architecture/distributed-systems/reliability/resilience/`       | Overall strategy for handling failures                          |
| Circuit Breaker              | `.../reliability/resilience/circuit-breaker/`                           | States, transitions, failure thresholds, recovery               |
| Retry                        | `.../reliability/resilience/retry/`                                     | Retry policies, backoff, retry limits                           |
| Timeout                      | `.../reliability/resilience/timeout/`                                   | Limiting how long an operation may wait                         |
| Time Limiter                 | `.../reliability/resilience/time-limiter/`                              | Time-limiting asynchronous operations as a resilience pattern   |
| Resilience4j                 | `frameworks-platforms/libraries/resilience4j/`                          | Java library APIs, configuration, decorators and modules        |
| Spring Cloud Circuit Breaker | `frameworks-platforms/backend-frameworks/spring-cloud/circuit-breaker/` | Spring abstraction, provider integrations and Spring Boot usage |

I'd use `frameworks-platforms/libraries/` for Resilience4j if your overall TOC supports a general libraries section. Resilience4j is a Java library, not a Spring-specific framework.

## 3. Detailed TOC for resilience concepts

```
reliability/
└── resilience/
    ├── overview/
    │   ├── what-is-resilience
    │   ├── resilience-vs-reliability
    │   ├── resilience-vs-availability
    │   ├── resilience-in-distributed-systems
    │   └── resilience-strategies
    │
    ├── failure-handling/
    │   ├── transient-vs-permanent-failures
    │   ├── dependency-failures
    │   └── failure-detection
    │
    ├── circuit-breaker/
    │   ├── overview
    │   ├── closed-open-half-open-states
    │   ├── state-transitions
    │   ├── failure-thresholds
    │   ├── slow-call-thresholds
    │   ├── recovery-strategies
    │   └── circuit-breaker-vs-retry
    │
    ├── retry/
    │   ├── overview
    │   ├── retry-policies
    │   ├── maximum-attempts
    │   ├── exponential-backoff
    │   ├── jitter
    │   ├── retryable-vs-non-retryable-errors
    │   ├── retry-safety-and-idempotency
    │   └── retry-storms
    │
    ├── timeout/
    │   ├── overview
    │   ├── connection-timeouts
    │   ├── request-timeouts
    │   ├── response-timeouts
    │   ├── end-to-end-deadlines
    │   └── timeout-propagation
    │
    ├── time-limiter/
    │   ├── overview
    │   ├── asynchronous-operation-timeouts
    │   ├── timeout-duration
    │   ├── cancellation-on-timeout
    │   └── time-limiter-vs-request-timeout
    │
    ├── bulkhead/
    │   ├── overview
    │   ├── semaphore-bulkhead
    │   ├── thread-pool-bulkhead
    │   └── resource-isolation
    │
    ├── fallback/
    │   ├── overview
    │   ├── fallback-responses
    │   ├── cached-responses
    │   └── graceful-degradation
    │
    ├── rate-limiting/
    │   ├── overview
    │   ├── rate-limiting-strategies
    │   └── rate-limiting-vs-throttling
    │
    └── combining-patterns/
        ├── retry-with-circuit-breaker
        ├── timeout-with-retry
        ├── bulkhead-with-circuit-breaker
        └── resilience-policy-ordering
```

Important distinction: a timeout is a general concept, while a time limiter is a particular mechanism for limiting the duration of an operation, especially an asynchronous one. Keep both only if you explain their different scopes.

## 4. Detailed TOC for Resilience4j

```
frameworks-platforms/
└── libraries/
    └── resilience4j/
        ├── overview/
        │   ├── introduction
        │   ├── architecture
        │   ├── modules
        │   └── resilience4j-vs-other-libraries
        │
        ├── getting-started/
        │   ├── dependencies
        │   ├── project-setup
        │   └── first-resilience-policy
        │
        ├── circuit-breaker/
        │   ├── creating-a-circuit-breaker
        │   ├── configuration
        │   ├── state-transitions
        │   ├── failure-rate-threshold
        │   ├── slow-call-threshold
        │   ├── sliding-windows
        │   ├── event-listeners
        │   └── metrics
        │
        ├── retry/
        │   ├── creating-a-retry
        │   ├── configuration
        │   ├── retry-conditions
        │   ├── interval-functions
        │   ├── exponential-backoff
        │   ├── event-listeners
        │   └── metrics
        │
        ├── timelimiter/
        │   ├── creating-a-time-limiter
        │   ├── configuration
        │   ├── asynchronous-operations
        │   ├── timeout-duration
        │   └── cancellation-behavior
        │
        ├── bulkhead/
        │   ├── semaphore-bulkhead
        │   ├── thread-pool-bulkhead
        │   └── configuration
        │
        ├── ratelimiter/
        │   ├── configuration
        │   ├── permissions
        │   └── waiting-and-rejection
        │
        ├── fallback/
        │   ├── fallback-methods
        │   └── exception-handling
        │
        ├── decorators/
        │   ├── decorating-functions
        │   ├── decorating-suppliers
        │   ├── decorating-completion-stages
        │   └── composing-decorators
        │
        ├── integrations/
        │   ├── spring-boot
        │   ├── spring-webflux
        │   └── micrometer
        │
        ├── configuration/
        │   ├── programmatic-configuration
        │   ├── properties-configuration
        │   └── shared-configuration
        │
        ├── monitoring/
        │   ├── events
        │   ├── metrics
        │   └── health-indicators
        │
        ├── testing/
        │   ├── unit-testing
        │   ├── integration-testing
        │   └── testing-failure-scenarios
        │
        └── best-practices/
```

This section should focus on how to use the library directly, including its APIs, configuration, and modules.

## 5. Detailed TOC for Spring Cloud Circuit Breaker

```
frameworks-platforms/
└── backend-frameworks/
    └── spring-cloud/
        └── circuit-breaker/
            ├── overview/
            │   ├── introduction
            │   ├── purpose-of-the-abstraction
            │   └── supported-implementations
            │
            ├── fundamentals/
            │   ├── circuit-breaker-factory
            │   ├── circuit-breaker-api
            │   ├── synchronous-execution
            │   └── reactive-execution
            │
            ├── implementations/
            │   ├── resilience4j
            │   └── alternative-providers
            │
            ├── getting-started/
            │   ├── dependencies
            │   ├── project-setup
            │   └── first-circuit-breaker
            │
            ├── configuration/
            │   ├── default-configuration
            │   ├── named-circuit-breakers
            │   ├── configuration-customizers
            │   └── provider-specific-configuration
            │
            ├── resilience4j-integration/
            │   ├── provider-setup
            │   ├── circuit-breaker-configuration
            │   ├── time-limiter-configuration
            │   ├── bulkhead-configuration
            │   └── configuration-properties
            │
            ├── reactive-integration/
            │   ├── reactive-circuit-breaker
            │   └── webflux-integration
            │
            ├── observability/
            │   ├── metrics
            │   ├── health-indicators
            │   └── monitoring
            │
            ├── testing/
            │   ├── unit-testing
            │   ├── integration-testing
            │   └── testing-failure-scenarios
            │
            └── best-practices/
```

Spring Cloud Circuit Breaker provides a common abstraction over supported circuit-breaker implementations. Resilience4j is one possible provider. Provider-specific features and configuration belong in the integration subsection, rather than duplicating the full Resilience4j documentation here.

## 6. How the topics relate

Resilience

Architecture and reliability concepts

Circuit Breaker

Stop calls to failing dependencies

Retry

Repeat eligible failed operations

Timeout / Time Limiter

Bound waiting time

Bulkhead / Fallback

Isolate or handle failures

Resilience4j

Java implementation library

Spring Cloud Circuit Breaker

Spring abstraction and provider integration

### My recommendation

Keep the canonical explanation of each pattern under `design-architecture/distributed-systems/reliability/resilience/`. Put its general Java implementation under `frameworks-platforms/libraries/resilience4j/`, and Spring Cloud-specific integration under `frameworks-platforms/backend-frameworks/spring-cloud/circuit-breaker/`.

This avoids maintaining three copies of the same explanation while letting you link from each pattern to the relevant library and Spring implementation.


You're right. Since you already have a dedicated `reliability/` TOC, do not create another `reliability/resilience/` hierarchy without a clear need. We should extend your existing structure and avoid duplicating topics.

I recommend organizing the topics you mentioned under your existing `resiliency-patterns/` section, while keeping the technology-specific documentation separate.

## 1. Updated structure

```
software-engineering/
└── design-architecture/
    └── distributed-systems/
        └── reliability/
            ├── overview/
            ├── failure-models/
            ├── fault-tolerance/
            ├── idempotency/
            ├── messaging-reliability/
            ├── observability-reliability/
            ├── reliability-testing/
            ├── consistency-reliability/
            ├── retries/
            └── resiliency-patterns/
                ├── overview/
                ├── circuit-breaker/
                ├── timeout/
                ├── time-limiter/
                ├── bulkhead/
                ├── fallback/
                └── rate-limiting/
```

### What belongs where?

| Topic                                    | Location                                           |
| ---------------------------------------- | -------------------------------------------------- |
| Resilience fundamentals                  | `reliability/resiliency-patterns/overview/`        |
| Circuit Breaker concept                  | `reliability/resiliency-patterns/circuit-breaker/` |
| Retry strategies and exponential backoff | `reliability/retries/`                             |
| Timeouts and deadlines                   | `reliability/resiliency-patterns/timeout/`         |
| Time Limiter concept                     | `reliability/resiliency-patterns/time-limiter/`    |
| Bulkhead, fallback, rate limiting        | `reliability/resiliency-patterns/`                 |

I would keep `retries/` as a sibling of `resiliency-patterns/` because it already exists in your TOC. Link to it from the resilience overview instead of duplicating retry documentation.

## 2. Where Resilience4j belongs

Resilience4j is a Java library, so document its APIs and configuration in your technology/library section:

```
software-engineering/
└── frameworks-platforms/
    └── libraries/
        └── resilience4j/
            ├── overview/
            ├── circuit-breaker/
            ├── retry/
            ├── timelimiter/
            ├── bulkhead/
            ├── ratelimiter/
            ├── decorators/
            ├── configuration/
            ├── monitoring/
            └── testing/
```

This section explains how Resilience4j implements the patterns. For example, the conceptual circuit-breaker page explains states and recovery behavior, while `resilience4j/circuit-breaker/` explains configuration, sliding windows, thresholds, and Java APIs.

## 3. Where Spring Cloud Circuit Breaker belongs

Keep the Spring abstraction separate from the Resilience4j library:

```
software-engineering/
└── frameworks-platforms/
    └── backend-frameworks/
        └── spring-cloud/
            └── circuit-breaker/
                ├── overview/
                ├── getting-started/
                ├── circuit-breaker-api/
                ├── implementations/
                ├── resilience4j-integration/
                ├── configuration/
                ├── reactive-integration/
                ├── monitoring/
                └── testing/
```

This section covers the Spring Cloud API, `CircuitBreakerFactory`, provider selection, and Spring-specific configuration. The `resilience4j-integration/` subsection covers using Resilience4j as the underlying implementation.

## 4. The final separation

1\. Architecture and concepts

`design-architecture/distributed-systems/reliability/`

Circuit breakers, timeouts, retries, fault tolerance, and resilience strategies.

2\. Java library

`frameworks-platforms/libraries/resilience4j/`

Library APIs, modules, decorators, configuration, and metrics.

3\. Spring integration

`frameworks-platforms/backend-frameworks/spring-cloud/circuit-breaker/`

Spring abstractions, provider integration, Spring Boot configuration, and testing.

One refinement: I would not move `retries/` into `resiliency-patterns/` now, because that would disrupt your established TOC. Keep the existing structure and cross-link the relevant pages.