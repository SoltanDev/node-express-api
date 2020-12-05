import express, { json, urlencoded } from "express";
import cors from "cors";
import connect from "./utils/database";
import playerRouter from "./resources/player/player.router";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/players", playerRouter);

connect();
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
