import createKnex from "knex";
import knexFile from "../knexfile.js";
const knex = createKnex(knexFile);

export const index = async (_req, res) => {
  try {
    const data = await knex("session");
    res.json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving data: ${err}`);
  }
};

export const singleSession = async (req, res) => {
  try {
    const data = await knex("session").where({ id: req.params.sessionID });
    res.json(data);
  } catch (err) {
    res
      .status(400)
      .send(
        `Error retrieving inventories for Warehouse ${req.params.sessionID}: ${err}`
      );
  }
};

export const sessionPulls = async (req, res) => {
  try {
    const data = await knex("pull").where({ session_id: req.params.sessionID });
    res.json(data);
  } catch (err) {
    res
      .status(400)
      .send(
        `Error retrieving inventories for Warehouse ${req.params.sessionID}: ${err}`
      );
  }
};
