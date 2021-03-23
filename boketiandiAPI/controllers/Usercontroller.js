var dbConfig = require('../util/dbconfig')

function rand(min,max) {
    return Math.floor(Math.random()*(max-min)) +min
  }

  validatePhoneCode = [];
let  sendCodeP = (phone)=>{
     for(var item of validatePhoneCode){
        //  console.log(phone);  检查发送验证码是否已经发送过
        
        //  console.log(item.phone);
         if(phone == item.phone)
           return true
     }
     return false
}

let findCodeAndPhone = (phone,code)=>{
    for(var item of validatePhoneCode){
       if(phone == item.phone&&code==item.code){
           return 'login'
       }
    }
    return 'erre'
}


//检测验证码登录是否是第一次登录
 let phoneLoginBind = async (phone)=>{
    let sql = 'select * from customer where username=? or phone=?';
     let sqlArr = [phone,phone];
    let res =  await dbConfig.SySqlConnect(sql,sqlArr);
    if(res.length){
        //如果不是第一次登录，就直接返回cuostomer表中的信息
        res[0].userinfo = await getUserInfo(res[0].id);
            return res
    }else{  
        //用户第一次注册，绑定表
        let res = await regUser(phone);
        //用户注册
        //获取用户详情
        res[0].userinfo = await getUserInfo(res[0].id);
        return res;
    }
 }


//用户注册
let regUser = async (phone)=>{
    //检测用户是否第一次注册
    let userpic = 'http://himg.bdimg.com/sys/portrait/item/95fde99d96e584bf32303036c700.jpg';
    let sql = `insert into customer(username,userpic,phone) value(?,?,?)`;
    let sqlArr = [phone,userpic,phone];
    let res = await dbConfig.SySqlConnect(sql,sqlArr);
    console.log(res);
    if(res.affectedRows == 1){//执行成功

        console.log(res);
        //执行成功，获取用户信息
        //获取用户信息方法
        let user = await getUser(phone);
        //绑定用户副表
        let userinfo =  await createUserInfo(user[0].id);
        if(userinfo.affectedRows == 1 ){
            return user;
        }else{
            return false;
        }
    }else{

    }
}

//获取用户信息
let getUser = (username)=>{
    let sql = `select * from customer where id=? or phone=? or username=?`;
    let sqlArr = [username,username,username];
    return dbConfig.SySqlConnect(sql,sqlArr);
}
//创建副表
let createUserInfo = (user_id)=>{
    let sql = `insert into userinfo(user_id,age,sex,job) values(?,?,?,?)`;
    let sqlArr =  [user_id,18,2,'未设置'];
    return dbConfig.SySqlConnect(sql,sqlArr);
}

//获取注册用户的详情
let getUserInfo = (user_id)=>{
    let sql = `select age,sex,job,path,birthday from userinfo where user_id=?`;
    let sqlArr = [user_id];
    return dbConfig.SySqlConnect(sql,sqlArr);
}


//模拟验证码发送接口
 sendCode = (req,res)=>{
     //这里就是post请求的方法,下面这句话的意思就是请求信息的phone的手机号等于多少。
         let phone  = req.body.phone;
        
         if(sendCodeP(phone)){
             res.send({
                 'code':400,
                 'msg':'已经发送过验证码，稍后再发'
             })
         }
         let code = rand(1000,9999);
         validatePhoneCode.push({
             'phone':phone,
             'code':code
         })

      //   console.log(validatePhoneCode);
         res.send({
             'code':200,
             'msg':'发送成功',
             'res' :validatePhoneCode


         })

         console.log(code);
 }
//验证码登录
codePhoneLogin = async(req,res) =>{
        //获取请求信息里面的phone和code的值。
       let {phone,code} = req.body;
     //  console.log('验证码收到了，开始检查验证码是否第一次登录');
       //验证该手机号是否发送过验证码
       if(sendCodeP(phone)){
          //检查验证码已经发送过之后，检查验证码和手机号是否匹配
         let status =   findCodeAndPhone(phone,code);
         if(status == 'login'){
             //登录成功
             //登录成功之后的操作
             //登录成功之后 调用函数检查数据库中这个手机号是不是第一次登录。如果是第一次登录，还要进行注册过程
             let user = await phoneLoginBind(phone);
              res.send({
                  'code':200,
                  'msg':"登录成功",
                  'data':user[0]
              })
            }else if(status == 'erro'){
                res.send({
                    'code':200,
                    'msg':"登录失败"
                })
            }
         }else{
            res.send({
                'code':400,
                'msg':"未发送验证码"
            })
         }
       
}
 module.exports ={
    sendCode,
    codePhoneLogin
 }
