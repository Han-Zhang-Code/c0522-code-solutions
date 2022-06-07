function ExampleConstructor() {

}
console.log('value of the prototype for ExampleConstructor: ', Object.getPrototypeOf(ExampleConstructor));
console.log('type of the prototype for ExampleConstructor: ', typeof Object.getPrototypeOf(ExampleConstructor));

var newExpConstructor = new ExampleConstructor();
console.log('value for ExampleConstructor: ', newExpConstructor);
var instanceofExp = newExpConstructor instanceof ExampleConstructor;
console.log('the value of variable is indeed an instance of ExampleConstructor: ', instanceofExp);
