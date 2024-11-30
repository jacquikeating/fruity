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

export const deletePull = async (req, res) => {
  const { pullID } = req.params;

  try {
    const pull = await knex("pull").where({ id: pullID }).first();

    if (!pull) {
      return res.status(404).json({
        error_code: 404,
        error_msg: `Pull with ID ${pullID} not found.`,
      });
    }

    await knex("pull").where({ id: pullID }).del();
    res.status(204).send();
  } catch (err) {
    res.status(400).send(`Error deleting pull: ${err}`);
  }
};
