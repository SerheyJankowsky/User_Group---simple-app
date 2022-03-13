import { Group } from "../entity/Group";

class GroupService {
  async getGrops() {
    const groups = await Group.find();
    return groups;
  }
  async getGroup(id: string) {
    const group = await Group.findOne(id);
    return group;
  }
  async createGroup(group: Group) {
    if (Object.keys(group).length > 0) {
      const oneGroup = await Group.save(group);
      return oneGroup;
    } else {
      console.log("empty obj");
    }
  }
  async deleteGroup(id: string) {
    await Group.delete(id);
  }

  async updateGroup(group: Group) {
    if (!group.id) {
      throw new Error("cant update user");
    }
    await Group.update(group.id, group);
  }
}

export default new GroupService();
