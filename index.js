var bitcoin = require('bitcoinjs-lib');
var bitcore = require('bitcore-lib');

class Interpreter {
  ops() {
    return bitcoin.opcodes;
  }
  compile(input) {
    return bitcoin.script.compile(input).toString('hex');
  }
  verify(input, output) {
    var inputScript = bitcore.Script(this.compile(input));
    var outputScript = bitcore.Script(this.compile(output));
    return bitcore.Script.Interpreter().verify(inputScript, outputScript);
  }
}

module.exports = Interpreter;
