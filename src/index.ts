import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./config/db";
import dotenv from "dotenv";

const app: Express = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

const port: Number | "" = Number(process.env.PORT) || "";

app.get("/", (req: Request, res: Response) => res.send("Hello World!"));

connect()
  .then(() => {
    app.listen(port, (): void =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch((err: Error) => {
    console.log(err);
  });
