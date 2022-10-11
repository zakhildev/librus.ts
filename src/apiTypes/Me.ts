import GenericApiType from "./GenericApiType";

export default class Me extends GenericApiType {
  userId!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  login!: string;
  isPremium!: boolean;
  isPremiumDemo!: boolean;
  expiredPremiumDate!: number;
  class!: number

  constructor(
    id: number,
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    login: string,
    isPremium: boolean,
    isPremiumDemo: boolean,
    expiredPremiumDate: number,
    _class: number
  ) {
    super(id);
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.login = login;
    this.isPremium = isPremium;
    this.isPremiumDemo = isPremiumDemo;
    this.expiredPremiumDate = expiredPremiumDate;
    this.class = _class;
  }
}
