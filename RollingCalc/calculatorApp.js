var calculatorFactory = require('./calculator');
var calculator = calculatorFactory();

calculator.add(100);
calculator.sub(50);
calculator.mul(10);
calculator.div(2);

console.log(calculator.showResult());
