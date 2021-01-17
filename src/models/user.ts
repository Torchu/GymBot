import Routine from "./routine";

class User {
  name: string;
  routine: Routine;

  constructor(
    name: string,
    routine: Routine = new Routine([], [], [], [], [], [], [])
  ) {
    this.name = name;
    this.routine = routine;
  }
}
