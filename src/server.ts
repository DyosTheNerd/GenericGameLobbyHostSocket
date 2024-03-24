import * as express from "express";
const app: express.Application = express();

import * as cors from "cors";
import {initSocketServer} from "./socket"
import {corsList} from "./constValues";

import  {success} from './public/ServerResponses'

const port: string = process.env.PORT || "3000";

app.use(express.static("public"));

app.get("/", (request: express.Request, response: express.Response) => {
    response.send(success);
});

app.use(cors({
    origin: corsList
}));

const server = require("http").createServer(app);

initSocketServer(server)

app.use(express.static("public"));


server.listen(port, () => {
    console.log(`server listening on ${port}` );
});