/**
 * Given a positive integer, output its complement number. 
 * The complement strategy is to flip the bits of its binary representation.

Example 1:

Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you
 */

let num = 5;
let comp = num
    .toString(2)
    .replace(/1/g, "x") //convert '1' to temp char('x')
    .replace(/0/g, "1") //convert '0' to '1'
    .replace(/x/g, "0"); //finally convert temp char to '0'
console.log(comp);

let c = parseInt(comp, 2);
console.log(c);

var findComplement = function (num) {
    let complementBinary = num
        .toString(2)
        .replace(/1/g, "x") //convert '1' to temp char('x')
        .replace(/0/g, "1") //convert '0' to '1'
        .replace(/x/g, "0"); //finally convert temp char to '0'

    let complementDecimal = parseInt(complementBinary, 2);
    return complementDecimal;
};
