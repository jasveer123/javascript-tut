console.log('this is tut 31')


class student {


    constructor(name1, age2, marks2) {
        this.name = name1;
        this.age = age2;
        this.marks = marks2;
    }

    slogen() {
        return (`this is my slogem ${this.name}`)
    }
    earnMoney() {

        return (`this is earned money ${this.marks}-${this.age}`)
    }
    static my(a, b) {
        return a * b;
    }


}

class student2 extends student {
    constructor(name1, age2, marks2, language, love) {
        super(name1, age2, marks2);
        this.lang = language;
        this.oop = love

    }
    slogen() {
        return (`this is my slogem ${this.name}`)
    }
    earnMoney() {

        return (`this is earned money ${this.marks}-${this.age}`)
    }
    static my(a, b) {
        return a + b;
    }

}

obj = new student('jasveer', 21, 90)
obj2 = new student2('navdeep', 22, 45, 'python', 'nature')
console.log(obj2)
//console.log(obj2.slogen());
//console.log(obj2.earnMoney())
//console.log(student2.my(4,5))
