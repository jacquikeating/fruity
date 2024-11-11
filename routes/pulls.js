import express from "express";
import * as pullController from "../controllers/pullController.js";

const router = express.Router();

router.route("/").get(pullController.index);

export default router;
