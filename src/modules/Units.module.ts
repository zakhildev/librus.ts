import Module from '../lib/Module';
import Settings from '../lib/Settings';
import Unit from '../apiTypes/Unit';

export default class Units extends Module {
  async getUnits(): Promise<Unit[]> {
    const res = await this.librus.api.get(Settings.apiUrl + 'Units');

    switch (res.status) {
      case 404:
        return [];
      case 401:
        await this.librus.login();
        return await this.getUnits();
      default:
        break;
    }

    const data = res.data;
    const units = data['Units'] as [];
    const newUnits: Unit[] = [];
    units.forEach((unit) => {
      const newUnit = new Unit(
        unit['Id'],
        unit['Name'],
        unit['ShortName'],
        unit['Type'],
        unit['BehaviourType'],
        unit['GradeSettings'],
        unit['LessonSettings'],
        unit['BehaviourGradesSettings']
      );
      newUnits.push(newUnit);
    });
    return newUnits;
  }

  async getUnit(id: number): Promise<Unit | undefined> {
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
    const unit = data['Unit'];
    const newUnit = new Unit(
      unit['Id'],
      unit['Name'],
      unit['ShortName'],
      unit['Type'],
      unit['BehaviourType'],
      unit['GradeSettings'],
      unit['LessonSettings'],
      unit['BehaviourGradesSettings']
    );
    return newUnit;
  }
}
