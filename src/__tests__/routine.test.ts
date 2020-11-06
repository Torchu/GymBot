import DayWork from "../models/daywork";
import Routine from "../models/routine";
import Exercise from "../models/exercise";

const routine = new Routine([
  new DayWork(1, [
    new Exercise("Press Banca", 40),
    new Exercise("Peso Muerto", 70),
  ]),
  new DayWork(2, [
    new Exercise("Press Banca", 40),
    new Exercise("Peso Muerto", 70),
  ]),
]);

describe("routine model test", () => {
  it("should throw an error while creating an instance", () => {
    expect(() => {
      const failRoutine = new Routine([
        new DayWork(1, [
          new Exercise("Press Banca", 40),
          new Exercise("Peso Muerto", 70),
        ]),
        new DayWork(1, [
          new Exercise("Press Banca", 40),
          new Exercise("Peso Muerto", 70),
        ]),
      ]);
    }).toThrowError("twice");
  });
});
