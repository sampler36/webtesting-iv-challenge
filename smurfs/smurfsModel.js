const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(smurf) {
  const [id] = await db('smurfs').insert(smurf, 'id');
  
    return db('smurfs')
        .where({id})
        .first()
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;
}
