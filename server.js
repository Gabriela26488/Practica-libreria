const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const app =  express();
const mongoose = require('mongoose');

const Usuario = require("./public/user")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

const usuario = 'patriciaf0907';
const password = 'ZjLx7oD9n45bYD8J';
const uri =`mongodb+srv://${usuario}:${password}@cluster0.ms3dfpz.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}
)
    .then(() => console.log('BASE DE DATOS CONECTADA'))
    .catch(e => console.log(e))
;


app.listen(3000, () => {
    console.log('SERVIDOR CORRIENDO EN EL PUERTO 3000');
})

app.post('/registro', async(req, res) => {
    const body = req.body;
    try {
        const UsuariosBD = new Usuario(body)
        await UsuariosBD.save()
           
    } catch (error) {
        console.log(error)
    }
    
 });


   
  

module.exports = app;