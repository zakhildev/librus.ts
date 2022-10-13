import Module from '../lib/Module';
import Settings from '../lib/Settings';

export default class Units extends Module {
  async getUnits() {
    const res = await this.librus.api.get(Settings.apiUrl + 'Units');

    switch (res.status) {
      case 404:
        return undefined;
      case 401:
        await this.librus.login();
        return await this.getUnits();
      default:
        break;
    }

    const data = res.data;
    //  TODO: handle new Unit list creation
  }

  async getUnit(id: number) {
    const res = await this.librus.api.get(Settings.apiUrl + `Units/${id}`);

    switch (res.status) {
      case 404:
        return undefined;
      case 401:
        await this.librus.login();
        return await this.getUnit(id);
      default:
        break;
    }

    const data = res.data;
    //  TODO: handle new Unit object creation
  }
}
