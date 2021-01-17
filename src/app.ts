import Routine from "./models/routine";
import { routineParser } from "./middleware/routine.parser";

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

let routine = new Routine([], [], [], [], [], [], []);

//INDEX
app.get("/", (req: any, res: any) => {
  res.send({ message: "Welcome to GymBot" });
});

//USUARIOS

/**
 * CRUD: GET method
 * Devuelve la lista de usuarios
 * PENDIENTE
 */
//app.get("/users", (req: any, res: any) => {});

/**
 * CRUD: DELETE method
 * Borra el usuario de la abse de datos
 * PENDIENTE
 */
//app.delete("/:user", (req: any, res: any) => {});

//RUTINAS

/**
 * CRUD: READ method
 * Devuelve la rutina del usuario especificado
 */
app.get("/:user/routine", (req: any, res: any) => {
  res.send(routine);
});

/**
 * CRUD: POST method
 * Lee los datos de la petición y los transforma a un objeto de la clase Routine, validándolos.
 * Si son válidos los guarda en los datos del usuario correspondiente
 */
app.post("/:user/routine", (req: any, res: any) => {
  const data = JSON.stringify(req.body);
  routine = routineParser(data);
  res.send(req.body);
});

/**
 * CRUD: UPDATE method
 * Modifica el trabajo del día especificado para el usuario correspondiente
 * PENDIENTE
 */
//app.post("/:user/routine/:day", (req: any, res: any) => {});

//TODAY

/**
 * CRUD: READ method
 * Recoge la rutina del usuario designado, transformándola en un objeto de clase Routine y devuelve el resultado de la función printToday()
 */
app.get("/:user/today", (req: any, res: any) => {
  res.send(routine.printToday());
});

export default app;
