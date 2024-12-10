import express from "express";
import * as sessionController from "../controllers/sessionController.js";

const router = express.Router();

router
  .route("/")
  .get(sessionController.getAllSessions)
  .post(sessionController.postNewSession);
router.route("/:sessionID").get(sessionController.getSingleSession);
router.route("/:sessionID/pulls").get(sessionController.getPullsFromSession);

export default router;
