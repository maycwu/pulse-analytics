/*
  Time Complexity - O(n^2) 
  - As the input grows, we need to iterate through each object within the data array and then iterate through each key value pair to search for the 'searchTerm' string
  Space Complexity - Linear O(n)
  - As the input grows, so does the result object. 

  APPROACH:
  1. Use JavaScript filter method to only return objects that match the conditions
  2. Iterate through each object and within each object, we iterate through each given key and its value
  3. We check if the 'searchTerm' is in the value. If it is, then we return the current object. 
  5. At the end, we return all the objects that met the criteria. 

  Edge cases: 
    - Since the values of each key could be in lowercase and uppercase, we can convert the values to lowercase so when we search, it is not case sensitive
  */

export default function filterBy(data, searchTerm, keys) {
  return data.filter((obj) => {
    for (let key of keys) {
      let strToBeSearched = obj[key].toLowerCase();
      if (strToBeSearched.includes(searchTerm.toLowerCase())) {
        return obj;
      }
    }
  });
}
