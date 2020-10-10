/*
 * @Author: your name
 * @Date: 2020-10-06 09:57:03
 * @LastEditTime: 2020-10-10 17:19:16
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
        let sql = 'select * from ej_order'
        conn.query(sql,[],(err,results)=>{
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
let findByCustomerId = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let sql = 'select * from ej_order where customer_id=?'
        conn.query(sql,[param.customer_id],(err,results)=>{
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
        let sql = 'delete from ej_order where id=?'
        conn.query(sql,[param.id],(err,results)=>{
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
            sql = 'update ej_order set total=?,status=?,customer_id=? where id=?';
        }else{
            //新增
            sql = 'insert into ej_order(total,status,customer_id) values(?,?,?,)';
        }
        conn.query(sql,[param.total,param.status,param.customer_id,param.id],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
/**
 * 批量删除
 * @param {Object} param 
 * @param {Function} handle 
 */
let batchDelete = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let arr = [];
        for(let a = 0;a<param.ids.length;a++){
            arr.push(+(param.ids[a]))
        }
        let sql = 'delete from ej_order where id in (?)';
        conn.query(sql,[arr],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
/**
 * 分页查询信息
 * @param {Object} param page=1&pagesize=5
 * @param {Function} handle 
 */
let pageQuery = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        let sql = 'select * from ej_order limit ?,?';
        conn.query(sql,[param.page*param.pageSize,Number(param.pageSize)],(err,results)=>{
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
        let sql = 'select * from ej_order where status like ?'
        conn.query(sql,['%'+param.status+'%'],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
module.exports = {
    findAll,
    findByCustomerId,
    deleteById,
    saveOrUpdate,
    batchDelete,
    pageQuery,
    mohuQuery
}