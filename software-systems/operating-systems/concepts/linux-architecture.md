---
id: software-systems-operating-systems-linux-architecture
title: Linux Architecture
description: Linux Architecture
sidebar_position: 3
---

Linux system architecture describes how the operating system is organized internally, how software interacts with hardware, and how different system components cooperate to provide services such as process execution, memory management, networking, storage, and device control.

At a high level, Linux is divided into:

* **Hardware Layer**
* **Kernel Space**
* **User Space**

Applications run in user space and interact with the Linux kernel through the **system call interface**.


## Linux Kernel Overview

The **Linux kernel** is the core component of the operating system. It acts as an intermediary between hardware and software.

The kernel is responsible for:

* Managing CPU usage
* Managing memory
* Handling filesystems
* Managing devices
* Networking
* Security and permissions
* Process scheduling
* Inter-process communication

Linux uses a **monolithic kernel architecture** with modular capabilities.

### Monolithic Kernel

In a monolithic kernel:

* Most OS services run inside kernel space
* Core subsystems communicate directly
* High performance due to fewer context switches

Linux includes:

* Scheduler
* Memory manager
* Filesystems
* Networking
* Drivers

inside the kernel itself.

### Loadable Kernel Modules (LKMs)

Linux improves flexibility using modules.

Examples:

* Filesystem drivers
* Network drivers
* USB drivers

Modules can be:

* Loaded dynamically
* Unloaded without rebooting

Example:

```bash
lsmod
modprobe
insmod
rmmod
```

### Linux Architecture Layers

```text
+----------------------------------+
| User Applications                |
| Shells, Browsers, Editors        |
+----------------------------------+
| System Libraries                 |
| glibc, OpenSSL, GTK              |
+----------------------------------+
| System Call Interface            |
+----------------------------------+
| Linux Kernel                     |
| Scheduler, Memory, VFS, Network  |
+----------------------------------+
| Hardware                         |
| CPU, RAM, Disk, NIC, Devices     |
+----------------------------------+
```

## User Space vs Kernel Space

Modern operating systems separate execution into different privilege domains to ensure:

* Security
* Stability
* Isolation
* Controlled hardware access

The most fundamental separation is between:

```text id="zyu0ea"
User Space
Kernel Space
```

This distinction is enforced primarily by hardware and forms the basis of modern OS design.

---

### User Mode and Kernel Mode

Processors provide different execution modes with different privilege levels.

The two most important are:

| Mode        | Purpose                        |
| ----------- | ------------------------------ |
| User Mode   | Run applications safely        |
| Kernel Mode | Run operating system core code |

### CPU Privilege Levels

Modern CPUs implement hardware privilege rings or levels.

Example (x86 architecture):

| Ring   | Privilege   |
| ------ | ----------- |
| Ring 0 | Kernel mode |
| Ring 3 | User mode   |

Most operating systems use only:

```text id="6m0hlh"
Ring 0 → Kernel
Ring 3 → Applications
```

Kernel mode has unrestricted access to system resources.

User mode is restricted.

### Restricted vs Privileged Execution

#### User Mode (Restricted)

User space is where applications execute.

Examples:

* Bash
* Python
* Browsers
* Editors
* Games
* Shells
* Databases
* Web servers

Applications running in user mode cannot:

* Access hardware directly
* Modify page tables
* Disable interrupts
* Execute privileged CPU instructions
* Access kernel memory
* Access other process memory arbitrarily

Characteristics:

* Restricted hardware access
* Cannot directly access memory of other processes
* Cannot execute privileged instructions

If a user-space application crashes:

* Usually only that process fails
* The OS remains stable

---

#### Kernel Mode (Privileged)

Kernel space is privileged memory where the kernel executes.

Characteristics:

* Full hardware access
* Full memory access
* Can execute privileged CPU instructions
  
Kernel code can:

* Access all memory
* Control hardware devices
* Configure interrupts
* Manage processes
* Modify virtual memory mappings
* Execute privileged instructions

Kernel components include:

* Scheduler
* Scheduler
* Memory manager
* Filesystem
* Device drivers
* Networking

Errors in kernel space are dangerous:

* Kernel panic
* System crash
* Data corruption

---

**Why Restrict Applications?**

Without restrictions:

* Any application could crash the system
* Malware could control hardware
* Processes could overwrite each other
* System security would collapse

Privilege separation prevents this.

---

### Hardware Protection

Most modern CPUs support privilege separation.

The CPU itself enforces protection.

Applications cannot simply "choose" to become privileged.

Attempting forbidden operations causes:

* Exceptions
* Traps
* Faults

Example:

```text id="31iowz"
User program tries privileged instruction
            ↓
CPU blocks operation
            ↓
Kernel handles fault
```

This protection is implemented in hardware, not just software policy.

**Simplified CPU Modes**

```text
Kernel Mode (privileged)
User Mode (restricted)
```

Kernel mode can:

* Access hardware directly
* Execute privileged instructions
* Modify interrupt tables
* Manage memory mappings

User mode cannot.

**Protection Mechanism**

Applications attempting privileged operations trigger traps/exceptions.

Example:

```text
User program tries direct hardware access
            ↓
CPU blocks operation
            ↓
Kernel handles violation
```

This isolation is one of the foundations of modern OS security.

**Why This Distinction Matters**

The separation provides:

| Benefit             | Description                               |
| ------------------- | ----------------------------------------- |
| Stability           | App crashes do not crash entire OS        |
| Security            | Apps cannot directly control hardware     |
| Isolation           | Processes cannot interfere arbitrarily    |
| Resource Management | Kernel controls CPU and memory allocation |

---

this separation is not universal. Some systems blur the distinction between OS and applications.

Some embedded systems may not have:

* Kernel mode
* Memory protection
* Hardware privilege separation

Examples:

* Small microcontrollers
* Simple IoT devices
* Bare-metal firmware

In such systems:

```text
Application code == system code
```

Everything may run with full hardware access.

1. Embedded Systems

**Why Embedded Systems Sometimes Avoid Kernel Mode**

Reasons include:

* Simplicity
* Cost reduction
* Limited hardware
* Real-time constraints
* Small memory footprint

Example microcontrollers:

* AVR
* PIC
* Small ARM Cortex-M systems

**Consequences**

Advantages:

* Very low overhead
* Fast execution
* Simpler runtime

Disadvantages:

* Poor isolation
* Easier crashes
* Reduced security
* Harder multitasking

2. Interpreted Systems

Interpreted systems (such as Java-based systems that use interpretation, not hardware, to separate the components)

Java-Based  programs typically run inside a: Java Virtual Machine (JVM)

The JVM provides isolation through software rather than hardware.

Instead of CPU-enforced protection:

```text
Interpreter/runtime enforces rules
```

**Example**

Java prevents direct memory access because:

* Bytecode verifier checks code safety
* JVM controls execution
* Runtime enforces boundaries

Even if the hardware does not separate components strongly, the runtime environment can.

#### Hardware Protection vs Software Protection

| Hardware Protection   | Software Protection            |
| --------------------- | ------------------------------ |
| CPU privilege levels  | Runtime/interpreter rules      |
| Fast                  | More flexible                  |
| Strong isolation      | Depends on runtime correctness |
| Used by Linux/Windows | Used by JVM, WebAssembly       |

#### Example Comparison

##### Traditional Linux

```text
Application
    ↓ syscall
Kernel
    ↓
Hardware
```

Protection enforced by CPU hardware.

---

##### Java System

```text
Java Program
    ↓
JVM Runtime
    ↓
OS
    ↓
Hardware
```

Protection partially enforced by software runtime.

**Important Concept: Trusted Computing Base**

The OS kernel is part of the: **Trusted Computing Base (TCB)**, Meaning:

* It must be trusted
* It has unrestricted access
* Bugs are dangerous

User applications are intentionally restricted to reduce risk.

---
The operating system is not merely another program.

It is a privileged control layer protected by hardware (or sometimes by software runtimes) to ensure:

* Security
* Stability
* Controlled resource access
* Reliable multitasking

Without this separation, modern multi-user and multitasking systems would be unsafe and unstable.

### Memory Isolation

Each process gets its own virtual address space.

Example:

```text id="hwyph3"
Process A memory ≠ Process B memory
```

Processes cannot directly access:

* Other process memory
* Kernel memory

The kernel controls memory mappings using:

* Page tables
* MMU (Memory Management Unit)

The kernel:

* Maps virtual memory to physical memory
* Prevents unauthorized access
* Enforces permissions

---

### Virtual Memory

Applications see virtual addresses:

```text
0x00400000
0x7ffd1234
```

The kernel translates them to physical RAM addresses.

Benefits:

| Benefit     | Description               |
| ----------- | ------------------------- |
| Isolation   | Processes separated       |
| Security    | Prevents arbitrary access |
| Stability   | Fault containment         |
| Flexibility | Efficient memory usage    |

---

### Context Switching Between Modes

Applications sometimes need OS services.

Example:

```c
read(fd, buffer, 100);
```

The CPU switches from:

```text id="mt5sxz"
User Mode → Kernel Mode → User Mode
```

This transition occurs through:

* System calls
* Interrupts
* Exceptions

---

### Why the Kernel Is Protected

The kernel controls the entire machine.

Because of this, it must be protected from ordinary applications.

One of the most fundamental concepts in operating system design: **The Operating System Has Privileged Control**

The key idea is that the **operating system (OS)** is fundamentally different from ordinary applications because it operates with **special privileges** enforced by hardware.

Normal applications run in **user mode**.

Examples:

* Email readers
* Browsers
* Text editors
* Games

Users are generally free to:

* Install them
* Replace them
* Remove them
* Write their own versions

For example:

* If you dislike Thunderbird, you can use Outlook or write your own email client.
* The OS does not prevent this.


Core OS components run in **kernel mode** (privileged mode).

Examples:

* Memory manager
* Process scheduler
* Interrupt handlers
* Device drivers
* Filesystem manager

These components:

* Control hardware
* Manage system resources
* Enforce security
* Protect processes from each other

Because of this, ordinary users are **not allowed** to modify or replace them directly.


A classic example is the: **Clock Interrupt Handler**, the user is typically not free to write her own **clock interrupt handler**, which is part of the operating system and is protected by hardware against attempts by users to modify it.

:::info

What Is a Clock Interrupt?

Modern CPUs contain hardware timers. Hardware timers periodically interrupt the CPU.

At regular intervals:

Example:

```text id="1ux6cl"
Timer hardware
      ↓
Interrupt signal
      ↓
Kernel interrupt handler
      ↓
CPU
```
The CPU pauses current execution and transfers control to the kernel's interrupt handler.

This enables:

* Process scheduling
* Time slicing
* Timers
* Multitasking
* Sleep timers
* CPU accounting

Without timer interrupts: Multitasking would not work properly.

:::

**Why Users Cannot Replace It**

If applications could modify the clock interrupt handler:

* A malicious process could monopolize the CPU.
* Processes could disable scheduling.
* System timing could break
* Security mechanisms could fail
* The entire system could crash.

So only kernel-mode code may control interrupts.

Therefore hardware enforces protection using:

* CPU privilege levels (rings)
* Kernel mode vs user mode
* Memory protection
* Privileged instructions

---

### Privileged Instructions

Certain CPU instructions are privileged.

Examples:

| Instruction Type      | Purpose                   |
| --------------------- | ------------------------- |
| Interrupt control     | Enable/disable interrupts |
| Page table management | Virtual memory            |
| I/O instructions      | Hardware access           |
| CPU control registers | Processor configuration   |

User-mode execution of these instructions is forbidden.

---

### Hardware-Enforced Protection

The CPU checks privilege level before executing sensitive operations.

Example:

```text id="olh7r8"
User process executes privileged instruction
            ↓
CPU generates exception
            ↓
Kernel intervenes
```

This creates strong isolation between applications and the OS.

---

### Why Protection Matters

#### Stability

Faulty apps cannot easily crash the whole system.

---

#### Security

Malicious programs cannot directly control hardware.

---

#### Isolation

Processes are separated from each other.

---

### Trusted Computing Base (TCB)

Kernel code is part of the:

```text
Trusted Computing Base
```

Meaning:

* It has full privileges
* Bugs are extremely dangerous
* Security depends heavily on it

Therefore kernels are heavily protected.

---

### User-Space Programs with Privileges

Not everything related to the operating system actually runs inside the kernel. In many systems there are programs that run in user mode but help the
operating system or perform privileged functions

The boundary between:

* **Operating system**
* **System software**
* **Privileged utilities**
* **Kernel components**

is sometimes blurry.

Some user-space programs perform security-sensitive tasks.

**Traditional View of an Operating System**

A simplified view says:

```text id="7tb1kx"
Kernel Mode  = Operating System
User Mode    = Applications
```

But real systems are more complicated.

Some important system programs:

* Run in user mode
* Are not part of the kernel
* Still perform privileged or security-sensitive tasks

---

**Example: Password Changing Program(passwd)**

Linux command:

```bash
passwd
```

Used to change user passwords.

This program:

* Runs in user mode
* Is an ordinary executable file
* Is not part of the kernel

Yet it performs a highly sensitive operation:

```text id="z6w59e"
Changing user authentication credentials
```

**Why Is passwd Special?Why Is This Sensitive?**

Password data is stored in protected files such as:

```text
/etc/shadow
```

Normal users cannot modify this file directly.

Yet users can change their passwords using `passwd`. So how can `passwd` change it?

**Special Privileges**

The program is granted controlled elevated privileges.

Unix/Linux traditionally solves this using:

```text
setuid bit
```

**setuid Mechanism**

When a program has the setuid permission:

```text id="sz62qv"
Program executes with owner's privileges
```

Example:

```bash
-rwsr-xr-x root root /usr/bin/passwd
```

Meaning:

* The program runs with root privileges
* Even when started by a normal user

In this case:

```text
Owner = root
```

So the program temporarily gains elevated permissions.

---

**Important Insight**

The program still runs in:

```text
User Mode
```

but has special privileges.

The `passwd` program:

| Property                 | Value |
| ------------------------ | ----- |
| Runs in kernel mode?     | No    |
| Runs in user mode?       | Yes   |
| Has elevated privileges? | Yes   |
| Security-sensitive?      | Yes   |

Therefore:
- User mode does not always mean unprivileged
- User mode ≠ always unprivileged

Many important OS-related services run outside the kernel.

Examples:

| Program          | Purpose               |
| ---------------- | --------------------- |
| `systemd`        | Service manager       |
| `udevd`          | Device management     |
| `NetworkManager` | Network configuration |
| `cron`           | Job scheduling        |
| `sshd`           | Remote login          |
| `login`          | Authentication        |

These are often called:

* System daemons
* System services
* User-space system software

---

#### Privileged Utilities

Examples:

| Utility  | Purpose              |
| -------- | -------------------- |
| `passwd` | Password management  |
| `sudo`   | Privilege escalation |
| `mount`  | Filesystem mounting  |
| `ping`   | Raw network access   |

These programs require carefully controlled permissions.

---

#### System Daemons

Many critical OS services run in user space as background processes.

Examples:

| Daemon    | Purpose         |
| --------- | --------------- |
| `systemd` | Service manager |
| `sshd`    | Remote login    |
| `cron`    | Task scheduler  |
| `udevd`   | Device manager  |

These are closely associated with the OS even though they run outside the kernel.

---

#### Why Put Services in User Space?
Modern OS design prefers moving components out of the kernel whenever possible.

Benefits:

| Benefit            | Description                                               |
| ------------------ | --------------------------------------------------------- |
| Stability          | User-space crashes are less catastrophic                  |
| Reliability        | Crashes less catastrophic                                 |
| Security           | Reduced kernel attack surface                             |
| Modularity         | Easier upgrades(Components can be replaced independently) |
| Easier Development | Easier debugging/restarting                               |

---

#### Kernel Crash vs User-Space Crash

##### Kernel Component Failure

```text id="6p1z8c"
Bug in kernel driver
    ↓
Kernel panic
    ↓
Entire system may crash
```

---

##### User-Space Service Failure

```text id="6w29h4"
Bug in user-space daemon
    ↓
Daemon crashes
    ↓
Can often restart safely
```

This is a major architectural advantage.

---

### Blurred Boundary Between OS and Applications

Modern systems blur the line between:

* Operating system
* System software
* Applications

**Traditional View**

Simple model:

```text id="6jjx76"
Kernel = Operating System
Applications = User programs
```

But modern systems are more complex.

**OS Services Outside the Kernel**

Many essential services run in user space:

* Login systems
* Networking services
* Logging systems
* Device management
* Filesystem services

These may behave like part of the OS.

---

#### Microkernel Philosophy

Microkernels minimize kernel responsibilities.

Kernel handles only:

* IPC
* Scheduling
* Basic memory management

Other services run in user space.

---

#### Filesystem Servers in User Mode

In microkernel systems:

```text id="vq30sx"
Filesystem runs as normal process
```

instead of kernel code.

Advantages:

* Better fault isolation
* Easier restarts
* Improved modularity

---

#### User-Space Drivers

Some systems even move drivers outside the kernel.

Example flow:

```text id="u2tvw5"
Application
    ↓
Filesystem server
    ↓
Driver process
    ↓
Microkernel
    ↓
Hardware
```

---

#### System Daemons as OS Components

Programs like:

* `systemd`
* `launchd`
* `udevd`

are technically user-space programs but function as core operating-system infrastructure.

---

#### Modern Modular Architectures

Modern OS design increasingly favors:

```text id="vh3wtm"
Smaller kernel
+ more user-space services
```

Goals:

* Security
* Reliability
* Maintainability

---

### Why Is Boundary Difficult to Define?

The definition of "operating system" depends on perspective.

**Strict Definition**

Only kernel-mode code is OS.

Then:

```text id="fw8kri"
Kernel = Operating System
```

Everything else is application software.

**Broader Definition**

OS also includes closely integrated system services.

Then the OS includes:

* Init system
* Authentication services
* Logging systems
* Filesystem servers
* Device managers

even if they run in user mode.

**Practical Modern View**

Modern systems are often viewed as:

```text id="x5t3e9"
Kernel
+ System Services
+ Core Runtime Infrastructure
= Operating System Environment
```

---

#### User Space Is Not Always "Normal Applications"

User-space software can range from:

| Type               | Example        |
| ------------------ | -------------- |
| Ordinary apps      | Browser        |
| System daemons     | `systemd`      |
| Security utilities | `passwd`       |
| Hardware managers  | `udevd`        |
| Filesystem servers | Microkernel FS |

So user space itself contains multiple trust levels.

---

#### Privilege Is More Than Kernel Mode

Modern systems use several mechanisms:

| Mechanism         | Purpose                  |
| ----------------- | ------------------------ |
| Kernel/User modes | CPU privilege separation |
| File permissions  | Access control           |
| Capabilities      | Fine-grained privileges  |
| SELinux/AppArmor  | Mandatory access control |
| Containers        | Process isolation        |
| Sandboxing        | Restricted execution     |

Thus privilege is layered, not binary.

---

#### Key Insight of the Passage

The passage teaches that:

1. Kernel mode is not the only place where important OS functionality exists.
2. Some user-space programs perform highly privileged tasks.
3. Modern operating systems often move services out of the kernel for safety and modularity.
4. Therefore, the boundary of what counts as "the operating system" is sometimes architectural rather than absolute.

---

#### Conceptual Evolution

##### Early Systems

```text id="5bw1nw"
Everything in kernel
```

---

##### Modern Systems

```text id="vjlwm0"
Minimal kernel
+ user-space services
+ security layers
+ managed runtimes
```

This evolution improves:

* Reliability
* Maintainability
* Security
* Flexibility

while making the definition of the operating system less rigid.

### Monolithic vs Microkernel Perspective

The placement of services differs greatly between architectures.

---

#### Monolithic Kernel Architecture

Linux is primarily monolithic. Most services run inside the kernel. 

Traditional Linux architecture:

```text id="u8q0ut"
Kernel:
  Scheduler
  Memory Manager
  VFS
  Networking
  Drivers
```
Most services execute in kernel mode.

---

#### Advantages

| Advantage                 | Description            |
| ------------------------- | ---------------------- |
| Performance               | Fast communication     |
| Efficiency                | Fewer context switches |
| Simplicity of interaction | Direct subsystem calls |

---

#### Disadvantages

| Disadvantage           | Description           |
| ---------------------- | --------------------- |
| Large trusted codebase | Bigger attack surface |
| Kernel bugs dangerous  | Entire system risk    |
| Harder isolation       | Tight coupling        |

---

#### Microkernel Architecture

Microkernels keep only minimal components in kernel mode.

Kernel contains only:

* IPC
* Scheduling
* Basic memory management

Everything else runs in user mode:

* Filesystem servers
* Network stack
* Drivers

---

#### Microkernel Structure

```text id="tq0o4n"
+----------------------+
| User Applications    |
+----------------------+
| Filesystem Server    |
| Network Server       |
| Driver Processes     |
+----------------------+
| Microkernel          |
+----------------------+
| Hardware             |
+----------------------+
```

---

#### Advantages

| Advantage              | Description                    |
| ---------------------- | ------------------------------ |
| Better fault isolation | Crashes localized              |
| Smaller kernel         | Improved security              |
| Easier modularity      | Replace components             |
| Better reliability     | Restart services independently |

---

#### Disadvantages

| Disadvantage          | Description                      |
| --------------------- | -------------------------------- |
| IPC overhead          | More communication cost          |
| More context switches | Lower performance                |
| Greater complexity    | Distributed service coordination |

---

#### Examples of Microkernel Systems

Examples:

* MINIX 3
* QNX
* Mach
* L4

Some parts of:

* macOS
* Windows NT

also borrow microkernel ideas.

#### Examples

| Architecture | Examples              |
| ------------ | --------------------- |
| Monolithic   | Linux                 |
| Microkernel  | MINIX 3, QNX          |
| Hybrid       | Windows NT, XNU/macOS |

---

### Core Idea of User Space vs Kernel Space

The separation between user space and kernel space exists to provide:

```text id="5x7khm"
Security
Stability
Isolation
Controlled hardware access
```

But modern systems show that:

```text id="odfrp0"
Important OS functionality can exist both inside and outside the kernel
```

which makes the boundary between operating system and application software increasingly flexible.


### Context Switching

When switching between user mode and kernel mode:

1. Application requests OS service
2. CPU switches privilege level
3. Kernel executes operation
4. Control returns to user process

This transition occurs during:

* System calls
* Interrupts
* Exceptions


## System Call Interface

The **System Call Interface (SCI)** is the boundary between user applications and the kernel.

Applications cannot directly access hardware.
Instead, they request services using **system calls**.


### What is a System Call?

A system call is a controlled entry point into the kernel.

Examples:

| Category        | Examples                      |
| --------------- | ----------------------------- |
| Process Control | `fork()`, `exec()`, `wait()`  |
| File Operations | `open()`, `read()`, `write()` |
| Memory          | `mmap()`, `brk()`             |
| Networking      | `socket()`, `bind()`          |
| Device Access   | `ioctl()`                     |
| Signals         | `kill()`, `signal()`          |


### System Call Flow

```text
Application
    |
glibc wrapper
    |
System Call
    |
Kernel
    |
Hardware/Subsystem
```


### Example: File Read

C code:

```c
int fd = open("file.txt", O_RDONLY);
read(fd, buffer, 100);
```

Flow:

1. Application calls `read()`
2. glibc invokes syscall
3. CPU enters kernel mode
4. VFS resolves filesystem
5. Driver accesses disk
6. Data copied to user buffer
7. Return to user mode


### System Call Mechanisms

Modern CPUs provide special instructions:

| Architecture | Instruction           |
| ------------ | --------------------- |
| x86          | `syscall`, `sysenter` |
| ARM          | `svc`                 |
| Older x86    | `int 0x80`            |


### System Call Categories

#### Process Management

```c
fork()
execve()
exit()
waitpid()
```

#### File Management

```c
open()
close()
read()
write()
stat()
```

#### Memory Management

```c
mmap()
munmap()
brk()
```

#### IPC (Inter-Process Communication)

```c
pipe()
shmget()
msgsnd()
```

#### Networking

```c
socket()
connect()
accept()
send()
recv()
```


## Linux Kernel Subsystems

The Linux kernel consists of multiple cooperating subsystems.


### Kernel Subsystem Overview

```text
+--------------------------------+
| Linux Kernel                   |
+--------------------------------+
| Process Scheduler              |
| Memory Manager                 |
| Virtual File System (VFS)      |
| Networking Stack               |
| Device Drivers                 |
| IPC                            |
| Security Modules               |
+--------------------------------+
```


### Process Scheduler

The scheduler determines:

* Which process runs
* When it runs
* How long it runs

Goals:

* Fairness
* Responsiveness
* Throughput
* CPU utilization


#### Key Concepts

##### Process States

```text
Running
Ready
Sleeping
Stopped
Zombie
```

##### Context Switch

CPU switches from one process/thread to another.

##### Time Slice

Each process receives CPU time quantum.


#### Linux Scheduler Types

#### CFS (Completely Fair Scheduler)

Default Linux scheduler.

Idea:

* Fair CPU distribution
* Uses virtual runtime
* Red-black tree structure

##### Real-Time Schedulers

For deterministic timing.

Policies:

* `SCHED_FIFO`
* `SCHED_RR`


### Memory Manager

Responsible for:

* Virtual memory
* Paging
* Allocation
* Swapping
* Caching


### Virtual Memory

Each process sees isolated memory space.

Advantages:

* Isolation
* Security
* Efficient memory use


### Paging

Memory divided into pages.

Common page size:

```text
4 KB
```


### Demand Paging

Pages loaded only when needed.

Benefits:

* Faster startup
* Lower memory usage


### Swap Space

Inactive pages moved to disk when RAM is low.


### Slab Allocator

Kernel memory allocation optimization.

Used for:

* Frequently allocated kernel objects


### VFS (Virtual File System)

VFS provides a unified filesystem interface.

Applications use the same APIs regardless of filesystem type.

Supported filesystems:

* ext4
* XFS
* Btrfs
* FAT32
* NTFS
* NFS


### VFS Abstraction

```text
Application
    |
VFS
    |
Filesystem Driver
    |
Storage Device
```


### Important VFS Structures

#### Inode

Stores metadata:

* Permissions
* Ownership
* Timestamps

### Dentry

Directory entry cache.

#### File Object

Represents open file instance.


### Networking Stack

Linux networking subsystem implements:

* TCP/IP
* UDP
* Routing
* Firewalling
* Sockets


### Networking Layers

```text
Applications
Sockets API
TCP/UDP
IP Layer
Network Driver
NIC Hardware
```


### Key Components

#### Socket Layer

Programming interface for networking.

#### TCP/IP Stack

Implements protocols.

#### Netfilter

Firewall framework.

Used by:

```bash
iptables
nftables
```

#### Routing Subsystem

Handles packet forwarding.


### Device Drivers

Drivers allow the kernel to communicate with hardware.

Examples:

* GPU drivers
* USB drivers
* Disk drivers
* Network drivers


### Driver Categories

| Type              | Description     |
| ----------------- | --------------- |
| Character Drivers | Byte streams    |
| Block Drivers     | Storage devices |
| Network Drivers   | Network devices |


### Device Files

Linux exposes devices as files:

```text
/dev/sda
/dev/tty
/dev/null
```

This follows the Unix philosophy:

> "Everything is a file."


## Boot Process

The Linux boot process initializes hardware and starts the operating system.


### Boot Sequence Overview

```text
BIOS/UEFI
    ↓
Bootloader
    ↓
Linux Kernel
    ↓
init/systemd
    ↓
Services
    ↓
Login/User Space
```


### Step 1: BIOS or UEFI

Firmware initializes hardware.

Responsibilities:

* CPU initialization
* Memory checks
* Device discovery
* Boot device selection


#### BIOS

Legacy firmware interface.

Characteristics:

* MBR partitioning
* 16-bit mode limitations


#### UEFI

Modern replacement for BIOS.

Features:

* GPT support
* Secure Boot
* Faster startup
* Graphical interface


### Step 2: Bootloader

Loads the Linux kernel into memory.

Common bootloaders:

* GRUB2
* systemd-boot
* LILO (older)


### GRUB Responsibilities

* Kernel selection
* Passing kernel parameters
* Loading initramfs

Example:

```text
linux /boot/vmlinuz root=/dev/sda1
initrd /boot/initramfs.img
```


### Step 3: Kernel Initialization

Kernel performs:

* Memory setup
* CPU setup
* Driver initialization
* Mount root filesystem


### initramfs

Temporary root filesystem loaded into RAM.

Used for:

* Loading drivers
* Discovering root filesystem
* RAID/LVM setup


### Step 4: Init System

Kernel starts first userspace process:

```text
PID 1
```

Usually:

```text
systemd
```

Responsibilities:

* Service startup
* Mount filesystems
* Networking initialization
* Login services


### Step 5: User Space Startup

System becomes operational.

Examples:

* Shell login
* GUI login manager
* Server daemons


## Init Systems

An init system manages user-space initialization and services.

It is the first userspace process started by the kernel.


### Responsibilities of Init Systems

* Start services
* Manage dependencies
* Handle shutdown/reboot
* Monitor daemons
* Logging
* Mount filesystems


### systemd

Modern Linux init system.

Widely used in:

* Ubuntu
* Fedora
* RHEL
* Debian


### systemd Features

#### Parallel Startup

Starts services concurrently.

Benefits:

* Faster boot time


#### Unit-Based Architecture

Units include:

| Unit Type  | Purpose        |
| ---------- | -------------- |
| `.service` | Services       |
| `.socket`  | Sockets        |
| `.mount`   | Mount points   |
| `.timer`   | Scheduled jobs |
| `.target`  | Groups/states  |


#### Service Management

Examples:

```bash
systemctl start nginx
systemctl stop nginx
systemctl status nginx
```


#### Journaling

Integrated logging system:

```bash
journalctl
```


#### cgroups Integration

Tracks and limits resources:

* CPU
* Memory
* IO


### SysVinit

Traditional Unix/Linux init system.

Uses shell scripts located in:

```text
/etc/init.d/
```


#### SysVinit Characteristics

* Sequential startup
* Runlevels
* Simple design


#### Runlevels

| Runlevel | Meaning        |
| -------- | -------------- |
| 0        | Halt           |
| 1        | Single-user    |
| 3        | Multi-user CLI |
| 5        | Graphical      |
| 6        | Reboot         |


#### Service Example

```bash
service ssh start
```


#### Limitations

* Slow boot
* Weak dependency handling
* Script complexity


### OpenRC

Init system developed for Gentoo.

Goals:

* Simplicity
* Speed
* Dependency management


#### OpenRC Features

* Parallel service startup
* Dependency-aware
* Shell-script compatible
* Lightweight


#### OpenRC vs systemd

| Feature    | OpenRC    | systemd             |
| ---------- | --------- | ------------------- |
| Complexity | Lower     | Higher              |
| Boot Speed | Fast      | Very Fast           |
| Logging    | External  | Built-in            |
| cgroups    | Limited   | Extensive           |
| Philosophy | Unix-like | Integrated platform |


## Linux Architecture Summary

```text
+------------------------------------------------+
| User Applications                              |
+------------------------------------------------+
| Libraries (glibc, etc.)                        |
+------------------------------------------------+
| System Call Interface                          |
+------------------------------------------------+
| Linux Kernel |
| ------------ |
| Scheduler    | Memory | VFS | Network | Drivers |
+------------------------------------------------+
| Hardware                                       |
+------------------------------------------------+
```

## Key Takeaways

* Linux separates user space and kernel space for security and stability.
* The kernel provides hardware abstraction and core OS services.
* Applications interact with the kernel through system calls.
* Major kernel subsystems include scheduling, memory, filesystems, networking, and drivers.
* The boot process progresses from firmware → bootloader → kernel → init system.
* `systemd` is the dominant modern init system, while SysVinit and OpenRC remain important historically and architecturally.
