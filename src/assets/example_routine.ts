import Routine from "../models/routine";
import Exercise from "../models/exercise";

const example = new Routine(
  [new Exercise("Press Banca", 40), new Exercise("Peso Muerto", 70)],
  [],
  [new Exercise("Press Banca", 40), new Exercise("Peso Muerto", 70)],
  [],
  [new Exercise("Press Banca", 40), new Exercise("Peso Muerto", 70)],
  [],
  []
);

function printToday(): void {
  console.log(JSON.stringify(example.printToday()));
}

printToday();
