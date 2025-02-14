import express from "express";
import * as pullController from "../controllers/pullController.js";

const router = express.Router();

router
  .route("/")
  .get(pullController.getAllPulls)
  .post(pullController.postNewPull);

router
  .route("/:pullID")
  .delete(pullController.deletePull)
  .put(pullController.updatePull);

router.route("/count").get(pullController.getPullsCount);

export default router;
