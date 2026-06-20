---
id: pipeline-design
title: Pipeline Design
---


## Pipeline Design

To improve performance, CPU designers have long abandoned the simple model of fetching, decoding, and executing one instruction at a time. Many modern CPUs have facilities for executing more than one instruction at the same time. For example, a CPU might have separate fetch, decode, and execute units, so that while it is executing instruction n, it could also be decoding instruction n + 1 and fetching instruction n + 2. Such an organization is called a pipeline
![A three-stage pipelin](/docs/assets/hardware-design/computer-organization/microarchitecture/three-stage-pipeline.png)
Even more advanced than a pipeline design is a superscalar CPU:
![A three-stage pipelin](/docs/assets/hardware-design/computer-organization/microarchitecture/superscalar-cpu.png)
In this design, multiple execution units are present, for example, one for integer arithmetic, one for floating-point arithmetic, and one for Boolean operations. Two or more instructions are fetched at once, decoded, and dumped into a holding buffer until they can be executed. As soon as an execution unit becomes available, it looks in the holding buffer to see if there is an instruction it can handle, and if so, it removes the instruction from the buffer and executes it. An implication of this design is that program instructions are often executed out of order. For the most part, it is up to the hardware to make sure the result produced is the same one a sequential implementation would have produced, but an annoying amount of the complexity is foisted onto the operating system
## Superscalar Out Of Order

- Description placeholder

## Exploiting Parallelism

- Description placeholder

## Multicore Parallel Software

- Description placeholder

