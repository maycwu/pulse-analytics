  /*
  Time Complexity - Linear O(n) 
  - As the input grows, we need to iterate n times to check for unique values.
  Space Complexity - Linear O(n)
  - As the input grows, so does the result object. 

  APPROACH:
  1. Initialize an array that will store all 'seen' values.
  2. Initialize a result object, this will be returned at the end.
  3. Iterate each object in the data array:
    - We check if the key in the current object is already in our 'seen' array
    - If key is in our 'seen' array:
      - We need to replace the previous object with the current object because there can only be one unique key
    - Otherwise if it's NOT in our 'seen' array, we push the key to the array to make sure we marked it as seen and then add current obj to our result object. 
  4. Since we want to return an array of objects, we can use Javascript method 'Object.values()' to do that.
  5. Return the result object. 
  */

export default function uniqueBy1(data, key) {

  let seen = [];
  let result = {};

  for(let obj of data){
    if(seen.includes(obj[key])){
      result[obj[key]] = obj;
    } else {
      seen.push(obj[key]);
      result[obj[key]] = obj;
    }
  }
 return Object.values(result);
}