const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.get('/', (req, res) => {
  res.sendFile('./public/views/home.html', {root:__dirname})
})



mongoose
.connect('mongodb+srv://altyar:lM5iJR9s0MZ4ol2e@cluster0.fwua2ar.mongodb.net/all-data?retryWrites=true&w=majority')
.then(()=>{
  app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})
})
.catch((err)=>{console.log(err)});