import playerData from "../seed_data/player.js";

export const seed = async function (knex) {
  await knex("player").del();
  await knex("player").insert(playerData);
};
