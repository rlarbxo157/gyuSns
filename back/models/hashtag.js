// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const Hashtag = sequelize.define('Hashtag',{
        // id:{}, mysql 에서 자동으로 넣어주기때문에 안적어도됨.
        name:{
           type:DataTypes.STRING(20),
           allowNull:false,
        },
    },{
      charset:'utf8mb4',
      collate:'utf8mb4_general_ci' // 2개 적어두면 한글 가능
    });
    Hashtag.associate = (db) => {
      db.Hashtag.belongsToMany(db.Post,{through:'PostHashtag'});  
    };
    return Hashtag;
  
};