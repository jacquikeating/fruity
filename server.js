import "dotenv/config";
import express from "express";
import cors from "cors";
import sessionRoutes from "./routes/sessions.js";
import pullRoutes from "./routes/pulls.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3306;

app.get("/", (_req, res) => {
  res.send("If you're reading this, the server is running!");
});

app.use(cors());
app.use("/sessions", sessionRoutes);
app.use("/pulls", pullRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
