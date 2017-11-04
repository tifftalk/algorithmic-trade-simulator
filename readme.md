# Simple Algorithmic Trading Strategy Simulator

This is a (very) quickly hacked together simulator for educational purposes only.

It has limited functionality at this point, but I'll be extending it as time allows.

## Class Overview

### Simulator 
The "outermost" entity the runs a simulation based on a set of a starting Bank, a list of Points, and a list of Strategies.

### Point
A timestamp + asset price
 
### Frame
An array of Points with some built in helpers, representing a discrete sampling of pricing points over time.

### Pattern
Patterns are created with a `detector` callback that returns true or false if the desired pattern is detected in a provided frame. For example, a simple example detector used in `simulator-test` is a falling local maximum (not a recommended trading strategy).

### Stategy
An association between a Pattern and action callback that will act on the Bank when a Pattern is detected in a Frame.

### Bank
An abstraction the includes cash and asset holdings.

## Development
You can run the tests automatically
```npm test -- --watch```
