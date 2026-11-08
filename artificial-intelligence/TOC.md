# Artificial Intelligence (AI) — Detailed Table of Contents

I recommend organizing Artificial Intelligence as a standalone knowledge domain in your TechnoWiki, with Machine Learning as one of its major branches.

The structure should cover AI from its theoretical foundations to modern applications, including Machine Learning, Deep Learning, Generative AI, Large Language Models (LLMs), AI Agents, Robotics, and production AI systems.

One important distinction:

- AI is the broader field of building systems that perform tasks requiring intelligence.
- Machine Learning (ML) is a branch of AI where systems learn patterns from data.
- Deep Learning (DL) is a branch of ML based on neural networks with multiple layers.
- Generative AI focuses on generating new content, such as text, images, audio, and video.

## 1. Recommended architecture

Artificial Intelligence

Theory, algorithms, models, systems and applications

AI Foundations

Mathematics, logic, search

Machine Learning

Supervised, unsupervised, evaluation

Deep Learning

Neural networks, architectures

Generative AI

LLMs, diffusion, multimodal

AI Specializations

NLP, vision, speech, robotics

AI Systems

Agents, MLOps, deployment

Suggested root directory:

```
artificial-intelligence/
```

The following is a comprehensive TOC. It is designed to support both conceptual learning and practical engineering.

## 2. Detailed AI Table of Contents

The following structure uses directory names and page names suitable for Docusaurus.

```

artificial-intelligence/
│
├── 01-introduction-to-ai/
│   ├── what-is-artificial-intelligence.mdx
│   ├── history-of-ai.mdx
│   ├── goals-and-objectives-of-ai.mdx
│   ├── capabilities-and-limitations.mdx
│   ├── types-of-ai/
│   │   ├── narrow-ai.mdx
│   │   ├── general-ai.mdx
│   │   └── superintelligence.mdx
│   ├── ai-vs-machine-learning-vs-deep-learning.mdx
│   ├── ai-vs-data-science.mdx
│   ├── ai-paradigms.mdx
│   ├── ai-applications.mdx
│   └── ai-industry-landscape.mdx
│
├── 02-ai-foundations/
│   ├── mathematics-for-ai/
│   │   ├── linear-algebra/
│   │   │   ├── scalars-vectors-matrices.mdx
│   │   │   ├── matrix-operations.mdx
│   │   │   ├── matrix-transformations.mdx
│   │   │   ├── eigenvalues-and-eigenvectors.mdx
│   │   │   ├── vector-spaces.mdx
│   │   │   └── tensors.mdx
│   │   ├── calculus/
│   │   │   ├── derivatives-and-gradients.mdx
│   │   │   ├── partial-derivatives.mdx
│   │   │   ├── chain-rule.mdx
│   │   │   ├── gradient-descent-mathematics.mdx
│   │   │   └── optimization-functions.mdx
│   │   ├── probability/
│   │   │   ├── probability-theory.mdx
│   │   │   ├── conditional-probability.mdx
│   │   │   ├── bayes-theorem.mdx
│   │   │   ├── probability-distributions.mdx
│   │   │   └── random-variables.mdx
│   │   ├── statistics/
│   │   │   ├── descriptive-statistics.mdx
│   │   │   ├── inferential-statistics.mdx
│   │   │   ├── hypothesis-testing.mdx
│   │   │   ├── correlation-and-covariance.mdx
│   │   │   ├── regression-analysis.mdx
│   │   │   └── statistical-significance.mdx
│   │   └── information-theory/
│   │       ├── entropy.mdx
│   │       ├── cross-entropy.mdx
│   │       ├── kl-divergence.mdx
│   │       └── mutual-information.mdx
│   │
│   ├── programming-for-ai/
│   │   ├── python-for-ai.mdx
│   │   ├── numpy.mdx
│   │   ├── pandas.mdx
│   │   ├── scipy.mdx
│   │   ├── matplotlib-and-seaborn.mdx
│   │   ├── jupyter-notebooks.mdx
│   │   └── performance-and-vectorization.mdx
│   │
│   └── computational-foundations/
│       ├── computational-complexity.mdx
│       ├── numerical-computing.mdx
│       ├── parallel-computing.mdx
│       ├── gpu-computing.mdx
│       └── distributed-computing.mdx
│
├── 03-data-for-ai/
│   ├── data-fundamentals/
│   │   ├── data-types.mdx
│   │   ├── categorical-data.mdx
│   │   ├── numerical-data.mdx
│   │   ├── ordinal-data.mdx
│   │   ├── structured-and-unstructured-data.mdx
│   │   ├── features-and-instances.mdx
│   │   ├── metadata.mdx
│   │   ├── transactional-data.mdx
│   │   └── datasets-and-data-schemas.mdx
│   │
│   ├── data-collection/
│   │   ├── data-sources.mdx
│   │   ├── data-acquisition.mdx
│   │   ├── data-labeling-and-annotation.mdx
│   │   ├── data-augmentation.mdx
│   │   └── data-licensing-and-provenance.mdx
│   │
│   ├── data-preprocessing/
│   │   ├── data-cleaning.mdx
│   │   ├── missing-values.mdx
│   │   ├── duplicate-data.mdx
│   │   ├── outlier-detection.mdx
│   │   ├── data-normalization.mdx
│   │   ├── data-standardization.mdx
│   │   ├── categorical-encoding.mdx
│   │   └── data-transformation.mdx
│   │
│   ├── exploratory-data-analysis/
│   │   ├── descriptive-analytics.mdx
│   │   ├── diagnostic-analytics.mdx
│   │   ├── data-distributions.mdx
│   │   ├── data-visualization.mdx
│   │   └── correlation-analysis.mdx
│   │
│   ├── data-engineering-for-ai/
│   │   ├── etl-and-elt.mdx
│   │   ├── data-pipelines.mdx
│   │   ├── data-warehousing.mdx
│   │   ├── olap.mdx
│   │   ├── batch-processing.mdx
│   │   ├── stream-processing.mdx
│   │   └── feature-stores.mdx
│   │
│   └── dataset-management/
│       ├── training-validation-test-splits.mdx
│       ├── data-versioning.mdx
│       ├── data-quality.mdx
│       ├── data-leakage.mdx
│       ├── data-drift.mdx
│       └── dataset-documentation.mdx
│
├── 04-classical-artificial-intelligence/
│   ├── intelligent-agents/
│   │   ├── what-is-an-agent.mdx
│   │   ├── agent-environments.mdx
│   │   ├── rational-agents.mdx
│   │   ├── simple-reflex-agents.mdx
│   │   ├── model-based-agents.mdx
│   │   ├── goal-based-agents.mdx
│   │   ├── utility-based-agents.mdx
│   │   └── learning-agents.mdx
│   │
│   ├── problem-solving-and-search/
│   │   ├── problem-formulation.mdx
│   │   ├── state-space-search.mdx
│   │   ├── uninformed-search/
│   │   │   ├── breadth-first-search.mdx
│   │   │   ├── depth-first-search.mdx
│   │   │   ├── uniform-cost-search.mdx
│   │   │   ├── depth-limited-search.mdx
│   │   │   └── iterative-deepening-search.mdx
│   │   ├── informed-search/
│   │   │   ├── heuristic-functions.mdx
│   │   │   ├── greedy-best-first-search.mdx
│   │   │   ├── a-star-search.mdx
│   │   │   └── memory-bounded-search.mdx
│   │   ├── local-search/
│   │   │   ├── hill-climbing.mdx
│   │   │   ├── simulated-annealing.mdx
│   │   │   ├── genetic-algorithms.mdx
│   │   │   └── local-beam-search.mdx
│   │   └── adversarial-search/
│   │       ├── minimax.mdx
│   │       ├── alpha-beta-pruning.mdx
│   │       └── monte-carlo-tree-search.mdx
│   │
│   ├── constraint-satisfaction-problems/
│   │   ├── variables-domains-constraints.mdx
│   │   ├── backtracking-search.mdx
│   │   ├── constraint-propagation.mdx
│   │   └── sudoku-and-scheduling.mdx
│   │
│   ├── knowledge-representation/
│   │   ├── propositional-logic.mdx
│   │   ├── first-order-logic.mdx
│   │   ├── semantic-networks.mdx
│   │   ├── frames-and-rules.mdx
│   │   ├── ontologies.mdx
│   │   └── knowledge-graphs.mdx
│   │
│   ├── reasoning-and-inference/
│   │   ├── logical-reasoning.mdx
│   │   ├── deductive-reasoning.mdx
│   │   ├── inductive-reasoning.mdx
│   │   ├── abductive-reasoning.mdx
│   │   ├── probabilistic-reasoning.mdx
│   │   ├── bayesian-networks.mdx
│   │   └── fuzzy-logic.mdx
│   │
│   ├── planning-and-decision-making/
│   │   ├── classical-planning.mdx
│   │   ├── partial-order-planning.mdx
│   │   ├── hierarchical-planning.mdx
│   │   └── decision-theory.mdx
│   │
│   └── expert-systems/
│       ├── rule-based-systems.mdx
│       ├── inference-engines.mdx
│       ├── forward-chaining.mdx
│       ├── backward-chaining.mdx
│       └── expert-system-architecture.mdx
│
├── 05-machine-learning/
│   ├── introduction-to-ml/
│   │   ├── what-is-machine-learning.mdx
│   │   ├── how-ml-works.mdx
│   │   ├── types-of-machine-learning.mdx
│   │   ├── supervised-vs-unsupervised-learning.mdx
│   │   ├── reinforcement-learning-overview.mdx
│   │   └── traditional-programming-vs-ml.mdx
│   │
│   ├── supervised-learning/
│   │   ├── regression/
│   │   │   ├── simple-linear-regression.mdx
│   │   │   ├── multiple-linear-regression.mdx
│   │   │   ├── polynomial-regression.mdx
│   │   │   ├── ridge-regression.mdx
│   │   │   ├── lasso-regression.mdx
│   │   │   └── elastic-net.mdx
│   │   ├── classification/
│   │   │   ├── logistic-regression.mdx
│   │   │   ├── k-nearest-neighbors.mdx
│   │   │   ├── naive-bayes.mdx
│   │   │   ├── decision-trees.mdx
│   │   │   ├── random-forests.mdx
│   │   │   ├── support-vector-machines.mdx
│   │   │   └── gradient-boosting.mdx
│   │   └── ensemble-learning/
│   │       ├── bagging.mdx
│   │       ├── boosting.mdx
│   │       ├── stacking.mdx
│   │       └── voting-classifiers.mdx
│   │
│   ├── unsupervised-learning/
│   │   ├── clustering/
│   │   │   ├── k-means.mdx
│   │   │   ├── hierarchical-clustering.mdx
│   │   │   ├── dbscan.mdx
│   │   │   └── gaussian-mixture-models.mdx
│   │   ├── dimensionality-reduction/
│   │   │   ├── principal-component-analysis.mdx
│   │   │   ├── singular-value-decomposition.mdx
│   │   │   ├── t-sne.mdx
│   │   │   └── umap.mdx
│   │   ├── association-rule-learning/
│   │   │   ├── apriori.mdx
│   │   │   └── fp-growth.mdx
│   │   └── anomaly-detection.mdx
│   │
│   ├── semi-supervised-learning/
│   │   ├── self-training.mdx
│   │   ├── pseudo-labeling.mdx
│   │   └── consistency-regularization.mdx
│   │
│   ├── self-supervised-learning/
│   │   ├── contrastive-learning.mdx
│   │   ├── masked-prediction.mdx
│   │   └── representation-learning.mdx
│   │
│   ├── feature-engineering/
│   │   ├── feature-extraction.mdx
│   │   ├── feature-selection.mdx
│   │   ├── feature-scaling.mdx
│   │   ├── feature-encoding.mdx
│   │   ├── feature-interactions.mdx
│   │   └── curse-of-dimensionality.mdx
│   │
│   ├── model-training-and-optimization/
│   │   ├── loss-functions.mdx
│   │   ├── gradient-descent.mdx
│   │   ├── stochastic-gradient-descent.mdx
│   │   ├── learning-rates.mdx
│   │   ├── hyperparameter-tuning.mdx
│   │   └── regularization.mdx
│   │
│   └── model-evaluation/
│       ├── train-validation-test.mdx
│       ├── cross-validation.mdx
│       ├── bias-variance-tradeoff.mdx
│       ├── overfitting-and-underfitting.mdx
│       ├── classification-metrics.mdx
│       ├── regression-metrics.mdx
│       ├── confusion-matrix.mdx
│       ├── roc-and-auc.mdx
│       ├── precision-recall-curve.mdx
│       ├── calibration.mdx
│       └── error-analysis.mdx
│
├── 06-deep-learning/
│   ├── neural-network-fundamentals/
│   │   ├── biological-vs-artificial-neurons.mdx
│   │   ├── perceptron.mdx
│   │   ├── multilayer-perceptron.mdx
│   │   ├── forward-propagation.mdx
│   │   ├── backpropagation.mdx
│   │   ├── activation-functions.mdx
│   │   ├── loss-functions.mdx
│   │   └── neural-network-training.mdx
│   │
│   ├── optimization-and-regularization/
│   │   ├── gradient-descent.mdx
│   │   ├── momentum.mdx
│   │   ├── adam-optimizer.mdx
│   │   ├── batch-normalization.mdx
│   │   ├── dropout.mdx
│   │   ├── weight-initialization.mdx
│   │   └── learning-rate-scheduling.mdx
│   │
│   ├── neural-network-architectures/
│   │   ├── feedforward-neural-networks.mdx
│   │   ├── convolutional-neural-networks.mdx
│   │   ├── recurrent-neural-networks.mdx
│   │   ├── lstm.mdx
│   │   ├── gru.mdx
│   │   ├── autoencoders.mdx
│   │   ├── generative-adversarial-networks.mdx
│   │   └── transformers.mdx
│   │
│   ├── transfer-learning/
│   │   ├── pretrained-models.mdx
│   │   ├── feature-extraction-vs-fine-tuning.mdx
│   │   └── domain-adaptation.mdx
│   │
│   ├── distributed-deep-learning/
│   │   ├── data-parallelism.mdx
│   │   ├── model-parallelism.mdx
│   │   ├── distributed-training.mdx
│   │   └── mixed-precision-training.mdx
│   │
│   └── deep-learning-frameworks/
│       ├── pytorch/
│       ├── tensorflow/
│       ├── keras/
│       └── jax/
│
├── 07-ai-specializations/
│   ├── natural-language-processing/
│   │   ├── text-preprocessing.mdx
│   │   ├── tokenization.mdx
│   │   ├── stemming-and-lemmatization.mdx
│   │   ├── bag-of-words.mdx
│   │   ├── tf-idf.mdx
│   │   ├── word-embeddings.mdx
│   │   ├── language-modeling.mdx
│   │   ├── sequence-to-sequence-models.mdx
│   │   ├── attention-mechanism.mdx
│   │   ├── named-entity-recognition.mdx
│   │   ├── text-classification.mdx
│   │   ├── machine-translation.mdx
│   │   └── question-answering.mdx
│   │
│   ├── computer-vision/
│   │   ├── image-representation.mdx
│   │   ├── image-preprocessing.mdx
│   │   ├── image-classification.mdx
│   │   ├── object-detection.mdx
│   │   ├── image-segmentation.mdx
│   │   ├── face-recognition.mdx
│   │   ├── pose-estimation.mdx
│   │   ├── optical-character-recognition.mdx
│   │   └── video-understanding.mdx
│   │
│   ├── speech-and-audio-ai/
│   │   ├── digital-audio-fundamentals.mdx
│   │   ├── speech-recognition.mdx
│   │   ├── speech-synthesis.mdx
│   │   ├── speaker-recognition.mdx
│   │   ├── audio-classification.mdx
│   │   └── audio-generation.mdx
│   │
│   ├── recommender-systems/
│   │   ├── content-based-filtering.mdx
│   │   ├── collaborative-filtering.mdx
│   │   ├── matrix-factorization.mdx
│   │   ├── hybrid-recommendation.mdx
│   │   ├── cold-start-problem.mdx
│   │   └── recommendation-evaluation.mdx
│   │
│   ├── time-series-and-forecasting/
│   │   ├── time-series-fundamentals.mdx
│   │   ├── trend-seasonality-and-noise.mdx
│   │   ├── moving-averages.mdx
│   │   ├── arima-and-sarima.mdx
│   │   ├── forecasting-with-ml.mdx
│   │   └── forecasting-with-deep-learning.mdx
│   │
│   ├── reinforcement-learning/
│   │   ├── rl-fundamentals.mdx
│   │   ├── markov-decision-processes.mdx
│   │   ├── rewards-and-policies.mdx
│   │   ├── value-functions.mdx
│   │   ├── q-learning.mdx
│   │   ├── deep-q-networks.mdx
│   │   ├── policy-gradient-methods.mdx
│   │   ├── actor-critic.mdx
│   │   └── multi-agent-reinforcement-learning.mdx
│   │
│   ├── robotics-and-autonomous-systems/
│   │   ├── robot-perception.mdx
│   │   ├── localization-and-mapping.mdx
│   │   ├── path-planning.mdx
│   │   ├── motion-planning.mdx
│   │   ├── robot-control.mdx
│   │   └── autonomous-navigation.mdx
│   │
│   └── other-ai-applications/
│       ├── medical-ai.mdx
│       ├── financial-ai.mdx
│       ├── industrial-ai.mdx
│       └── geospatial-ai.mdx
│
├── 08-generative-ai/
│   ├── generative-ai-fundamentals/
│   │   ├── what-is-generative-ai.mdx
│   │   ├── discriminative-vs-generative-models.mdx
│   │   ├── generative-model-families.mdx
│   │   └── generative-ai-applications.mdx
│   │
│   ├── large-language-models/
│   │   ├── llm-fundamentals.mdx
│   │   ├── transformer-architecture.mdx
│   │   ├── encoder-decoder-and-decoder-only.mdx
│   │   ├── tokenization-and-token-counting.mdx
│   │   ├── embeddings.mdx
│   │   ├── pretraining.mdx
│   │   ├── instruction-tuning.mdx
│   │   ├── supervised-fine-tuning.mdx
│   │   ├── preference-optimization.mdx
│   │   ├── reinforcement-learning-from-human-feedback.mdx
│   │   ├── quantization.mdx
│   │   └── inference-and-decoding.mdx
│   │
│   ├── prompt-engineering/
│   │   ├── prompt-structure.mdx
│   │   ├── system-and-user-prompts.mdx
│   │   ├── zero-shot-and-few-shot.mdx
│   │   ├── chain-of-thought.mdx
│   │   ├── structured-output.mdx
│   │   ├── prompt-templates.mdx
│   │   └── prompt-evaluation.mdx
│   │
│   ├── retrieval-augmented-generation/
│   │   ├── rag-fundamentals.mdx
│   │   ├── document-ingestion.mdx
│   │   ├── chunking-strategies.mdx
│   │   ├── embedding-models.mdx
│   │   ├── vector-search.mdx
│   │   ├── hybrid-search.mdx
│   │   ├── reranking.mdx
│   │   ├── retrieval-pipelines.mdx
│   │   ├── advanced-rag.mdx
│   │   └── rag-evaluation.mdx
│   │
│   ├── generative-image-and-video/
│   │   ├── diffusion-models.mdx
│   │   ├── latent-diffusion.mdx
│   │   ├── text-to-image.mdx
│   │   ├── image-editing.mdx
│   │   ├── text-to-video.mdx
│   │   └── video-generation.mdx
│   │
│   ├── multimodal-ai/
│   │   ├── multimodal-representations.mdx
│   │   ├── vision-language-models.mdx
│   │   ├── image-and-text-understanding.mdx
│   │   ├── audio-and-text-models.mdx
│   │   └── multimodal-reasoning.mdx
│   │
│   └── generative-ai-frameworks/
│       ├── hugging-face-transformers.mdx
│       ├── hugging-face-datasets.mdx
│       ├── langchain.mdx
│       ├── llamaindex.mdx
│       └── model-context-protocol.mdx
│
├── 09-ai-agents-and-agentic-systems/
│   ├── agent-fundamentals/
│   │   ├── what-is-an-ai-agent.mdx
│   │   ├── agents-vs-chatbots.mdx
│   │   ├── agent-architecture.mdx
│   │   ├── reasoning-and-planning.mdx
│   │   └── tool-use-and-function-calling.mdx
│   │
│   ├── agent-memory/
│   │   ├── short-term-memory.mdx
│   │   ├── long-term-memory.mdx
│   │   ├── episodic-and-semantic-memory.mdx
│   │   └── memory-management.mdx
│   │
│   ├── agent-orchestration/
│   │   ├── workflows-vs-agents.mdx
│   │   ├── sequential-agents.mdx
│   │   ├── parallel-agents.mdx
│   │   ├── hierarchical-agents.mdx
│   │   ├── multi-agent-systems.mdx
│   │   └── human-in-the-loop.mdx
│   │
│   ├── agent-frameworks/
│   │   ├── langgraph.mdx
│   │   ├── autogen.mdx
│   │   ├── crewai.mdx
│   │   └── semantic-kernel.mdx
│   │
│   └── agent-evaluation-and-safety/
│       ├── agent-evaluation.mdx
│       ├── tool-permission-management.mdx
│       ├── agent-guardrails.mdx
│       ├── prompt-injection.mdx
│       └── agent-observability.mdx
│
├── 10-ai-engineering-and-mlops/
│   ├── ai-system-design/
│   │   ├── ai-application-architecture.mdx
│   │   ├── model-serving-architecture.mdx
│   │   ├── batch-vs-online-inference.mdx
│   │   ├── real-time-ai-systems.mdx
│   │   └── scalable-ai-architecture.mdx
│   │
│   ├── ml-pipelines/
│   │   ├── data-ingestion-pipelines.mdx
│   │   ├── training-pipelines.mdx
│   │   ├── inference-pipelines.mdx
│   │   └── pipeline-orchestration.mdx
│   │
│   ├── experiment-management/
│   │   ├── experiment-tracking.mdx
│   │   ├── hyperparameter-tracking.mdx
│   │   ├── model-registry.mdx
│   │   └── model-versioning.mdx
│   │
│   ├── model-deployment/
│   │   ├── rest-and-grpc-model-apis.mdx
│   │   ├── model-serialization.mdx
│   │   ├── containerized-model-serving.mdx
│   │   ├── kubernetes-model-serving.mdx
│   │   ├── serverless-inference.mdx
│   │   └── edge-ai-deployment.mdx
│   │
│   ├── model-monitoring/
│   │   ├── model-performance-monitoring.mdx
│   │   ├── data-drift-monitoring.mdx
│   │   ├── concept-drift-monitoring.mdx
│   │   ├── prediction-monitoring.mdx
│   │   └── model-retraining.mdx
│   │
│   ├── ai-testing/
│   │   ├── data-validation-testing.mdx
│   │   ├── model-testing.mdx
│   │   ├── integration-testing.mdx
│   │   ├── model-regression-testing.mdx
│   │   └── ai-system-load-testing.mdx
│   │
│   └── ai-frameworks-and-platforms/
│       ├── scikit-learn.mdx
│       ├── pytorch.mdx
│       ├── tensorflow.mdx
│       ├── mlflow.mdx
│       ├── kubeflow.mdx
│       ├── ray.mdx
│       └── bentoml.mdx
│
├── 11-responsible-ai-security-and-governance/
│   ├── responsible-ai/
│   │   ├── fairness-and-bias.mdx
│   │   ├── transparency.mdx
│   │   ├── accountability.mdx
│   │   └── human-oversight.mdx
│   │
│   ├── explainable-ai/
│   │   ├── model-interpretability.mdx
│   │   ├── feature-importance.mdx
│   │   ├── shap.mdx
│   │   ├── lime.mdx
│   │   └── explainability-for-deep-learning.mdx
│   │
│   ├── ai-security/
│   │   ├── adversarial-attacks.mdx
│   │   ├── adversarial-training.mdx
│   │   ├── data-poisoning.mdx
│   │   ├── model-extraction.mdx
│   │   ├── membership-inference.mdx
│   │   ├── prompt-injection-and-jailbreaking.mdx
│   │   └── model-supply-chain-security.mdx
│   │
│   ├── privacy/
│   │   ├── data-privacy.mdx
│   │   ├── differential-privacy.mdx
│   │   ├── federated-learning.mdx
│   │   └── data-anonymization.mdx
│   │
│   └── governance-and-compliance/
│       ├── ai-risk-management.mdx
│       ├── model-documentation.mdx
│       ├── dataset-documentation.mdx
│       ├── ai-auditing.mdx
│       └── ai-regulations.mdx
│
├── 12-ai-projects-and-practical-labs/
│   ├── beginner-projects/
│   │   ├── house-price-prediction.mdx
│   │   ├── customer-churn-prediction.mdx
│   │   ├── spam-classifier.mdx
│   │   └── customer-segmentation.mdx
│   │
│   ├── intermediate-projects/
│   │   ├── fraud-detection.mdx
│   │   ├── recommendation-system.mdx
│   │   ├── image-classification.mdx
│   │   ├── sentiment-analysis.mdx
│   │   └── sales-forecasting.mdx
│   │
│   ├── advanced-projects/
│   │   ├── object-detection-system.mdx
│   │   ├── document-intelligence-system.mdx
│   │   ├── rag-knowledge-assistant.mdx
│   │   ├── multi-agent-research-system.mdx
│   │   └── production-ml-platform.mdx
│   │
│   └── capstone-projects/
│       ├── end-to-end-ml-system.mdx
│       ├── intelligent-recommendation-platform.mdx
│       ├── enterprise-rag-platform.mdx
│       └── autonomous-ai-agent-platform.mdx
│
└── 13-ai-resources/
    ├── books.mdx
    ├── online-courses.mdx
    ├── research-papers.mdx
    ├── technical-articles.mdx
    ├── datasets.mdx
    ├── open-source-projects.mdx
    ├── ai-communities.mdx
    └── learning-roadmaps.mdx

```

## 3. Explanation of the major sections

Here is how I would divide the learning domain and what each section is responsible for.

| Section                    | Purpose                                    | Priority                |
| -------------------------- | ------------------------------------------ | ----------------------- |
| 01. Introduction           | Understand AI concepts, history and scope  | Essential               |
| 02. AI Foundations         | Mathematics, programming and computing     | Essential               |
| 03. Data for AI            | Understand, collect and prepare data       | Essential               |
| 04. Classical AI           | Search, logic, reasoning and planning      | Important               |
| 05. Machine Learning       | Train models using data                    | Essential               |
| 06. Deep Learning          | Neural networks and advanced architectures | Essential               |
| 07. AI Specializations     | NLP, vision, speech, RL and robotics       | Choose specializations  |
| 08. Generative AI          | LLMs, image generation and RAG             | Important               |
| 09. AI Agents              | Build autonomous and tool-using systems    | Advanced                |
| 10. AI Engineering & MLOps | Build and operate production AI systems    | Essential for engineers |
| 11. Responsible AI         | Security, fairness, privacy and governance | Essential               |
| 12. Projects & Labs        | Apply theoretical knowledge                | Essential               |
| 13. Resources              | Books, papers, courses and datasets        | Reference               |

## 4. Important architectural decisions

There are a few areas where I recommend making deliberate decisions to avoid duplication in your knowledge base.

### A. Keep Machine Learning separate from AI

Use:

```
artificial-intelligence/
    machine-learning/
```

Machine Learning is a branch of AI, so it should be nested under AI rather than treated as an unrelated subject.

### B. Separate theory from framework implementations

For example:

| Theoretical topic      | Framework implementation     |
| ---------------------- | ---------------------------- |
| Neural Networks        | PyTorch, TensorFlow          |
| CNN                    | PyTorch CNN implementation   |
| Transformers           | Hugging Face Transformers    |
| Reinforcement Learning | Gymnasium, Stable-Baselines3 |
| RAG                    | LangChain, LlamaIndex        |
| ML Pipelines           | MLflow, Kubeflow             |

Explain the underlying concepts first, then demonstrate how to implement them using frameworks.

### C. Distinguish traditional AI agents from modern LLM agents

These are related, but not identical.

- Classical Intelligent Agents: Goal-based agents, utility-based agents, rational agents and environment interaction.
- Modern LLM Agents: LLM reasoning, tool calling, memory, planning, orchestration and multi-agent collaboration.

I recommend keeping classical agents in `04-classical-artificial-intelligence` and modern agentic systems in `09-ai-agents-and-agentic-systems`.

### D. Keep Generative AI separate from Deep Learning

Generative AI relies heavily on deep learning, but deserves its own section because it has developed into a broad engineering domain.

For example:

```
deep-learning/
    transformers/
    generative-adversarial-networks/
    autoencoders/

generative-ai/
    large-language-models/
    retrieval-augmented-generation/
    diffusion-models/
    multimodal-ai/
```

This avoids mixing the mathematical foundations of neural networks with practical LLM application development.

### E. Separate AI engineering from general software engineering

You already have a Software Engineering knowledge domain. Avoid duplicating generic topics such as:

- REST APIs
- Docker
- Kubernetes
- CI/CD
- Distributed systems
- Database fundamentals
- Authentication and authorization

Instead, explain their AI-specific applications in the AI domain and link to their general explanations in Software Engineering.

For example:

```
software-engineering/
    infrastructure-devops/
        orchestration/
            kubernetes/

artificial-intelligence/
    ai-engineering-and-mlops/
        model-deployment/
            kubernetes-model-serving.mdx
```

The first explains Kubernetes generally; the second explains how to deploy and operate AI models on Kubernetes.

## 5. Recommended learning sequence

Although the TOC has 13 sections, you don't need to study them sequentially in their entirety.

I recommend this learning sequence:

## AI learning progression

1. Foundations

   AI introduction → Mathematics → Python → Data fundamentals
2. Classical AI

   Search algorithms → Knowledge representation → Reasoning → Planning
3. Machine Learning

   Supervised → Unsupervised → Feature engineering → Evaluation
4. Deep Learning

   Neural networks → Backpropagation → CNNs → Transformers
5. AI Specializations

   NLP → Computer Vision → Recommendation Systems → Reinforcement Learning
6. Generative AI

   LLMs → Prompt Engineering → Embeddings → RAG → Multimodal AI
7. Agentic AI

   Tool calling → Memory → Planning → Multi-agent systems
8. AI Engineering

   Training pipelines → Model serving → MLOps → Monitoring
9. Production & Capstone

   Security → Responsible AI → Production projects

## 6. Best books and courses for the main sections

These are the resources I would use to build the knowledge base.

| Subject                | Recommended books                                               | Courses                                             |
| ---------------------- | --------------------------------------------------------------- | --------------------------------------------------- |
| AI foundations         | Artificial Intelligence: A Modern Approach — Russell & Norvig   | CS50's Introduction to AI with Python               |
| Mathematics            | Mathematics for Machine Learning — Deisenroth et al.            | Mathematics for Machine Learning — Imperial College |
| Data                   | Python for Data Analysis — Wes McKinney                         | Kaggle Learn: Pandas                                |
| Classical ML           | Hands-On Machine Learning — Aurélien Géron                      | Machine Learning Specialization — Andrew Ng         |
| Deep Learning          | Deep Learning — Goodfellow et al.                               | Deep Learning Specialization — Andrew Ng            |
| NLP                    | Speech and Language Processing — Jurafsky & Martin              | Stanford CS224N                                     |
| Computer Vision        | Computer Vision: Algorithms and Applications — Richard Szeliski | Stanford CS231n                                     |
| Reinforcement Learning | Reinforcement Learning: An Introduction — Sutton & Barto        | David Silver's RL Course                            |
| Generative AI          | Build a Large Language Model (From Scratch) — Sebastian Raschka | Hugging Face LLM Course                             |
| AI Agents              | Artificial Intelligence: A Modern Approach (agent foundations)  | Hugging Face Agents Course                          |
| MLOps                  | Designing Machine Learning Systems — Chip Huyen                 | Full Stack Deep Learning                            |
| Responsible AI         | Interpretable Machine Learning — Christoph Molnar               | Google Responsible AI resources                     |

Useful reference websites:

- Google Machine Learning Crash Course — [Official course](https://developers.google.com/machine-learning/crash-course?utm_source=chatgpt.com).
- Kaggle Learn — [Courses and exercises](https://www.kaggle.com/learn?utm_source=chatgpt.com).
- Hugging Face — [Learning courses](https://huggingface.co/learn?utm_source=chatgpt.com).
- PyTorch — [Tutorials](https://pytorch.org/tutorials/?utm_source=chatgpt.com).
- scikit-learn — [User guide](https://scikit-learn.org/stable/user_guide.html?utm_source=chatgpt.com).
- Papers with Code — [Research and implementations](https://paperswithcode.com/?utm_source=chatgpt.com).

## 7. What I would prioritize for an AI / ML Engineer

Considering the goal of becoming an AI / ML Engineer, I would distinguish between what you should master and what you should study for awareness.

Core engineering competencies

Master

- Python and numerical computing
- Mathematics and statistics for ML
- Data preparation and feature engineering
- Classical Machine Learning
- Model evaluation and debugging
- Deep Learning fundamentals
- PyTorch
- LLMs, embeddings and RAG
- Model deployment and MLOps
- AI security and responsible AI

  Advanced specializations

  Choose
- Computer Vision
- NLP and speech processing
- Reinforcement Learning
- Robotics
- Multimodal AI
- Advanced AI agents
- Distributed model training

  Theoretical AI

  Understand
- Classical search algorithms
- Logic and knowledge representation
- Expert systems
- Automated planning
- Bayesian reasoning

My recommendation: Keep this entire structure as your AI knowledge domain, but make `05-machine-learning`, `06-deep-learning`, `08-generative-ai`, and `10-ai-engineering-and-mlops` the central pillars of your AI / ML Engineer learning path.

This gives you a broad understanding of AI without confusing the broader academic field of Artificial Intelligence with the more focused professional role of an AI / ML Engineer.