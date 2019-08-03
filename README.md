# bitcoin-script-interpreter
JavaScript implementation wrapper of a Bitcoin Script interpreter


## Installation

```bash
npm i bitcoin-script-interpreter
```

## Usage

```javascript

const Interpreter = require('bitcoin-interpreter');
const interpreter = new Interpreter();
const ops = interpreter.ops();

var inputScript = [ops.OP_3];
var outputScript = [ops.OP_1, ops.OP_ADD, ops.OP_4, ops.OP_EQUAL];

console.log(interpreter.verify(inputScript, outputScript));
// true

```
