import { GroupService } from "../services";
import { Request, Response } from "express";

interface IUser {
  id: number;
  userName: string;
  created: Date;
  groups?: Array<string>;
}

interface IGroup {
  id: number;
  name: string;
  users?: Array<IUser>;
}

class GroupController {
  async getAll(request: Request, response: Response): Promise<void> {
    try {
      const allGroup: IGroup[] = await GroupService.getGrops();
      response.status(200).json(allGroup);
    } catch (e) {
      console.log(e);
      throw new Error("Something broken on usercontroller --> getAll");
    }
  }
  async getOne(request: Request, response: Response): Promise<void> {
    try {
      const grop = <IGroup>await GroupService.getGroup(request.params.id);
      response.status(200).json(grop);
    } catch (e) {
      console.log(e);
      throw new Error("Something broken on usercontroller --> getAll");
    }
  }
  async create(request: Request, response: Response): Promise<void> {
    try {
      const grop = <IGroup>await GroupService.createGroup(request.body);
      response.status(200).json(grop);
    } catch (e) {
      console.log(e);
      throw new Error("Something broken on usercontroller --> getAll");
    }
  }
  async delete(request: Request, response: Response): Promise<void> {
    try {
      await GroupService.deleteGroup(request.params.id);
      response.status(200).json("delete compleate");
    } catch (e) {
      console.log(e);
      throw new Error("Something broken on usercontroller --> getAll");
    }
  }
  async update(request: Request, response: Response): Promise<void> {
    try {
      const grop = await GroupService.updateGroup(request.body);
      response.status(200).json(grop);
    } catch (e) {
      console.log(e);
      throw new Error("Something broken on usercontroller --> getAll");
    }
  }
}

export default new GroupController();
