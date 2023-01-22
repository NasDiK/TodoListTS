const ENV = 'develop' //todo что-нибудь с этим сделать

const express = require('express');
const CONFIG = require('./config')[ENV]
const app = express();

app.get('/', (req,res)=>{
  res.send('Hello world!');
});

app.listen(CONFIG.PORT, ()=>{
  console.log(`Запустился на порте ${CONFIG.PORT}`);
});