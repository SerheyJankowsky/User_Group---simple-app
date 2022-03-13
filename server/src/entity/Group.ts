import { Entity, Column, ObjectIdColumn, BaseEntity } from "typeorm";
import { User } from "./User";
@Entity()
export class Group extends BaseEntity {
  @ObjectIdColumn()
  id!: number;

  @Column()
  name: string;

  @Column((type) => User)
  users: User[];

  constructor(name: string, users: Array<User>) {
    super();
    this.name = name;
    this.users = users;
  }
}
