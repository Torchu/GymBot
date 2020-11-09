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
  it("should return the routine", () => {
    expect(routine.routine).toEqual([
      {
        _day: 1,
        exercises: [
          { _weight: 40, name: "Press Banca" },
          { _weight: 70, name: "Peso Muerto" },
        ],
      },
      {
        _day: 2,
        exercises: [
          { _weight: 40, name: "Press Banca" },
          { _weight: 70, name: "Peso Muerto" },
        ],
      },
    ]);
  });
  it("should let me change the routine", () => {
    routine.routine = [
      new DayWork(1, [
        new Exercise("Press Banca", 50),
        new Exercise("Peso Muerto", 70),
      ]),
      new DayWork(3, [
        new Exercise("Press Banca", 50),
        new Exercise("Peso Muerto", 70),
      ]),
    ];
    expect(routine.routine).toEqual([
      {
        _day: 1,
        exercises: [
          { _weight: 50, name: "Press Banca" },
          { _weight: 70, name: "Peso Muerto" },
        ],
      },
      {
        _day: 3,
        exercises: [
          { _weight: 50, name: "Press Banca" },
          { _weight: 70, name: "Peso Muerto" },
        ],
      },
    ]);
  });
  it("should throw an error while changing the routine", () => {
    expect(() => {
      routine.routine = [
        new DayWork(1, [
          new Exercise("Press Banca", 40),
          new Exercise("Peso Muerto", 70),
        ]),
        new DayWork(1, [
          new Exercise("Press Banca", 40),
          new Exercise("Peso Muerto", 70),
        ]),
      ];
    }).toThrowError("twice");
  });
  it("should return the index of a day", () => {
    expect(routine.searchDay(3)).toBe(1);
  });
  it("should return -1 because there's no index asociated to that day", () => {
    expect(routine.searchDay(2)).toBe(-1);
  });
  it("should let me modify the routine", () => {
    routine.modifyRoutine(3, [
      new Exercise("Dominadas", 20),
      new Exercise("Sentadilla", 80),
    ]);
    expect(routine.routine).toEqual([
      {
        _day: 1,
        exercises: [
          { _weight: 50, name: "Press Banca" },
          { _weight: 70, name: "Peso Muerto" },
        ],
      },
      {
        _day: 3,
        exercises: [
          { _weight: 20, name: "Dominadas" },
          { _weight: 80, name: "Sentadilla" },
        ],
      },
    ]);
  });
  it("should throw an error while modifying an unexisting day", () => {
    expect(() => {
      routine.modifyRoutine(2, [
        new Exercise("Dominadas", 20),
        new Exercise("Sentadilla", 80),
      ]);
    }).toThrowError("that day");
  });
});
