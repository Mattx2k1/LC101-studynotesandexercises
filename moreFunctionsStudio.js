//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

/*let newArray = [];

 function arraySort(nums) {
   for (let i = 0; i < nums; i++) {
     if (nums[i] == Math.min(nums1)){
       newArray = nums.charAT(i);
       return ("lowest value");
     }
else if (typeof nums == "string")
{
  nums.sort();
}

   }
}
*/





//Sample arrays for testing:
// let nums1 = [5, 10, 2, 42];
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function sortArray(num){
    for(i = 0; i < num.length; i++){
        if (Math.min(num[i])){
            console.log(num[i] + " is the lowest value");
        }
    }
}
// This function works by starting with the first index of the array and then cycling through comparing to the next item in order by index. It replaces with the lowest number 

function sortArray2(num) {
   let newArray =[];
   let smallestNum2 = num[0];
   //let smallestNum = Math.min(... num);
   for (let i = 1; i < num.length; i++) {
     if (num[i] < smallestNum2) {
      smallestNum2 = num[i];
     } 
   }
   //return newArray;
   return smallestNum2;
}

//sortArray(nums1);

console.log(sortArray2(nums2));


// Call the function


//arraySort(nums1);

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

//console.log(/* your code here */);

//let minValue = Math.min(...nums1);
//console.log(minValue);
