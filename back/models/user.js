const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
  const User = sequelize.define('User',{
      // id:{}, mysql 에서 자동으로 넣어주기때문에 안적어도됨.
      email:{
          type:DataTypes.STRING(50),
          allowNull:false,
          unique:true,
      },
      nickname:{
          type:DataTypes.STRING(50),
          allowNull:false
      },
      password:{
          type:DataTypes.STRING(100),
          allowNull:false
      },
      
  },
  { timestamps: false },
  {
    charset:'utf8',
    collate:'utf8_general_ci' // 2개 적어두면 한글 가능
  });
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' })
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
    db.User.belongsToMany(db.User, { through:' Friend',as:'Friends', foreignKey:'UserId'})
  };
  return User;

}