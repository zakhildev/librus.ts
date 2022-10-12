import Module from "../lib/Module";
import Settings from "../lib/Settings";

export default class Units extends Module {
  async getUnits() {
    const res = await this.librus.api.get(Settings.apiUrl + 'Units');
    if (this.librus.checkRes(res)) return undefined;
    const data = res.data;
    //  TODO: handle new Unit list creation
  }

  async getUnit(id: number) {
    const res = await this.librus.api.get(Settings.apiUrl + `Units/${id}`);
    if (this.librus.checkRes(res)) return undefined;
    const data = res.data;
    //  TODO: handle new Unit object creation
  }
}