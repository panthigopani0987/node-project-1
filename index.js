const express = require('express');
const port = 9000;
const app = express();
const path = require('path');

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    return res.render('index');
});

app.get('/home',(req,res)=>{
    return res.render('home');
});

app.get('/about',(req,res)=>{
    return res.render('about');
});

app.get('/product',(req,res)=>{
    return res.render('product');
});

app.get('/contact',(req,res)=>{
    return res.render('contact');
});

app.listen(port,(err)=>{
    if(err)
    {
        console.log(err);
        return false;
    }
    console.log('Server Is Start On Port :- '+port);
});