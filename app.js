const express = require ('express');
const app = express();

app.get('/', () =>{
    res.send('index pages')  
});

app.get('/random/:numeroInicial/:numeroFinal', (req, res) =>{
    const min = parseInt(req.params.numeroInicial);
    const max = parseInt(req.params.numeroFinal);

    if (isNaN(min) || isNaN(max)) {
        res.status(404);
        res.json({"error": 'Bad requeste'}); //peticion erronea
        return;
    }

    const result = Math.floor(Math.random() * (max - min) + min)
    //console.log(result);
    
    res.json({"randomNumber": result});
});

app.listen(3000, () =>{
    console.log('server on post 3000')
});