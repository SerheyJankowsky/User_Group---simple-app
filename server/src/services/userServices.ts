import { User } from "../entity/User";

class UserService {
  async getUsers() {
    const users = await User.find();
    return users;
  }
  async getUser(id: string) {
    const user = await User.findOne(id);
    return user;
  }
  async createUser(user: User) {
    const oneUser = await User.save(user);
    console.log(oneUser);
    return oneUser;
  }
  async deleteUser(id: string) {
    const user = await User.delete(id);
    console.log(user);
  }
  async updateUser(user: User) {
    if (!user.id) {
      throw new Error("cant update user");
    }
    const updateUser = await User.update(user.id, user);
    return updateUser;
  }
}

export default new UserService();
