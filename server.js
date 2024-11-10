import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5050;

app.get("/", (_req, res) => {
  res.send("If you're reading this, the server is running!");
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
