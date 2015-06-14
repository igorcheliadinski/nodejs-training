var Currency = require('./lib/currency');
var dollar = 0.91;

var currency = new Currency(dollar);

console.log('50 Canadian dollars equals this amount of US dollars: ');
console.log(currency.canadianToUS(50));
console.log('30 US dollars equals this amount of Canadian dollars: ');
console.log(currency.USToCanadian(30));