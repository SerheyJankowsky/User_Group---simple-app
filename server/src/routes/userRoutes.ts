import { Router } from "express";
import { UserController } from "../controller";

const rout = Router();

rout.get("/", UserController.getAll);
rout.post("/", UserController.createUser);
rout.get("/:id", UserController.getOne);
rout.delete("/:id", UserController.deleteUser);
rout.put("/", UserController.updateUser);

export default rout;
