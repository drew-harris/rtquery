import { createServer } from "rtquery-server";

interface Coord {
  x: number;
  y: number;
}

const s = createServer({ x: 2, y: 4 });

const init = s.getData();
