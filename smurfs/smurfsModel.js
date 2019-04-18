const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(smurfee) {
  const [id] = await db('smurfs').insert(smurfee, 'id');
  
    return db('smurfs')
        .where({id})
        .first()
}

async function update(id, changes) {
  return null;
}

function remove(id) {
    return db('smurfs')
    .where({ id })
    .del();
}

function getAll() {
  return db('smurfs');
}

function findById(id) {
  return null;
}
