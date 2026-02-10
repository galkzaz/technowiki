---
id: parallel-computing
title: Introduction
description: Parallel Computing
---

Parallelism has always been crucial to performance in computing, but it was often
hidden.

Forcing programmers to be aware of the parallel hardware and to rewrite
their programs to be parallel had been the “third rail” of computer architecture,
for companies in the past that depended on such a change in behavior failed.

From this historical perspective, it’s startling that the whole IT
industry has bet its future that programmers will finally successfully switch to
explicitly parallel programming.

**Why has it been so hard for programmers to write explicitly parallel programs?**

1. The first reason is that parallel programming is by definition performance
programming, which increases the difficulty of programming. Not only does the
program need to be correct, solve an important problem, and provide a useful
interface to the people or other programs that invoke it; the program must also be
fast. Otherwise, if you don’t need performance, just write a sequential program.
2. The second reason is that fast for parallel hardware means that the programmer
must divide an application so that each processor has roughly the same amount to
do at the same time, and that the overhead of scheduling and coordination doesn’t
fritter away the potential performance benefits of parallelism.

As an analogy, suppose the task was to write a newspaper story. Eight reporters
working on the same story could potentially write a story eight times faster. To achieve
this increased speed, one would need to break up the task so that each reporter had
something to do at the same time. Thus, we must schedule the sub-tasks. If anything
went wrong and just one reporter took longer than the seven others did, then the
benefits of having eight writers would be diminished. Thus, we must balance the load evenly to get the desired speedup. Another danger would be if reporters had
to spend a lot of time talking to each other to write their sections. You would also
fall short if one part of the story, such as the conclusion, couldn’t be written until all
the other parts were completed. Thus, care must be taken to reduce communication
and synchronization overhead. For both this analogy and parallel programming, the
challenges include scheduling, load balancing, time for synchronization, and overhead
for communication between the parties. 

The challenge is stiffer with
more reporters for a newspaper story and more processors for parallel programming.
