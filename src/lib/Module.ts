import Librus from './Librus';

export default class Module {
  public librus: Librus;
  constructor(librusInstance: Librus) {
    this.librus = librusInstance;
  }
}
