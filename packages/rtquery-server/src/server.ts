import WebSocket, { WebSocketServer } from "ws";

export function createServer<T>(
  initialData: T,
  port: number = 8080
): {
  wss: WebSocketServer;
  getData: () => T;
} {
  const wss = new WebSocketServer({ port: port });

  const data: T = initialData;

  wss.on("connection", (ws) => {
    // Runs on each connection
    console.log("Connection made");
    ws.on("message", (data) => {
      console.log(data.toString());
    });
  });

  wss.on("listening", () => {
    console.log(`Started listening on port: ${port}`);
  });

  return {
    wss,
    getData: () => data,
  };
}
