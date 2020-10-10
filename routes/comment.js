/*
 * @Author: your name
 * @Date: 2020-10-08 16:54:50
 * @LastEditTime: 2020-10-10 09:43:21
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
        res.send(results);
    })
})
comment.get('/findById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    commentDB.findById(req.query,(results)=>{
        res.send(results);
    })
})
comment.get('/deleteById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    commentDB.deleteById(req.query,(results)=>{
        res.send('删除成功');
    })
})
comment.post('/saveOrUpdate',(req,res)=>{
    // console.log(req.body)
    //调用dao层中的方法
    commentDB.saveOrUpdate(req.body,(results)=>{
        res.send('保存成功');
    })
})
comment.post('/batchDelete',(req,res)=>{
    commentDB.batchDelete(req.body,(results)=>{
        res.send('批量删除成功');
    })
})
comment.post('/pageQuery',(req,res)=>{
    commentDB.pageQuery(req.body,(results)=>{
        res.send(results);
    })
})
comment.get('/mohuQuery',(req,res)=>{
    commentDB.mohuQuery(req.query,(results)=>{
        res.send(results);
    })
})
module.exports = comment;
