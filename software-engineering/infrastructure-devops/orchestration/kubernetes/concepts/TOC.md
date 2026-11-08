software-engineering/
└── infrastructure-devops/
    └── orchestration/
        └── kubernetes/
            ├── _category_.json
            ├── index.mdx
            │
            ├── overview/
            │   ├── index.mdx
            │   ├── what-is-kubernetes.mdx
            │   ├── container-orchestration.mdx
            │   ├── kubernetes-vs-docker.mdx
            │   ├── kubernetes-vs-docker-compose.mdx
            │   ├── kubernetes-vs-other-orchestrators.mdx
            │   └── when-to-use-kubernetes.mdx
            │
            ├── architecture/
            │   ├── index.mdx
            │   ├── cluster-architecture.mdx
            │   ├── control-plane.mdx
            │   ├── worker-nodes.mdx
            │   ├── api-server.mdx
            │   ├── etcd.mdx
            │   ├── scheduler.mdx
            │   ├── controller-manager.mdx
            │   ├── cloud-controller-manager.mdx
            │   ├── kubelet.mdx
            │   ├── kube-proxy.mdx
            │   ├── container-runtime.mdx
            │   ├── reconciliation-loops.mdx
            │   └── desired-state-vs-actual-state.mdx
            │
            ├── fundamentals/
            │   ├── index.mdx
            │   ├── declarative-configuration.mdx
            │   ├── kubernetes-api.mdx
            │   ├── api-resources-and-objects.mdx
            │   ├── manifests-and-yaml.mdx
            │   ├── labels-and-selectors.mdx
            │   ├── annotations.mdx
            │   ├── namespaces.mdx
            │   ├── owner-references.mdx
            │   ├── labels-vs-annotations.mdx
            │   ├── kubectl-fundamentals.mdx
            │   └── api-versioning-and-deprecation.mdx
            │
            ├── local-development/
            │   ├── index.mdx
            │   ├── local-cluster-options.mdx
            │   ├── kind.mdx
            │   ├── minikube.mdx
            │   ├── kubectl-installation.mdx
            │   ├── kubernetes-dashboard.mdx
            │   └── local-development-workflow.mdx
            │
            ├── workloads/
            │   ├── index.mdx
            │   ├── pods/
            │   │   ├── index.mdx
            │   │   ├── pod-anatomy.mdx
            │   │   ├── containers-and-init-containers.mdx
            │   │   ├── sidecar-containers.mdx
            │   │   ├── pod-lifecycle.mdx
            │   │   ├── pod-phases-and-conditions.mdx
            │   │   ├── restart-policy.mdx
            │   │   ├── probes.mdx
            │   │   ├── resource-requests-and-limits.mdx
            │   │   └── pod-disruption.mdx
            │   │
            │   ├── deployments/
            │   │   ├── index.mdx
            │   │   ├── replica-management.mdx
            │   │   ├── rolling-updates.mdx
            │   │   ├── rollout-history-and-rollback.mdx
            │   │   ├── deployment-strategies.mdx
            │   │   └── rollout-troubleshooting.mdx
            │   │
            │   ├── replica-sets.mdx
            │   ├── statefulsets.mdx
            │   ├── daemonsets.mdx
            │   ├── jobs.mdx
            │   ├── cronjobs.mdx
            │   ├── workload-selection.mdx
            │   └── workload-controllers.mdx
            │
            ├── configuration-and-secrets/
            │   ├── index.mdx
            │   ├── environment-variables.mdx
            │   ├── configmaps.mdx
            │   ├── secrets.mdx
            │   ├── mounting-configuration.mdx
            │   ├── configuration-updates.mdx
            │   ├── secret-encryption-at-rest.mdx
            │   ├── external-secret-stores.mdx
            │   └── configuration-best-practices.mdx
            │
            ├── networking/
            │   ├── index.mdx
            │   ├── kubernetes-networking-model.mdx
            │   ├── pod-networking.mdx
            │   ├── cluster-dns.mdx
            │   ├── services/
            │   │   ├── index.mdx
            │   │   ├── clusterip.mdx
            │   │   ├── nodeport.mdx
            │   │   ├── loadbalancer.mdx
            │   │   ├── headless-services.mdx
            │   │   ├── service-discovery.mdx
            │   │   └── endpoints-and-endpointslices.mdx
            │   │
            │   ├── ingress/
            │   │   ├── index.mdx
            │   │   ├── ingress-resources.mdx
            │   │   ├── ingress-controllers.mdx
            │   │   ├── tls-termination.mdx
            │   │   └── ingress-vs-service.mdx
            │   │
            │   ├── gateway-api/
            │   │   ├── index.mdx
            │   │   ├── gateway-and-httproute.mdx
            │   │   ├── gateway-classes.mdx
            │   │   └── ingress-vs-gateway-api.mdx
            │   │
            │   ├── network-policies.mdx
            │   ├── cni-plugins.mdx
            │   ├── load-balancing.mdx
            │   ├── external-service-access.mdx
            │   └── network-troubleshooting.mdx
            │
            ├── storage/
            │   ├── index.mdx
            │   ├── volumes.mdx
            │   ├── ephemeral-volumes.mdx
            │   ├── persistent-volumes.mdx
            │   ├── persistent-volume-claims.mdx
            │   ├── storage-classes.mdx
            │   ├── dynamic-provisioning.mdx
            │   ├── access-modes.mdx
            │   ├── volume-expansion.mdx
            │   ├── volume-snapshots.mdx
            │   ├── csi-drivers.mdx
            │   └── stateful-workload-storage.mdx
            │
            ├── scheduling-and-resources/
            │   ├── index.mdx
            │   ├── scheduling-fundamentals.mdx
            │   ├── resource-requests-and-limits.mdx
            │   ├── quality-of-service-classes.mdx
            │   ├── node-selectors.mdx
            │   ├── node-affinity.mdx
            │   ├── pod-affinity-and-anti-affinity.mdx
            │   ├── taints-and-tolerations.mdx
            │   ├── topology-spread-constraints.mdx
            │   ├── priority-and-preemption.mdx
            │   ├── pod-overhead.mdx
            │   └── resource-quotas-and-limit-ranges.mdx
            │
            ├── autoscaling/
            │   ├── index.mdx
            │   ├── horizontal-pod-autoscaler.mdx
            │   ├── vertical-pod-autoscaler.mdx
            │   ├── cluster-autoscaler.mdx
            │   ├── metrics-server.mdx
            │   ├── custom-and-external-metrics.mdx
            │   └── autoscaling-strategies.mdx
            │
            ├── security/
            │   ├── index.mdx
            │   ├── authentication.mdx
            │   ├── authorization.mdx
            │   ├── rbac.mdx
            │   ├── service-accounts.mdx
            │   ├── pod-security-standards.mdx
            │   ├── pod-security-admission.mdx
            │   ├── security-contexts.mdx
            │   ├── admission-controllers.mdx
            │   ├── validating-and-mutating-webhooks.mdx
            │   ├── image-security.mdx
            │   ├── network-isolation.mdx
            │   ├── supply-chain-security.mdx
            │   ├── audit-logging.mdx
            │   └── security-best-practices.mdx
            │
            ├── observability/
            │   ├── index.mdx
            │   ├── cluster-and-node-metrics.mdx
            │   ├── pod-and-container-metrics.mdx
            │   ├── application-logs.mdx
            │   ├── events-and-diagnostics.mdx
            │   ├── health-probes.mdx
            │   ├── monitoring-with-prometheus.mdx
            │   ├── dashboards-with-grafana.mdx
            │   ├── distributed-tracing-integration.mdx
            │   ├── openTelemetry-collector-integration.mdx
            │   └── alerting-and-troubleshooting.mdx
            │
            ├── deployment-and-release/
            │   ├── index.mdx
            │   ├── container-image-management.mdx
            │   ├── image-pull-policies.mdx
            │   ├── rolling-deployments.mdx
            │   ├── blue-green-deployments.mdx
            │   ├── canary-deployments.mdx
            │   ├── helm/
            │   │   ├── index.mdx
            │   │   ├── charts-and-repositories.mdx
            │   │   ├── chart-structure.mdx
            │   │   ├── values-and-templates.mdx
            │   │   ├── releases-and-rollbacks.mdx
            │   │   └── chart-dependencies.mdx
            │   │
            │   ├── kustomize/
            │   │   ├── index.mdx
            │   │   ├── bases-and-overlays.mdx
            │   │   ├── patches.mdx
            │   │   └── environment-customization.mdx
            │   │
            │   └── gitops/
            │       ├── index.mdx
            │       ├── gitops-principles.mdx
            │       ├── reconciliation-and-drift.mdx
            │       ├── flux.mdx
            │       └── argocd.mdx
            │
            ├── reliability-and-operations/
            │   ├── index.mdx
            │   ├── high-availability.mdx
            │   ├── control-plane-availability.mdx
            │   ├── node-failures.mdx
            │   ├── pod-disruptions.mdx
            │   ├── pod-disruption-budgets.mdx
            │   ├── graceful-termination.mdx
            │   ├── failure-recovery.mdx
            │   ├── backup-and-restore.mdx
            │   ├── etcd-backup-and-restore.mdx
            │   ├── cluster-upgrades.mdx
            │   ├── capacity-planning.mdx
            │   └── disaster-recovery.mdx
            │
            ├── extensibility/
            │   ├── index.mdx
            │   ├── custom-resource-definitions.mdx
            │   ├── custom-controllers.mdx
            │   ├── operators.mdx
            │   ├── admission-webhooks.mdx
            │   └── api-aggregation.mdx
            │
            ├── multi-tenancy/
            │   ├── index.mdx
            │   ├── namespace-isolation.mdx
            │   ├── resource-quotas.mdx
            │   ├── tenant-rbac.mdx
            │   └── multi-tenant-security.mdx
            │
            ├── troubleshooting/
            │   ├── index.mdx
            │   ├── kubectl-debugging.mdx
            │   ├── pod-pending.mdx
            │   ├── crashloopbackoff.mdx
            │   ├── imagepullbackoff.mdx
            │   ├── service-connectivity.mdx
            │   ├── dns-failures.mdx
            │   ├── storage-mount-failures.mdx
            │   └── scheduling-failures.mdx
            │
            ├── labs/
            │   ├── index.mdx
            │   ├── deploy-your-first-application.mdx
            │   ├── expose-an-application.mdx
            │   ├── configure-a-microservice.mdx
            │   ├── persist-application-data.mdx
            │   ├── configure-health-probes.mdx
            │   ├── configure-resource-limits.mdx
            │   ├── deploy-a-microservices-stack.mdx
            │   └── observe-a-distributed-application.mdx
            │
            ├── best-practices/
            │   ├── workload-design.mdx
            │   ├── configuration-management.mdx
            │   ├── resource-management.mdx
            │   ├── security-hardening.mdx
            │   ├── deployment-strategies.mdx
            │   └── production-readiness.mdx
            │
            ├── anti-patterns/
            │   ├── using-latest-image-tags.mdx
            │   ├── missing-resource-requests.mdx
            │   ├── running-as-root.mdx
            │   ├── excessive-privileges.mdx
            │   ├── misconfigured-probes.mdx
            │   ├── oversized-or-monolithic-manifests.mdx
            │   └── unmanaged-configuration-drift.mdx
            │
            └── related-topics/
                ├── docker-and-containers.mdx
                ├── infrastructure-as-code.mdx
                ├── service-discovery.mdx
                ├── centralized-configuration.mdx
                ├── distributed-systems-reliability.mdx
                ├── distributed-tracing.mdx
                └── ci-cd-and-gitops.mdx