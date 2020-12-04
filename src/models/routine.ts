import Exercise from "./exercise";

class Routine {
  constructor(
    public monday: Exercise[],
    public tuesday: Exercise[],
    public wednesday: Exercise[],
    public thursday: Exercise[],
    public friday: Exercise[],
    public saturday: Exercise[],
    public sunday: Exercise[]
  ) {}

  getDay(day: number): Exercise[] {
    switch (day) {
      case 1:
        return this.monday;
      case 2:
        return this.tuesday;
      case 3:
        return this.wednesday;
      case 4:
        return this.thursday;
      case 5:
        return this.friday;
      case 6:
        return this.saturday;
      case 7:
        return this.sunday;
      default:
        throw new Error("That's not a day");
    }
  }

  setDay(day: number, work: Exercise[]): void {
    switch (day) {
      case 1:
        this.monday = work;
        break;
      case 2:
        this.tuesday = work;
        break;
      case 3:
        this.wednesday = work;
        break;
      case 4:
        this.thursday = work;
        break;
      case 5:
        this.friday = work;
        break;
      case 6:
        this.saturday = work;
        break;
      case 7:
        this.sunday = work;
        break;
      default:
        throw new Error("That's not a day");
    }
  }

  printToday(): string[] {
    const now = new Date();
    const day = now.getDay();
    const today = this.getDay(day);
    if (today.length > 0) {
      var res = new Array(today.length);
      for (var i = 0; i < today.length; i++) {
        res[i] = today[i].print();
      }
    } else {
      var res = new Array(1);
      res[0] = "Hoy descansas";
    }

    return res;
  }
}

export default Routine;
