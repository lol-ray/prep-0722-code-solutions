function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log('greeting', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addMultiply = addAndMultiplyBy5(10, 5);
console.log('addMultiply', addMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyDivide = multiplyAndDivideBy5(35, 10);
console.log('multiplyDivide', multiplyDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwo = subtractTwoNumbers(22, 7);
console.log('subtractTwo', subtractTwo);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}

var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName', fullName);

function cube(number) {
  return number * number * number;
}

var cubed = cube(5);
console.log('cubed', cubed);
