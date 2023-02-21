#!/usr/bin/env node

/**
 * Module dependencies.
 */

import App from "../app";
import debug from "debug";
import { server as ServerConfig } from "../config"
debug("demo:server");

var port = normalizePort(ServerConfig);

App().then((server) => {
  server.listen(port, () => {
    console.log(`127.0.0.1:${port}`);
  });

  server.on("error", onError);

  server.on("listening", onListening);

  function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + (addr as any).port;
    debug("Listening on " + bind);
  }
});

function normalizePort(val: Array<{ port: string, type: string }> | undefined) {
  let port: number = 3000;

  if (Array.isArray(val)) {
    port = parseInt(val[0].port, 10);
  }

  if (isNaN(port)) return 3000;

  if (port >= 0) return port;

  return 3000;
}

function onError(error: any) {
  if (error.syscall !== "listen") throw error;

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}


