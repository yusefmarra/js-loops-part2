var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];


function problemOne(array){
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length-1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(problemOne(students));

function problemTwo(array){
  var newArray = [];
  for (var i = 0; i < array.length; i+=2) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(problemTwo(students));

function problemThree(array) {
  var newArray = [];
  for (var i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(problemThree(students));

function problemFour(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i === 1 || i === 2 || i ===3) {
      newArray.push(array[i]);
      newArray.push(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(problemFour(students));
