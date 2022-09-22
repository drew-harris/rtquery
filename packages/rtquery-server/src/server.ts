import WebSocket, { WebSocketServer } from "ws";

export function createServer<T>(initialData: T): {
  wss: WebSocketServer;
  getData: () => T;
} {
  const wss = new WebSocketServer({ port: 8080 });

  const data: T = initialData;

  wss.on("connection", (ws) => {
    // Runs on each connection
    console.log("Connection made");
    ws.on("message", (data) => {
      console.log(data.toString());
    });
  });

  return {
    wss,
    getData: () => data,
  };
}
