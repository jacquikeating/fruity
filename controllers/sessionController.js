import createKnex from "knex";
import knexFile from "../knexfile.js";
const knex = createKnex(knexFile);

export const getAllSessions = async (_req, res) => {
  try {
    const data = await knex("session");
    res.json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving data: ${err}`);
  }
};

export const getSessionsCount = async (req, res) => {
  try {
    const result = await knex("session").count("id");
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(`Error retrieving sessions: ${err}`);
  }
};

export const getSingleSession = async (req, res) => {
  try {
    const data = await knex("session").where({ id: req.params.sessionID });
    res.json(data);
  } catch (err) {
    res
      .status(400)
      .send(
        `Error retrieving data for session ${req.params.sessionID}: ${err}`
      );
  }
};

export const getPullsFromSession = async (req, res) => {
  try {
    const data = await knex("pull").where({ session_id: req.params.sessionID });
    res.json(data);
  } catch (err) {
    res
      .status(400)
      .send(
        `Error retrieving pulls data for session ${req.params.sessionID}: ${err}`
      );
  }
};

export const postNewSession = async (req, res) => {
  try {
    const data = await knex("session").insert(req.body);
    const newSessionURL = `/report/${data[0]}`;
    res.status(201).location(newSessionURL).end(newSessionURL);
  } catch (err) {
    res.status(400).send(`Error creating session: ${err}`);
  }
};

export const updateSession = async (req, res) => {
  const { sessionID } = req.params;
  try {
    const session = await knex("session").where({ id: sessionID }).first();
    if (!session) {
      return res.status(404).json({
        error_code: 404,
        error_msg: `Session with ID ${sessionID} not found.`,
      });
    }

    await knex("session").where({ id: sessionID }).update(req.body);
    res.status(204).send();
  } catch (err) {
    res.status(400).send(`Error updating session: ${err}`);
  }
};
