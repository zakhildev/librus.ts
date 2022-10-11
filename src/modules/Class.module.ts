import Module from '../lib/Module';
import Settings from '../lib/Settings';

export default class Class extends Module {
  public async getMe() {
    const res = await this.librus.api.get(
      Settings.apiUrl + 'Me'
    );
  }
}