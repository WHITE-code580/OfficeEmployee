class OfficeEmployee {
    constructor(name) {
        this._name = name;
        this._transitioningToHigherPositionDays = 27;
    }
    get name() {
        return this._name;
    }
    get transitioningToHigherPositionDays() {
        return this._transitioningToHigherPositionDays;
    }
    acceptToHigherPositionDays(daysEarlier) {
        this._transitioningToHigherPositionDays -= daysEarlier;
    }
    static generateName() {
        const names = ['John', 'Jane', 'Doe', 'Smith', 'Emily'];
        const randomNumber = Math.floor(Math.random() * names.length);
        return names[randomNumber];
    }
}

class ClericalOfficer extends OfficeEmployee {
    constructor(name, departments) {
        super(name);
        this._departments = departments;
    }
    get departments() {
        return this._departments;
    }
    addDepartments(newDepartments) {
        this._departments.push(...newDepartments);
    }
}

const clericalOfficer1 = new ClericalOfficer(OfficeEmployee.generateName(), ['HR', 'Finance']);
clericalOfficer1.acceptToHigherPositionDays(7);
console.log(`Clerical Officer: ${clericalOfficer1.name}`);
console.log(`Transitioning to Higher Position Days: ${clericalOfficer1.transitioningToHigherPositionDays}`);
console.log(`Departments: ${clericalOfficer1.departments.join(', ')}`);


// Output example:
// Clerical Officer: Jane
// Transitioning to Higher Position Days: 20
// Departments: HR, Finance

const clericalOfficer2 = new ClericalOfficer(OfficeEmployee.generateName(), ['IT', 'Accounting']);
clericalOfficer2.acceptToHigherPositionDays(10);
console.log(`Clerical Officer: ${clericalOfficer2.name}`);
console.log(`Transitioning to Higher Position Days: ${clericalOfficer2.transitioningToHigherPositionDays}`);
console.log(`Departments: ${clericalOfficer2.departments.join(', ')}`);

// Output example:
// Clerical Officer: John
// Transitioning to Higher Position Days: 17
// Departments: IT, Accounting

const clericalOfficer3 = new ClericalOfficer(OfficeEmployee.generateName(), ['Reception', 'Customer Service']);
clericalOfficer3.acceptToHigherPositionDays(5);
console.log(`Clerical Officer: ${clericalOfficer3.name}`);
console.log(`Transitioning to Higher Position Days: ${clericalOfficer3.transitioningToHigherPositionDays}`);
console.log(`Departments: ${clericalOfficer3.departments.join(', ')}`);

// Output example:
// Clerical Officer: Emily
// Transitioning to Higher Position Days: 22
// Departments: Reception, Customer Service





