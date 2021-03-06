const express = require('express');
const db = require('../models');
const {User, Post} = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/',async(req,res,next)=> {
  console.log(req.headers);
    try{
        if(req.user){
            const fullUser = await User.findOne({
                where:{id:req.user.id},
                attributes:{
                    exclude:['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                  }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                  }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                  },{
                    model:User,
                    as :'Friends',
                    attributes:['id'],
                  }]
            });
            res.status(200).json(fullUser);
        }else{
            res.status(200).json(null);
        }
    }catch(error){
        console.error(error);
        next(error);
    }
})


router.get('/:id', async (req, res, next) => { // GET /user/3
  try {
    const fullUserWithoutPassword = await User.findOne({
      where: { id: req.params.id },
      attributes: {
        exclude: ['password']
      },
      include: [{
        model: Post,
        attributes: ['id'],
      }, {
        model: User,
        as: 'Followings',
        attributes: ['id'],
      }, {
        model: User,
        as: 'Followers',
        attributes: ['id'],
      }]
    })
    if (fullUserWithoutPassword) {
      const data = fullUserWithoutPassword.toJSON();
      data.Posts = data.Posts.length;
      data.Followings = data.Followings.length;
      data.Followers = data.Followers.length;
      res.status(200).json(data);
    } else {
      res.status(404).json('???????????? ?????? ??????????????????.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/',async (req,res,next)=> {
    try{
        const existUser =await User.findOne({
            where:{
                email:req.body.email,
            }
        });
    if(existUser){
        return res.status(403).send('?????? ???????????? ????????? ?????????.')
    }
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    await User.create({
        email:req.body.email,
        nickname:req.body.nickname,
        password:hashedPassword
    });
        res.status(201).send('success');
    }catch(error){
        console.log(error);
        next(error);
    }
    // res.json();
})

// router.post('/login',passport.authenticate('local'),(err,user,info)=> {
//     // passport local ?????? done??? ??????????????? ??????, 
//     if(err){
//         console.error(err);
//         next(err);
//     }
// });


// middleware ??????, express ??????



router.post('/login',isNotLoggedIn, (req,res,next)=> {
    passport.authenticate('local',(err,user,info)=> {
        if(err){
            console.error(err);
            return next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr)=> {
            if(loginErr){
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                  exclude: ['password']
                },
                include: [{
                  model: Post,
                  attributes: ['id'],
                }, {
                  model: User,
                  as: 'Followings',
                  attributes: ['id'],
                }, {
                  model: User,
                  as: 'Followers',
                  attributes: ['id'],
                },{
                  model:User,
                  as: 'Friends',
                  attributes:['id'],
                }]
              })
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req,res,next);
});

router.post('/logout',isLoggedIn,(req,res)=> {
    req.logout();
    req.session.destroy();
    res.send('ok');
})

router.patch('/nickname',isLoggedIn,async (req,res,next)=>{

    try{
        await User.update({
            nickname:req.body.nickname,
        },{
            where:{ id:req.user.id },
        });
        res.status(200).json({nickname:req.body.nickname});
    }catch(error){
        console.error(error);
        next(error);
    }
})

router.post('/:userId/friend',isLoggedIn,async (req,res,next)=> {
    // console.log(req.params);
  try{
    const user = await User.findOne({where:{id:req.params.userId}});  //user?????? ????????? ???????????? ????????? ???????????????
    console.log(user);
    if(!user){
      res.status(403).send('??????????????? ??? ??? ????????????. ???????????? ?????? ????????? ?????????.')
    }
    await user.addFriends(req.user.id);
    res.status(200).json({ UserId : parseInt(req.params.userId,10)});

  }catch(error){
    console.error(error);
    next(error);
  }
})

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // PATCH /user/1/follow
    try {
      const user = await User.findOne({ where: { id: req.params.userId }});
      if (!user) {
        res.status(403).send('?????? ????????? ?????????????????? ?????????????');
      }
      await user.addFollowers(req.user.id);
      res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => { // DELETE /user/1/follow
    try {
      const user = await User.findOne({ where: { id: req.params.userId }});
      if (!user) {
        res.status(403).send('?????? ????????? ????????????????????? ?????????????');
      }
      await user.removeFollowers(req.user.id);
      res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  router.get('/followers', isLoggedIn, async (req, res, next) => { // GET /user/followers
    try {
      const user = await User.findOne({ where: { id: req.user.id }});
      if (!user) {
        res.status(403).send('?????? ?????? ?????????.');
      }
      const followers = await user.getFollowers();
      res.status(200).json(followers);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  
  router.get('/followings', isLoggedIn, async (req, res, next) => { // GET /user/followings
    try {
      const user = await User.findOne({ where: { id: req.user.id }});
      if (!user) {
        res.status(403).send('?????? ????????? ???????????? ?????????????');
      }
      const followings = await user.getFollowings();
      res.status(200).json(followings);
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  


module.exports = router;