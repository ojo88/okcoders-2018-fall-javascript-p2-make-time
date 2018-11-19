
var mapPractice = [1,2,3]
function callback(e){
  return e + 1 
}
var newArray = mapPractice.map(callback)
console.log(newArray)

var mapPractice = ['joseph', 'trinity', 'ibaka', 'pascow']
function callback(e){
  return "Hello " + e 
}
var newArray = mapPractice.map(callback)
console.log(newArray)

var mapPractice = [{name: 'joseph'}, {name: 'trinity'}, {name: 'ibaka'}, {name: 'pascow'}]
function callback(e){
  return "Hello " + e.name 
}
var newArray = mapPractice.map(callback)
console.log(newArray)

var filterPractice = [{name: 'joseph'}, {name: 'trinity'}, {name: 'ibaka'}, {name: 'pascow'}]
function callback(e){
  return e.name != 'joseph' 
}
var newArray = filterPractice.filter(callback)
console.log(newArray)

//filter to only people that are 21 or older in a list of people
var filterPractice = [{name: 'joseph', age: 30}, {name: 'trinity', age: 25}, {name: 'ibaka', age: 5}, {name: 'pascow', age: 2}]
function callback(e){
  return e.age >=  21
}
var newArray = filterPractice.filter(callback)
console.log(newArray)

// filter to only even numbers in a list of numbers
var filterPractice = [1,4,6,24,54,87,95,102,101,111,33,453,865,878,912]
function callback(e){
  return (e % 2) === 0 
}
var newArray = filterPractice.filter(callback)
console.log(newArray)

// find the sum of a list of numbers
var reducePractice = [1,4,6,24,54,87,95,102,101,111,33,453,865,878,912]
function callback(acc, e){
  return acc + e
}
var newArray = reducePractice.reduce(callback)
console.log(newArray)

//find the sum of the age of all people over 21 in a list of people
var ultimatePractice = [{name: 'joseph', age: 30}, {name: 'trinity', age: 25}, {name: 'ibaka', age: 5}, {name: 'pascow', age: 2},
                        {name: 'matt', age: 30}, {name: 'joshua', age: 29}, {name: 'kymani', age: 0}, {name: 'andi', age: 26}]
var ageLimit = (element) => element.age >= 21;
var ageMap = (element) => element.age;
var ageSum = (acc, element) => acc + element;

var resultArray = ultimatePractice.filter(ageLimit).map(ageMap).reduce(ageSum);
console.log(resultArray)
                      