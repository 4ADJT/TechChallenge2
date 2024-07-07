db = db.getSiblingDB('ezblue');

db.createCollection('default');

db.default.insertMany([
 {
    app: 'ezblue',
    event: 'create_default_collection'
  }
]);