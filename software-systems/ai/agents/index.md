---
id: agents
title: AI agents
description: AI agents
---

Autonomous agents are intelligent systems designed to independently analyze data, interpret their
environment, and make context-driven decisions

autonomous agents are designed for asynchronous operation. They can
manage multiple tasks in parallel, swiftly adapt to new information, and prioritize actions dynamically based on changing conditions. This asynchronous processing
dramatically enhances efficiency, reducing idle time and optimizing the use of com‐
putational resources.

## Types of Agents
1. **Business-task agents**
    * These agents automate predefined business workflows, 
    * such as UiPath's robotic process automation, Microsoft Power Automate's low-code flows, or Zapier's app integrations.
    * They execute sequences of deterministic actions, typically triggered by events, with minimal contextual reasoning.
2. **Conversational agents**
    * This category includes chatbots and customer service agents that engage users through natural language interfaces. 
    * They are optimized for dialogue management, intent recognition, and conversational turn-taking, such as virtual assistants embedded in customer support platforms.
3. **Research agents**
    * Research agents conduct information gathering, synthesis, and summarization tasks. 
    * They scan documents, knowledge bases, or the web to provide structured outputs that assist human analysts.
    * Examples include Perplexity AI and Elicit.Analytics agents
4. **Analytics agents**
    * Analytics agents, such as Power BI Copilot or Glean, focus on interpreting structured datasets and
    generating insights, dashboards, and reports. 
    They often integrate tightly with enterprise data warehouses, enabling users to query complex data in natural language.
5. **Developer agents**
    * Tools like Cursor, Windsurf, and GitHub Copilot represent coding agents, which assist developers by generating, refactoring, and explaining code. 
    * They integrate deeply into IDE workflows to augment software development productivity.
6. **Domain-specific agents**
    * These agents are tuned for specialized professional domains, such as legal (Harvey), medical (Hippocratic AI), or finance agents. 
    * They combine domain-specific knowledge with structured workflows to deliver targeted, expert-level assistance.
7. **Browser-using agents**
    * These agents navigate, interact with, extract information from, and take actions on websites without human interaction.
    * As opposed to traditional robotic process automation, which follows prescripted steps, modern browser-using agents combine language understanding, visual perception, and dynamic planning to adapt on the fly.
8. **Voice agents**
    * Powered by end-to-end speech understanding and generation, these agents are enabling conversational automation in areas like customer service, appointment scheduling, and even realtime order processing.
9. **Video agents**
    * These agents present users with avatar-based video responses, combining lip-synced speech, facial
    expression, and gesture. They're emerging rapidly in sales, training, customer onboarding,
    marketing, and virtual presence tools—enabling scalable, personalized video interactions without
    manual production.
    
## Practical Applications and Use Cases
By integrating these agents into their operations, organizations can achieve greater efficiency,
improve service quality, and unlock new opportunities for innovation and growth.

**Customer support agent**

Customer support is one of the most prevalent applications for autonomous
agents. These agents handle common inquiries, process refunds, update orders,
and escalate complex issues to human representatives, providing 24/7 support
while enhancing customer satisfaction and reducing operational costs.

**Financial services agent**

In banking and financial services, agents assist with account management, loan
processing, fraud investigation, and investment portfolio rebalancing. They
streamline customer service, accelerate transaction processing, and improve
security by detecting suspicious activities in real time

**Healthcare patient intake and triage agent**

These agents support frontline healthcare operations by registering new patients,
verifying insurance, assessing symptoms to prioritize care, scheduling appoint‐
ments, managing medical histories, and coordinating referrals, thereby improv‐
ing workflow efficiency and patient outcomes.

**IT help desk agent**

IT help desk agents manage user access, troubleshoot network and system issues,
deploy software updates, respond to security incidents, and escalate unresolved
issues to specialists. They enhance productivity by resolving common technical
problems swiftly.

**Legal document review agent**

Legal agents assist attorneys and paralegals by reviewing contracts, conducting
legal research, performing client intake and conflict checks, managing discovery,
assessing compliance, calculating damages, and tracking deadlines. This helps to
streamline workflows and improve accuracy in legal operations.

**Security Operations Center (SOC) analyst agent**

SOC analyst agents investigate security alerts, gather threat intelligence, query
logs, triage incidents, isolate compromised hosts, and provide updates to security
teams. They accelerate incident response and strengthen organizational security
posture.

**Supply chain and logistics agent**

In supply chain management, agents optimize inventory, track shipments, evalu‐
ate suppliers, coordinate warehouse operations, forecast demand, manage dis‐
ruptions, and handle compliance requirements. These capabilities help maintain
resilience and efficiency across global networks.
## Model Selection
Model selection is a complex and rapidly changing domain. As
discussed in the next section, you'll need to balance factors like task complexity, modality support,
latency and cost constraints, and integration requirements to make the right choice for your agent.

one of the most reasonable starting points is simply to use the latest general-purpose model from a leading provider like OpenAI or Anthropic

For many tasks—especially those that are well-defined, low-latency, or cost-sensitive—much smaller models can provide near-equivalent performance at a fraction of the cost.

Using automated model selection(multimodel systems). Some platforms now route simpler queries to
fast, inexpensive small models, reserving the large, expensive models for more com‐
plex reasoning.

## Criteria for selecting Agents
When designing an intelligent or automated system, it is essential to select an architectural approach that aligns with the problem requirements. 

First, when might you choose not to use a foundation model—or any ML component at all? 
1. If your inputs are fully predictable and every possible output can be described in advance, a handful of lines of procedural code are often faster, cheaper, and far easier to test than an ML–based pipeline.
    * For example, parsing a log file that always follows the format "YYYY‐MM‐DD HH:MM:SS—message" can be handled reliably with a small regular‐expression‐based parser in Python or Go. 
    * Likewise, if your application demands millisecond‐level latency—such as an embedded system that must react to sensor data in real time—there simply isn't time for a language model API call. 
    * In such cases, traditional code is the right choice. 
    * Finally, regulated domains (medical devices, aeronautics, certain financial systems) often require fully deterministic, auditable decision logic—black‐box neural models won't satisfy certification requirements. 
    * If any of these conditions hold—deterministic inputs, strict performance or explainability needs, or a static problem domain—plain code is almost always preferable to a foundation model.
2. Next, consider deterministic or semiautomated workflows. 
    * Here, the logic can be expressed as a finite set of steps or branches, and you know ahead of time where you might need human intervention or extra error handling. 
    * Suppose you ingest invoices from a small set of vendors and each invoice arrives in one of three known formats: CSV, JSON, or PDF. You can build a workflow that routes each format to its corresponding parser, checks for mismatches, and halts for a human review if any fields fail a simple reconciliation—no deep semantic understanding is required. 
    * Likewise, if your system must retry failed steps with exponential backoff or pause for a manager's approval, a workflow engine (such as Airflow, AWS Step Functions, or a well‐structured set of scripts) offers clearer control over error paths than an LLM could.
    * Deterministic workflows make sense whenever you can enumerate all decision branches in advance and you need tight, auditable control over each branch. In such scenarios, workflows scale more naturally than large, ad hoc scripts but still avoid the complexity and cost of running an agentic pipeline.

Traditional chatbots or RAG systems occupy the next tier of complexity: 
1. they add natural language understanding and document retrieval but stop short of autonomous, multistep planning. 
2. If your primary need is to let users ask questions about a knowledge base—say, searching a product manual, a legal archive, or corporate wikis—a RAG system can embed documents into a vector store, retrieve relevant passages in response to a query, and generate coherent, context‐aware answers. 
3. For instance, an internal IT help desk might use RAG to answer "How do I reset my VPN credentials?" by fetching the latest troubleshooting guide and summarizing the relevant steps. 
4. Unlike autonomous agents, RAG systems do not independently decide on follow‐up actions (like filing a ticket or scheduling a callback); they simply surface information.
5. A traditional chatbot or RAG approach makes sense when the task is primarily question‐answering over structured or unstructured content, with limited need for external API calls or decision orchestration. 
6. Maintenance costs are lower than for agents—.
7. your main overhead lies in keeping document embeddings up to date and refining prompts.
8. but you sacrifice the agent's ability to plan multistep workflows or learn from feedback loops.

Finally, we reach autonomous agents—situations where 
1. neither simple code, nor rigid workflows, nor RAG suffice 
2. because inputs are unstructured, novel, or highly variable, and 
3. because you require dynamic, multistep planning or continuous learning from feedback. 
4. Consider a customer support center that receives free‐form emails with issues ranging from "my laptop battery is swelling and might erupt" to "I keep getting billed for services I didn't order." A rule‐based workflow or a RAG‐powered FAQ lookup would shatter under such open‐ended variety, but an agent powered by a foundation model can parse intent, extract relevant entities, consult a knowledge base, draft an appropriate response, and even escalate to a human if necessary—all without being told every possible branch in advance. 
5. Similarly, in supply chain management, an agent that ingests real‐time inventory data, supplier lead times, and sales forecasts can replan shipment schedules dynamically; a deterministic workflow would require constant manual updates to handle new exceptions.
6. Agents also excel when many subtasks must run in parallel—such as a security operations agent that simultaneously queries threat intelligence APIs, scans network telemetry, and monitors system logs for anomalies.
7. Similarly, a security operations agent that simultaneously queries threat intelligence APIs, scans network telemetry, and performs sandbox analysis on suspicious binaries. 
8. Because agents operate asynchronously and reprioritize based on real‐time data, they avoid the brittle "one‐step‐at‐a‐time" nature of workflows or RAG systems. 
9. To justify the higher compute and maintenance costs of running a foundation model, you need this level of contextual reasoning, parallel task orchestration, or ongoing self‐improvement—scenarios where rigid code, workflows, or chatbots would be too brittle or expensive to maintain.

| Characteristic | Traditional code | Workflow | Autonomous agent |
| --- | --- | --- | --- |
| Input structure | Fully predictable schemas | Mostly predictable with finite branches | Highly unstructured or novel inputs |
| Explainability | Full transparency; easily auditable | Explicit branch-by-branch audit trail | Black-box components requiring additional tooling |
| Latency | Ultra-low latency | Moderate latency | Higher latency |
| Adaptability and learning | None | Limited | High (learning from feedback) |

The choice between a simple script, a deterministic workflow, a traditional chatbot, a retrieval-augmented generation (RAG) system, or a fully autonomous agent should be guided by four key factors:
1. Variability of inputs
2. Complexity of reasoning required
3. Performance and compliance constraints
4. Ongoing maintenance burden

Each factor influences the level of intelligence, flexibility, and operational complexity appropriate for the system.

As system flexibility and autonomy increase, so do unpredictability, operational cost, and maintenance complexity.

Therefore, the simplest architecture capable of meeting the functional requirements should be preferred. Advanced approaches such as RAG systems and autonomous agents should be adopted only when input variability, reasoning demands, and task dynamics genuinely require them.

Every path carries trade‐offs. 
- Pure code is cheap and fast but inflexible; 
- Workflows offer control but break down when inputs grow wildly variable; 
- Traditional chatbots or RAG are great for question‐answering over documents but cannot orchestrate multistep actions; 
- Agents are powerful but demanding—both in terms of cloud compute and engineering effort to monitor, tune, and govern.

Before choosing, ask:
- Are my inputs unstructured or unpredictable? 
- Do I need multistep planning that adapts to intermediate results? 
- Can a document retrieval system suffice for my users' information needs, or must the system decide and act autonomously? 
- Will I want this system to improve itself over time with minimal human intervention? 
- And can I tolerate the latency and maintenance burden of a foundation model?

if your task is 
- a fixed, deterministic transformation, write some simple code.
- If there are a handful of known branches and you require explicit error‐handling checkpoints, use a deterministic workflow. 
- If you primarily need natural language question‐answering over a corpus, choose a traditional chatbot or RAG architecture.
- But if you face high variability, open‐ended reasoning, dynamic planning needs, or continual learning requirements, invest in an autonomous agent. 

Making this choice thoughtfully ensures that you get the right balance of simplicity, performance, and adaptability—so your solution remains both effective and maintainable as requirements evolve.

### the variability of your inputs
Input variability refers to how predictable or structured the system's inputs are.

**Low Variability**

Inputs are highly structured and predictable. They follow fixed formats or predefined schemas.
- Fixed form
- Structured fields
- Limited patterns

Examples:
- Processing a web form submission(Form submission processing).
- Transforming data from CSV to JSON(Converting CSV → JSON).
- Executing predefined commands(Fixed command parser).

In such cases, a simple script or deterministic workflow is sufficient. There is no need for language understanding or probabilistic reasoning.

**Moderate Variability**

Inputs are expressed in natural language or may vary in phrasing, but still fall within a limited domain.
- Natural language
- Different phrasing
- Slight ambiguity

Examples:
- "Reset my password."
- "I forgot my login credentials."
- "I cannot access my account."

Here, a traditional chatbot or intent-classification system is appropriate. The system must interpret language but does not require deep reasoning or external knowledge retrieval.

You need language understanding, but not complex reasoning.

**High Variability**

Inputs may be unstructured, lengthy, ambiguous, or drawn from diverse domains.
- Long documents
- Unknown questions
- Large knowledge base
- Open-ended tasks

Examples:
- Summarizing large documents('Summarize this 200-page PDF')
- Answering questions from a corporate knowledge base("What did the Q3 earnings say about risk exposure?")
- Analyzing source code or technical reports("Analyze this codebase")

In such cases, a RAG system or, in some scenarios, an autonomous agent may be required to handle the breadth and unpredictability of input.


### Complexity of Reasoning Required
Reasoning complexity refers to the depth of analysis or decision-making required to produce an appropriate output.

Question: How much thinking does the system need?

**Low Complexity**

The system performs direct mappings or rule-based decisions.
- Simple mapping
- Rule-based decisions

Example:
```
If status == approved, then send confirmation email.
```
This scenario is best handled by a simple script or deterministic workflow.

**Moderate Complexity**

The system must understand context, summarize information, classify text, or generate structured responses.
- Context understanding
- Multi-step text processing
- Light analysis

Examples:
- Drafting email replies
- Summarizing meeting notes
- Categorizing support tickets(Classifying tickets)

A traditional chatbot or a RAG-based system is generally sufficient.

**High Complexity**

The system must perform multi-step planning, invoke tools, adapt to intermediate results, and possibly revise its strategy.
- Multi-step planning
- Tool usage
- Conditional branching
- Self-correction
-
Examples:
- Analyzing system logs, identifying anomalies, querying a database, generating a report and email results.
- Coordinating multiple APIs to complete a task
- Autonomous software modification or research tasks
- Automated trading assistant
- Autonomous code refactoring

Such requirements justify the use of a full autonomous agent architecture.


### Performance and Compliance Constraints
This is critical in enterprise systems.

Operational constraints often determine whether advanced AI architectures are appropriate.

**Performance Constraints**

Considerations include:
- Strict latency requirements
- High request throughput
- Offline operation
- Cost sensitivity

Examples:
- Must respond in <100ms?
- Must handle 10k requests/sec?
- Must run offline?
- Must avoid heavy token usage?

Simple scripts and deterministic workflows typically offer superior performance, lower latency, and predictable resource usage. Large language models (LLMs) introduce additional latency, computational cost, and potential rate limits.

**Compliance Constraints**

In regulated domains such as finance, healthcare, or government, systems may require:
- Deterministic behavior
- Auditability
- Explainability
- Minimal risk of hallucinated outputs

In such contexts, deterministic workflows or carefully controlled RAG systems are preferred. Fully autonomous agents may introduce unacceptable unpredictability.

### Ongoing Maintenance Burden
Architectural sophistication correlates with maintenance complexity.
- Simple scripts are stable, predictable, and easy to debug.
- Deterministic workflows require moderate upkeep(Slightly more maintenance) but remain transparent(predictable).
- Traditional chatbots demand prompt tuning and periodic evaluation, Model updates.
- RAG systems require maintenance of embeddings, vector databases, Index updates and retrieval quality.
- Autonomous agents introduce significant operational complexity, including tool orchestration, failure handling, monitoring, and cost control.

As autonomy increases, so do operational risks and maintenance requirements.

**Comparative Summary**
| Factor                  | Low      | Medium         | High         |
| ----------------------- | -------- | -------------- | ------------ |
| Input variability       | Script   | Chatbot        | RAG / Agent  |
| Reasoning complexity    | Script   | RAG            | Agent        |
| Performance constraints | Script   | RAG (careful)  | Avoid agents |
| Compliance needs        | Workflow | Controlled RAG | Avoid agents |
| Maintenance tolerance   | Script   | RAG            | Agent        |


| System Type            | Input Variability | Reasoning Complexity | Compliance Suitability        | Maintenance Burden |
| ---------------------- | ----------------- | -------------------- | ----------------------------- | ------------------ |
| Simple Script          | Low               | Low                  | High                          | Low                |
| Deterministic Workflow | Low–Moderate      | Low–Moderate         | High                          | Low–Moderate       |
| Traditional Chatbot    | Moderate          | Moderate             | Moderate                      | Moderate           |
| RAG System             | High              | Moderate–High        | Moderate–High (with controls) | High               |
| Autonomous Agent       | High              | High                 | Low–Moderate                  | Very High          |


## Principles for Building Effective Agentic Systems

Creating successful autonomous agents requires an approach that prioritizes scalabil‐
ity, modularity, continuous learning, resilience, and future-proofing:

1. Scalability

Ensure that agents can handle growing workloads and diverse tasks by utilizing
distributed architectures, cloud-based infrastructure, and efficient algorithms
that support parallel processing and resource optimization. Example: a customer
support agent that processes 10 tickets per minute may crash or hang when traf‐
fic spikes to 1,000 if not backed by autoscaling infrastructure.

2. Modularity

Design agents with independent, interchangeable components connected
through clear interfaces. This modular approach simplifies maintenance, pro‐
motes flexibility, and facilitates rapid adaptation to new requirements or technol‐
ogies. Example: a poorly modular agent that hardcodes all its tools in its agent
service would require a full redeployment anytime a small addition or modifica‐
tion is needed to a tool.

3. Continuous learning

Equip agents with mechanisms to learn from experience, such as in-context
learning. Integrate user feedback to refine agent behaviors and maintain performance relevance as tasks evolve. Example: agents that ignore feedback
loops may keep making the same mistakes—like misclassifying contract clauses
or failing to escalate critical support issues.

4. Resilience

Develop robust resilience architectures capable of gracefully handling errors,
security threats, timeouts, and unexpected conditions. Incorporate comprehensive error handling, stringent security measures, and redundancy to ensure reliable and continuous agent operations. Example: agents without retry or fallback
logic may crash entirely when a single API call fails, leaving the user waiting and
confused.

5. Future-proofing

Build agent systems around open standards and scalable infrastructure, fostering
a culture of innovation to adapt quickly to emerging technologies and evolving
user expectations. Example: tightly coupling your agent to one proprietary ven‐
dor's prompt format can make switching models painful and limit
experimentation.

## Agentic Frameworks
1. LangGraph
2. AutoGen
3. crewAI
4. OpenAI Agents SDK

## Designing Agent Systems

<details>
<summary>Project: managing customer support for an ecommerce platform</summary>

</details>
