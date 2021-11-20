

// Number Methods

//Number (converts the value into numnber)

var a = '99';
var b = Number(a);
console.log(b);

var a = 'hello';
var b = Number(a);
console.log(b);

var a = '5673';
var b = Number(a);
console.log(b);


// parseInt (it gives you value without decimals)

var a = '99.56';
var b = parseInt(a);
console.log(b);

var a = 'hello';
var b = parseInt(a);
console.log(b);


// parseFloat (it gives the value with decimals)

var a = 59;
var b = parseFloat(a);
console.log(b);

var a = 122.56;
var b = parseFloat(a);
console.log(b);


var a = 'he was 50';
var b = parseFloat(a);
console.log(b);

// isFinite()

var a = 129.56;
var b = Number.isFinite(a);
console.log(b);


var a = '129.56';
var b = Number.isFinite(a);
console.log(b);


// isInteger()

var a = 129.56;
var b = Number.isInteger(a);
console.log(b);


var a = 123;
var b = Number.isInteger(a);
console.log(b);


var a = '129.56';
var b = Number.isInteger(a);
console.log(b);

 // toFixed(it fixes the decimals)(it roundsabout the decimal)

var a = 129.5573;
var b = a.toFixed(2);
console.log(b);


var a = 12.51367;
var b = a.toFixed(3);
console.log(b);

// toPrecision (it will give you total number)(it also roundsabout)

var a = 31.5573;
var b = a.toPrecision(3);
console.log(b);

var a = 31.5573;
var b = a.toPrecision(2);
console.log(b);



