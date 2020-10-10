/*
 * @Author: your name
 * @Date: 2020-10-06 09:27:37
 * @LastEditTime: 2020-10-10 15:33:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodejs\day03\app\routes\customer.js
 */

//创建路由对象
//设置路由
//导出路由
const express = require('express');
let customer = express.Router();
//引入customer的dao层
const customerDB = require('../db/customer')


customer.get('/findAll',(req,res)=>{
    //调用dao层的方法，访问数据库
    customerDB.findAll((results)=>{
        var a = {data:results,message:"成功"}
        res.send(a);
    })
})
customer.get('/findById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    customerDB.findById(req.query,(results)=>{
        var a = {data:results,message:"成功"}
        res.send(a);
    })
})
customer.get('/deleteById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    customerDB.deleteById(req.query,(results)=>{
        var a = {data:results,message:"删除成功"}
        res.send(a);
    })
})
customer.post('/saveOrUpdate',(req,res)=>{
    // console.log(req.body)
    //调用dao层中的方法
    customerDB.saveOrUpdate(req.body,(results)=>{
        var a = {data:results,message:"保存成功"}
        res.send(a);
    })
})
customer.post('/batchDelete',(req,res)=>{
    customerDB.batchDelete(req.body,(results)=>{
        var a = {data:results,message:"删除成功"}
        res.send(a);
    })
})
customer.post('/pageQuery',(req,res)=>{
    customerDB.pageQuery(req.body,(results)=>{
        var a = {data:results,message:""}
        res.send(a);
    })
})
customer.post('/mohuQuery',(req,res)=>{
    customerDB.mohuQuery(req.body,(results)=>{
        var a = {data:results,message:"成功"}
        res.send(a);
    })
})
module.exports = customer;
