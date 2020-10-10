/*
 * @Author: your name
 * @Date: 2020-10-06 09:27:37
 * @LastEditTime: 2020-10-09 15:36:43
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
        res.send(results);
    })
})
customer.get('/findById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    customerDB.findById(req.query,(results)=>{
        res.send(results);
    })
})
customer.get('/deleteById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    customerDB.deleteById(req.query,(results)=>{
        res.send('删除成功');
    })
})
customer.post('/saveOrUpdate',(req,res)=>{
    // console.log(req.body)
    //调用dao层中的方法
    customerDB.saveOrUpdate(req.body,(results)=>{
        res.send('保存成功');
    })
})
customer.post('/batchDelete',(req,res)=>{
    customerDB.batchDelete(req.body,(results)=>{
        res.send('批量删除成功');
    })
})
customer.post('/pageQuery',(req,res)=>{
    customerDB.pageQuery(req.body,(results)=>{
        res.send(results);
    })
})
customer.get('/mohuQuery',(req,res)=>{
    customerDB.mohuQuery(req.query,(results)=>{
        res.send(results);
    })
})
module.exports = customer;
