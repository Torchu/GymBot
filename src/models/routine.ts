import DayWork from "./daywork";
import Exercise from "./exercise";
class Routine {
  private _routine: DayWork[];
  constructor(_routine: DayWork[]) {
    let controller: number[] = [0, 0, 0, 0, 0, 0, 0];
    for (var daywork of _routine) {
      controller[daywork.day] += 1;
      if (controller[daywork.day] > 1) {
        throw new Error(`You can't work twice a day`);
      }
    }
    this._routine = _routine;
  }

  get routine(): DayWork[] {
    return this._routine;
  }

  set routine(newRoutine: DayWork[]) {
    let controller: number[] = [0, 0, 0, 0, 0, 0, 0];
    for (var daywork of newRoutine) {
      controller[daywork.day] += 1;
      if (controller[daywork.day] > 1) {
        throw new Error(`You can't work twice a day`);
      }
    }
    this._routine = newRoutine;
  }

  modifyRoutine(day: number, workout: Exercise[]): void {
    const index = this.searchDay(day);
    if (index == -1) {
      throw new Error("You don't workout that day");
    }
    this._routine[index].exercises = workout;
  }

  searchDay(day: number): number {
    for (var i = 0; i < this._routine.length; i++) {
      if (this._routine[i].day == day) {
        return i;
      }
    }
    return -1;
  }

  addDay(dayWork: DayWork): void {
    if (this.searchDay(dayWork.day) != -1) {
      throw new Error("You already train that day");
    }
    this._routine.push(dayWork);
  }
}
export default Routine;
