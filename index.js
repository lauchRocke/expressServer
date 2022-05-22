const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Hello to all.</h1>')
});

app.listen(5000, () =>{
    console.log('Server connected')
});