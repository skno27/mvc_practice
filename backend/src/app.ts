import express from "express";
import usersRouter from "./routes/users.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`App listening ... http://localhost:${port}.`);
});
