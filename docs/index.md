---
id: getting-started
slug: /
title: Introduction
description: Computer Science
---

## Abstraction
<!--The Deep Computer Science Principle-->
Abstractions let us omit details; they are an interface for reaping the
functionality of complex things in a simple way. We deliberately hide complexity so we can focus on what matters at our level. 

For instance, cars hide complex mechanics beneath a driving panel, such that anyone can easily learn to drive without understanding any engineering, A car contains:
- Internal combustion or electric engine
- Transmission system
- Fuel injection system
- Cooling system
- Control electronics
- Suspension mechanics

But the driver sees only:
- Steering wheel
- Gas pedal
- Brake pedal
- Gear selector
- Dashboard

The dashboard is an interface.
The driver uses the car without knowing:
- thermodynamics
- torque curves
- combustion timing
- gear ratios

This is abstraction. Mapping the Analogy to Computer Science
```
Car system → Complex implementation
Driving panel → Interface (API)
Driver → Algorithm programmer
```
For example:
When you use:
```
my_list.append(x)
```
You are like the driver pressing the gas pedal.
You do not know:
- if memory is reallocated
- if capacity doubles
- if elements are copied
- if cache lines are affected

But you don’t need to.

In software, procedural abstractions hide complexities of a process beneath a procedure call. In the trade algorithm  the min and max procedures hide how the minimum and maximum numbers are found, making the algorithm simpler. 

With abstractions on top of other abstractions, we can build modules that allow us to do complex stuff with single procedures, like this:
```
html ← fetch_source("https΂//code.energy")
```
In one line of code, we fetched a website’s source code, even though the inner workings of that task are extremely complex(It involves resolving a domain name, creating a TCP network socket, doing SSL encryption handshakes, and much more.).

:::info

A **module**, or **library**, is a piece of software that provides generic computational procedures. They can be included on demand in other pieces of software

:::

**Why Abstraction Is Necessary**

Without abstraction:
- Every programmer must understand hardware
- Every algorithm must specify memory layout
- Every program would be unmanageable

Abstraction enables:
- Specialization
- Division of labor
- Layered design

Abstraction is the reason:
- Millions of developers can write code
- Operating systems are possible
- Distributed systems exist
- Large software systems scale

Without abstraction, computer science would collapse under its own complexity.

Abstraction is not about removing complexity. It is about managing it.

In Computer Science View
Abstraction involves:
- Encapsulation (hide representation)
- Interface specification (define allowed operations)
- Behavioral contract (define expected behavior)

This is exactly what:
- Abstract Data Types
- Object-Oriented Programming
- Modules
- APIs

are built on.

### Abstraction as "Cognitive Compression"
Abstraction is a way to compress complexity into manageable units.

Instead of thinking: 2000 interacting components, You think: `Car`

Instead of: pointer arithmetic, memory blocks, capacity tracking, You think: `list`

This is how humans scale complexity.

### The Hierarchy of Abstractions in Computing
Modern computing is layered like this:
```
User
→ Application
→ Library
→ Operating system
→ Compiler
→ Machine code
→ Microarchitecture
→ Hardware
→ Physics
```
Each layer hides the complexity below it.
For example:
In Python:
- You don’t manage memory directly.
- You don’t control register allocation.
- You don’t write assembly.

But Python itself depends on:
- C implementation
- OS memory allocation
- CPU instructions

Each level abstracts the next.

### Abstraction in Operating Systems
Operating systems are built almost entirely on abstraction.

1. **Virtual Memory**

Programs think they have:
Continuous private memory.

in Reality:
- physical memory is fragmented
- pages are swapped
- addresses are translated

Abstraction:
- Virtual address space

The OS hides:
- page tables
- TLB
- swapping

2. **File System**

Program sees:
```
open("file.txt")
read()
write()
```
But underneath:
- disk blocks
- caching
- journaling
- scheduling
- device drivers

Abstraction layer:
- file API

3. **Processes**

A process thinks it owns the CPU. 
in Reality:
- context switching
- scheduling
- interrupts

The OS abstracts:
- CPU as a dedicated resource

4. Compilers

Compilers are abstraction transformers.

High-Level Code
```
a = b + c;
```
Abstraction:
- arithmetic operation

Compiler transforms into:
- register allocation
- load/store instructions
- architecture-specific ops

Compiler in Data Structure Abstraction

In C++:
```
vector<int> v;
v.push_back(x);
```
The abstraction:
- dynamic array

Compiler translates into:
- capacity check
- possible reallocation
- memcpy
- pointer update

All hidden.

Compiler in Intermediate Representation (IR)

Compilers use abstraction layers like:
- AST
- Control Flow Graph
- SSA Form

Each layer hides lower-level details while enabling analysis and optimization.

### Tradeoff
Computer science constantly balances: Abstraction vs Control

Too little abstraction → chaos

Too much abstraction → inefficiency

Mastery comes from:
- Thinking abstractly
- Measuring concretely

Abstraction enables:
- Modular reasoning
- Reusable algorithms
- Machine-independent analysis

But abstraction also requires:
- Understanding hidden cost
- Designing efficient ADTs
- Knowing when to break abstraction

Abstraction is a tradeoff between complexity and usability.

Too much abstraction can hide important details, making debugging difficult.
Too little abstraction can lead to complex, hard-to-maintain code.

Finding the right balance is key.

The car example also hides something important:
If something breaks,
you may not understand why.

Similarly in programming:
- Abstraction hides performance cost.
- Abstraction hides failure modes.
- Abstraction hides resource usage.

Which is why advanced programmers must:
Know what lies beneath the abstraction.
Not always — but when needed.

Abstraction provides:
- Simplicity
- Usability
- Modularity

But it requires:
- Trust
- Well-defined interfaces
- Clear contracts

Without clear contracts, abstraction becomes dangerous.
