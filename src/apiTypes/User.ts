import GenericApiType from './GenericApiType';

export default class User extends GenericApiType {
  accountId: string;
  firstName: string;
  lastName: string;
  isEmployee: boolean;

  constructor(
    id: number,
    accountId: string,
    firstName: string,
    lastName: string,
    isEmployee: boolean
  ) {
    super(id);
    this.accountId = accountId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isEmployee = isEmployee;
  }
}
