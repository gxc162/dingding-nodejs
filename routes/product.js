/*
 * @Author: your name
 * @Date: 2020-10-08 15:25:33
 * @LastEditTime: 2020-10-10 10:30:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \briup02\nodejs\day03\app\routes\product.js
 */


//创建路由对象
//设置路由
//导出路由
const express = require('express');
let product = express.Router();
//引入product的dao层
const productDB = require('../db/product')


product.get('/findAll',(req,res)=>{
    //调用dao层的方法，访问数据库
    productDB.findAll((results)=>{
        res.send(results);
    })
})
product.get('/findById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    productDB.findById(req.query,(results)=>{
        res.send(results);
    })
})
product.get('/deleteById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    productDB.deleteById(req.query,(results)=>{
        res.send('删除成功');
    })
})
product.post('/saveOrUpdate',(req,res)=>{
    // console.log(req.body)
    //调用dao层中的方法
    productDB.saveOrUpdate(req.body,(results)=>{
        res.send('保存成功');
    })
})
product.post('/batchDelete',(req,res)=>{
    productDB.batchDelete(req.body,(results)=>{
        res.send('批量删除成功');
    })
})
product.post('/pageQuery',(req,res)=>{
    productDB.pageQuery(req.body,(results)=>{
        res.send(results);
    })
})
product.get('/mohuQuery',(req,res)=>{
    productDB.mohuQuery(req.query,(results)=>{
        res.send(results);
    })
})
module.exports = product;
