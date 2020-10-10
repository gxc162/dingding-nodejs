/*
 * @Author: your name
 * @Date: 2020-10-08 16:54:36
 * @LastEditTime: 2020-10-10 17:46:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \briup02\nodejs\day03\app\db\comment.js
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
        let sql = 'select * from ej_comment'
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
let findById = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let sql = 'select * from ej_comment where id=?'
        conn.query(sql,[param.id],(err,results)=>{
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
        let sql = 'delete from ej_comment where id=?'
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
            sql = 'update ej_comment set content=?,comment_time=?,status=? where id=?';
        }else{
            //新增
            sql = 'insert into ej_comment(content,comment_time,status) values(?,?,?)';
        }
        conn.query(sql,[param.content,param.comment_time,param.status,param.id],(err,results)=>{
            if(err) throw err;
            handle(results);
            conn.release();
        })
    })
}
/**
 * 批量删除
 * @param {Object} param ids=1&ids=2
 * @param {Function} handle 
 */
let batchDelete = (param,handle)=>{
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        let arr = [];
        for(let a = 0;a<param.ids.length;a++){
            arr.push(+(param.ids[a]))
        }
        let sql = 'delete from ej_comment where id in (?)';
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
        let sql = 'select * from ej_comment limit ?,?';
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
        let sql = 'select * from ej_comment where content like ?'
        conn.query(sql,['%'+param.content+'%'],(err,results)=>{
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