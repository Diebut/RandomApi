const express = require ('express');
const app = express();

app.get('/', () =>{
    res.send('index pages')  
});

app.listen(3000, () =>{
    console.log('server on post 3000')
});