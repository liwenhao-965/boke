const mysql  = require('mysql');
// const { post } = require('../routes');
module.exports = {
    //数据库配置
    config:{
        host:'localhost',
        port:'3306',
        user:'root',
        password:'123456',
        database:'test'
    },
    //连接数据库，使用mysql连接池的连接方式
    //连接池对象
    sqlConnect:function (sql,sqlArr,callBack) {
            console.log(sql);
            console.log(sqlArr);
            console.log(callBack);
            
             var pool = mysql.createPool(this.config);
             console.log(pool);
             console.log(this.config);
        pool.getConnection((err,conn)=>{
            console.log('12345');
            if(err){
                console.log(err);
                console.log('连接失败');
                return;
            }
            //时间驱动回调
            conn.query(sql,sqlArr,callBack);
            //释放连接
            conn.release();
        })
      },


      //promise回调
      SySqlConnect:function (sySql,sqlArr) {
         return new Promise((resolve,reject)=>{
            var pool = mysql.createPool(this.config);

            pool.getConnection((err,conn)=>{
                if(err){
                    reject(err)
                }else{
                      //时间驱动回调
                    conn.query(sySql,sqlArr,(err,data)=>{
                        if(err){
                            reject(err)
                        }else{
                            resolve(data)
                        
                }
                });
                //释放连接
                conn.release();
            }
        })
         }).catch()
        }

}