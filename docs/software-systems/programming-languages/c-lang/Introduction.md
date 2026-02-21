---
id: Introduction
title: Introduction
description: C Programming Language 
---
## History of C
C was developed by Dennis Ritchie at Bell Labs in the early 1970s. It was designed to be a low-level language that could be used to write efficient system software. C has since become one of the most widely used programming languages in the world, particularly for developing operating systems, device drivers, and embedded systems.

1. Ken Thompson wrote the original version of UNIX at 1969, which ran on the DEC PDP-7 computer,  UNIX was written in assembly language
2. Ken Thompson designed a small language named B based B on BCPL, a systems programming lan-
guage developed in the mid-1960s. BCPL, in turn, traces its ancestry to Algol 60.
3. Dennis Ritchie,began to develop an
extended version of B. He called his language NB (“New B”) at first, and then, as
it began to diverge more from B, he changed the name to C(called K&R C).
4.  The language was stable enough by 1973 that UNIX could be rewritten in C.
5. First C standard was ANSI standard X3.159-1989 in 1989, then was approved by the International Organization
for Standardization (ISO) as international standard ISO/IEC 9899:1990. it is usually referred to as C89 or C90.
6. standard, ISO/IEC 9899:1999, in 1999. The language described in this standard is commonly known as C99.

## Effective Use of C
1. Learn how to avoid C pitfalls
2. Use software tools to make programs more reliable(linter,debugger).
3. Take advantage of existing code libraries.
4. Libraries for common tasks, including user-interface development, graphics, communications, database management, and networking, are readily available. 
5. Adopt a sensible set of coding conventions. A coding convention is a style
rule that a programmer has decided to adopt even though it's not enforced by
the language. Well-chosen conventions help make programs more uniform,
easier to read, and easier to modify. Conventions are important when using
any programming language, but especially so with C. As noted above, C's
highly flexible nature makes it possible for programmers to write code that is
all but unreadable.
6. Avoid “tricks” and overly complex code. C encourages programming tricks.
There are usually several ways to accomplish a given task in C; programmers
are often tempted to choose the method that's most concise. Don't get carried
away; the shortest solution is often the hardest to comprehend.
7. Stick to the standard. Most C compilers provide language features and library
functions that aren't part of the C89 or C99 standards. For portability, it's best
to avoid using nonstandard features and libraries unless they're absolutely
necessary.

## Top C libraries
**🖥️ User Interface (UI)**

* GTK (GIMP Toolkit): The most popular choice for Linux desktop apps (powers GNOME), used in GNOME, GIMP, Inkscape
*  LVGL (Light and Versatile Graphics Library): The leading choice for embedded systems and microcontrollers. It's highly optimized for low memory usage while providing beautiful widgets.
* Nuklear: A tiny, single-header 'immediate mode' UI library. It has zero dependencies and is perfect for overlaying UI on top of games or 3D tools.
* IUP: A multi-platform toolkit that uses native widgets (it looks like a Windows app on Windows and a GTK app on Linux) instead of drawing its own.
* FLTK: Lightweight, fast, minimal dependencies Good for tools and embedded desktops
* Qt: A powerful cross-platform framework for building desktop and mobile applications. It's widely used in commercial software like VLC and Krita.
* wxWidgets: A cross-platform C++ library for creating graphical user interfaces. It's widely used in commercial software like Audacity and Blender.
* GTK+: A multi-platform toolkit for creating graphical user interfaces. It's widely used in commercial software like GIMP and Inkscape.
* **wxWidgets**: A cross-platform C++ library for creating graphical user interfaces. It's widely used in commercial software like Audacity and Blender.
* SDL (with GUI libs): Not a widget toolkit, but great for custom UIs Often combined with Dear ImGui.
* Dear ImGui (C-compatible core)Immediate-mode GUI, perfect for tools/debug UIs Popular in game engines and dev tools
**🎨 Graphics & Multimedia**

* SDL (Simple DirectMedia Layer): The industry standard. It provides low-level access to audio, keyboard, mouse, and graphics hardware via OpenGL/Vulkan. Most 'indie' C games start here.
* Raylib: Highly recommended for beginners. It is extremely simple to use and includes built-in functions for 3D, shaders, and audio without the boilerplate of SDL.
* Cairo: A 2D graphics library used for high-quality vector drawing. It's great for creating charts, PDFs, or custom software diagrams.
* OpenGL / Vulkan: These are the core APIs for 3D graphics. You'll usually use a loader like Glad or GLEW to access them in C.
* GLFW: A lightweight library for creating windows, contexts, and surfaces for OpenGL, Vulkan, and other APIs. It's great for game development and prototyping.
* libpng / libjpeg / libwebp: Image format support
* FFmpeg (libav): Audio/video decoding, encoding, streaming (industry standard)
* OpenAL: 3D audio API
* PortAudio: Cross-platform audio I/O

**🌐 Networking & Communications**

* POSIX sockets (BSD sockets): The foundation of all networking in C
* libcurl: The 'Swiss Army knife' of network transfers. HTTP, HTTPS, FTP, SMTP, REST APIs
Simple, robust, and everywhere.
* Mongoose: A very popular embedded web server. It can turn any C application into a web server with just a few lines of code.
* ZeroMQ: A high-performance 'intelligent' socket library. It handles the complexity of message queues, reconnection, and multi-node patterns.
* libwebsockets: The go-to library for modern, real-time web communication via WebSockets.
* libevent / libev / libuv:Event-driven, async I/O, scalable servers
libuv powers Node.js internally
* ZeroMQ (libzmq): Message-oriented middleware (pub/sub, request/reply)
* OpenSSL / LibreSSL: TLS/SSL, crypto primitives
* mbedTLS: Lightweight crypto (embedded systems)
* libsodium: High-level, safe crypto API
**📂 Database Management**

* SQLite: The most used database engine in the world. It's a serverless, file-based SQL database that is incredibly fast and reliable.
* ODBC (unixODBC) - Generic SQL access
* libpq: The official C client library for PostgreSQL.
* MySQL Connector/C: The official driver for connecting to MySQL or MariaDB servers.
* hiredis: A minimalistic C client library for the Redis database (perfect for high-speed caching).
* MongoDB C Driver: The official C driver for MongoDB.
* Redis C Client: A C client library for the Redis database.
* libmongocrypt: The official C driver for MongoDB encryption.


**🛠️ Others (Utilities & Data)**

* GLib: Part of the GTK project, but can be used standalone. It provides 'missing' C features like linked lists, hash tables, and string utilities.
* JSON-C / Jansson: Essential for parsing and generating JSON data.
* uthash / utlist:  Header-only hash tables & lists
* klib: Efficient containers (hash maps, vectors, strings)
* Unity (Test): Not the game engine! This is a popular unit testing framework for C.
* Pro Tip: If you want to avoid 'dependency hell,' look for 'Header-only' libraries (like Nuklear or STB). You just include the .h file in your project, and you're good to go.
* libcurl: A versatile library for making HTTP requests.
* libxml2: A library for parsing and creating XML documents.
* libxslt: A library for transforming XML documents using XSLT.
* libpng: A library for reading and writing PNG images.
* libjpeg: A library for reading and writing JPEG images.
* libwebp: A library for reading and writing WebP images.
* libz: A library for reading and writing compressed files.
* libuv: A library for asynchronous I/O.
* libevent: A library for event-driven programming.

**Scientific & Math**

* GSL (GNU Scientific Library): Numerical methods, statistics, linear algebra
* FFTW: Fast Fourier Transforms
* BLAS / LAPACK: High-performance linear algebra

## C Operators
Precedence | Name | Symbol(s) | Associativity |
|-------------|------|------------|---------------|
| 1 | Array subscripting | [] | Left |
| 1 | Function call | () | Left |
| 1 | Structure and union member | . -> | Left |
| 1 | Increment (postfix) | ++ | Left |
| 1 | Decrement (postfix) | -- | Left |
| 2 | Increment (prefix) | ++ | Right |
| 2 | Decrement (prefix) | -- | Right |
| 2 | Address | & | Right |
| 2 | Indirection | * | Right |
| 2 | Unary plus | + | Right |
| 2 | Unary minus | - | Right |
| 2 | Bitwise complement | ~ | Right |
| 2 | Logical negation | ! | Right |
| 2 | Size | sizeof | Right |
| 3 | Cast | () | Right |
| 4 | Multiplicative | * / % | Left |
| 5 | Additive | + - | Left |
| 6 | Bitwise shift | << >> | Left |
| 7 | Relational | < > <= >= | Left |
| 8 | Equality | == != | Left |
| 9 | Bitwise and | & | Left |
| 10 | Bitwise exclusive or | ^ | Left |
| 11 | Bitwise inclusive or | \| | Left |
| 12 | Logical and | && | Left |
| 13 | Logical or | \|\| | Left |
| 14 | Conditional | ?: | Right |
| 15 | Assignment | = \*= /= %= += -= <<= >>= &= ^= \|= | Right |
| 16 | Comma | , | Left
