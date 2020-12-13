import Exercise from "../models/exercise";
import Routine from "../models/routine";

export function routineParser(json: string): Routine {
  const obj = JSON.parse(json);
  return new Routine(
    exerciseParser(obj.monday),
    exerciseParser(obj.tuesday),
    exerciseParser(obj.wednesday),
    exerciseParser(obj.thursday),
    exerciseParser(obj.friday),
    exerciseParser(obj.saturday),
    exerciseParser(obj.sunday)
  );
}

function exerciseParser(object: any): Exercise[] {
  let day = [];
  for (let i in object) {
    day.push(new Exercise(object[i].name, object[i]._weight));
  }
  return day;
}
