/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("pet_food_type").del();
  await knex("pet_food_type").insert([
    { id: 1, colName: "kibble", description: "dry, dull, small bits of food" },
    { id: 2, colName: "raw meat", description: "pure meat" },
    { id: 3, colName: "seed", description: "seeds ma dude. like our data." },
  ]);
};
