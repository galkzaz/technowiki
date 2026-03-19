---
id: instruction-execution
title: Instruction Execution
---

Instruction execution describes how a processor carries out an instruction, from the moment it is fetched from memory until its result is written back. It connects the Instruction Set Architecture (ISA) (what the instruction means) with microarchitecture (how the hardware implements it).

At a high level, instruction execution consists of:
    1. Fetching the instruction from memory
    2. Decoding the instruction
    3. Executing the operation
    4. Accessing memory (if required)
    5. Writing back results
This sequence is known as the Instruction Cycle.
Modern processors overlap these steps using pipelining, and may execute multiple instructions in parallel.

## Instruction Cycle
2.1 Instruction Fetch (IF)
Purpose
Retrieve the instruction from memory.
Key Components
- Program Counter (PC) – holds address of next instruction
- Instruction Memory / Cache – stores instructions
- Instruction Register (IR) – holds fetched instruction
Steps
    1. PC provides address.
    2. Instruction memory returns instruction.
    3. Instruction loaded into IR.
    4. PC updated (usually PC + 4 in RISC architectures like RISC-V).
Performance Factors
- Cache hit/miss
- Branch prediction accuracy
- Instruction alignment

2.2 Instruction Decode (ID)
Purpose
Interpret the instruction and prepare required control signals.
Tasks
- Determine instruction type (R, I, Load, Store, Branch, etc.)
- Identify source and destination registers
- Extract immediate values
- Generate control signals
Hardware Involved
- Control Unit
- Register File (read ports)
- Immediate Generator
Example (RISC-V)
For:
add x5, x1, x2
Decode:
- Opcode → R-type
- rs1 = x1
- rs2 = x2
- rd = x5
- Operation = ADD

2.3 Operand Fetch
Occurs during or after decode.
Actions:
- Read source registers from Register File
- Sign/zero extend immediate if needed
Example:
addi x5, x1, 10
- Read x1
- Sign-extend 10

2.4 Execute Stage (EX)
Purpose
Perform the required computation.
Functional Units
- ALU (Arithmetic Logic Unit)
- FPU (Floating Point Unit)
- Branch Unit
- Multiply/Divide Unit
- Address Generator
Types of Execution
Arithmetic Instructions
add x5, x1, x2
ALU computes:
x5 = x1 + x2
Logical Instructions
and x5, x1, x2
Shift Instructions
sll x5, x1, x2
Branch Instructions
beq x1, x2, label
- Compare operands
- Compute branch target
- Update PC if condition true
Address Calculation (Load/Store)
lw x5, 8(x1)
ALU computes:
Effective Address = x1 + 8

2.5 Memory Access (MEM)
Only required for load and store instructions.
Load Example
lw x5, 0(x1)
- Use computed address
- Access data cache
- Retrieve memory value
Store Example
sw x5, 0(x1)
- Use computed address
- Write x5 to memory
Performance Factors
- Cache hit/miss
- Memory latency
- Memory hierarchy design

2.6 Write Back (WB)
Final stage.
Purpose
Store result into destination register.
Examples:
- Arithmetic:
      x5 = ALU result
- Load:
      x5 = memory value
Not all instructions write back (e.g., stores, some branches).

## 3. Single-Cycle vs Multi-Cycle Execution
3.1 Single-Cycle Processor
- Each instruction completes in one clock cycle.
- Clock cycle must be long enough for the slowest instruction.
Advantages
- Simple design
Disadvantages
- Slow clock frequency
- Wasted hardware resources

3.2 Multi-Cycle Processor
- Instructions broken into stages.
- Each stage takes one clock cycle.
- Different instructions take different numbers of cycles.
Advantages
- Faster clock
- Efficient hardware usage
Disadvantages
- More complex control



## Control flow instructions
Placeholder for detailed content.

## Pipelined Execution(Pipelining)
Placeholder for detailed content.

### Basic 5-Stage Pipeline

Common in RISC architectures:
| Stage | Name               |
| ----- | ------------------ |
| IF    | Instruction Fetch  |
| ID    | Instruction Decode |
| EX    | Execute            |
| MEM   | Memory Access      |
| WB    | Write Back         |


## Memory hierarchy interaction
Placeholder for detailed content.

Pipeline Concept
Multiple instructions overlap:
Cycle 1: IF (I1)
Cycle 2: ID (I1), IF (I2)
Cycle 3: EX (I1), ID (I2), IF (I3)
...
Improves throughput, not single-instruction latency.

5. Pipeline Hazards
5.1 Structural Hazards
Two instructions need same hardware resource.
Example:
- Shared memory for instructions and data
Solution:
- Separate instruction and data caches (Harvard architecture)

5.2 Data Hazards
Occurs when instruction depends on result of previous instruction.
Example:
add x5, x1, x2
sub x6, x5, x3
Types
- RAW (Read After Write)
- WAR (Write After Read)
- WAW (Write After Write)
Solutions
- Forwarding (bypassing)
- Pipeline stalls
- Register renaming

5.3 Control Hazards
Caused by branches.
Example:
beq x1, x2, label
Solutions
- Branch prediction
- Delayed branching
- Speculative execution

6. Control Unit in Execution
The Control Unit:
- Generates control signals
- Selects ALU operation
- Controls memory read/write
- Determines register write-back
Types of Control
Hardwired Control
- Fast
- Less flexible
Microprogrammed Control
- Uses microinstructions
- Easier to modify

7. Exceptions and Interrupts
7.1 Exceptions (Synchronous)
Triggered by instruction execution.
Examples:
- Division by zero
- Invalid opcode
- Page fault
7.2 Interrupts (Asynchronous)
Triggered externally.
Examples:
- I/O device signal
- Timer interrupt
Handling Process
    1. Save PC
    2. Switch to handler
    3. Execute service routine
    4. Restore state
    5. Resume program

8. Out-of-Order Execution (Advanced)
Modern high-performance CPUs:
- Do not execute strictly in program order
- Reorder instructions for performance
- Maintain architectural correctness
Key Concepts
- Reservation Stations
- Reorder Buffer (ROB)
- Register Renaming
Improves utilization of functional units.

9. Superscalar Execution
Multiple instructions issued per cycle.
Example:
- 2-way superscalar → execute 2 instructions per cycle.
Requires:
- Dependency checking
- Multiple ALUs
- Advanced scheduling

10. Memory Hierarchy Impact on Execution
Instruction execution speed heavily depends on:
- L1 cache latency
- L2/L3 cache
- Main memory
- TLB (Translation Lookaside Buffer)
Memory stalls dominate modern CPU performance.

11. Instruction Execution in RISC vs CISC
RISC (e.g., RISC-V)
- Fixed-length instructions
- Load/store architecture
- Simple decode
- Easy pipelining
CISC (e.g., x86)
- Variable-length instructions
- Complex decode
- Often internally translated into micro-operations

12. Performance Metrics Related to Execution
Instruction execution impacts:
12.1 CPI (Cycles Per Instruction)
CPI = Total Cycles / Instruction Count
12.2 CPU Time
CPU Time = Instruction Count × CPI × Clock Cycle Time
12.3 IPC (Instructions Per Cycle)
Higher IPC = better throughput.

13. Summary of Instruction Execution Flow
PC → Fetch → Decode → Read Registers → Execute → 
Memory Access (if needed) → Write Back → Update PC
Instruction execution is the core dynamic behavior of a CPU and directly determines:
- Performance
- Power consumption
- Scalability
- Complexity of processor design
