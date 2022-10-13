import Class from '../apiTypes/Class';
import Module from '../lib/Module';
import Settings from '../lib/Settings';

export default class Classes extends Module {
  async getClass(id?: number): Promise<Class | undefined> {
    const url =
      id == undefined
        ? Settings.apiUrl + 'Classes'
        : Settings.apiUrl + `Classes/${id}`;
    const res = await this.librus.api.get(url);

    switch (res.status) {
      case 404:
        return undefined;
      case 401:
        await this.librus.login();
        return id != undefined
          ? await this.getClass(id)
          : await this.getClass();
      default:
        break;
    }

    const data = res.data;
    const newClass = new Class(
      data['Class']['Id'],
      data['Class']['Number'],
      data['Class']['Symbol'],
      data['Class']['BeginSchoolYear'],
      data['Class']['EndFirstSemester'],
      data['Class']['Unit']['Id'],
      data['Class']['ClassTutor']['Id']
    );
    return newClass;
  }
}
