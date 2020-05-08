/**
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 */
let string = "aatif";
let findScreen = (s) => {

     let map = new Map();
     for (let i = 0; i < s.length; i++) {
         let freq = map.get(s[i]) || 0;
         map.set(s[i], freq + 1);
     }
     for (let i = 0; i < s.length; i++) {
         if (map.get(s[i]) === 1) {
             return i;
         }
     }

     return -1;
};

console.log(findScreen(string));
