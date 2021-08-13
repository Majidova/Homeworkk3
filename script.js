// 1.
// let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
// What is the length of the array?
// Write a function called myAlphabetLength which console.logs the length of the array
// Within the function also use an if-conditional statement that checks if the number of items within the array are less than 4
let myAlphabet= ['A', 'B', 'C', 'D','E','F', 'G'];

function myAlphabetLength(){
    console.log(myAlphabet.length);
    if(myAlphabet.length<4)  {
     console.log('Length is less than 4');
    }
    else{
    console.log('Length is more than 4');
    }
}
myAlphabetLength();

console.log('////////////////////////////////');
     
//2.
// Declare a function checkFunc that takes a string and a boolean as parameters
// Call the function using 2 arguments
  function checkFunc (parametr1 , parametr2){
      console.log(parametr1 + " " + parametr2);
  }
    checkFunc("Hello",true);
console.log('////////////////////////////////');

// 3.
// Declare and initialize an array called Planets with 5 string values
// console.log each item in the array
// Also console.log the index in each iteration
let Planets=["Earth","Jupiter","Mars","Mercuri","Neptun"];
for(let a=0;a<Planets.length;a++){
    console.log('Parametrs of Array: ' + Planets[a] + " " + '// index of Array: ' + Planets.indexOf(Planets[a]));  
}

console.log('////////////////////////////////');

// 4.
// Declare and initialize an array called
// wowDatatypes
// The array must have 3 different data types (NOT objects)
// Iterate over the array and console.log each item in the array + it’s index and data type in the array
let wowDataTypes=["Hello",27,true];
for(let l=0;l<wowDataTypes.length;l++){
    console.log(wowDataTypes[l] + " " + wowDataTypes.indexOf(wowDataTypes[l]) +" "+ typeof(wowDataTypes[l]));
}

console.log('////////////////////////////////');

// 5.
// console.log each item in this array WITHOUT using a for loop
//    let myArr = [ 1, 2, 'One', true];
let myArr=[1,2,"One",true];
myArr.forEach(element => {
    console.log(element)
})

console.log('////////////////////////////////');

// 6.
// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];
// Loop over the 2 arrays and if there are any common courses, if so console.log them
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
for(let i=0;i<student1Courses.length;i++){
 for(let j=0;j<student1Courses.length;j++){
    if(student1Courses[i]===student2Courses[j]){
        console.log('Comman Course:');
     console.log(student1Courses[i]);
         }
   }
}

console.log('////////////////////////////////');

// 7.
// let food = ['Noodle', 'Pasta', 'Ice-cream'];
// let food = ['Fries', 'Ice-cream', 'Pizza'];
// compare the 2 arrays and find common food if any
let food1 = ['Noodle', 'Pasta', 'Ice-cream'];
let food2 = ['Fries', 'Ice-cream', 'Pizza'];

for(let m=0;m<food1.length;m++){
    for(let n=0;n<food2.length;n++){
           if(food1[m]===food2[n]){
            console.log('Comman Food:')
            console.log(food1[m]);
           }
     }
  }

console.log('////////////////////////////////');

// 8.
// let values1= ['Apple', 1, false];
// let values2 = ['Fries', 2 ,true];
// let values3 = ['Mars', 9, 'Apple'];
// compare the 3 arrays and find any common elements
let values1= ['Apple', 1, false];
let values2 = ['Fries', 2 ,true];
let values3 = ['Mars', 9, 'Apple'];

for(let z=0;z<values1.length;z++){
    for(let t=0;t<values2.length;t++){
        for(let q=0;z<values3.length;q++)
           if(values1[z]===values2[t] || values1[z]===values3[q] || values2[t]===values3[q]){
                               console.log('Comman elements:')
                               console.log(values1[z]);
           }
     }
  }