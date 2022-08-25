class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} Vypolniaet ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} Imeet ZP ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Process sozdania programm'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Process testirovania'
    }
}

const dev = new Developer('Andrew', 1000000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Maxim', 90000)
console.log(tester.getPaid())
console.log(tester.work())
