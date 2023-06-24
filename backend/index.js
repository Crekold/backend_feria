import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./routes/routes.js";

const app = express();
const port = 3000;
//const ipAddress = '192.168.1.8'; // ip a utilizar
const ipAddress = "localhost";

app.use(express.json());
app.use(
  cors({
    origin: `http://${ipAddress}:8080`,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);

app.listen(port, ipAddress, () => {
  console.log(`Server running at http://${ipAddress}:${port}/`);
});
