import { Group } from "./entity/Group";
import express from "express";
import { Connection, createConnection } from "typeorm";
import { User } from "./entity/User";
import { groupRoutes, userRoutes } from "./routes";

createConnection()
  .then(async (connection: Connection) => {
    connection.getMongoRepository(User);
    connection.getMongoRepository(Group);
    const app = express();
    app.use(express.json());

    app.use("/api/user", userRoutes);
    app.use("/api/group", groupRoutes);

    app.listen(3000, () => {
      console.log("server start");
    });
  })
  .catch((err) => {
    console.log("Cant connect");
  });
