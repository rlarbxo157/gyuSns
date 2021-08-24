const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Image = sequelize.define('Image',{
        // id:{}, mysql 에서 자동으로 넣어주기때문에 안적어도됨.
        src:{
           type:DataTypes.STRING(100),
           allowNull:false,
        },
    },{
      charset:'utf8',
      collate:'utf8_general_ci' // 2개 적어두면 한글 가능
    });
    Image.associate = (db) => {
      db.Image.belongsTo(db.Post);
      
    };
    return Image;
  
};