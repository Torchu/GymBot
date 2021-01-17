import express from "express";
import User from "../models/user";
import { getUser } from "../middleware/getUser";
import { routineParser } from "../middleware/routine.parser";
import Routine from "../models/routine";

const router = express.Router();

/**
 * USUARIOS
 */

/**
 * CRUD: GET method
 * Devuelve la lista de usuarios
 */
router.get("/", async (req: any, res: any) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * CRUD: POST method
 * Crea un nuevo usuario
 */
router.post("/", async (req: any, res: any) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * CRUD: DELETE method
 * Elimina al usuario de la base de datos
 */
router.delete("/:id", getUser, async (req: any, res: any) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * ROUTINES
 */

/**
 * CRUD: GET method
 * Devuelve la rutina del usuario especificado
 */
router.get("/:id/routine", getUser, (req: any, res: any) => {
  res.json(res.user.routine);
});

/**
 * CRUD: UPDATE method
 * Actualiza la rutina del usuario especificado
 */
router.patch("/:id/routine", getUser, async (req: any, res: any) => {
  if (req.body != null) {
    res.user.routine = req.body;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * CRUD: UPDATE method
 * Actualiza la rutina del usuario especificado en el día especificado
 */
router.patch("/:id/routine/:day", getUser, async (req: any, res: any) => {
  if (req.body != null) {
    const day = parseInt(req.params.day);
    switch (day) {
      case 1:
        res.user.routine.monday = req.body;
        break;
      case 2:
        res.user.routine.tuesday = req.body;
        break;
      case 3:
        res.user.routine.wednesday = req.body;
        break;
      case 4:
        res.user.routine.thursday = req.body;
        break;
      case 5:
        res.user.routine.friday = req.body;
        break;
      case 6:
        res.user.routine.saturday = req.body;
        break;
      case 7:
        res.user.routine.sunday = req.body;
        break;
    }
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * CRUD: GET method
 * Devuelve el ejercicio que le toca hoy a ese usuario
 */
router.get("/:id/today", getUser, (req: any, res: any) => {
  const data = JSON.stringify(res.user.routine);
  const routine = routineParser(data);
  res.send(routine.printToday());
});

export default router;
