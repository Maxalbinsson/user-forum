const express = require('express')
const router = express ();
const promisePool = require('../utils/db')

router.get('/', async function (req, res){
res.send("alla users i systemet");
});

router.get('/:id', async function (res, req){
const [rows] = await promisePool.querry(`
SELECT * FROM  ma24forum WHERE id = ?`, [req.params.id]);
req.json({ id:req.params.id, user: rows[0] });
}) 