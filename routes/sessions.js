import express from "express";
import { knex, createKnex } from "knex";
import knexFile from "../knexfile.js";

const router = express.Router();

// GET list of all sessions
router.get("/", async (_req, res) => {
  try {
    const allSessionsData = await knex("session").select("*");
    res.status(200).json(allSessionsData);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error_code: 500,
      error_msg: "Server error: Failed to retrieve data.",
    });
  }
});

// GET details from a single session
router.get("/:sessionID", async (req, res) => {
  try {
    const { sessionID } = req.params;
    const sessionData = await knex("warehouses")
      .where({ id: sessionID })
      .first();
    if (sessionData) {
      res.status(200).json(sessionData);
    } else {
      res.status(404).json({
        error_code: 404,
        error_msg: `Could not find a session with ID ${sessionID}.`,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error_code: 500,
      error_msg: `Server error: Failed to retrieve data.`,
    });
  }
});

// GET list of pulls from a single session
router.get("/:sessionID/pulls", async (req, res) => {
  try {
    const { sessionID } = req.params;

    if (!sessionID) {
      return res.status(404).json({
        error_code: 404,
        error_msg: `Could not find a session with ID ${sessionID}.`,
      });
    }
    const pullsData = await knex("pulls").where({
      session_id: sessionID,
    });

    if (pullsData.length >= 0) {
      return res.status(200).json(pullsData);
    } else {
      return res.status(404).json({
        error_code: 404,
        error_msg: `Could not find pulls from a session with ID ${sessionID}.`,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error_code: 500,
      error_msg: `Server error: Failed to retrieve data.`,
    });
  }
});

export default router;
