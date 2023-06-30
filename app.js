const express = require ('express');
const app = express();

app.get('/', () =>{
    res.send('index pages')  
});

app.get('/random/:numeroInicial/:numeroFinal', (req, res) =>{
    console.log(req.params.numeroFinal);
    console.log(req.params.numeroFinal);
    res.send('recibido');
})

app.listen(3000, () =>{
    console.log('server on post 3000')
});