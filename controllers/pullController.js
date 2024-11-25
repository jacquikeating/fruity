import createKnex from "knex";
import knexFile from "../knexfile.js";
const knex = createKnex(knexFile);

export const index = async (_req, res) => {
  try {
    const data = await knex("pull");
    res.json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving data: ${err}`);
  }
};
export const addPull = async (req, res) => {
  try {
    const data = await knex("pull").insert(req.body);
    res.status(201).send(data);
  } catch (err) {
    res.status(400).send(`Error creating pull: ${err}`);
  }
};
