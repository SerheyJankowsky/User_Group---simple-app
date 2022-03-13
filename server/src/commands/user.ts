import { Connection, createConnection } from "typeorm";
import { User } from "../entity/User";

createConnection().then(async (connection: Connection) => {
  const userRepository = connection.getMongoRepository(User);
  await userRepository.save({
    userName: "John Marsi",
    created: Date.now(),
    group: ["Massive"],
  });

  process.exit();
});
