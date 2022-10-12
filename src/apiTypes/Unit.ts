import GradeSettings from '../interfaces/GradeSettings';
import LessonSettings from '../interfaces/LessonSettings';
import BehaviourGradesSettings from '../interfaces/BehaviourGradesSettings';
import GenericApiType from './GenericApiType';

export default class Unit extends GenericApiType {
  name: string;
  shortName: string;
  type: string;
  behaviourType: number;
  gradeSettings: GradeSettings;
  lessonSettings: LessonSettings;
  behaviourPointsSettings: BehaviourGradesSettings;
  lessonRange?: Record<string, string | number>[];

  constructor(
    id: number,
    name: string,
    shortName: string,
    type: string,
    behaviourType: number,
    gradeSettings: GradeSettings,
    lessonsSettings: LessonSettings,
    behavPointSettings: BehaviourGradesSettings,
    lessonRange?: Record<string, string | number>[]
  ) {
    super(id);
    this.name = name;
    this.shortName = shortName;
    this.type = type;
    this.behaviourType = behaviourType;
    this.gradeSettings = gradeSettings;
    this.lessonSettings = lessonsSettings;
    this.behaviourPointsSettings = behavPointSettings;
    this.lessonRange = lessonRange;
  }
}
