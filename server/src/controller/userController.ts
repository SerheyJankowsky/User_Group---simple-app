import { UserService } from "../services";
import { Request, Response } from "express";
interface IUser {
  id: number;
  userName: string;
  created: Date;
  groups?: Array<string>;
}

class UserController {
  async getAll(request: Request, response: Response): Promise<void> {
    try {
      const allUsers: IUser[] = await UserService.getUsers();
      response.status(200).json(allUsers);
    } catch (e) {
      console.log(e);
      throw new Error("Something broken on usercontroller --> getAll");
    }
  }
  async getOne(request: Request, response: Response): Promise<void> {
    try {
      const user = <IUser>await UserService.getUser(request.params.id);
      response.status(200).json(user);
    } catch (e) {
      console.log(e);
      throw new Error("Something broken on usercontroller --> getAll");
    }
  }
  async createUser(request: Request, response: Response): Promise<void> {
    try {
      const user = <IUser>await UserService.createUser(request.body);
      response.status(200).json(user);
    } catch (e) {
      console.log(e);
      throw new Error("Something broken on usercontroller --> getAll");
    }
  }
  async deleteUser(request: Request, response: Response): Promise<void> {
    try {
      await UserService.deleteUser(request.params.id);
      response.status(200).json("delete compleate");
    } catch (e) {
      console.log(e);
      throw new Error("Something broken on usercontroller --> getAll");
    }
  }
  async updateUser(request: Request, response: Response): Promise<void> {
    try {
      const user = await UserService.updateUser(request.body);
      response.status(200).json(user);
    } catch (e) {
      console.log(e);
      throw new Error("Something broken on usercontroller --> getAll");
    }
  }
}

export default new UserController();
