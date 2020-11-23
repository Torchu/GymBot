import { callbackify } from "util";
import Exercise from "../src/models/exercise";
import Routine from "../src/models/routine";
const test = new Routine(
  [
    new Exercise("Press Banca", 40),
    new Exercise("Press Militar", 30),
    new Exercise("Flexiones", 0),
  ],
  [],
  [
    new Exercise("Dominadas", 0),
    new Exercise("Remo Barra", 30),
    new Exercise("Jalón al pecho", 40),
  ],
  [],
  [
    new Exercise("Sentadilla", 80),
    new Exercise("Peso Muerto", 70),
    new Exercise("Abdominales", 0),
  ],
  [],
  []
);

exports.handler = async function (event, context, callback) {
  const response = test;
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response),
  });
};
