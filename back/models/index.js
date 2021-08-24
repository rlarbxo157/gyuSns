const Sequelize  =require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize  =new Sequelize(config.database,config.username,config.password,config);
// 여기까지 연결하면 sequelize 가 node 와 mysql 을 연결할수 있게해줌. 연결성공하면 sequelize 객체에 정보가들어감.

// 연결했으면 table 만들어서 정보넣어줘야함.
db.User = require('./user')(sequelize,Sequelize);
db.Post =require('./post')(sequelize,Sequelize);
db.Comment = require('./comment')(sequelize,Sequelize);
db.Hashtag = require('./hashtag')(sequelize,Sequelize);
db.Image = require('./image')(sequelize,Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
