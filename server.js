import { readFileSync } from "fs";
import { createServer } from "http";
import { Server } from "socket.io";
import { exec } from 'node:child_process';
import 'dotenv/config'
import { join, resolve } from 'path';

const httpServer = createServer((req, res) => {
  if (req.url !== "/") {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  // // reload the file every time
  // const path = join(process.env.PUBLIC_URL, 'index.html');
  //
  // console.log(path)
  // const content = readFileSync(path);
  // const length = Buffer.byteLength(content);
  //
  // res.writeHead(200, {
  //   "Content-Type": "text/html",
  //   "Content-Length": length,
  // });
  // res.end(content);
});

const io = new Server(httpServer, {
  // Socket.IO options
});

io.on("connection", (socket) => {
  console.log(`connect ${socket.id}`);

  socket.on("disconnect", (reason) => {
    console.log(`disconnect ${socket.id} due to ${reason}`);
  });

  socket.on("run", (msg) => {
    console.log(`My pc: ${process.env.ID}`)
    console.log(`My path: ${process.env.APP_PATH}`)
    console.log(`message ${msg}`);
    const param = JSON.parse(msg);
    console.log(process.env.ID === param.id)
    if (process.env.ID === param.id) {
      console.log(`${msg}`);
      exec(param.script, { cwd: process.env.APP_PATH }, (error, stdout, stderr) => {
        if (error) {
          socket.emit("result", JSON.stringify({
            title: `Error: ${param.script}`,
            content: error.message
          }))
          return;
        }

        if (stderr) {
          socket.emit("result", JSON.stringify({
            title: `Exception: ${param.script}`,
            content: stderr
          }))

          return;
        }

        socket.emit("result", JSON.stringify({
          title: `Succeed: ${param.script}`,
          content: stdout
        }))
      });
    }
  })

  socket.emit("identity", JSON.stringify({
    id: process.env.ID,
    path: process.env.APP_PATH
  }))
});

httpServer.listen(3000);
