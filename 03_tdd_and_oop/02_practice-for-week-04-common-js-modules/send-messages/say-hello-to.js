const sayMessage = require('../messages/say-message');
//const sayMessage = message.sayMessage

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

module.exports = sayHelloTo;
