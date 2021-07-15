class Hooman {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    } // constructor: 클래스가 시작할 때마다 호출 됨
}
const Nenya = new Hooman("nenya", 1, "female");
const person = {
    name: "bilbo",
    age: 1,
    gender: "female"
};
const sayHi = (person) => {
    console.log(`hi!, ${person.name}. you are ${person.age} and ${person.gender}`);
};
const sayBye = (person) => {
    // console.log(`hi!, ${person.name}. you are ${person.age} and ${person.gender}`);
    // error at age: age is private and only assignable within class 'Hooman'
};
sayHi(person);
sayBye(Nenya);
//# sourceMappingURL=index.js.map