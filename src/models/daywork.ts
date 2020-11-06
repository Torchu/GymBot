import exercise from "./exercise";
class DayWork {
  private readonly _day: number;
  constructor(_day: number, public exercises: exercise[]) {
    if (_day > 6) {
      throw new Error(`Invalid day of the week`);
    }
    this._day = _day;
  }

  get day(): number {
    return this._day;
  }
}
export default DayWork;
