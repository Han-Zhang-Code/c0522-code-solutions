var arrayBook = [{
  isbn: '327-356-81',
  title: 'book of han',
  author: 'Yuhan Zhang'
}, {
  isbn: '456-789-123',
  title: 'book of random',
  author: 'Random Author'
}, {
  isbn: '657-346-852',
  title: 'book of fire',
  author: 'Fire Author'
}];
console.log('array of book: ', arrayBook);
console.log('type of arrayBook: ', typeof arrayBook);

var jsonBook = JSON.stringify(arrayBook);
console.log('jsonBook: ', jsonBook);
console.log('type of jsonBook: ', typeof jsonBook);

var jsonString = '{ "number": 3273456, "name:": "Han" }';
console.log('jsonString: ', jsonString);
console.log('type of jsonString: ', typeof jsonString);

var stringToJson = JSON.parse(jsonString);
console.log('stringToJson: ', stringToJson);
console.log('type of stringToJson: ', typeof stringToJson);

var jsonToString = JSON.stringify(stringToJson);
console.log('jsonToString: ', jsonToString);
console.log('type of jsonToString: ', typeof jsonToString);
