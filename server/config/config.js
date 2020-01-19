//=========================     
//  Puerto
//=========================

process.env.PORT = process.env.PORT || 3000 ;


//=========================     
//  Entorno
//=========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=========================     
//  Base de Datos
//=========================

let baseUrl;

if(process.env.NODE_ENV === 'dev')
{
    baseUrl = 'mongodb://localhost:27017/cafe';
}
else
{
    // baseUrl = 'mongodb+srv://franco:6QVCkQY8qrWsNVAA@miprimercluster-b2a30.mongodb.net/cafe?retryWrites=true&w=majority';
  baseUrl = process.env.MONGO_URL;
    //
}

process.env.URLDB = baseUrl;
