//submit homework to the repository that you created for git lecture 



// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

function exponentComputing (number, exponent) {
    if ( exponent == 1) {
        return number;
    } else {
        return number * exponentComputing(number, exponent - 1);
    }
}

console.log(exponentComputing(8, 2));

// 2. Write functions min and max that will find min and max number in array using apply

function findMaxAndMinNumber (arr) {
    let maxNumber = Math.max.apply(null, arr);
    let minNumber = Math.min.apply(null, arr);
    return (
        [maxNumber, minNumber]
        );
}

console.log(findMaxAndMinNumber([23, 24, 25]));

// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, brand and color. 
//    Please make examples for three different cars

function displayCarDetails (ownerName) {
    return ( `registration number: ${this.registrationNumber}, 
              brand: ${this.brand},
              color: ${this.color}`);
}


const mike = {
    registrationNumber: 044503,
    brand: 'Volvo',
    color: 'gray'
};

const tom = {
    registrationNumber: 5443662,
    brand: 'Renault',
    color: 'white'
};

const brad = {
    registrationNumber: 1126643,
    brand: 'Ford',
    color: 'red'
};

console.log(displayCarDetails.call(mike));
console.log(displayCarDetails.call(tom));
console.log(displayCarDetails.call(brad));

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 
 

function greet (person) {
  if (person.name ==  'amy' ) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}

const amy = {name: 'amy'}

console.log(greet(amy));

// Можливо, я не правий, але функція відпрацьовує правильно

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)

// варіант 1

for (var i = 0; i < 4; i++) {
  setTimeout(() => 0, console.log(i))
}

// варіант 2

for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
  }
  