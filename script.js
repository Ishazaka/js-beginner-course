
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

// Date Methods

var a = new Date();
console.log(a);
document.write(a);
document.write('<br>')

// toDateString Method
 
 var a = new Date();
console.log(a.toDateString());
document.write(a.toDateString());
document.write('<br>')


// getDate method

var a = new Date();
console.log(a.getDate());
document.write(a.getDate() );
document.write('<br>')

var a = new Date();
console.log(a.getFullYear());
document.write(a.getFullYear() );
document.write('<br>')

var a = new Date();
console.log(a.getMonth());
document.write(a.getMonth());
document.write('<br>')


var a = new Date();
console.log(a.getDay());
document.write(a.getDay());
document.write('<br>')

//  get date use in real life

var a = new Date();
console.log(a.getDate() +'/'+ a.getMonth()+'/' +a.getFullYear());
document.write(a.getDate() +'/'+ a.getMonth()+'/' +a.getFullYear());
document.write('<br>')

//get  times

var a = new Date();
console.log(a.getHours());
document.write(a.getMilliseconds());
document.write('<br>')


var a = new Date();
console.log(a.getSeconds());
document.write(a.getMinutes());
document.write('<br>')


// Get Past dates and times

var a = new Date('january 5 2018');
console.log(a.getDay());
document.write(a.getDate());
document.write('<br>')


var a = new Date('january 5 2018');
console.log(a.getSeconds());
document.write(a.getHours());
document.write('<br>')

// Set times (its to set time of future )

var a = new Date();
a.setDate(20);
console.log(a);
document.write(a);
document.write('<br>')


var a = new Date();
a.setYear(2025);
console.log(a);
document.write(a);


var a = new Date();
a.setHours(20);
console.log(a);


// Dom Methods


