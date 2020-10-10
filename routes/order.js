/*
 * @Author: your name
 * @Date: 2020-10-08 15:25:33
 * @LastEditTime: 2020-10-10 17:18:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \briup02\nodejs\day03\app\routes\order.js
 */


//创建路由对象
//设置路由
//导出路由
const express = require('express');
let order = express.Router();
//引入order的dao层
const orderDB = require('../db/order')


order.get('/findAll',(req,res)=>{
    //调用dao层的方法，访问数据库
    orderDB.findAll((results)=>{
        var a = {data:results,message:"成功"}
        res.send(a);
    })
})
order.get('/findByCustomerId',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    orderDB.findByCustomerId(req.query,(results)=>{
        var a = {data:results,message:"成功"}
        res.send(a);
    })
})
order.get('/deleteById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    orderDB.deleteById(req.query,(results)=>{
        var a = {data:results,message:"删除成功"}
        res.send(a);
    })
})
order.post('/saveOrUpdate',(req,res)=>{
    // console.log(req.body)
    //调用dao层中的方法
    orderDB.saveOrUpdate(req.body,(results)=>{
        var a = {data:results,message:"保存成功"}
        res.send(a);
    })
})
order.post('/batchDelete',(req,res)=>{
    orderDB.batchDelete(req.body,(results)=>{
        var a = {data:results,message:"批量删除成功"}
        res.send(a);
    })
})
order.post('/pageQuery',(req,res)=>{
    orderDB.pageQuery(req.body,(results)=>{
        var a = {data:results,message:""}
        res.send(a);
    })
})
order.post('/mohuQuery',(req,res)=>{
    orderDB.mohuQuery(req.body,(results)=>{
        var a = {data:results,message:""}
        res.send(a);
    })
})
module.exports = order;
