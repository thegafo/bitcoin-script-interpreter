
const Interpreter = require('.');

var i = new Interpreter();
var ops = i.ops();
var inputScript = [ops.OP_3];
var outputScript = [ops.OP_1, ops.OP_ADD, ops.OP_4, ops.OP_EQUAL];

console.log(i.verify(inputScript, outputScript));
