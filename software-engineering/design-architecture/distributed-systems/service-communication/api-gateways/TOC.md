software-engineering/
└── service-communication/
    └── edge-server/
        ├── overview/
        │   ├── what-is-an-api-gateway
        │   ├── why-api-gateways-exist
        │   ├── problems-they-solve
        │   ├── benefits
        │   ├── drawbacks
        │   ├── when-to-use
        │   └── api-gateway-in-microservices
        │
        ├── architecture/
        │   ├── gateway-architecture
        │   ├── request-flow
        │   ├── gateway-components
        │   ├── control-plane-vs-data-plane
        │   ├── centralized-vs-distributed-gateway
        │   └── deployment-topologies
        │
        ├── fundamentals/
        │   ├── edge-server
        │   ├── north-south-vs-east-west-traffic
        │   ├── gateway-vs-reverse-proxy
        │   ├── gateway-vs-load-balancer
        │   ├── gateway-vs-service-mesh
        │   ├── gateway-vs-ingress-controller
        │   └── gateway-vs-web-server
        │
        ├── gateway-patterns/
        │   ├── api-gateway-pattern
        │   ├── backend-for-frontend
        │   ├── gateway-aggregation
        │   ├── request-routing
        │   ├── request-composition
        │   ├── facade-pattern
        │   └── strangler-pattern
        │
        ├── request-routing/
        │   ├── path-routing
        │   ├── host-routing
        │   ├── header-routing
        │   ├── method-routing
        │   ├── query-parameter-routing
        │   ├── weighted-routing
        │   ├── version-routing
        │   ├── conditional-routing
        │   └── dynamic-routing
        │
        ├── traffic-management/
        │   ├── load-balancing
        │   ├── rate-limiting
        │   ├── throttling
        │   ├── quotas
        │   ├── request-queuing
        │   ├── circuit-breaking
        │   ├── retries
        │   ├── timeouts
        │   ├── concurrency-limits
        │   └── traffic-shaping
        │
        ├── security/
        │   ├── authentication
        │   ├── authorization
        │   ├── jwt-validation
        │   ├── oauth2
        │   ├── oidc
        │   ├── api-keys
        │   ├── mTLS
        │   ├── cors
        │   ├── csrf
        │   ├── ip-filtering
        │   ├── bot-protection
        │   ├── waf-integration
        │   └── secret-management
        │
        ├── request-processing/
        │   ├── request-filtering
        │   ├── request-transformation
        │   ├── response-transformation
        │   ├── protocol-translation
        │   ├── header-manipulation
        │   ├── url-rewriting
        │   ├── body-modification
        │   ├── compression
        │   └── decompression
        │
        ├── resiliency/
        │   ├── fallback
        │   ├── circuit-breaker
        │   ├── bulkhead
        │   ├── timeout
        │   ├── retry
        │   ├── fail-fast
        │   └── graceful-degradation
        │
        ├── observability/
        │   ├── logging
        │   ├── metrics
        │   ├── tracing
        │   ├── correlation-ids
        │   ├── distributed-tracing
        │   ├── health-checks
        │   ├── monitoring
        │   └── alerting
        │
        ├── caching/
        │   ├── response-caching
        │   ├── cache-invalidation
        │   ├── cache-control
        │   ├── etags
        │   └── conditional-requests
        │
        ├── service-discovery-integration/
        │   ├── dynamic-routing
        │   ├── registry-integration
        │   ├── health-awareness
        │   └── client-side-vs-server-side-discovery
        │
        ├── deployment/
        │   ├── high-availability
        │   ├── clustering
        │   ├── horizontal-scaling
        │   ├── blue-green-deployment
        │   ├── canary-routing
        │   ├── rolling-updates
        │   ├── kubernetes-deployment
        │   └── cloud-native-gateways
        │
        ├── implementations/
        │   ├── spring-cloud-gateway/
        │   ├── netflix-zuul/
        │   ├── nginx/
        │   ├── envoy/
        │   ├── kong/
        │   ├── traefik/
        │   ├── apisix/
        │   ├── istio-ingress-gateway/
        │   ├── aws-api-gateway/
        │   ├── azure-api-management/
        │   └── google-api-gateway/
        │
        ├── best-practices/
        │
        └── anti-patterns/