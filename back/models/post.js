// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize,DataTypes) => {
    const Post = sequelize.define('Post',{
        // id:{}, mysql 에서 자동으로 넣어주기때문에 안적어도됨.
        content:{
           type:DataTypes.TEXT,
           allowNull:false,
        },
    },
    { timestamps: false },
    {
      charset:'utf8mb4',
      collate:'utf8mb4_general_ci' // 2개 적어두면 한글 가능
    });
    Post.associate = (db) => {
      db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
      db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // post.addHashtags
      db.Post.hasMany(db.Comment); // post.addComments, post.getComments
      db.Post.hasMany(db.Image); // post.addImages, post.getImages
      db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }) // post.addLikers, post.removeLikers
      // db.Post.belongsTo(db.Post, { as: 'Retweet' }); // post.addRetweet
    };
    return Post;
  
};