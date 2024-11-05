import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();

// let { PORT, CROSS_ORIGIN } = process.env;
// PORT = PORT || 8082;
const { PORT = 3000, LOCAL_ADDRESS = "0.0.0.0" } = process.env;

// app.use(cors({ origin: CROSS_ORIGIN }));

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("If you're reading this, the server is running!");
});

app.listen(PORT, LOCAL_ADDRESS, () => {
  console.log(`App running on port ${PORT}`);
});
// app.listen(PORT, LOCAL_ADDRESS, () => {
//   const address = server.address();
//   console.log("server listening at", address);
// });
