---
id: parallelism
title: Parallelism
description: Parallelism
---

Parallelism is the ability of a system to perform multiple tasks simultaneously. It can be achieved through various means such as multi-core processors, parallel processing, and distributed computing. Parallelism can increase the throughput of a system by allowing it to perform multiple tasks simultaneously, which can reduce the overall time required to complete a task.

Rather than continuing to decrease the response time of one program running
on the single processor, as of 2006 all desktop and server companies are shipping
microprocessors with multiple processors per chip, where the benefit is often more
on throughput than on response time. To reduce confusion between the words
processor and microprocessor, companies refer to processors as “cores,” and
such microprocessors are generically called multicore microprocessors. Hence, a
“quadcore” microprocessor is a chip that contains four processors or four cores.

In the past, programmers could rely on innovations in hardware, architecture,
and compilers to double performance of their programs every 18 months without
having to change a line of code. Today, for programmers to get significant
improvement in response time, they need to rewrite their programs to take
advantage of multiple processors. Moreover, to get the historic benefit of running
faster on new microprocessors, programmers will have to continue to improve the
performance of their code as the number of cores increases.

Energy efficiency has replaced die area as the most critical resource of
microprocessor design. Conserving power while trying to increase performance
has forced the hardware industry to switch to multicore microprocessors, thereby
requiring the software industry to switch to programming parallel hardware.
Parallelism is now required for performance.
## Types of Parallelism

There are several types of parallelism, including:

- **Instruction-level parallelism**: This type of parallelism involves executing multiple instructions simultaneously within a single processor core.
- **Thread-level parallelism**: This type of parallelism involves executing multiple threads simultaneously within a single processor core.
- **Data-level parallelism**: This type of parallelism involves executing multiple operations on different data elements simultaneously within a single processor core.
- **Task-level parallelism**: This type of parallelism involves executing multiple tasks simultaneously across multiple processor cores or nodes in a distributed system.

## Benefits of Parallelism

Parallelism can provide several benefits, including:

- **Increased throughput**: Parallelism can increase the throughput of a system by allowing it to perform multiple tasks simultaneously.
- **Improved performance**: Parallelism can improve the performance of a system by allowing it to perform multiple tasks simultaneously.
- **Reduced latency**: Parallelism can reduce the latency of a system by allowing it to perform multiple tasks simultaneously.
- **Better resource utilization**: Parallelism can better utilize the resources of a system by allowing it to perform multiple tasks simultaneously.
- **Scalability**: Parallelism can provide scalability by allowing a system to handle increasing workloads by adding more processing power.
- **Flexibility**: Parallelism can provide flexibility by allowing a system to adapt to changing workloads by dynamically adjusting the number of tasks being executed.
- **Cost-effectiveness**: Parallelism can be cost-effective by allowing a system to perform multiple tasks simultaneously, reducing the need for additional hardware or software licenses.
- **Enhanced reliability**: Parallelism can enhance the reliability of a system by allowing it to perform multiple tasks simultaneously, reducing the risk of single points of failure.
- **Improved fault tolerance**: Parallelism can improve fault tolerance by allowing a system to continue functioning even if one or more components fail.
- **Increased availability**: Parallelism can increase the availability of a system by allowing it to perform multiple tasks simultaneously, reducing the risk of downtime due to hardware or software failures.
- **Improved responsiveness**: Parallelism can improve responsiveness by allowing a system to perform multiple tasks simultaneously, reducing the time it takes to respond to user requests.
- **Enhanced security**: Parallelism can enhance security by allowing a system to perform multiple tasks simultaneously, reducing the risk of security breaches.

## Parallelism and Instructions: Synchronization
Usually
independent parallel tasks need to coordinate at times, such as to say when
they have completed their work. 

## Parallelism and Computer Arithmetic: Subword Parallelism. 

Perhaps the simplest form of parallelism to build involves
computing on elements in parallel, such as when multiplying two vectors.
Subword parallelism takes advantage of the resources supplied by Moore's
Law to provide wider arithmetic units that can operate on many operands
simultaneously.

## Parallelism via Instructions
Given the difficulty of
explicitly parallel programming, tremendous effort was invested in the 1990s
in having the hardware and the compiler uncover implicit parallelism, initially
via pipelining. This chapter describes some of these aggressive techniques,
including fetching and executing multiple instructions concurrently
and guessing on the outcomes of decisions, and executing instructions
speculatively using prediction.

## Parallelism and Memory Hierarchies: Cache Coherence 
One way to lower the cost of communication is to have all
processors use the same address space, so that any processor can read or
write any data. Given that all processors today use caches to keep a temporary
copy of the data in faster memory near the processor, it's easy to imagine that
parallel programming would be even more difficult if the caches associated
with each processor had inconsistent values of the shared data. This chapter
describes the mechanisms that keep the data in all caches consistent.

## Parallelism and Memory Hierarchy: Redundant Arrays of Inexpensive Disks.
