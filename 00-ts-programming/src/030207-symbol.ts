/*

let a = Symbol("a"); // a: symbol
let b: symbol = Symbol("b"); //b: symbol
var c = a === b; // c: boolean
// let d = a + "x"; // error ts(2469): The '+' operator cannot be applied to type 'symbol'.

let z = 27; // z: number
const y = 27; // y: 27;

const e = Symbol("e"); // const e: typeof e
const f: unique symbol = Symbol("f"); //const f: typeof f
// let g: unique symbol = Symbol("g"); // error ts(1332): A variable whose type is a 'unique symbol' type must be 'const'.

let h = e === e; // h: boolean
// let i = e === f; // error ts(2367): This condition will always return 'false' since the types 'typeof e' and 'typeof f' have no overlap.


*/
