import express from "express";
import * as pullController from "../controllers/pullController.js";

const router = express.Router();

router.route("/").get(pullController.index).post(pullController.addPull);

router.route("/:pullID").delete(pullController.deletePull);
export default router;
