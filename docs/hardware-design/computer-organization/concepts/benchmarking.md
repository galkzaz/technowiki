---
id: benchmarking
title: Benchmarking
description: Benchmarking
---

workload A set of programs run on a computer that is either the actual collection of applications run by a user or constructed from real programs to approximate such a mix. 

A typical workload specifies both the programs and the relative frequencies.

benchmark A program selected for use in comparing computer performance.

benchmarks—programs specifically chosen to measure performance. The benchmarks form a workload that the user hopes will predict the performance of the actual workload.

## SPEC
SPEC (System Performance Evaluation Cooperative) is an effort funded and supported by a number of computer vendors to create standard sets of benchmarks for modern computer systems.

### SPEC CPU 2017 
SPEC CPU 2017 is a standardized benchmark suite created by the Standard Performance Evaluation Corporation (SPEC) to measure:
- CPU performance
- Memory subsystem performance
- Compiler effectiveness
- Overall system efficiency (excluding I/O and network)

It is the modern successor to: SPEC CPU2000, SPEC CPU2006. It is widely used by: PU vendors (Intel, AMD, ARM), Server manufacturers, Compiler teams, Computer architecture researchers.

SPEC CPU 2017 measures compute-intensive performance.
It stresses:
- Integer computation
- Floating-point computation
- Branch prediction
- Cache hierarchy
- Memory bandwidth
- Compiler optimizations

It does NOT measure:
- Disk I/O
- Network performance
- GPU acceleration
- OS scheduling performance


#### Structure of SPEC CPU 2017
The suite is divided into two major benchmark groups:

1. **SPECspeed® 2017**

Measures single-task performance, It answers: 'How fast can the system complete ONE instance of a program?'
This reflects:
- Single-core performance
- IPC (Instructions Per Cycle)
- Frequency
- Cache effectiveness

2. **SPECrate® 2017**

Measures throughput performance, It answers: 'How many copies of a benchmark can run in parallel?'
This reflects:
- Multi-core scalability
- Memory bandwidth
- Shared cache behavior
- NUMA architecture

Each group is split into:
1. **SPECint**
    * Integer-heavy workloads
    * Examples:
        * Compression
        * Artificial intelligence
        * Compiler workloads
        * Graph algorithms
    * Tests:
        * Branch prediction
        * Cache locality
        * Control hazards
2. **SPECfp**
    * Floating-point heavy workloads
    * Examples:
        * Physics simulations
        * Fluid dynamics
        * Climate modeling
        * Ray tracing
    * Tests:
        * FPU pipelines
        * Vector units (AVX, NEON, etc.)
        * Memory streaming

#### Benchmark Naming Convention
Structure:
```
[Number].[ProgramName]_[r or s]
```
- Number = benchmark ID
- Name = workload
- _r = rate (throughput)
- _s = speed (single task)

## SPECjbb
SPECjbb is a Java-based benchmark that measures the performance of Java Virtual Machines (JVMs) and Java applications. It is designed to simulate a typical enterprise application workload and is widely used to compare the performance of different JVMs and Java applications.

## SPECweb
SPECweb is a web-based benchmark that measures the performance of web servers and web applications. It is designed to simulate a typical web application workload and is widely used to compare the performance of different web servers and web applications.

## SPECjbb2015
SPECjbb2015 is a Java-based benchmark that measures the performance of Java Virtual Machines (JVMs) and Java applications. It is designed to simulate a typical enterprise application workload and is widely used to compare the performance of different JVMs and Java applications.
