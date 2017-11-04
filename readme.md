# Simple Algorithmic Trading Strategy Simulator

This is a (very) quickly hacked together simulator for educational purposes only.

It has limited functionality at this point, but I'll be extending it as time allows.

## Entity Overview

### Simulator 
The outermost entity the runs a simulation based on a starting `Bank`, a list of `Points`, and a list of `Strategies`.

### Point
Indicates the asset price at a point in time.
 
### Frame
An array of `Points` with some built in helpers, representing a discrete sampling of pricing points over time.

### Pattern
Patterns are created with a `detector` callback that returns true or false if the pattern is detected in a provided frame. A simple example detector used in `simulator-test` is a "falling local maximum" (not a recommended trading strategy).

### Stategy
An association between a `Pattern` and action callback that will act on the `Bank` when a `Pattern` is detected in a Frame.

### Bank
An abstraction the includes cash and asset holdings.

## Development

1. `npm install`
2. Get the tests running automatically with 
```npm test -- --watch```
3. Create your own sample lists of points in JSON files.
4. Create and test your our own strategies.