const mongoose = require('mongoose');
const UniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;
let rolesValidos = {
    values:['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es un Rol Valido'
}

let UsuarioSchema = new Schema({
    nombre:{
        type: String,
        
        required : [true,'El nombre es necesario']
        
    },
    email:{
        type: String,
        unique: true,
        required : [true,'El correo es necesario']
        
    }
    ,
    password:{
        type: String,
        required : [true,'El password es necesario']
    },
    img:{
        type: String,
        required : false
    }
    ,
    role:{
        type: String,
        default:'USER_ROLE',
        enum: rolesValidos
        
    },
    estado:{
        type: Boolean,
        default:true
    },
    google:{
        type: Boolean,
        default:false
    }
});
UsuarioSchema.methods.toJSON = function(){
    let user = this;
    let userobject = user.toObject();
    delete userobject.password;
    return userobject;
};
// UsuarioSchema.plugin(UniqueValidator,{message:'{PATH} debe ser unico'});

module.exports = mongoose.model('Usuario',UsuarioSchema);

