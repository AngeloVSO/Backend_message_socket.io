import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";

import { Server } from "socket.io";

import { router } from "./routes";

const app = express();
app.use(cors());

const serverHTTP = http.createServer(app);

const io = new Server(serverHTTP, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User connected at socket ${socket.id}`);
});

app.use(express.json());

app.use(router);

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
  });
  

app.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENTE_ID}`
  );
});

app.get("/signin/callback", (request, response) => {
  const { codigoGithub } = request.query;
  return response.json(codigoGithub);
});

export { serverHTTP, io };