import { Router } from "express";
import { GroupController } from "../controller";

const rout = Router();

rout.get("/", GroupController.getAll);
rout.post("/", GroupController.create);
rout.get("/:id", GroupController.getOne);
rout.delete("/:id", GroupController.delete);
rout.put("/", GroupController.update);

export default rout;
