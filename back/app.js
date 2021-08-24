const express = require('express');
const cors = require('cors');

const userRouter  = require('./routes/user');
const postRouter  = require('./routes/post');
const postsRouter = require('./routes/posts');
const db = require('./models');
const session  = require('express-session');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const passport = require('passport');
const passportConfig = require('./passport');
const morgan = require('morgan');
const path = require('path');


dotenv.config();
const app = express();

db.sequelize.sync()
    .then(()=> {
        console.log('db연결 성공')
    })
    .catch(console.error);

passportConfig();

app.use(morgan('dev'));
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use('/',express.static(path.join(__dirname,'uploads'))) 
// image 올릴때 운영체제의 차이점때문에, path.join 을 사용함. 
// 프론트에서 서버쪽 폴더구조를 모르기때문에? 

app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
      }
}));
app.use(passport.initialize());
app.use(passport.session());
    

app.get('/',(req,res)=> {
    res.send('hello express');
    // console.log('hello');
})

app.use('/user',userRouter);
app.use('/post',postRouter);
app.use('/posts',postsRouter);


app.listen(3065,()=>{
    console.log('서버가 실행되었습니다.');
});