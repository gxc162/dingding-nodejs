/*
 * @Author: your name
 * @Date: 2020-10-06 09:27:45
 * @LastEditTime: 2020-10-10 16:55:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \briup02\nodejs\day03\app\routes\address.js
 */


//创建路由对象
//设置路由
//导出路由
const express = require('express');
let address = express.Router();
//引入address的dao层
const addressDB = require('../db/address')


address.get('/findAll',(req,res)=>{
    //调用dao层的方法，访问数据库
    addressDB.findAll((results)=>{
        var a = {data:results,message:""}
        res.send(a);
    })
})
address.get('/findById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    addressDB.findById(req.query,(results)=>{
        var a = {data:results,message:""}
        res.send(a);
    })
})
address.get('/deleteById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    addressDB.deleteById(req.query,(results)=>{
        var a = {data:results,message:"删除成功"}
        res.send(a);
    })
})
address.post('/saveOrUpdate',(req,res)=>{
    // console.log(req.body)
    //调用dao层中的方法
    addressDB.saveOrUpdate(req.body,(results)=>{
        var a = {data:results,message:"保存成功"}
        res.send(a);
    })
})
address.post('/batchDelete',(req,res)=>{
    addressDB.batchDelete(req.body,(results)=>{
        var a = {data:results,message:"批量删除成功"}
        res.send(a);
    })
})
address.post('/pageQuery',(req,res)=>{
    addressDB.pageQuery(req.body,(results)=>{
        var a = {data:results,message:""}
        res.send(a);
    })
})
address.post('/mohuQuery',(req,res)=>{
    addressDB.mohuQuery(req.body,(results)=>{
        var a = {data:results,message:"成功"}
        res.send(a);
    })
})
module.exports = address;
