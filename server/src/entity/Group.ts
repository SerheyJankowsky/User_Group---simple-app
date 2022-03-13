import { Entity, Column, ObjectIdColumn, BaseEntity } from "typeorm";
import { User } from "./User";
@Entity()
export class Group extends BaseEntity {
  @ObjectIdColumn()
  id!: number;

  @Column()
  name!: string;

  @Column((type) => User)
  users!: User[];
}
