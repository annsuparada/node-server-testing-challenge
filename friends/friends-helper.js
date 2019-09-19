const db = require('../data/db-config.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(friends) {
  return db('friends').insert(friends, 'id');
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('friends')
    .where({id})
    .delete(id);
}

function getAll() {
  return db('friends');
}

function findById(id) {
  return null;
}
