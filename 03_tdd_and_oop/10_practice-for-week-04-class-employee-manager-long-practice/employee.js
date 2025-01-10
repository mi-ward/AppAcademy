class Employee {
    constructor(name, salary, title, manager=null) {
    this.name = name;
    this.salary = salary;
    this.title = title;
    if (manager != null) {
        manager.addEmployee(this)
    }
    this.manager = manager;
    }

    calculateBonus(multiplier) {return this.salary * multiplier}
}

module.exports = Employee;

const raph = new Employee('Raphael', 90000, 'Ninja');
const donny = new Employee('Donatello', 85000, 'Grasshopper');
