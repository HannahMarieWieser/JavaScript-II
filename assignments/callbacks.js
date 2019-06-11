

// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
const x =3;
const y =4;
const dupitems = ['Pencil', 'Notebook', 'yo-yo', 'Gum','Notebook','yo-yo'];


  //Given this problem: 
  
  //function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
    //first item given array  arr[0]
    //pass into callback function  cb(arr[0]) and return
 // }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
  //callback function
  // invoke function   name of function(whatsbeing passed in that will be put into orriginal function, function being referenced(the output of the original function?????))



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(arrlength){
  console.log(arrlength);

});




function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(lastitem){
  console.log(lastitem);
});







function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(x, y, function(sumfunc){
  console.log(sumfunc);
});



function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
 
}

multiplyNums(x, y, function(multfunc){
  console.log(multfunc);
});



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  const check = list.includes(item);
  return cb(check);
}

contains(item ='Gum', items, function(incheck){
  console.log(incheck);
});


/* STRETCH PROBLEM 

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newarr = [];
  array.forEach(function(item){
    if(array.includes(item)){
      newarr.push(item)
    }
  });
  return cb(newarr);
}

removeDuplicates(dupitems, function(dupfunc){
  console.log(dupfunc);
});
*/