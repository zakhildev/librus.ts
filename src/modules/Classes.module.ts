import Class from '../apiTypes/Class';
import Module from '../lib/Module';
import Settings from '../lib/Settings';

export default class Classes extends Module {
  async getClass(id?: number) {
    const url = (id == undefined) ? Settings.apiUrl + 'Classes' : Settings.apiUrl + `Classes/${id}`;
    const res = await this.librus.api.get(url);
    if (this.librus.checkRes(res)) return undefined;
    const data = res.data;
    const newClass = new Class(
      data['Class']['Id'],
      data['Class']['Number'],
      data['Class']['Symbol'],
      data['Class']['BeginSchoolYear'],
      data['Class']['EndFirstSemester'],
      data['Class']['Unit']['Id'],
      data['Class']['ClassTutor']['Id'],
    );
    return newClass;
  }
}
