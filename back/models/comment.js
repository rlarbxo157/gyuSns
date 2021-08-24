const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
  const Comment = sequelize.define('Comment',{
      // id:{}, mysql 에서 자동으로 넣어주기때문에 안적어도됨.
      content:{
          type:DataTypes.TEXT,
          allowNull:false,
      },
  },{
    charset:'utf8mb4',
    collate:'utf8mb4_general_ci' // 2개 적어두면 한글 가능
  });
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User)
    db.Comment.belongsTo(db.Post);
  };
  return Comment;

}