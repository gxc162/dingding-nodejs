/*
 * @Author: your name
 * @Date: 2020-10-08 15:25:33
 * @LastEditTime: 2020-10-10 09:44:52
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
        res.send(results);
    })
})
order.get('/findByCustomerId',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    orderDB.findByCustomerId(req.query,(results)=>{
        res.send(results);
    })
})
order.get('/deleteById',(req,res)=>{
    // console.log(req.query)
    //调用dao层的方法
    orderDB.deleteById(req.query,(results)=>{
        res.send('删除成功');
    })
})
order.post('/saveOrUpdate',(req,res)=>{
    // console.log(req.body)
    //调用dao层中的方法
    orderDB.saveOrUpdate(req.body,(results)=>{
        res.send('保存成功');
    })
})
order.post('/batchDelete',(req,res)=>{
    orderDB.batchDelete(req.body,(results)=>{
        res.send('批量删除成功');
    })
})
order.post('/pageQuery',(req,res)=>{
    orderDB.pageQuery(req.body,(results)=>{
        res.send(results);
    })
})
order.get('/mohuQuery',(req,res)=>{
    orderDB.mohuQuery(req.query,(results)=>{
        res.send(results);
    })
})
module.exports = order;
