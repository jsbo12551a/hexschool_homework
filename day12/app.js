const express = require('express')
const app = express()
const port = process.env.POST || 3030;

app.get('/login', (req, res)=>{
    res.send('登入頁面')
})

app.get('/register', (req, res)=>{
    res.send('註冊頁面')
})
app.get('/blog', (req, res)=>{
    res.send('全體動態牆頁面')
})
app.get('/user/:id/blog', (req, res)=>{
    let id = req.params.id
    res.send(id+'的個人牆頁面')
})
app.get('/user/:id/following', (req, res)=>{
    let id = req.params.id;
    res.send(id+'的個人追蹤名單頁面')
})
app.listen(port, ()=>{
    console.log('Example app listening on port '+port)
})