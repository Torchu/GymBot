import Routine from "../models/routine";
import Exercise from "../models/exercise";

const routine = new Routine(
  [new Exercise("Press Banca", 40), new Exercise("Peso Muerto", 70)],
  [new Exercise("Press Banca", 40), new Exercise("Peso Muerto", 70)],
  [],
  [],
  [],
  [],
  []
);

describe("routine model tests", () => {
  it("should return the work of a day", () => {
    expect(routine.getDay(1)).toEqual([
      { _weight: 40, name: "Press Banca" },
      { _weight: 70, name: "Peso Muerto" },
    ]);
  });

  it("should throw an error while getting the work of a day", () => {
    expect(() => {
      routine.getDay(8);
    }).toThrowError("not a day");
  });

  it("should let me change the work of a day", () => {
    routine.setDay(2, []);
    expect(routine.getDay(2)).toEqual([]);
  });

  it("should throw an error while setting the work of a day", () => {
    expect(() => {
      routine.setDay(8, []);
    }).toThrowError("not a day");
  });
});
