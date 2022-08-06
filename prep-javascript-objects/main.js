var person = {
  firstName: 'Ray',
  lastName: 'Le',
  hobby: 'Juggling'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);
person.job = 'Walmart Greeter';
console.log('The person\'s current job is:', person.job);
person.previousJob = 'Arby\'s Regional Manager';
console.log('The person\'s previous job is:', person.previousJob);
console.log(person);
