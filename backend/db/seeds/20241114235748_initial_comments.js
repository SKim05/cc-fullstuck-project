/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {volume: '1', username: '匿名さん1', text: 'とてもいいです！', good: '11'},
    {volume: '2', username: '匿名さん2', text: '素晴らしい', good: '22'},
    {volume: '31', username: '匿名さん31', text: '良い最終回だった！', good: '31'}
  ]);
};
