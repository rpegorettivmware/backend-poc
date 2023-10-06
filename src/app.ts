import express, { Application } from "express";
import routes from "./routes";
import dbConect from "./db";

const app: Application = express();
const PORT = process.env.PORT || 3500;

dbConect();

app.use(express.json());
app.use('/', routes)

app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}`);
});