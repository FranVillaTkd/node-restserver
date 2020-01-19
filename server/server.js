


require('./config/config.js');


const express = require('express');

const app = express();



const mongoose = require('mongoose');



const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario.js'));
 
 

mongoose.connect(process.env.URLDB,
  { useNewUrlParser: true, useCreateIndex: true,
    useMongoClient: true},
   (err, res) => {
    if(err){
        console.log("ERROR AL CONECTAR");
        throw err;
    } 
    console.log('BBDD Online');
});




 
app.listen(process.env.PORT, ()=>{
    console.log("escuchando puerto 3000");
})