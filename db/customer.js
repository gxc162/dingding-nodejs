/*
 * @Author: your name
 * @Date: 2020-10-06 09:57:03
 * @LastEditTime: 2020-10-10 16:36:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodejs\day03\app\db\customer.js
 */

//封装不同的dao层方法，导出
const pool = require('./pool');
/**
 * 查找所有的顾客信息
 * @param {Function} handle 将操作结果集返回
 */
let findAll = (handle)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let sql = 'select * from base_user where type=?'
        conn.query(sql,['customer'],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
/**
 * 通过ID获取顾客信息
 * @param {Object} param {id:274}
 * @param {Function} handle 
 */
let findById = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        console.log(param.id)
        let sql = 'select * from base_user where type=? and id=?'
        conn.query(sql,['customer',param.id],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
/**
 * 通过ID删除顾客信息
 * @param {Object} param {id:1001}
 * @param {Function} handle 
 */
let deleteById = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let sql = 'delete from base_user where type=? and id=?'
        conn.query(sql,['customer',param.id],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
/**
 * 保存或更新顾客信息
 * @param {Object} param {id:1001/null,realname:'',telephone:12,password:123}
 * @param {Function} handle 
 */
let saveOrUpdate = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let sql = '';
        if(param.id){
            //更新
            sql = 'update base_user set realname=?,telephone=?,gender=?,status=?,type=? where id=?';
        }else{
            //新增
            sql = 'insert into base_user(realname,telephone,gender,status,type) values(?,?,?,?,?)';
        }
        conn.query(sql,[param.realname,param.telephone,param.gender,param.status,'customer',param.id],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
/**
 * 批量删除信息
 * @param {Object} param  ids=1&ids=2
 * @param {Function} handle 
 */
let batchDelete = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let arr = [];
        for(let a = 0;a<param.ids.length;a++){
            arr.push(+(param.ids[a]))
        }
        let sql = 'delete from base_user where type=? and id in (?)';
        conn.query(sql,['customer',arr],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
/**
 * 分页查询信息
 * @param {Object} param 
 * @param {Function} handle 
 */
let pageQuery = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        let sql = 'select * from base_user where type=? limit ?,?';
        conn.query(sql,['customer',param.page*param.pageSize,Number(param.pageSize)],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
/**
 * 模糊查询
 * @param {Object} param realname=张
 * @param {Function} handle 
 */
let mohuQuery = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let sql = 'select * from base_user where realname like ? and type=?'
        conn.query(sql,['%'+param.realname+'%','customer'],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
module.exports = {
    findAll,
    findById,
    deleteById,
    saveOrUpdate,
    batchDelete,
    pageQuery,
    mohuQuery
}