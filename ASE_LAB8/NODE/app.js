const express = require ("express");
const jwt = require('jsonwebtoken');
var cors = require('cors')
const app= express();
 app.use(cors());
app.listen(3000, ()=>{
  console.log("server started on 3000");});
app.post('/api/login', (req, res) =>{
  console.log(req.body);
  const user ={
    user: 'Nithin',
    pass: 'nithin'  }
  jwt.sign({user}, 'secretkey', (err, token)=>{
    res.json(token);
  });});
app.get('/api/posts', verifyToken, (req, res) =>{
    jwt.verify(req.token,'secretkey', (err, authData)=> {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json(authData);
      }    });});
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['auth'];
  if (typeof bearerHeader !== 'undefined') {
    req.token = bearerHeader;
    next();
  } else {
    res.sendStatus(403);  }}
