/*
 * @Author: your name
 * @Date: 2020-10-06 09:14:45
 * @LastEditTime: 2020-10-10 11:30:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodejs\day03\app\index.js
 */

//使用路由对象
const express = require('express');
const customer = require('./routes/customer')
const driver = require('./routes/driver')
const address = require('./routes/address')
const order = require('./routes/order')
const comment = require('./routes/comment')
const product = require('./routes/product')
const category = require('./routes/category')
//创建应用
let app = express();
//使用拦截器
app.all('*',(req,res,next)=>{
    res.set({
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":'*',
        "Content-Type":"text/plain;charset=utf-8"
    });
    next();
});
app.disable('etag');
//中间件
app.use(express.urlencoded({extended:true}));//使用查询字符串
// app.use(express.json());

//使用路由对象
app.use('/customer',customer)
app.use('/address',address)
app.use('/driver',driver)
app.use('/order',order)
app.use('/comment',comment)
app.use('/product',product)
app.use('/category',category)


//启动应用
app.listen(3000,()=>{
    console.log('3000端口启动')
})