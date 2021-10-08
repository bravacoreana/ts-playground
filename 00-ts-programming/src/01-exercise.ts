/*

// # 자동으로 타입을 추론하는 타입 시스템 (type system)

let a = 1 + 2; // a:number
let b = a + 3; // b:number
let c = {
  apple: a,
  banana: b,
};

let c: {
  apple: number;
  banana: number;
};

let d = c.apple * 4; // number

// # unknown

let x: unknown = 30; // x: unknown
let y = x === 123; // y: boolean
let z = x + 10; // z: any
if (typeof x === "number") {
  let i = x + 10; // i: number
}


*/
