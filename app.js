const express = require ('express');
const app = express();

app.get('/', () =>{
    res.send('index pages')  
});

app.get('/random/:numeroInicial/:numeroFinal', (req, res) =>{
    const min = parseInt(req.params.numeroFinal);
    const max = parseInt(req.params.numeroFinal);
    console.log(typeof min);
    res.send('recibido');
})

app.listen(3000, () =>{
    console.log('server on post 3000')
});