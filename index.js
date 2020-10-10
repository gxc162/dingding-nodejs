/*
 * @Author: your name
 * @Date: 2020-10-06 09:14:45
 * @LastEditTime: 2020-10-08 16:55:34
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
//创建应用
let app = express();
//使用拦截器
app.all('*',(req,res,next)=>{
    res.set({
        "Access-Control-Allow-Origin":"*",
        "Content-Type":"text/plain;charset=utf-8"
    });
    next();
})
//中间件
app.use(express.urlencoded({extended:true}));//使用查询字符串
// app.use(express.json());

//使用路由对象
app.use('/customer',customer)
app.use('/address',address)
app.use('/driver',driver)
app.use('/order',order)
app.use('/comment',comment)


//启动应用
app.listen(3000,()=>{
    console.log('3000端口启动')
})