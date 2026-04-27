import os
import json
from zipfile import ZipFile

BASE_DIR = "software-engineering-docs"
DOCS_ROOT = os.path.join(BASE_DIR, "docs", "software-engineering2")

# ------------------------
# Helpers
# ------------------------
def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

def write_json(path, data):
    with open(path, "w") as f:
        json.dump(data, f, indent=2)

def write_mdx(path, doc_id, title, position):
    content = f"""---
id: {doc_id}
title: {title}
sidebar_position: {position}
---

# {title}

> Expand this section with detailed explanations, diagrams, and real-world examples.
"""
    with open(path, "w") as f:
        f.write(content)

def create_category(path, label, position):
    write_json(os.path.join(path, "_category_.json"), {
        "label": label,
        "position": position
    })

# ------------------------
# Structure Definition
# ------------------------
structure = {
    "principles-theory": {
        "Core Principles": [
            "abstraction",
            "modularity",
            "separation-of-concerns",
            "dry",
            "kiss",
            "yagni"
        ],
        "OOP Principles": [
            "encapsulation",
            "inheritance",
            "polymorphism",
            "composition-over-inheritance",
            "solid-principles"
        ],
        "Functional Reactive": [
            "immutability",
            "pure-functions",
            "functional-composition",
            "reactive-streams"
        ],
        "Complexity Tradeoffs": [
            "time-complexity",
            "space-complexity",
            "cap-theorem",
            "consistency-models"
        ],
        "System Qualities": [
            "scalability",
            "availability",
            "reliability",
            "maintainability",
            "performance"
        ]
    },

    "design-architecture": {
        "System Design": [
            "hld",
            "lld",
            "api-design-rest",
            "api-design-graphql"
        ],
        "Architectural Styles": [
            "monolith",
            "microservices",
            "event-driven",
            "serverless"
        ],
        "Architectural Patterns": [
            "layered-architecture",
            "hexagonal-architecture",
            "clean-architecture",
            "cqrs",
            "event-sourcing"
        ],
        "Design Patterns": {
            "creational": [
                "singleton",
                "factory-method",
                "abstract-factory",
                "builder",
                "prototype"
            ],
            "structural": [
                "adapter",
                "decorator",
                "proxy",
                "facade",
                "composite"
            ],
            "behavioral": [
                "observer",
                "strategy",
                "command",
                "state",
                "template-method"
            ]
        },
        "Distributed Systems": [
            "service-communication",
            "data-consistency",
            "fault-tolerance",
            "observability"
        ]
    },

    "implementation": {
        "Code Structure": [
            "layered-structure",
            "package-design",
            "modularization"
        ],
        "Coding Practices": [
            "clean-code",
            "naming-conventions",
            "code-readability"
        ],
        "Dependency Management": [
            "dependency-injection",
            "inversion-of-control"
        ],
        "Data Handling": [
            "serialization-json",
            "serialization-protobuf",
            "data-structures-usage"
        ],
        "Error Logging": [
            "exception-handling",
            "structured-logging",
            "correlation-ids"
        ],
        "Security Code": [
            "input-validation",
            "secure-coding",
            "secrets-management"
        ],
        "Performance Optimization": [
            "memory-management",
            "concurrency",
            "profiling"
        ]
    },

    "frameworks-platforms": {
        "backend-frameworks": {
            "spring-boot": [
                "core",
                "dependency-injection",
                "spring-mvc",
                "spring-data",
                "spring-security",
                "testing",
                "spring-cloud"
            ],
            "django": [
                "core",
                "orm",
                "auth",
                "middleware"
            ],
            "fastapi": [
                "routing",
                "dependency-injection",
                "pydantic",
                "async-support"
            ],
            "express": [
                "routing",
                "middleware",
                "error-handling"
            ]
        },
        "frontend-frameworks": {
            "react": [
                "components",
                "hooks",
                "state-management"
            ],
            "angular": [
                "modules",
                "components",
                "services"
            ],
            "vue": [
                "components",
                "composition-api"
            ]
        },
        "persistence-frameworks": {
            "hibernate": [
                "orm-basics",
                "entity-mapping",
                "transactions"
            ],
            "sqlalchemy": [
                "core",
                "orm",
                "sessions"
            ]
        }
    },

    "infrastructure-devops": {
        "build-packaging": [
            "maven",
            "gradle",
            "npm"
        ],
        "containerization": {
            "docker": [
                "basics",
                "images",
                "containers",
                "networking",
                "volumes"
            ]
        },
        "orchestration": {
            "kubernetes": [
                "pods",
                "services",
                "deployments",
                "configmaps",
                "secrets"
            ]
        },
        "cicd": [
            "pipelines",
            "github-actions",
            "gitlab-ci"
        ],
        "cloud": [
            "aws-basics",
            "azure-basics",
            "gcp-basics",
            "iac-terraform"
        ],
        "monitoring": [
            "logging",
            "metrics",
            "tracing"
        ],
        "deployment-strategies": [
            "blue-green",
            "canary",
            "rolling"
        ],
        "reliability": [
            "slo-sla-sli",
            "incident-management",
            "chaos-engineering"
        ]
    }
}

# ------------------------
# Build Structure
# ------------------------
ensure_dir(DOCS_ROOT)
create_category(DOCS_ROOT, "Software Engineering", 1)

for sec_index, (section, content) in enumerate(structure.items(), start=1):
    section_path = os.path.join(DOCS_ROOT, section)
    ensure_dir(section_path)
    create_category(section_path, section.replace("-", " ").title(), sec_index)

    for sub_index, (key, value) in enumerate(content.items(), start=1):
        key_slug = key.lower().replace(" ", "-")
        key_path = os.path.join(section_path, key_slug)
        ensure_dir(key_path)
        create_category(key_path, key, sub_index)

        if isinstance(value, dict):  # deep structure
            for i, (sub, topics) in enumerate(value.items(), start=1):
                sub_path = os.path.join(key_path, sub)
                ensure_dir(sub_path)
                create_category(sub_path, sub.replace("-", " ").title(), i)

                for j, topic in enumerate(topics, start=1):
                    topic_path = os.path.join(sub_path, topic)
                    ensure_dir(topic_path)
                    create_category(topic_path, topic.replace("-", " ").title(), j)
                    write_mdx(
                        os.path.join(topic_path, "index.mdx"),
                        f"{section}-{key_slug}-{sub}-{topic}",
                        topic.replace("-", " ").title(),
                        1
                    )

        elif isinstance(value, list) and value:  # mid-depth
            for i, topic in enumerate(value, start=1):
                topic_path = os.path.join(key_path, topic)
                ensure_dir(topic_path)
                create_category(topic_path, topic.replace("-", " ").title(), i)
                write_mdx(
                    os.path.join(topic_path, "index.mdx"),
                    f"{section}-{key_slug}-{topic}",
                    topic.replace("-", " ").title(),
                    1
                )
        else:  # flat
            write_mdx(
                os.path.join(key_path, "index.mdx"),
                f"{section}-{key_slug}",
                key,
                1
            )

# ------------------------
# Sidebar (clean manual)
# ------------------------
sidebar_content = """import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  seSidebar: [
    {
      type: 'autogenerated',
      dirName: 'software-engineering',
    },
  ],
};

export default sidebars;
"""

with open(os.path.join(BASE_DIR, "sidebars.ts"), "w") as f:
    f.write(sidebar_content)

# ------------------------
# Zip Output
# ------------------------
zip_path = "software-engineering-docs.zip"
with ZipFile(zip_path, "w") as z:
    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            full = os.path.join(root, file)
            z.write(full, os.path.relpath(full, BASE_DIR))

print(f"✅ Done! ZIP created: {zip_path}")
