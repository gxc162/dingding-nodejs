/*
 * @Author: your name
 * @Date: 2020-10-08 16:54:50
 * @LastEditTime: 2020-10-10 17:48:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \briup02\nodejs\day03\app\routes\comment.js
 */



//创建路由对象
//设置路由
//导出路由
const express = require('express');
let comment = express.Router();
//引入comment的dao层
const commentDB = require('../db/comment')


comment.get('/findAll',(req,res)=>{
    //调用dao层的方法，访问数据库
    commentDB.findAll((results)=>{
        var a = {data:results,message:"成功"}
        res.send(a);
    })
})
comment.get('/findById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    commentDB.findById(req.query,(results)=>{
        var a = {data:results,message:"成功"}
        res.send(a);
    })
})
comment.get('/deleteById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    commentDB.deleteById(req.query,(results)=>{
        var a = {data:results,message:"删除成功"}
        res.send(a);
    })
})
comment.post('/saveOrUpdate',(req,res)=>{
    // console.log(req.body)
    //调用dao层中的方法
    commentDB.saveOrUpdate(req.body,(results)=>{
        var a = {data:results,message:"保存成功"}
        res.send(a);
    })
})
comment.post('/batchDelete',(req,res)=>{
    commentDB.batchDelete(req.body,(results)=>{
        var a = {data:results,message:"批量删除成功"}
        res.send(a);
    })
})
comment.post('/pageQuery',(req,res)=>{
    commentDB.pageQuery(req.body,(results)=>{
        var a = {data:results,message:""}
        res.send(a);
    })
})
comment.post('/mohuQuery',(req,res)=>{
    commentDB.mohuQuery(req.body,(results)=>{
        var a = {data:results,message:""}
        res.send(a);
    })
})
module.exports = comment;
