/*
 * @Author: your name
 * @Date: 2020-10-06 09:55:09
 * @LastEditTime: 2020-10-06 10:07:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodejs\day03\app\db\pool.js
 */

//创建连接池对象
//导出
const mysql = require('mysql');
const pool = mysql.createPool({
    host:'121.40.187.6',
    port:3306,
    user:"root",
    password:'123456',
    database:'ej1.0'
})

module.exports = pool;