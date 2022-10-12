import GenericApiType from './GenericApiType';

export default class Class extends GenericApiType {
  number!: number;
  symbol!: string;
  beginSchoolYear!: string;
  endSchoolYear!: string;
  unit!: number;
  classTutor!: number;

  constructor(
    id: number,
    number: number,
    symbol: string,
    startYear: string,
    endYear: string,
    unit: number,
    classTutor: number
  ) {
    super(id);
    this.number = number;
    this.symbol = symbol;
    this.beginSchoolYear = startYear;
    this.endSchoolYear = endYear;
    this.unit = unit;
    this.classTutor = classTutor;
  }
}
