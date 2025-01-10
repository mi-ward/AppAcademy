const Employee = require('./employee');

johnWick = new Employee("John Wick", "Dog Lover")

setTimeout(johnWick.sayName.bind(johnWick), 2000);

setTimeout(johnWick.sayOccupation.bind(johnWick), 3000);
