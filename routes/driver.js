/*
 * @Author: your name
 * @Date: 2020-10-08 15:25:33
 * @LastEditTime: 2020-10-10 15:42:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \briup02\nodejs\day03\app\routes\driver.js
 */


//创建路由对象
//设置路由
//导出路由
const express = require('express');
let driver = express.Router();
//引入driver的dao层
const driverDB = require('../db/driver')


driver.get('/findAll',(req,res)=>{
    //调用dao层的方法，访问数据库
    driverDB.findAll((results)=>{
        var a = {data:results,message:"成功"}
        res.send(a);
    })
})
driver.get('/findById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    driverDB.findById(req.query,(results)=>{
        var a = {data:results,message:"查找成功"}
        res.send(a);
    })
})
driver.get('/deleteById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    driverDB.deleteById(req.query,(results)=>{
        var a = {data:results,message:"删除成功"}
        res.send(a);
    })
})
driver.post('/saveOrUpdate',(req,res)=>{
    // console.log(req.body)
    //调用dao层中的方法
    driverDB.saveOrUpdate(req.body,(results)=>{
        var a = {data:results,message:"保存成功"}
        res.send(a);
    })
})
driver.post('/batchDelete',(req,res)=>{
    driverDB.batchDelete(req.body,(results)=>{
        var a = {data:results,message:"批量删除成功"}
        res.send(a);
    })
})
driver.post('/pageQuery',(req,res)=>{
    driverDB.pageQuery(req.body,(results)=>{
        var a = {data:results,message:""}
        res.send(a);
    })
})
driver.post('/mohuQuery',(req,res)=>{
    driverDB.mohuQuery(req.body,(results)=>{
        var a = {data:results,message:"成功"}
        res.send(a);
    })
})
module.exports = driver;
