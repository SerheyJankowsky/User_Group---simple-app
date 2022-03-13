import { Entity, Column, ObjectIdColumn, BaseEntity } from "typeorm";
import { Group } from "./Group";
@Entity("user")
export class User extends BaseEntity {
  @ObjectIdColumn()
  id!: number;

  @Column()
  userName!: string;

  @Column()
  created!: Date;

  @Column()
  group!: Array<string>;

  constructor(userName: string, created: Date, group: Array<string>) {
    super();
    this.userName = userName;
    this.created = created;
    this.group = group || null;
  }
}
