import Librus from './Librus';

export default class Module {
  public librus;
  constructor(librusInstance: Librus) {
    this.librus = librusInstance;
  }
}
