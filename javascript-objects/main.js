var student = {
  firstName: 'Yuhan',
  lastName: 'Zhang',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.liveInIrvine = false;
student.previousOccupation = 'student';
console.log('value of student live in Irvine: ', student.liveInIrvine);
console.log('value of student previous Occupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Lexus',
  model: 'RX 350',
  year: 2018
};

vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log('value of vehicle color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'dengdeng',
  type: 'orange cat'
};
delete pet.name;
delete pet.type;
console.log(pet);
