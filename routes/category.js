/*
 * @Author: your name
 * @Date: 2020-10-08 15:25:33
 * @LastEditTime: 2020-10-10 10:30:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \briup02\nodejs\day03\app\routes\category.js
 */


//创建路由对象
//设置路由
//导出路由
const express = require('express');
let category = express.Router();
//引入category的dao层
const categoryDB = require('../db/category')


category.get('/findAll',(req,res)=>{
    //调用dao层的方法，访问数据库
    categoryDB.findAll((results)=>{
        res.send(results);
    })
})
category.get('/findById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    categoryDB.findById(req.query,(results)=>{
        res.send(results);
    })
})
category.get('/deleteById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    categoryDB.deleteById(req.query,(results)=>{
        res.send('删除成功');
    })
})
category.post('/saveOrUpdate',(req,res)=>{
    // console.log(req.body)
    //调用dao层中的方法
    categoryDB.saveOrUpdate(req.body,(results)=>{
        res.send('保存成功');
    })
})
category.post('/batchDelete',(req,res)=>{
    categoryDB.batchDelete(req.body,(results)=>{
        res.send('批量删除成功');
    })
})
category.post('/pageQuery',(req,res)=>{
    categoryDB.pageQuery(req.body,(results)=>{
        res.send(results);
    })
})
category.get('/mohuQuery',(req,res)=>{
    categoryDB.mohuQuery(req.query,(results)=>{
        res.send(results);
    })
})
module.exports = category;
