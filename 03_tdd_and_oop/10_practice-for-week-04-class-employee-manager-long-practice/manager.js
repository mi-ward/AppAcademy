const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager, employees=[]) {
        super(name, salary, title, manager)
        this.employees = employees;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary()) * multiplier;
    }

    _totalSubSalary() {
        return this.employees.reduce((acc, cur) => {
            if (cur instanceof Manager) {
                return acc += cur.salary + cur._totalSubSalary()
            } else {
                return acc += cur.salary;
            }
        }, 0)
    }
}

module.exports = Manager;
