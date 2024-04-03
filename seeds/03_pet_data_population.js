/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("pet").del();
  await knex("pet").insert([
    { id: 1, name: "Joe", pet_type_id: 4, food_type_id: 3 },
    { id: 2, name: "Moe", pet_type_id: 3, food_type_id: 2 },
    { id: 3, name: "Poe", pet_type_id: 2, food_type_id: 2 },
    { id: 4, name: "Loe", pet_type_id: 1, food_type_id: 1 },
  ]);
};
