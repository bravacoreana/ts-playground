// 1. For each of these values, what type will TypeScript infer?

// let a = 1042 // a: number
// let b = 'apples and pineapples' // b: string
// const c = 'pineapples' // c: pineapples
// let d = [true, true, false] // d: boolean[]
// let e = { type: 'ficus' } // e: {type:string}
// let f = [1, false] // f: (number | boolean)[]
// const g = [3] // g: number[]
// let h = null // h: any

//-----

// 2. Why does each of these throw the error it does?

// (a)
// let i: 3 = 3
// i = 4 // Type '4' is not assignable to type '3'.ts(2322)

/*
i's type is type literal 3. 4's type is type literal 4.
*/

// (b)
// let j = [1, 2, 3]
// j.push(4)
// j.push('5')

/*
Since there isn't any type in j, ts infer j's type as `number[]`.
The type of '5' is the type literal '5' which is not assignable to number.
*/

// (c)
// let k: never = 4

/*
never is the bottom type. so it's assignable to every other type but no type is assignable to never.
*/

// (d)
// let l: unknown = 4
// let m = l * 2

/*
unknown represent a value that could be anything at runtime. To prove to TypeScript that what
you're doing is safe, you have to first prove to TypeScript that a value of type unknown actually
has a more specific subtype. You do that by refining the value using typeof, instanceof, or
another type query or type guard.
 */
