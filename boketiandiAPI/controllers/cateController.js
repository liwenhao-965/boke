
var dbCongif = require('../util/dbconfig')

//获取分类
getCate = (req,res)=>{
    var sql = "select * from  cate";
    var sqlArr = [];
    var callBack = (err,data)=>{
      if(err){
        console.log("连接出错率");
      }else{
        res.send({
          'list':data
        })
      }
    }
  //这里调用sqlconnect方法，放入数据和参数，通过回调函数插入到sqlArr数据里面去
    dbCongif.sqlConnect(sql,sqlArr,callBack);
    // res.render('index', { title: 'Express' });
    
}


//获取指定分类的文章列表

getPostCate=(req,res)=>{
     let {id}  = req.query;
     var sql = 'select * from post where cate_id=?';
     var sqlArr = [id];
     var callBack = (err,data)=>{
        if(err){
          console.log("连接出错率");
        }else{
          res.send({
            'list':data
          })
        }
      }
      //这里
      dbCongif.sqlConnect(sql,sqlArr,callBack);

}

module.exports = {
    getCate,
    getPostCate
}