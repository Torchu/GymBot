import DayWork from "../models/daywork";
import Exercise from "../models/exercise";

const daywork: DayWork = new DayWork(1, [
  new Exercise("Press Banca", 40),
  new Exercise("Peso Muerto", 70),
]);

describe("daywork model test", () => {
  it("should throw an error while creating an instance", () => {
    expect(() => {
      const failDayWork = new DayWork(7, [
        new Exercise("Press Banca", 40),
        new Exercise("Peso Muerto", 70),
      ]);
    }).toThrowError("Invalid day");
  });
  it("should give me the number of the day", () => {
    expect(daywork.day).toBe(1);
  });
});
