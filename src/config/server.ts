import express from "express";
import morgan from "morgan";
import logger from "../services/logger";
import config from "./environment";

const app = express();
const { PORT: port } = config;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function server () {
    app.listen(port, () => logger.info(`Server running on port ${port}...`));
};

export default server;