import User from "./User";

export default class Student extends User {
  class!: number;
  unit!: number;
  registeredNumber!: number;

  constructor(id: number, accountId: string, firstName: string, lastName: string, isEmployee: boolean, _class: number, unit: number, registeredNumber: number) {
    super(id, accountId, firstName, lastName, isEmployee)
    this.class = _class;
    this.unit = unit;
    this.registeredNumber = registeredNumber;
  }
}